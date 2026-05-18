import type { CloudStorageResult } from "~/lib/cloud-storage";

/**
 * Bar chart comparing monthly cost of every storage tier from the user's
 * provider, with the current selection highlighted. Makes the savings of
 * moving "hot → cold" tangible.
 */

function fmtUsd(n: number): string {
  if (!isFinite(n)) return "-";
  if (n < 0.01) return "$0.00";
  if (n < 10) return `$${n.toFixed(2)}`;
  if (n < 1000) return `$${n.toFixed(2)}`;
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function TierComparison({
  result,
  selectedTierId,
}: {
  result: CloudStorageResult;
  selectedTierId: string;
}) {
  const max = Math.max(...result.tierComparison.map((c) => c.monthlyTotal), 0.0001);
  if (max <= 0) return null;

  return (
    <div
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      role="region"
      aria-label="Monthly cost comparison across storage tiers"
    >
      <div className="mb-1 flex items-baseline justify-between">
        <h3 className="text-base font-semibold text-slate-900">Tier comparison</h3>
        <span className="text-xs text-slate-500">Same data, different tier</span>
      </div>
      <p className="mb-4 text-sm text-slate-600">
        Moving infrequently-accessed data to colder tiers can cut storage costs by 75–95% ,
        at the cost of retrieval latency and per-GB read fees.
      </p>
      <div className="space-y-3">
        {result.tierComparison.map(({ tier, monthlyTotal }) => {
          const pct = (monthlyTotal / max) * 100;
          const isSelected = tier.id === selectedTierId;
          return (
            <div key={tier.id}>
              <div className="mb-1 flex items-baseline justify-between text-sm">
                <div className="flex items-baseline gap-2">
                  <span
                    className={isSelected ? "font-semibold text-brand-700" : "text-slate-700"}
                  >
                    {tier.label}
                  </span>
                  <span className="text-xs text-slate-500">
                    ${tier.pricePerGbMonth.toFixed(5).replace(/0+$/, "0")}/GB
                  </span>
                </div>
                <span
                  className={
                    isSelected
                      ? "font-mono text-sm font-semibold text-brand-900"
                      : "font-mono text-sm text-slate-600"
                  }
                >
                  {fmtUsd(monthlyTotal)}/mo
                </span>
              </div>
              <div
                className="h-3 w-full overflow-hidden rounded-full bg-slate-100"
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
