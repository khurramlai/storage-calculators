/**
 * Output formatters used by the calculator widget to render result values.
 */

const BYTE_UNITS = ["B", "KB", "MB", "GB", "TB", "PB", "EB"];

export function formatBytes(bytes: number, precision = 2): string {
  if (!isFinite(bytes) || bytes === 0) return "0 B";
  const negative = bytes < 0;
  const abs = Math.abs(bytes);
  const i = Math.min(
    Math.floor(Math.log(abs) / Math.log(1024)),
    BYTE_UNITS.length - 1
  );
  const value = abs / Math.pow(1024, i);
  return `${negative ? "-" : ""}${value.toFixed(precision)} ${BYTE_UNITS[i]}`;
}

export function formatNumber(value: number, precision = 2): string {
  if (!isFinite(value)) return "-";
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: precision,
  });
}

export function formatPercent(value: number, precision = 1): string {
  if (!isFinite(value)) return "-";
  return `${(value * 100).toFixed(precision)}%`;
}

export function formatCurrency(value: number, currency = "USD"): string {
  if (!isFinite(value)) return "-";
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatDuration(hours: number): string {
  if (!isFinite(hours)) return "-";
  if (hours < 1) return `${Math.round(hours * 60)} min`;
  if (hours < 24) return `${hours.toFixed(1)} hours`;
  const days = hours / 24;
  if (days < 30) return `${days.toFixed(1)} days`;
  const months = days / 30;
  if (months < 12) return `${months.toFixed(1)} months`;
  return `${(months / 12).toFixed(1)} years`;
}

export type FormatKind =
  | "number"
  | "bytes"
  | "percent"
  | "currency"
  | "duration"
  | "raw";

export function formatValue(
  value: unknown,
  kind: FormatKind = "raw",
  precision?: number
): string {
  if (typeof value === "string") return value;
  if (typeof value !== "number" || !isFinite(value)) return String(value ?? "-");
  switch (kind) {
    case "bytes":
      return formatBytes(value, precision ?? 2);
    case "percent":
      return formatPercent(value, precision ?? 1);
    case "currency":
      return formatCurrency(value);
    case "duration":
      return formatDuration(value);
    case "number":
      return formatNumber(value, precision ?? 2);
    case "raw":
    default:
      return formatNumber(value, precision ?? 2);
  }
}
