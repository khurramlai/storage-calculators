import { useId, useMemo, useRef, useState } from "react";
import type { CalculatorConfig } from "~/lib/types";
import {
  calculateSurveillance,
  CODECS,
  RECORDING_MODES,
  RESOLUTIONS,
  VENDOR_PRESETS,
  type Codec,
  type RecordingMode,
  type Resolution,
  type VendorKey,
} from "~/lib/surveillance";
import type { WidgetStrings } from "~/i18n/widget-strings";
import { fmt, plural } from "~/i18n/format";
import ActionBar from "./parts/ActionBar";
import CodecComparisonChart from "./parts/CodecComparisonChart";

interface SurveillanceWidgetProps {
  /** Vendor preset to seed defaults (Hikvision, Hanwha, Axis, Genetec, UniFi) */
  preset?: VendorKey;
  /** Override per-input defaults regardless of preset */
  defaults?: Partial<{
    cameras: number;
    resolution: Resolution;
    fps: number;
    codec: Codec;
    recordingMode: RecordingMode;
    hoursPerDay: number;
    retentionDays: number;
  }>;
}

const FPS_OPTIONS = [5, 10, 15, 20, 25, 30] as const;

function fmtBytes(bytes: number): string {
  if (!isFinite(bytes) || bytes <= 0) return "-";
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  let i = 0;
  let v = bytes;
  while (v >= 1024 && i < units.length - 1) {
    v /= 1024;
    i++;
  }
  return `${v.toFixed(v >= 10 || i < 3 ? 1 : 2)} ${units[i]}`;
}

function fmtKbps(kbps: number): string {
  if (!isFinite(kbps) || kbps <= 0) return "-";
  if (kbps >= 1000) return `${(kbps / 1000).toFixed(2)} Mbps`;
  return `${kbps.toFixed(0)} kbps`;
}

