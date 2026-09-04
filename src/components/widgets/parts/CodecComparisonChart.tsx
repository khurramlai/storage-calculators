import { CODEC_MULTIPLIERS, type Codec } from "~/lib/surveillance";
import type { WidgetStrings } from "~/i18n/widget-strings";
import { fmt } from "~/i18n/format";

/**
 * Shows storage required at each codec relative to H.264 baseline, with the
 * user's current selection highlighted. The point is to make the codec choice
 * legible: H.265+ saves ~75% over H.264 for the same scene quality.
 */

interface Props {
  selected: Codec;
  totalBytesAtSelected: number;
  strings: WidgetStrings;
}

/** Saving vs the H.264 baseline, derived from the codec multipliers. */
const CODEC_ORDER: { codec: Codec; label: string }[] = [
  { codec: "h264", label: "H.264" },
  { codec: "h265", label: "H.265" },
  { codec: "h265+", label: "H.265+ / Smart" },
];

function fmtTB(bytes: number): string {
  if (!isFinite(bytes) || bytes <= 0) return "-";
  if (bytes >= 1024 ** 4) return `${(bytes / 1024 ** 4).toFixed(2)} TB`;
  if (bytes >= 1024 ** 3) return `${(bytes / 1024 ** 3).toFixed(1)} GB`;
  return `${(bytes / 1024 ** 2).toFixed(0)} MB`;
}

export default function CodecComparisonChart({
  selected,
  totalBytesAtSelected,
  strings,
}: Props) {
  const t = strings.widget;
  if (!isFinite(totalBytesAtSelected) || totalBytesAtSelected <= 0) return null;

  const info = CODEC_ORDER.map(({ codec, label }) => ({
    codec,
    label,
    sub:
      CODEC_MULTIPLIERS[codec] === 1
        ? t.codecBaseline
        : fmt(t.codecSaving, {
            percent: Math.round((1 - CODEC_MULTIPLIERS[codec]) * 100),
          }),
  }));

  // Recover baseline from the selected codec's bytes
  const selectedMultiplier = CODEC_MULTIPLIERS[selected];
  const baselineH264 = totalBytesAtSelected / selectedMultiplier;
  const max = baselineH264;

  return (
    <div
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      role="region"
      aria-label={t.codecChartAria}
    >
      <div className="mb-1 flex items-baseline justify-between">
        <h3 className="text-base font-semibold text-slate-900">{t.codecComparison}</h3>
        <span className="text-xs text-slate-500">{t.codecComparisonHint}</span>
      </div>
      <p className="mb-4 text-sm text-slate-600">{t.codecChartBody}</p>
      <div className="space-y-3">
        {info.map((info) => {
          const bytes = baselineH264 * CODEC_MULTIPLIERS[info.codec];
          const pct = (bytes / max) * 100;
          const isSelected = info.codec === selected;
          return (
            <div key={info.codec}>
              <div className="mb-1 flex items-baseline justify-between text-sm">
                <div className="flex items-baseline gap-2">
                  <span className={isSelected ? "font-semibold text-brand-700" : "text-slate-700"}>
                    {info.label}
                  </span>
                  <span className="text-xs text-slate-500">{info.sub}</span>
                </div>
                <span
                  className={
                    isSelected
                      ? "font-mono text-sm font-semibold text-brand-900"
                      : "font-mono text-sm text-slate-600"
                  }
                >
                  {fmtTB(bytes)}
                </span>
              </div>
              <div
                className="h-3 w-full overflow-hidden rounded-full bg-slate-100"
                role="presentation"
                aria-hidden="true"
              >
                <div
                  className={
                    isSelected
                      ? "h-full rounded-full bg-brand-600 transition-[width]"
                      : "h-full rounded-full bg-slate-300 transition-[width]"
                  }
                  style={{ width: `${Math.max(2, pct)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
