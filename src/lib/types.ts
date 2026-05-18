/**
 * Calculator config schema. Every calculator in src/calculators/*.ts exports
 * a default of this shape. The universal page template renders any calculator
 * from this config, adding a new calculator means adding one file here.
 */

export type CalculatorCategory =
  | "raid"
  | "surveillance"
  | "nas"
  | "cloud"
  | "self-storage"
  | "specialty";

export type FieldType =
  | "number"
  | "select"
  | "text"
  | "toggle"
  | "range";

export interface SelectOption {
  value: string | number;
  label: string;
}

export interface CalculatorField {
  id: string;
  label: string;
  type: FieldType;
  defaultValue: string | number | boolean;
  /** Help text shown under the input */
  help?: string;
  /** For number/range inputs */
  min?: number;
  max?: number;
  step?: number;
  /** Unit suffix shown in the input (e.g., "TB", "Mbps", "hours") */
  unit?: string;
  /** For select inputs */
  options?: SelectOption[];
  /** Optional input width hint */
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
}

export interface CalculatorResult {
  id: string;
  label: string;
  /** How to format the output: a unit suffix or formatter id */
  format?: "number" | "bytes" | "percent" | "currency" | "duration" | "raw";
  /** Optional precision for numeric outputs */
  precision?: number;
  /** Optional explanatory subtext */
  hint?: string;
  /** If true, render as a primary headline result */
  primary?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CalculatorConfig {
  /** URL slug, becomes /[slug]/ */
  slug: string;
  /** H1 + page title */
  title: string;
  /** Meta description (≤160 chars ideally) */
  description: string;
  /** Short tagline shown under the H1 */
  tagline?: string;
  category: CalculatorCategory;

  /** SEO keywords this page targets (for internal tracking + meta keywords) */
  keywords: string[];

  /**
   * Input fields for generic, schema-driven widgets that delegate UI rendering
   * to CalculatorFrame. Custom widgets (e.g. RAID with its own layout) build
   * their own inputs and can omit this.
   */
  fields?: CalculatorField[];

  /** Result rows for schema-driven widgets. Custom widgets can omit this. */
  results?: CalculatorResult[];

  /**
   * Which React widget component to mount. Maps to a key in
   * src/components/widgets/registry.tsx so we can code-split per calculator type
   * but still drive everything from config.
   */
  widget: string;

  /** Optional widget-specific config bag (e.g., RAID levels supported) */
  widgetProps?: Record<string, unknown>;

  /** Long-form SEO content blocks (rendered between widget and FAQ) */
  content?: {
    intro?: string;
    formula?: string;
    useCases?: string[];
  };

  /** FAQ section, feeds JSON-LD FAQ schema */
  faqs?: FAQItem[];

  /** Slugs of related calculators (renders the "Related" block) */
  related?: string[];

  /** Show in homepage grid? (default true) */
  featured?: boolean;
}
