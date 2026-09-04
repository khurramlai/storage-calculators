import type { ComponentType } from "react";
import type { CalculatorConfig } from "~/lib/types";
import type { WidgetStrings } from "~/i18n/widget-strings";
import CloudStorageCalculator from "./CloudStorageCalculator";
import RaidCalculator from "./RaidCalculator";
import SurveillanceCalculator from "./SurveillanceCalculator";

export type WidgetProps = {
  config: CalculatorConfig;
  strings: WidgetStrings;
};

/**
 * Maps the `widget` string in CalculatorConfig to a React component.
 * Each widget owns its formula. The config supplies UI metadata (fields,
 * results, labels, copy, FAQs), the widget supplies the math and any
 * custom UI (charts, conditional fields, etc.).
 *
 * Add a new calculator type:
 *   1. Create src/components/widgets/MyCalculator.tsx
 *   2. Register it here: { ..., "my-type": MyCalculator }
 *   3. Reference `widget: "my-type"` in any CalculatorConfig
 */
const widgets: Record<string, ComponentType<WidgetProps>> = {
  cloud: CloudStorageCalculator,
  raid: RaidCalculator,
  surveillance: SurveillanceCalculator,
};

export function getWidget(name: string): ComponentType<WidgetProps> {
  const widget = widgets[name];
  if (!widget) {
    throw new Error(
      `Unknown calculator widget "${name}". Register it in src/components/widgets/registry.ts.`
    );
  }
  return widget;
}
