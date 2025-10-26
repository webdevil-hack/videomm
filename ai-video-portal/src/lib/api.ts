export type GenerateRequest = {
  api: string;
  payload: Record<string, unknown>;
};

export type GenerateResponse = {
  id: string;
  status: "queued" | "processing" | "completed" | "failed";
  previewUrl?: string;
  downloadUrl?: string;
};

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "/api";

export async function postGenerate(req: GenerateRequest): Promise<GenerateResponse> {
  const res = await fetch(`${BASE}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  });
  if (!res.ok) throw new Error("Failed to start generation");
  return res.json();
}
