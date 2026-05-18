import { CODEC_MULTIPLIERS, type Codec } from "~/lib/surveillance";

/**
 * Shows storage required at each codec relative to H.264 baseline, with the
 * user's current selection highlighted. The point is to make the codec choice
 * legible: H.265+ saves ~75% over H.264 for the same scene quality.
 */

interface Props {
  selected: Codec;
  totalBytesAtSelected: number;
}

const CODEC_INFO: { codec: Codec; label: string; sub: string }[] = [
  { codec: "h264", label: "H.264", sub: "Baseline" },
  { codec: "h265", label: "H.265", sub: "~50% vs H.264" },
  { codec: "h265+", label: "H.265+ / Smart", sub: "~75% vs H.264" },
];

function fmtTB(bytes: number): string {
  if (!isFinite(bytes) || bytes <= 0) return "-";
  if (bytes >= 1024 ** 4) return `${(bytes / 1024 ** 4).toFixed(2)} TB`;
  if (bytes >= 1024 ** 3) return `${(bytes / 1024 ** 3).toFixed(1)} GB`;
  return `${(bytes / 1024 ** 2).toFixed(0)} MB`;
}

export default function CodecComparisonChart({ selected, totalBytesAtSelected }: Props) {
  if (!isFinite(totalBytesAtSelected) || totalBytesAtSelected <= 0) return null;

  // Recover baseline from the selected codec's bytes
  const selectedMultiplier = CODEC_MULTIPLIERS[selected];
  const baselineH264 = totalBytesAtSelected / selectedMultiplier;
  const max = baselineH264;

  return (
    <div
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      role="region"
      aria-label="Storage comparison across video codecs"
    >
      <div className="mb-1 flex items-baseline justify-between">
        <h3 className="text-base font-semibold text-slate-900">Codec comparison</h3>
        <span className="text-xs text-slate-500">Same scene, same retention, different codec</span>
      </div>
      <p className="mb-4 text-sm text-slate-600">
        Modern smart codecs (H.265+ / WiseStream II / Zipstream) cut storage by ~75% on
        typical scenes without visible quality loss.
      </p>
      <div className="space-y-3">
        {CODEC_INFO.map((info) => {
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
