import { buildShotstackRequestFromUi } from "@/server/transformers/shotstack";

export async function startShotstackRender(payload: any) {
  const key = process.env.SHOTSTACK_API_KEY;
  if (!key) throw new Error("SHOTSTACK_API_KEY is not set");
  const body = buildShotstackRequestFromUi(payload);

  const env = process.env.SHOTSTACK_ENV || "edit/v1";
  const tryEndpoints = [
    `https://api.shotstack.io/${env}/render`,
    // Fallback common alternative for staging
    `https://api.shotstack.io/stage/v1/render`,
  ];

  let lastError: any;
  for (const endpoint of tryEndpoints) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": key,
        },
        body: JSON.stringify(body),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        lastError = new Error(json?.message || json?.error || `Shotstack request failed (${res.status})`);
        continue;
      }
      return json;
    } catch (e) {
      lastError = e;
      continue;
    }
  }
  throw lastError || new Error("Shotstack request failed");
}
