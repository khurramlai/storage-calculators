/**
 * Pure RAID capacity / fault tolerance / performance math.
 *
 * Conventions:
 *  - drive sizes here are in TB (decimal terabytes, 1 TB = 1e12 bytes).
 *  - hot spares are subtracted from the active drive pool before any RAID math.
 *  - "speed multipliers" are theoretical maximums relative to one drive
 *    (no controller / bus saturation modeled).
 */

export const RAID_LEVELS = [0, 1, 5, 6, 10, 50, 60] as const;
export type RaidLevel = (typeof RAID_LEVELS)[number];

export interface RaidInputs {
  level: RaidLevel;
  drives: number;
  driveSizeTb: number;
  /** RAID 50/60 only, number of stripe groups */
  groups?: number;
  hotSpares?: number;
}

export interface RaidResult {
  level: RaidLevel;
  driveCount: number;
  activeDrives: number;
  hotSpares: number;
  groups: number;
  drivesPerGroup: number;

  rawTb: number;
  usableTb: number;
  parityTb: number;
  mirrorLossTb: number;
  hotSpareTb: number;

  efficiency: number;
  faultTolerance: number;
  /** Worst-case (any drive fails). Some RAID levels survive more in best case. */
  faultToleranceBestCase: number;

  readMultiplier: number;
  writeMultiplier: number;

  minDrives: number;
  valid: boolean;
  warning?: string;
}

export const RAID_LABELS: Record<RaidLevel, string> = {
  0: "RAID 0 (Striping)",
  1: "RAID 1 (Mirror)",
  5: "RAID 5 (Striping + Parity)",
  6: "RAID 6 (Striping + Dual Parity)",
  10: "RAID 10 (Mirror + Stripe)",
  50: "RAID 50 (Striped RAID 5 Groups)",
  60: "RAID 60 (Striped RAID 6 Groups)",
};

export const MIN_DRIVES: Record<RaidLevel, number> = {
  0: 2,
  1: 2,
  5: 3,
  6: 4,
  10: 4,
  50: 6,
  60: 8,
};

function emptyResult(level: RaidLevel, drives: number, hotSpares: number, warning: string): RaidResult {
  return {
    level,
    driveCount: drives,
    activeDrives: Math.max(0, drives - hotSpares),
    hotSpares,
    groups: 1,
    drivesPerGroup: 0,
    rawTb: 0,
    usableTb: 0,
    parityTb: 0,
    mirrorLossTb: 0,
    hotSpareTb: 0,
    efficiency: 0,
    faultTolerance: 0,
    faultToleranceBestCase: 0,
    readMultiplier: 0,
    writeMultiplier: 0,
    minDrives: MIN_DRIVES[level],
    valid: false,
    warning,
  };
}

