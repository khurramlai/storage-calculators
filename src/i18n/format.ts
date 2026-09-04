/**
 * Placeholder substitution. Deliberately dependency-free: the React islands
 * import this, and pulling in the dictionaries would ship every locale's
 * strings to the browser.
 */
export function fmt(
  template: string,
  vars: Record<string, string | number> = {}
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match
  );
}

/** Picks the singular or plural template, then substitutes into it. */
export function plural(
  n: number,
  one: string,
  many: string,
  vars: Record<string, string | number> = {}
): string {
  return fmt(n === 1 ? one : many, { n, count: n, ...vars });
}
