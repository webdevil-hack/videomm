import { buildTavusRequestFromUi } from "@/server/transformers/tavus";

export async function startTavusRender(payload: any) {
  const key = process.env.TAVUS_API_KEY;
  if (!key) throw new Error("TAVUS_API_KEY is not set");
  const body = buildTavusRequestFromUi(payload);

  const res = await fetch("https://api.tavus.io/v2/videos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json?.message || json?.error || "Tavus request failed");
  }
  return json;
}
