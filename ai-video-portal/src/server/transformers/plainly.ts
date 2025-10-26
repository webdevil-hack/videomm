type UiPayload = {
  sceneCount?: string;
  pacing?: string;
  keywords?: string;
  resolution?: string;
};

export function buildPlainlyRequestFromUi(ui: UiPayload) {
  const scenes = Math.max(1, Math.min(12, parseInt(String(ui.sceneCount || 5), 10) || 5));
  const pacing = (ui.pacing || "medium").toLowerCase();

  return {
    template_id: "demo-template",
    variables: {
      scenes,
      pacing,
      keywords: ui.keywords || "",
    },
    output: {
      format: "mp4",
    },
  };
}
