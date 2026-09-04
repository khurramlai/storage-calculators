import { strings } from "./index";
import type { Locale } from "./config";
import type { UIStrings } from "./ui/en";

/**
 * The slice of the dictionary that crosses the Astro -> React island boundary.
 * It gets serialized into the HTML for hydration, so each widget type only
 * receives the domain maps it actually renders.
 */
export interface WidgetStrings {
  locale: Locale;
  widget: UIStrings["widget"];
  raidLevels?: UIStrings["raidLevels"];
  raidWarning?: UIStrings["raidWarning"];
  resolutions?: UIStrings["resolutions"];
  codecs?: UIStrings["codecs"];
  recordingModes?: UIStrings["recordingModes"];
  vendorNotes?: UIStrings["vendorNotes"];
  tierNotes?: UIStrings["tierNotes"];
}

export function widgetStrings(
  locale: Locale,
  widgetType: string
): WidgetStrings {
  const s = strings(locale);
  const base: WidgetStrings = { locale, widget: s.widget };

  switch (widgetType) {
    case "raid":
      return { ...base, raidLevels: s.raidLevels, raidWarning: s.raidWarning };
    case "surveillance":
      return {
        ...base,
        resolutions: s.resolutions,
        codecs: s.codecs,
        recordingModes: s.recordingModes,
        vendorNotes: s.vendorNotes,
      };
    case "cloud":
      return { ...base, tierNotes: s.tierNotes };
    default:
      return base;
  }
}