export default function SurveillanceCalculator({
  config,
  strings,
}: {
  config: CalculatorConfig;
  strings: WidgetStrings;
}) {
  const t = strings.widget;
  const resolutionLabels = strings.resolutions!;
  const codecLabels = strings.codecs!;
  const recordingLabels = strings.recordingModes!;
  const vendorNotes = strings.vendorNotes!;
  const props = (config.widgetProps ?? {}) as SurveillanceWidgetProps;
  const preset = props.preset ? VENDOR_PRESETS[props.preset] : undefined;
  const presetNote = props.preset
    ? vendorNotes[props.preset as keyof typeof vendorNotes]
    : undefined;

  const initial = {
    cameras: props.defaults?.cameras ?? preset?.cameras ?? 4,
    resolution: props.defaults?.resolution ?? preset?.resolution ?? ("1080p" as Resolution),
    fps: props.defaults?.fps ?? preset?.fps ?? 25,
    codec: props.defaults?.codec ?? preset?.codec ?? ("h265" as Codec),
    recordingMode:
      props.defaults?.recordingMode ?? preset?.recordingMode ?? ("continuous" as RecordingMode),
    hoursPerDay: props.defaults?.hoursPerDay ?? preset?.hoursPerDay ?? 24,
    retentionDays: props.defaults?.retentionDays ?? preset?.retentionDays ?? 30,
  };

  const [cameras, setCameras] = useState(initial.cameras);
  const [resolution, setResolution] = useState<Resolution>(initial.resolution);
  const [fps, setFps] = useState(initial.fps);
  const [codec, setCodec] = useState<Codec>(initial.codec);
  const [recordingMode, setRecordingMode] = useState<RecordingMode>(initial.recordingMode);
  const [hoursPerDay, setHoursPerDay] = useState(initial.hoursPerDay);
  const [retentionDays, setRetentionDays] = useState(initial.retentionDays);

  const resultsRef = useRef<HTMLDivElement>(null);
  const [highlight, setHighlight] = useState(false);

  function handleCalculate() {
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setHighlight(true);
    window.setTimeout(() => setHighlight(false), 900);
  }

  function handleReset() {
    setCameras(initial.cameras);
    setResolution(initial.resolution);
    setFps(initial.fps);
    setCodec(initial.codec);
    setRecordingMode(initial.recordingMode);
    setHoursPerDay(initial.hoursPerDay);
    setRetentionDays(initial.retentionDays);
  }

  const result = useMemo(
    () =>
      calculateSurveillance({
        cameras,
        resolution,
        fps,
        codec,
        recordingMode,
        hoursPerDay,
        retentionDays,
      }),
    [cameras, resolution, fps, codec, recordingMode, hoursPerDay, retentionDays]
  );

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">{t.inputs}</h2>
            <div className="grid grid-cols-12 gap-4">
              <Field label={t.cameraCount} cols={6}>
                {({ fieldId }) => (
                  <input
                    id={fieldId}
                    type="number"
                    min={1}
                    max={1024}
                    step={1}
                    value={cameras}
                    onChange={(e) => setCameras(Math.max(1, Math.floor(Number(e.target.value) || 0)))}
                    className={inputCls}
                  />
                )}
              </Field>

              <Field label={t.retention} cols={6} help={t.retentionHelp}>
                {({ fieldId, helpId }) => (
                  <div className="flex items-center gap-2">
                    <input
                      id={fieldId}
                      aria-describedby={helpId}
                      type="number"
                      min={1}
                      max={365}
                      step={1}
                      value={retentionDays}
                      onChange={(e) =>
                        setRetentionDays(Math.max(1, Math.floor(Number(e.target.value) || 0)))
                      }
                      className={`${inputCls} flex-1`}
                    />
                    <span className="text-sm text-slate-500">{t.days}</span>
                  </div>
                )}
              </Field>

              <Field label={t.resolution} cols={6}>
                {({ fieldId }) => (
                  <select
                    id={fieldId}
                    value={resolution}
                    onChange={(e) => setResolution(e.target.value as Resolution)}
                    className={inputCls}
                  >
                    {RESOLUTIONS.map((r) => (
                      <option key={r} value={r}>
                        {resolutionLabels[r]}
                      </option>
                    ))}
                  </select>
                )}
              </Field>

              <Field label={t.frameRate} cols={6} help={t.frameRateHelp}>
                {({ fieldId, helpId }) => (
                  <select
                    id={fieldId}
                    aria-describedby={helpId}
                    value={fps}
                    onChange={(e) => setFps(Number(e.target.value))}
                    className={inputCls}
                  >
                    {FPS_OPTIONS.map((f) => (
                      <option key={f} value={f}>
                        {fmt(t.fps, { n: f })}
                      </option>
                    ))}
                  </select>
                )}
              </Field>

              <Field label={t.codec} cols={12} help={t.codecHelp}>
                {({ fieldId, helpId }) => (
                  <select
                    id={fieldId}
                    aria-describedby={helpId}
                    value={codec}
                    onChange={(e) => setCodec(e.target.value as Codec)}
                    className={inputCls}
                  >
                    {CODECS.map((c) => (
                      <option key={c} value={c}>
                        {codecLabels[c]}
                      </option>
                    ))}
                  </select>
                )}
              </Field>

              <Field label={t.recordingMode} cols={6}>
                {({ fieldId }) => (
                  <select
                    id={fieldId}
                    value={recordingMode}
                    onChange={(e) => setRecordingMode(e.target.value as RecordingMode)}
                    className={inputCls}
                  >
                    {RECORDING_MODES.map((m) => (
                      <option key={m} value={m}>
                        {recordingLabels[m]}
                      </option>
                    ))}
                  </select>
                )}
              </Field>

              <Field
                label={t.hoursPerDay}
                cols={6}
                help={
                  recordingMode === "motion"
                    ? t.hoursHelpMotion
                    : recordingMode === "scheduled"
                    ? t.hoursHelpScheduled
                    : t.hoursHelpContinuous
                }
              >
                {({ fieldId, helpId }) => (
                  <input
                    id={fieldId}
                    aria-describedby={helpId}
                    type="number"
                    min={1}
                    max={24}
                    step={1}
                    value={hoursPerDay}
                    onChange={(e) =>
                      setHoursPerDay(
                        Math.max(1, Math.min(24, Math.floor(Number(e.target.value) || 0)))
                      )
                    }
                    className={inputCls}
                  />
                )}
              </Field>
            </div>

            {presetNote && (
              <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                <strong>{t.vendorPresetApplied}</strong> {presetNote}
              </p>
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
              label={t.totalStorage}
              value={fmtBytes(result.bytesTotal)}
              hint={fmt(t.totalStorageHint, {
                cameras: plural(cameras, t.cameraSingular, t.cameraPlural),
                days: retentionDays,
              })}
            />

            <Row label={t.perCameraTotal} value={fmtBytes(result.bytesPerCameraTotal)} />
            <Row label={t.allCamerasPerDay} value={fmtBytes(result.bytesPerDay)} />
            <Row
              label={t.bitratePerCamera}
              value={fmtKbps(result.bitratePerCameraKbps)}
              hint={fmt(t.bitrateHint, {
                resolution: resolutionLabels[resolution],
                fps,
                codec: codecLabels[codec],
              })}
            />
            <Row
              label={t.recommendedDrive}
              value={`${result.recommendedHddCount} × ${result.recommendedHddTb} TB`}
              hint={t.recommendedDriveHint}
            />
            {result.savingsVsH264 > 0.01 && (
              <Row
                label={t.savedVsH264}
                value={`${(result.savingsVsH264 * 100).toFixed(0)}%`}
                hint={t.savedVsH264Hint}
              />
            )}
          </div>
        </div>
      </div>

      <CodecComparisonChart
        selected={codec}
        totalBytesAtSelected={result.bytesTotal}
        strings={strings}
      />
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
  /** Render-prop receives ids so the input can be programmatically associated
   *  with both its <label> and (when present) its help text. */
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
