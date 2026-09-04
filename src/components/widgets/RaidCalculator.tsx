import { useId, useMemo, useRef, useState } from "react";
import type { CalculatorConfig } from "~/lib/types";
import {
  calculateRaid,
  RAID_LEVELS,
  type RaidLevel,
  type RaidWarning,
} from "~/lib/raid";
import type { WidgetStrings } from "~/i18n/widget-strings";
import { fmt, plural } from "~/i18n/format";
import ActionBar from "./parts/ActionBar";
import CapacityBar from "./parts/CapacityBar";

type Unit = "GB" | "TB";

interface RaidWidgetProps {
  /** Lock the calculator to a single RAID level (used by /raid-5/, /raid-6/, /raid-10/) */
  lockedLevel?: RaidLevel;
  /** Default RAID level when none is locked */
  defaultLevel?: RaidLevel;
  /** Default drive count */
  defaultDrives?: number;
  /** Default drive size (in the default unit) */
  defaultDriveSize?: number;
  /** Default size unit */
  defaultUnit?: Unit;
}

const TB_PER_GB = 1 / 1000;

function toTb(size: number, unit: Unit): number {
  return unit === "TB" ? size : size * TB_PER_GB;
}

function fmtTb(tb: number): string {
  if (!isFinite(tb)) return "-";
  if (tb >= 1) return `${tb.toFixed(2)} TB`;
  return `${(tb * 1000).toFixed(1)} GB`;
}

function fmtMultiplier(n: number): string {
  if (!isFinite(n) || n <= 0) return "-";
  return `${n.toFixed(2)}×`;
}

function fmtPercent(n: number): string {
  if (!isFinite(n)) return "-";
  return `${(n * 100).toFixed(1)}%`;
}