export function calculateRaid(input: RaidInputs): RaidResult {
  const level = input.level;
  const drives = Math.floor(input.drives) || 0;
  const driveSizeTb = Math.max(0, input.driveSizeTb || 0);
  const hotSpares = Math.max(0, Math.floor(input.hotSpares ?? 0));
  const minDrives = MIN_DRIVES[level];

  const rawTb = drives * driveSizeTb;
  const hotSpareTb = hotSpares * driveSizeTb;
  const active = drives - hotSpares;

  if (drives < minDrives) {
    return {
      ...emptyResult(level, drives, hotSpares, `RAID ${level} requires at least ${minDrives} drives.`),
      rawTb,
      hotSpareTb,
    };
  }
  if (active < minDrives) {
    return {
      ...emptyResult(
        level,
        drives,
        hotSpares,
        `After ${hotSpares} hot spare${hotSpares === 1 ? "" : "s"}, only ${active} active drive${active === 1 ? "" : "s"} remain, RAID ${level} needs at least ${minDrives}.`
      ),
      rawTb,
      hotSpareTb,
    };
  }
  if (driveSizeTb <= 0) {
    return emptyResult(level, drives, hotSpares, "Enter a drive size greater than 0.");
  }

  const out: RaidResult = {
    level,
    driveCount: drives,
    activeDrives: active,
    hotSpares,
    groups: 1,
    drivesPerGroup: active,
    rawTb,
    usableTb: 0,
    parityTb: 0,
    mirrorLossTb: 0,
    hotSpareTb,
    efficiency: 0,
    faultTolerance: 0,
    faultToleranceBestCase: 0,
    readMultiplier: 0,
    writeMultiplier: 0,
    minDrives,
    valid: true,
  };

  switch (level) {
    case 0: {
      out.usableTb = active * driveSizeTb;
      out.faultTolerance = 0;
      out.faultToleranceBestCase = 0;
      out.readMultiplier = active;
      out.writeMultiplier = active;
      break;
    }
    case 1: {
      // All drives mirror the same data. Usable = one drive.
      out.usableTb = driveSizeTb;
      out.mirrorLossTb = (active - 1) * driveSizeTb;
      out.faultTolerance = active - 1;
      out.faultToleranceBestCase = active - 1;
      out.readMultiplier = active;
      out.writeMultiplier = 1;
      break;
    }
    case 5: {
      out.usableTb = (active - 1) * driveSizeTb;
      out.parityTb = driveSizeTb;
      out.faultTolerance = 1;
      out.faultToleranceBestCase = 1;
      out.readMultiplier = active - 1;
      out.writeMultiplier = Math.max(1, (active - 1) / 4);
      break;
    }
    case 6: {
      out.usableTb = (active - 2) * driveSizeTb;
      out.parityTb = 2 * driveSizeTb;
      out.faultTolerance = 2;
      out.faultToleranceBestCase = 2;
      out.readMultiplier = active - 2;
      out.writeMultiplier = Math.max(1, (active - 2) / 6);
      break;
    }
    case 10: {
      // Pairs of mirrors, striped. Requires even count; round down to nearest pair.
      const pairs = Math.floor(active / 2);
      const usedDrives = pairs * 2;
      const lost = active - usedDrives;
      out.drivesPerGroup = 2;
      out.groups = pairs;
      out.usableTb = pairs * driveSizeTb;
      out.mirrorLossTb = pairs * driveSizeTb + lost * driveSizeTb;
      out.faultTolerance = 1; // worst case: two drives in same mirror
      out.faultToleranceBestCase = pairs; // best case: one per mirror
      out.readMultiplier = pairs * 2;
      out.writeMultiplier = pairs;
      if (lost > 0) {
        out.warning = `RAID 10 requires an even number of active drives, ${lost} drive${lost === 1 ? "" : "s"} unused.`;
      }
      break;
    }
    case 50: {
      const groups = Math.max(2, Math.floor(input.groups ?? 2));
      if (active % groups !== 0 || active / groups < 3) {
        return {
          ...emptyResult(
            level,
            drives,
            hotSpares,
            `RAID 50 needs ${groups} equal groups of at least 3 drives. ${active} active drives ÷ ${groups} groups doesn't divide evenly into RAID 5 sets.`
          ),
          rawTb,
          hotSpareTb,
        };
      }
      const drivesPerGroup = active / groups;
      out.groups = groups;
      out.drivesPerGroup = drivesPerGroup;
      out.usableTb = groups * (drivesPerGroup - 1) * driveSizeTb;
      out.parityTb = groups * driveSizeTb;
      out.faultTolerance = 1; // one per group, worst case any one fails before rebuild
      out.faultToleranceBestCase = groups; // best case: 1 per group
      out.readMultiplier = groups * (drivesPerGroup - 1);
      out.writeMultiplier = Math.max(1, (groups * (drivesPerGroup - 1)) / 4);
      break;
    }
    case 60: {
      const groups = Math.max(2, Math.floor(input.groups ?? 2));
      if (active % groups !== 0 || active / groups < 4) {
        return {
          ...emptyResult(
            level,
            drives,
            hotSpares,
            `RAID 60 needs ${groups} equal groups of at least 4 drives. ${active} active drives ÷ ${groups} groups doesn't divide evenly into RAID 6 sets.`
          ),
          rawTb,
          hotSpareTb,
        };
      }
      const drivesPerGroup = active / groups;
      out.groups = groups;
      out.drivesPerGroup = drivesPerGroup;
      out.usableTb = groups * (drivesPerGroup - 2) * driveSizeTb;
      out.parityTb = groups * 2 * driveSizeTb;
      out.faultTolerance = 2;
      out.faultToleranceBestCase = groups * 2;
      out.readMultiplier = groups * (drivesPerGroup - 2);
      out.writeMultiplier = Math.max(1, (groups * (drivesPerGroup - 2)) / 6);
      break;
    }
  }

  const denominator = rawTb || 1;
  out.efficiency = out.usableTb / denominator;
  return out;
}
