type UiPayload = {
  resolution?: string;
  template?: string;
  mapping?: string; // JSON string
};

function mapResolution(res?: string) {
  const v = String(res || "1080p").toLowerCase();
  if (v.includes("4k")) return { width: 3840, height: 2160 };
  if (v.includes("720")) return { width: 1280, height: 720 };
  return { width: 1920, height: 1080 };
}

export function buildCreatomateRequestFromUi(ui: UiPayload) {
  let data: Record<string, unknown> = {};
  try { data = ui.mapping ? JSON.parse(ui.mapping) : {}; } catch {}

  const { width, height } = mapResolution(ui.resolution);
  return {
    source: {
      template_id: ui.template || "demo-template",
      placeholders: data,
      output_format: "mp4",
      width,
      height,
    },
  };
}
