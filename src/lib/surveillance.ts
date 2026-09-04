/**
 * Pure video surveillance storage math.
 *
 * Formula:
 *   bytes_per_camera_per_day = bitrate_bps × 3600 × hours_per_day / 8
 *   total_bytes              = bytes_per_camera_per_day × cameras × retention_days
 *
 * The "smart" inputs (resolution + fps + codec) drive an estimated bitrate from
 * a published-spec lookup table, which the user can override.
 */

export const RESOLUTIONS = ["480p", "720p", "1080p", "3MP", "4MP", "5MP", "4K"] as const;
export type Resolution = (typeof RESOLUTIONS)[number];

export const CODECS = ["h264", "h265", "h265+"] as const;
export type Codec = (typeof CODECS)[number];

export const RECORDING_MODES = ["continuous", "motion", "scheduled"] as const;
export type RecordingMode = (typeof RECORDING_MODES)[number];

/*
 * Display labels for resolutions, codecs and recording modes live in the
 * locale dictionaries (src/i18n/ui/), keyed by the same ids used here.
 */

/**
 * Reference H.264 bitrates at 25 fps, in kbps. Derived from public spec sheets
 * (Hikvision, Hanwha, Axis storage planning docs). Used as the baseline; H.265
 * and H.265+ are derived by multiplier below.
 */
const BASE_BITRATE_KBPS_25FPS: Record<Resolution, number> = {
  "480p": 1024,
  "720p": 2048,
  "1080p": 4096,
  "3MP": 6144,
  "4MP": 8192,
  "5MP": 10240,
  "4K": 16384,
};

/** Codec efficiency multipliers vs H.264 baseline */
export const CODEC_MULTIPLIERS: Record<Codec, number> = {
  h264: 1,
  h265: 0.5,
  "h265+": 0.25,
};

/** Recording-mode duty-cycle multipliers applied to hours/day */
export const RECORDING_DUTY: Record<RecordingMode, number> = {
  continuous: 1,
  motion: 0.4,
  scheduled: 1,
};

/**
 * Estimate per-camera bitrate (kbps) from resolution, fps, codec.
 * Linear with fps relative to the 25-fps reference, multiplied by codec efficiency.
 */
export function estimateBitrateKbps(
  resolution: Resolution,
  fps: number,
  codec: Codec
): number {
  const base = BASE_BITRATE_KBPS_25FPS[resolution];
  const fpsRatio = Math.max(1, fps) / 25;
  return base * fpsRatio * CODEC_MULTIPLIERS[codec];
}

export interface SurveillanceInputs {
  cameras: number;
  resolution: Resolution;
  fps: number;
  codec: Codec;
  recordingMode: RecordingMode;
  hoursPerDay: number;
  retentionDays: number;
  /** Optional override, when set, replaces resolution/fps/codec-derived bitrate */
  customBitrateKbps?: number;
}

export interface SurveillanceResult {
  bitratePerCameraKbps: number;
  effectiveHoursPerDay: number;
  bytesPerCameraPerDay: number;
  bytesPerDay: number;
  bytesPerCameraTotal: number;
  bytesTotal: number;
  recommendedHddTb: number;
  recommendedHddCount: number;
  /** Comparison: same config but H.264 codec, to show savings */
  baselineBytesH264: number;
  savingsVsH264: number;
}

const HDD_SIZES_TB = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20] as const;

function recommendHdd(totalBytes: number): { tb: number; count: number } {
  // Surveillance-grade NVRs typically prefer larger drives. Pick the smallest
  // single-drive capacity that fits, capped at 20 TB. If overflow, scale count.
  const totalTb = totalBytes / 1024 ** 4;
  for (const size of HDD_SIZES_TB) {
    if (size >= totalTb) return { tb: size, count: 1 };
  }
  const maxSize = HDD_SIZES_TB[HDD_SIZES_TB.length - 1];
  const count = Math.ceil(totalTb / maxSize);
  return { tb: maxSize, count };
}

export function calculateSurveillance(input: SurveillanceInputs): SurveillanceResult {
  const cameras = Math.max(1, Math.floor(input.cameras || 0));
  const retention = Math.max(1, Math.floor(input.retentionDays || 0));
  const userHours = Math.min(24, Math.max(0, input.hoursPerDay || 0));
  const duty = RECORDING_DUTY[input.recordingMode];
  const effectiveHours = userHours * duty;

  const bitrateKbps =
    input.customBitrateKbps && input.customBitrateKbps > 0
      ? input.customBitrateKbps
      : estimateBitrateKbps(input.resolution, input.fps, input.codec);

  // kbps × 1000 / 8 = bytes/sec → × 3600 = bytes/hour
  const bytesPerCameraPerHour = (bitrateKbps * 1000 * 3600) / 8;
  const bytesPerCameraPerDay = bytesPerCameraPerHour * effectiveHours;
  const bytesPerDay = bytesPerCameraPerDay * cameras;
  const bytesPerCameraTotal = bytesPerCameraPerDay * retention;
  const bytesTotal = bytesPerDay * retention;

  const baselineBitrateKbps = estimateBitrateKbps(input.resolution, input.fps, "h264");
  const baselineBytes =
    (baselineBitrateKbps * 1000 * 3600) / 8 * effectiveHours * cameras * retention;
  const savingsVsH264 = baselineBytes > 0 ? 1 - bytesTotal / baselineBytes : 0;

  const { tb, count } = recommendHdd(bytesTotal);

  return {
    bitratePerCameraKbps: bitrateKbps,
    effectiveHoursPerDay: effectiveHours,
    bytesPerCameraPerDay,
    bytesPerDay,
    bytesPerCameraTotal,
    bytesTotal,
    recommendedHddTb: tb,
    recommendedHddCount: count,
    baselineBytesH264: baselineBytes,
    savingsVsH264,
  };
}

/**
 * Vendor preset packs. Each vendor page passes a preset name through widgetProps;
 * the widget applies these as the *initial* values (users can still change them).
 * Defaults are chosen to reflect each vendor's typical out-of-the-box config.
 */
export interface VendorPreset {
  resolution: Resolution;
  fps: number;
  codec: Codec;
  recordingMode: RecordingMode;
  hoursPerDay: number;
  retentionDays: number;
  cameras: number;
}

/**
 * Default input values per vendor. The explanatory note shown next to the
 * preset lives in `vendorNotes` in the locale dictionaries, keyed by the
 * same vendor id used here.
 */
export const VENDOR_PRESETS: Record<string, VendorPreset> = {
  hikvision: {
    resolution: "1080p",
    fps: 25,
    codec: "h265+",
    recordingMode: "continuous",
    hoursPerDay: 24,
    retentionDays: 30,
    cameras: 8,
  },
  hanwha: {
    resolution: "1080p",
    fps: 30,
    codec: "h265+",
    recordingMode: "continuous",
    hoursPerDay: 24,
    retentionDays: 30,
    cameras: 8,
  },
  axis: {
    resolution: "1080p",
    fps: 25,
    codec: "h265+",
    recordingMode: "continuous",
    hoursPerDay: 24,
    retentionDays: 30,
    cameras: 8,
  },
  genetec: {
    resolution: "1080p",
    fps: 15,
    codec: "h265",
    recordingMode: "continuous",
    hoursPerDay: 24,
    retentionDays: 60,
    cameras: 16,
  },
  unifi: {
    resolution: "4MP",
    fps: 30,
    codec: "h265",
    recordingMode: "continuous",
    hoursPerDay: 24,
    retentionDays: 14,
    cameras: 4,
  },
};

export type VendorKey = keyof typeof VENDOR_PRESETS;
