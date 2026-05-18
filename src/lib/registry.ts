import type { CalculatorConfig } from "./types";

/**
 * Auto-discover every calculator config under src/calculators/.
 * Each file must `export default` a CalculatorConfig.
 * Adding a new calculator = drop a .ts file in that folder, no manual wiring.
 */
const modules = import.meta.glob<{ default: CalculatorConfig }>(
  "../calculators/*.ts",
  { eager: true }
);

const all: CalculatorConfig[] = Object.values(modules)
  .map((m) => m.default)
  .filter(Boolean)
  .sort((a, b) => a.title.localeCompare(b.title));

const bySlug = new Map<string, CalculatorConfig>();
for (const calc of all) {
  if (bySlug.has(calc.slug)) {
    throw new Error(
      `Duplicate calculator slug "${calc.slug}". Each calculator must have a unique slug.`
    );
  }
  bySlug.set(calc.slug, calc);
}

export function getAllCalculators(): CalculatorConfig[] {
  return all;
}

export function getCalculatorBySlug(slug: string): CalculatorConfig | undefined {
  return bySlug.get(slug);
}

export function getCalculatorsByCategory(
  category: CalculatorConfig["category"]
): CalculatorConfig[] {
  return all.filter((c) => c.category === category);
}

export function getFeaturedCalculators(): CalculatorConfig[] {
  return all.filter((c) => c.featured !== false);
}

export function getRelatedCalculators(slug: string): CalculatorConfig[] {
  const calc = bySlug.get(slug);
  if (!calc?.related?.length) return [];
  return calc.related
    .map((s) => bySlug.get(s))
    .filter((c): c is CalculatorConfig => Boolean(c));
}

export const CATEGORY_LABELS: Record<CalculatorConfig["category"], string> = {
  raid: "RAID",
  surveillance: "Surveillance & CCTV",
  nas: "NAS",
  cloud: "Cloud Storage",
  "self-storage": "Self Storage",
  specialty: "Specialty",
};
