type UiPayload = {
  subtitles?: { auto?: boolean; lang?: string };
  subtitleStyle?: string;
  translateTo?: string;
};

export function buildTavusRequestFromUi(ui: UiPayload) {
  // Minimal example payload; real projects will include more fields like actor/template IDs
  return {
    subtitles: ui.subtitles?.auto ? { enabled: true, lang: ui.subtitles?.lang || "en" } : { enabled: false },
    translation: ui.translateTo ? { target_language: ui.translateTo } : undefined,
    meta: { subtitle_style: ui.subtitleStyle || "default" },
  };
}
