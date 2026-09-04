import type { CalculatorConfig } from "~/lib/types";
import type { WidgetStrings } from "~/i18n/widget-strings";
import { getWidget } from "./registry";

/**
 * Single React island the page mounts. The widget lookup happens inside React
 * land where imports are static, Astro only needs to hydrate this one
 * component regardless of how many widget types exist.
 *
 * `strings` carries just the slice of the locale dictionary this widget type
 * renders, so a French page ships French labels and nothing else.
 */
export default function CalculatorRoot({
  config,
  strings,
}: {
  config: CalculatorConfig;
  strings: WidgetStrings;
}) {
  const Widget = getWidget(config.widget);
  return <Widget config={config} strings={strings} />;
}
