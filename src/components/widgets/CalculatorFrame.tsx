import { useMemo, useState } from "react";
import type { CalculatorConfig, CalculatorField } from "~/lib/types";
import { formatValue } from "~/lib/format";

export type Values = Record<string, string | number | boolean>;
export type ComputeFn = (values: Values) => Record<string, number | string>;

function initialValues(fields: CalculatorField[] | undefined): Values {
  const v: Values = {};
  if (!fields) return v;
  for (const f of fields) v[f.id] = f.defaultValue;
  return v;
}

function coerce(field: CalculatorField, raw: string): Values[string] {
  if (field.type === "toggle") return raw === "true";
  if (field.type === "number" || field.type === "range") {
    const n = Number(raw);
    return Number.isFinite(n) ? n : 0;
  }
  if (field.type === "select") {
    const first = field.options?.[0]?.value;
    if (typeof first === "number") {
      const n = Number(raw);
      return Number.isFinite(n) ? n : raw;
    }
    return raw;
  }
  return raw;
}

/**
 * Shared UI shell for all calculators. Each widget supplies its own pure
 * `compute(values) => results` function, formulas live in the widget file,
 * not the config (configs are serialized JSON across the Astro→React island
 * boundary and can't carry functions).
 */
export default function CalculatorFrame({
  config,
  compute,
}: {
  config: CalculatorConfig;
  compute: ComputeFn;
}) {
  const [values, setValues] = useState<Values>(() => initialValues(config.fields));

  const results = useMemo(() => {
    try {
      return compute(values);
    } catch (err) {
      console.error("Calculator compute error:", err);
      return {};
    }
  }, [compute, values]);

  function setField(id: string, raw: string) {
    const field = config.fields?.find((f) => f.id === id);
    if (!field) return;
    setValues((v) => ({ ...v, [id]: coerce(field, raw) }));
  }

  const fields = config.fields ?? [];
  const resultsConfig = config.results ?? [];

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Inputs</h2>
          <div className="grid grid-cols-12 gap-4">
            {fields.map((field) => (
              <FieldInput
                key={field.id}
                field={field}
                value={values[field.id]}
                onChange={(v) => setField(field.id, v)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="sticky top-6 rounded-2xl border border-brand-200 bg-brand-50 p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-brand-900">Results</h2>
          <div className="space-y-4">
            {resultsConfig.map((r) => {
              const value = results[r.id];
              const primary = r.primary;
              return (
                <div
                  key={r.id}
                  className={
                    primary
                      ? "rounded-xl bg-white p-4 shadow-sm ring-1 ring-brand-200"
                      : "border-t border-brand-200 pt-3 first:border-0 first:pt-0"
                  }
                >
                  <div className="text-sm text-brand-700">{r.label}</div>
                  <div
                    className={
                      primary
                        ? "mt-1 font-mono text-3xl font-bold text-brand-900"
                        : "mt-1 font-mono text-lg font-semibold text-slate-900"
                    }
                  >
                    {value === undefined
                      ? "-"
                      : formatValue(value, r.format, r.precision)}
                  </div>
                  {r.hint && (
                    <div className="mt-1 text-xs text-slate-500">{r.hint}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: CalculatorField;
  value: Values[string];
  onChange: (v: string) => void;
}) {
  const colClass =
    field.cols === 12
      ? "col-span-12"
      : field.cols === 6
      ? "col-span-12 sm:col-span-6"
      : field.cols === 4
      ? "col-span-12 sm:col-span-4"
      : field.cols === 3
      ? "col-span-6 sm:col-span-3"
      : "col-span-12 sm:col-span-6";

  return (
    <div className={colClass}>
      <label
        htmlFor={field.id}
        className="mb-1 block text-sm font-medium text-slate-700"
      >
        {field.label}
      </label>
      {field.type === "select" ? (
        <select
          id={field.id}
          value={String(value)}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
        >
          {field.options?.map((o) => (
            <option key={String(o.value)} value={String(o.value)}>
              {o.label}
            </option>
          ))}
        </select>
      ) : field.type === "toggle" ? (
        <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-slate-700">
          <input
            id={field.id}
            type="checkbox"
            checked={Boolean(value)}
            onChange={(e) => onChange(e.target.checked ? "true" : "false")}
            className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
          />
          <span>{field.help ?? "Enabled"}</span>
        </label>
      ) : field.type === "range" ? (
        <div className="flex items-center gap-3">
          <input
            id={field.id}
            type="range"
            min={field.min}
            max={field.max}
            step={field.step ?? 1}
            value={Number(value)}
            onChange={(e) => onChange(e.target.value)}
            className="flex-1 accent-brand-600"
          />
          <span className="w-16 text-right font-mono text-sm text-slate-700">
            {String(value)}
            {field.unit ? ` ${field.unit}` : ""}
          </span>
        </div>
      ) : (
        <div className="relative">
          <input
            id={field.id}
            type={field.type === "number" ? "number" : "text"}
            min={field.min}
            max={field.max}
            step={field.step}
            value={String(value)}
            onChange={(e) => onChange(e.target.value)}
            className="block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
          />
          {field.unit && (
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500">
              {field.unit}
            </span>
          )}
        </div>
      )}
      {field.help && field.type !== "toggle" && (
        <p className="mt-1 text-xs text-slate-500">{field.help}</p>
      )}
    </div>
  );
}
