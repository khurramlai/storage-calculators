import { useId, useMemo, useRef, useState } from "react";
import type { CalculatorConfig } from "~/lib/types";
import {
  PROVIDERS,
  PROVIDER_LABELS,
  PRICING,
  calculateCloudStorage,
  type Provider,
} from "~/lib/cloud-storage";
import ActionBar from "./parts/ActionBar";
import TierComparison from "./parts/TierComparison";

interface CloudWidgetProps {
  /** Lock to a single provider (e.g. "aws" on /s3-storage-calculator/) */
  lockedProvider?: Provider;
  /** Default tier to seed (e.g. "glacier-deep" on the cold-storage page) */
  defaultTierId?: string;
  defaults?: Partial<{
    storageGb: number;
    egressGb: number;
    writeOpsThousands: number;
    readOpsThousands: number;
    retrievalGb: number;
  }>;
}

type SizeUnit = "GB" | "TB";

function toGb(value: number, unit: SizeUnit): number {
  return unit === "TB" ? value * 1000 : value;
}

function fmtUsd(n: number, precision = 2): string {
  if (!isFinite(n)) return "-";
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  }).format(n);
}

export default function CloudStorageCalculator({
  config,
}: {
  config: CalculatorConfig;
}) {
  const props = (config.widgetProps ?? {}) as CloudWidgetProps;
  const lockedProvider = props.lockedProvider;

  const initialProvider: Provider = lockedProvider ?? "aws";
  const initialTierId =
    props.defaultTierId && PRICING[initialProvider].tiers.some((t) => t.id === props.defaultTierId)
      ? props.defaultTierId
      : PRICING[initialProvider].tiers[0].id;

  const initial = {
    provider: initialProvider,
    tierId: initialTierId,
    storageValue: props.defaults?.storageGb ?? 1000,
    storageUnit: "GB" as SizeUnit,
    egressGb: props.defaults?.egressGb ?? 100,
    writeOpsThousands: props.defaults?.writeOpsThousands ?? 10,
    readOpsThousands: props.defaults?.readOpsThousands ?? 100,
    retrievalGb: props.defaults?.retrievalGb ?? 0,
  };

  const [provider, setProvider] = useState<Provider>(initial.provider);
  const [tierId, setTierId] = useState<string>(initial.tierId);
  const [storageValue, setStorageValue] = useState<number>(initial.storageValue);
  const [storageUnit, setStorageUnit] = useState<SizeUnit>(initial.storageUnit);
  const [egressGb, setEgressGb] = useState<number>(initial.egressGb);
  const [writeOpsThousands, setWriteOpsThousands] = useState<number>(initial.writeOpsThousands);
  const [readOpsThousands, setReadOpsThousands] = useState<number>(initial.readOpsThousands);
  const [retrievalGb, setRetrievalGb] = useState<number>(initial.retrievalGb);

  const resultsRef = useRef<HTMLDivElement>(null);
  const [highlight, setHighlight] = useState(false);

  function handleCalculate() {
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setHighlight(true);
    window.setTimeout(() => setHighlight(false), 900);
  }

  function handleReset() {
    setProvider(initial.provider);
    setTierId(initial.tierId);
    setStorageValue(initial.storageValue);
    setStorageUnit(initial.storageUnit);
    setEgressGb(initial.egressGb);
    setWriteOpsThousands(initial.writeOpsThousands);
    setReadOpsThousands(initial.readOpsThousands);
    setRetrievalGb(initial.retrievalGb);
  }

  // When provider changes, reset tier to that provider's first tier
  function handleProviderChange(next: Provider) {
    setProvider(next);
    setTierId(PRICING[next].tiers[0].id);
  }

  const storageGb = toGb(storageValue, storageUnit);
  const tiers = PRICING[provider].tiers;
  const currentTier = tiers.find((t) => t.id === tierId) ?? tiers[0];

  const result = useMemo(
    () =>
      calculateCloudStorage({
        provider,
        tierId,
        storageGb,
        storageMonths: 0,
        egressGb,
        writeOpsThousands,
        readOpsThousands,
        retrievalGb,
      }),
    [provider, tierId, storageGb, egressGb, writeOpsThousands, readOpsThousands, retrievalGb]
  );

  const showRetrieval = currentTier.retrievalPerGb > 0;

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Inputs</h2>
            <div className="grid grid-cols-12 gap-4">
              {!lockedProvider && (
                <Field label="Cloud provider" cols={12}>
                  {({ fieldId }) => (
                    <select
                      id={fieldId}
                      value={provider}
                      onChange={(e) => handleProviderChange(e.target.value as Provider)}
                      className={inputCls}
                    >
                      {PROVIDERS.map((p) => (
                        <option key={p} value={p}>
                          {PROVIDER_LABELS[p]}
                        </option>
                      ))}
                    </select>
                  )}
                </Field>
              )}

              <Field label="Storage tier" cols={12} help={currentTier.notes}>
                {({ fieldId, helpId }) => (
                  <select
                    id={fieldId}
                    aria-describedby={helpId}
                    value={tierId}
                    onChange={(e) => setTierId(e.target.value)}
                    className={inputCls}
                  >
                    {tiers.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.label} (${t.pricePerGbMonth.toFixed(5).replace(/0+$/, "0")}/GB/mo)
                      </option>
                    ))}
                  </select>
                )}
              </Field>

              <Field label="Storage amount" cols={6}>
                {({ fieldId }) => (
                  <div className="flex gap-2">
                    <input
                      id={fieldId}
                      type="number"
                      min={0}
                      step={storageUnit === "TB" ? 0.1 : 1}
                      value={storageValue}
                      onChange={(e) => setStorageValue(Math.max(0, Number(e.target.value) || 0))}
                      className={`${inputCls} flex-1`}
                    />
                    <select
                      value={storageUnit}
                      onChange={(e) => setStorageUnit(e.target.value as SizeUnit)}
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                      aria-label="Storage size unit"
                    >
                      <option value="GB">GB</option>
                      <option value="TB">TB</option>
                    </select>
                  </div>
                )}
              </Field>

              <Field
                label="Monthly egress"
                cols={6}
                help={`First ${PRICING[provider].freeEgressGb} GB/mo to internet is free.`}
              >
                {({ fieldId, helpId }) => (
                  <div className="flex items-center gap-2">
                    <input
                      id={fieldId}
                      aria-describedby={helpId}
                      type="number"
                      min={0}
                      step={1}
                      value={egressGb}
                      onChange={(e) => setEgressGb(Math.max(0, Number(e.target.value) || 0))}
                      className={`${inputCls} flex-1`}
                    />
                    <span className="text-sm text-slate-500">GB</span>
                  </div>
                )}
              </Field>

              <Field
                label="Write requests"
                cols={6}
                help="PUT, COPY, POST, LIST, per 1,000 requests."
              >
                {({ fieldId, helpId }) => (
                  <div className="flex items-center gap-2">
                    <input
                      id={fieldId}
                      aria-describedby={helpId}
                      type="number"
                      min={0}
                      step={1}
                      value={writeOpsThousands}
                      onChange={(e) =>
                        setWriteOpsThousands(Math.max(0, Number(e.target.value) || 0))
                      }
                      className={`${inputCls} flex-1`}
                    />
                    <span className="text-sm text-slate-500">× 1,000</span>
                  </div>
                )}
              </Field>

              <Field
                label="Read requests"
                cols={6}
                help="GET, SELECT, per 1,000 requests."
              >
                {({ fieldId, helpId }) => (
                  <div className="flex items-center gap-2">
                    <input
                      id={fieldId}
                      aria-describedby={helpId}
                      type="number"
                      min={0}
                      step={1}
                      value={readOpsThousands}
                      onChange={(e) =>
                        setReadOpsThousands(Math.max(0, Number(e.target.value) || 0))
                      }
                      className={`${inputCls} flex-1`}
                    />
                    <span className="text-sm text-slate-500">× 1,000</span>
                  </div>
                )}
              </Field>

              {showRetrieval && (
                <Field
                  label="Data retrieved this month"
                  cols={12}
                  help={`${currentTier.label} charges $${currentTier.retrievalPerGb.toFixed(3)}/GB to retrieve data from cold storage.`}
                >
                  {({ fieldId, helpId }) => (
                    <div className="flex items-center gap-2">
                      <input
                        id={fieldId}
                        aria-describedby={helpId}
                        type="number"
                        min={0}
                        step={1}
                        value={retrievalGb}
                        onChange={(e) =>
                          setRetrievalGb(Math.max(0, Number(e.target.value) || 0))
                        }
                        className={`${inputCls} flex-1`}
                      />
                      <span className="text-sm text-slate-500">GB</span>
                    </div>
                  )}
                </Field>
              )}
            </div>

            <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-900">
              <strong>Note:</strong> Prices are list rates for the most common US region as of
              early 2025. Actual cost varies by region, committed-use discounts, and provider
              updates. Use for estimation, not invoicing.
            </p>

            <ActionBar onCalculate={handleCalculate} onReset={handleReset} />
          </div>
        </div>

        <div className="lg:col-span-2">
          <div
            ref={resultsRef}
            className={`sticky top-6 space-y-3 rounded-2xl border border-brand-200 bg-brand-50 p-6 shadow-sm transition ${
              highlight ? "ring-4 ring-brand-300" : ""
            }`}
            role="region"
            aria-label="Estimated monthly and annual cost"
            aria-live="polite"
          >
            <h2 className="mb-2 text-lg font-semibold text-brand-900">Estimated cost</h2>

            <PrimaryStat
              label="Monthly cost"
              value={fmtUsd(result.monthlyTotal)}
              hint={`${storageGb.toLocaleString()} GB on ${currentTier.label}`}
            />

            <Row label="Annual cost" value={fmtUsd(result.annualTotal, 0)} />
            <Row label="Storage" value={fmtUsd(result.storageCost)} />
            {result.egressCost > 0 && (
              <Row
                label="Egress"
                value={fmtUsd(result.egressCost)}
                hint={`After ${PRICING[provider].freeEgressGb} GB free tier.`}
              />
            )}
            {result.writeOpsCost > 0 && (
              <Row label="Write ops" value={fmtUsd(result.writeOpsCost)} />
            )}
            {result.readOpsCost > 0 && (
              <Row label="Read ops" value={fmtUsd(result.readOpsCost)} />
            )}
            {result.retrievalCost > 0 && (
              <Row
                label="Retrieval"
                value={fmtUsd(result.retrievalCost)}
                hint={`$${currentTier.retrievalPerGb.toFixed(3)}/GB out of ${currentTier.label}`}
              />
            )}
          </div>
        </div>
      </div>

      <TierComparison result={result} selectedTierId={tierId} />
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
      {hint && <div className="mt-1 text-xs text-slate-500">{hint}</div>}
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
      {hint && <div className="mt-1 text-xs text-slate-500">{hint}</div>}
    </div>
  );
}