export default function RaidCalculator({
  config,
  strings,
}: {
  config: CalculatorConfig;
  strings: WidgetStrings;
}) {
  const t = strings.widget;
  const levels = strings.raidLevels!;
  const warnings = strings.raidWarning!;
  const props = (config.widgetProps ?? {}) as RaidWidgetProps;
  const lockedLevel = props.lockedLevel;

  const initial = {
    level: (lockedLevel ?? props.defaultLevel ?? 5) as RaidLevel,
    drives: props.defaultDrives ?? 4,
    driveSize: props.defaultDriveSize ?? 4,
    unit: (props.defaultUnit ?? "TB") as Unit,
    groups: 2,
    hotSpares: 0,
  };

  const [level, setLevel] = useState<RaidLevel>(initial.level);
  const [drives, setDrives] = useState<number>(initial.drives);
  const [driveSize, setDriveSize] = useState<number>(initial.driveSize);
  const [unit, setUnit] = useState<Unit>(initial.unit);
  const [groups, setGroups] = useState<number>(initial.groups);
  const [hotSpares, setHotSpares] = useState<number>(initial.hotSpares);

  const resultsRef = useRef<HTMLDivElement>(null);
  const [highlight, setHighlight] = useState(false);

  function handleCalculate() {
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setHighlight(true);
    window.setTimeout(() => setHighlight(false), 900);
  }

  function handleReset() {
    setLevel(initial.level);
    setDrives(initial.drives);
    setDriveSize(initial.driveSize);
    setUnit(initial.unit);
    setGroups(initial.groups);
    setHotSpares(initial.hotSpares);
  }

  const driveSizeTb = toTb(driveSize, unit);
  const showGroups = level === 50 || level === 60;

  const warningText = (w: RaidWarning): string => {
    switch (w.code) {
      case "minDrives":
        return fmt(warnings.minDrives, { level: w.level, min: w.min });
      case "afterSpares":
        return fmt(warnings.afterSpares, {
          spares: w.spares,
          active: w.active,
          level: w.level,
          min: w.min,
        });
      case "driveSize":
        return warnings.driveSize;
      case "evenDrives":
        return fmt(warnings.evenDrives, { lost: w.lost });
      case "groupsUneven":
        return fmt(warnings.groupsUneven, {
          level: w.level,
          groups: w.groups,
          min: w.min,
          active: w.active,
        });
    }
  };

  const result = useMemo(
    () =>
      calculateRaid({
        level,
        drives,
        driveSizeTb,
        groups: showGroups ? groups : 1,
        hotSpares,
      }),
    [level, drives, driveSizeTb, groups, hotSpares, showGroups]
  );

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">{t.inputs}</h2>
            <div className="grid grid-cols-12 gap-4">
              {!lockedLevel && (
                <Field label={t.raidLevel} cols={12}>
                  {({ fieldId }) => (
                    <select
                      id={fieldId}
                      value={level}
                      onChange={(e) => setLevel(Number(e.target.value) as RaidLevel)}
                      className="block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                    >
                      {RAID_LEVELS.map((l) => (
                        <option key={l} value={l}>
                          {levels[String(l) as keyof typeof levels]}
                        </option>
                      ))}
                    </select>
                  )}
                </Field>
              )}

              <Field label={t.driveCount} cols={6} help={fmt(t.minimum, { n: result.minDrives })}>
                {({ fieldId, helpId }) => (
                  <input
                    id={fieldId}
                    aria-describedby={helpId}
                    type="number"
                    min={1}
                    max={256}
                    step={1}
                    value={drives}
                    onChange={(e) => setDrives(Math.max(1, Math.floor(Number(e.target.value) || 0)))}
                    className={inputCls}
                  />
                )}
              </Field>

              <Field label={t.driveSize} cols={6}>
                {({ fieldId }) => (
                  <div className="flex gap-2">
                    <input
                      id={fieldId}
                      type="number"
                      min={0}
                      step={unit === "TB" ? 0.1 : 1}
                      value={driveSize}
                      onChange={(e) => setDriveSize(Math.max(0, Number(e.target.value) || 0))}
                      className={`${inputCls} flex-1`}
                    />
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value as Unit)}
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                      aria-label={t.driveSizeUnit}
                    >
                      <option value="TB">TB</option>
                      <option value="GB">GB</option>
                    </select>
                  </div>
                )}
              </Field>

              <Field label={t.hotSpares} cols={6} help={t.hotSparesHelp}>
                {({ fieldId, helpId }) => (
                  <input
                    id={fieldId}
                    aria-describedby={helpId}
                    type="number"
                    min={0}
                    max={Math.max(0, drives - result.minDrives)}
                    step={1}
                    value={hotSpares}
                    onChange={(e) => setHotSpares(Math.max(0, Math.floor(Number(e.target.value) || 0)))}
                    className={inputCls}
                  />
                )}
              </Field>

              {showGroups && (
                <Field label={t.stripeGroups} cols={6} help={fmt(t.stripeGroupsHelp, { level })}>
                  {({ fieldId, helpId }) => (
                    <input
                      id={fieldId}
                      aria-describedby={helpId}
                      type="number"
                      min={2}
                      max={32}
                      step={1}
                      value={groups}
                      onChange={(e) => setGroups(Math.max(2, Math.floor(Number(e.target.value) || 0)))}
                      className={inputCls}
                    />
                  )}
                </Field>
              )}
            </div>

            {result.warning && (
              <div
                role="alert"
                className="mt-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900"
              >
                {warningText(result.warning)}
              </div>
            )}

            <ActionBar onCalculate={handleCalculate} onReset={handleReset} strings={strings} />
          </div>
        </div>

        <div className="lg:col-span-2">
          <div
            ref={resultsRef}
            className={`sticky top-6 space-y-3 rounded-2xl border border-brand-200 bg-brand-50 p-6 shadow-sm transition ${
              highlight ? "ring-4 ring-brand-300" : ""
            }`}
            role="region"
            aria-label={t.resultsRegion}
            aria-live="polite"
          >
            <h2 className="mb-2 text-lg font-semibold text-brand-900">{t.results}</h2>

            <PrimaryStat
              label={t.usableCapacity}
              value={fmtTb(result.usableTb)}
              hint={fmt(t.usableOfRaw, { percent: fmtPercent(result.efficiency) })}
            />

            <Row label={t.rawCapacity} value={fmtTb(result.rawTb)} />
            <Row
              label={t.faultTolerance}
              value={
                result.faultToleranceBestCase > result.faultTolerance
                  ? fmt(t.faultToleranceRange, {
                      min: result.faultTolerance,
                      max: result.faultToleranceBestCase,
                    })
                  : plural(
                      result.faultTolerance,
                      t.driveFailures,
                      t.driveFailuresPlural
                    )
              }
              hint={
                result.faultToleranceBestCase > result.faultTolerance
                  ? t.faultToleranceHint
                  : undefined
              }
            />
            <Row label={t.readSpeed} value={fmtMultiplier(result.readMultiplier)} hint={t.vsOneDrive} />
            <Row label={t.writeSpeed} value={fmtMultiplier(result.writeMultiplier)} hint={t.vsOneDrive} />
            {result.hotSpareTb > 0 && (
              <Row label={t.hotSpareReserve} value={fmtTb(result.hotSpareTb)} />
            )}
            {(result.level === 50 || result.level === 60) && (
              <Row
                label={t.arrayLayout}
                value={fmt(t.arrayLayoutValue, {
                  groups: result.groups,
                  perGroup: result.drivesPerGroup,
                })}
              />
            )}
          </div>
        </div>
      </div>

      <CapacityBar result={result} strings={strings} />
    </div>
  );
}

const inputCls =
  "block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30";

function Field({
  label,
  cols,
  help,
  children,
}: {
  label: string;
  cols: 6 | 12;
  help?: string;
  children: (ids: { fieldId: string; helpId: string | undefined }) => React.ReactNode;
}) {
  const fieldId = useId();
  const helpId = help ? `${fieldId}-help` : undefined;
  const colClass = cols === 12 ? "col-span-12" : "col-span-12 sm:col-span-6";
  return (
    <div className={colClass}>
      <label
        htmlFor={fieldId}
        className="mb-1 block text-sm font-medium text-slate-700"
      >
        {label}
      </label>
      {children({ fieldId, helpId })}
      {help && (
        <p id={helpId} className="mt-1 text-xs text-slate-500">
          {help}
        </p>
      )}
    </div>
  );
}

function PrimaryStat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-brand-200">
      <div className="text-sm text-brand-700">{label}</div>
      <div className="mt-1 font-mono text-3xl font-bold text-brand-900">{value}</div>
      {hint && <div className="mt-1 text-xs text-slate-600">{hint}</div>}
    </div>
  );
}

function Row({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="border-t border-brand-200 pt-3">
      <div className="flex items-baseline justify-between gap-3">
        <div className="text-sm text-brand-700">{label}</div>
        <div className="font-mono text-sm font-semibold text-slate-900">{value}</div>
      </div>
      {hint && <div className="mt-1 text-xs text-slate-600">{hint}</div>}
    </div>
  );
}
