import { buildShotstackRequestFromUi } from "@/server/transformers/shotstack";

export async function startShotstackRender(payload: any) {
  const key = process.env.SHOTSTACK_API_KEY;
  if (!key) throw new Error("SHOTSTACK_API_KEY is not set");
  const body = buildShotstackRequestFromUi(payload);

  const env = process.env.SHOTSTACK_ENV || "v1"; // use "stage" for staging keys
  const endpoint = `https://api.shotstack.io/${env}/render`;

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
    throw new Error(json?.message || json?.error || `Shotstack request failed (${res.status})`);
  }
  return json;
}
