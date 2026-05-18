import type { CalculatorConfig } from "~/lib/types";
import { getWidget } from "./registry";

/**
 * Single React island the page mounts. The widget lookup happens inside React
 * land where imports are static, Astro only needs to hydrate this one
 * component regardless of how many widget types exist.
 */
export default function CalculatorRoot({ config }: { config: CalculatorConfig }) {
  const Widget = getWidget(config.widget);
  return <Widget config={config} />;
}
