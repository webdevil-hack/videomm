export async function startPlainlyRender(payload: any) {
  const key = process.env.PLAINLY_API_KEY;
  if (!key) throw new Error("PLAINLY_API_KEY is not set");
  const res = await fetch("https://api.plainlyvideos.com/v1/renders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(payload),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json?.message || json?.error || "Plainly request failed");
  }
  return json;
}
