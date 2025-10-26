type UiPayload = {
  resolution?: string; // "720p" | "1080p" | "4k"
  style?: string;
  script?: string;
  transitions?: string;
  brandingTheme?: string;
  voiceId?: string;
};

function mapResolution(res?: string) {
  const v = String(res || "1080p").toLowerCase();
  if (v.includes("4k")) return "4k";
  if (v.includes("720")) return "hd";
  return "1080"; // Shotstack valid value
}

export function buildShotstackRequestFromUi(ui: UiPayload) {
  const script = (ui.script || "AstraEdit AI Video").slice(0, 120);
  const transition = ((ui.transitions || "fade").split(",")[0] || "fade").trim().toLowerCase();
  const bg = ui.brandingTheme?.toLowerCase().includes("light") ? "#0a0a0a" : "#05060a";

  return {
    timeline: {
      background: bg,
      tracks: [
        {
          clips: [
            {
              asset: {
                type: "title",
                text: script,
                style: "minimal",
                color: "#e6f0ff",
                size: "medium",
              },
              start: 0,
              length: 6,
              position: "center",
              transition: {
                in: transition,
                out: transition,
              },
            },
          ],
        },
      ],
    },
    output: {
      format: "mp4",
      resolution: mapResolution(ui.resolution),
      fps: 25,
    },
  };
}
