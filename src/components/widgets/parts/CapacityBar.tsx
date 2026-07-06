import type { RaidResult } from "~/lib/raid";

/**
 * Stacked horizontal bar showing how each TB of raw capacity is allocated:
 * usable data, parity overhead, mirror loss, hot spare reserve. Pure SVG ,
 * no chart library, zero runtime cost beyond ~1 KB of inline markup.
 */

interface Segment {
  key: string;
  label: string;
  tb: number;
  color: string;
}

/**
 * Pick black or white label text for a given segment fill so the on-bar
 * percentage clears WCAG AA contrast. White-on-amber/slate failed the audit;
 * this derives the readable color from the fill's relative luminance instead.
 */
function readableTextColor(hex: string): string {
  const c = hex.replace("#", "");
  const rgb = [0, 2, 4].map((i) => {
    const v = parseInt(c.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  const lum = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  return lum > 0.18 ? "#0f172a" : "#ffffff";
}

export default function CapacityBar({ result }: { result: RaidResult }) {
  const segments: Segment[] = [
    { key: "usable", label: "Usable", tb: result.usableTb, color: "#2563eb" },
    { key: "parity", label: "Parity", tb: result.parityTb, color: "#f59e0b" },
    { key: "mirror", label: "Mirror", tb: result.mirrorLossTb, color: "#dc2626" },
    { key: "spare", label: "Hot spare", tb: result.hotSpareTb, color: "#94a3b8" },
  ].filter((s) => s.tb > 0);

  const total = segments.reduce((sum, s) => sum + s.tb, 0);
  if (total <= 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500">
        Enter valid inputs to see the capacity breakdown.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-baseline justify-between">
        <h3 className="text-base font-semibold text-slate-900">Capacity breakdown</h3>
        <span className="font-mono text-sm text-slate-500">
          {total.toFixed(2)} TB raw
        </span>
      </div>

      <div
        className="flex h-10 w-full overflow-hidden rounded-lg ring-1 ring-slate-200"
        role="img"
        aria-label={`Capacity breakdown: ${segments
          .map((s) => `${s.label} ${s.tb.toFixed(2)} TB`)
          .join(", ")}`}
      >
        {segments.map((seg) => {
          const pct = (seg.tb / total) * 100;
          return (
            <div
              key={seg.key}
              style={{
                width: `${pct}%`,
                backgroundColor: seg.color,
                color: readableTextColor(seg.color),
              }}
              className="flex items-center justify-center text-xs font-medium"
              title={`${seg.label}: ${seg.tb.toFixed(2)} TB (${pct.toFixed(1)}%)`}
            >
              {pct >= 8 && <span>{pct.toFixed(0)}%</span>}
            </div>
          );
        })}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {segments.map((seg) => (
          <div key={seg.key} className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block h-3 w-3 rounded-sm"
              style={{ backgroundColor: seg.color }}
            />
            <div className="text-sm">
              <div className="font-medium text-slate-700">{seg.label}</div>
              <div className="font-mono text-xs text-slate-500">
                {seg.tb.toFixed(2)} TB
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
