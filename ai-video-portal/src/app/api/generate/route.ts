import { NextRequest, NextResponse } from "next/server";
import { startShotstackRender } from "@/server/clients/shotstack";
import { startCreatomateRender } from "@/server/clients/creatomate";
import { startTavusRender } from "@/server/clients/tavus";
import { startPlainlyRender } from "@/server/clients/plainly";

export async function POST(req: NextRequest) {
  try {
    const { api, payload } = await req.json();

    let result: any;
    switch (String(api).toLowerCase()) {
      case "shortstack":
      case "shotstack":
        result = await startShotstackRender(payload);
        break;
      case "creatomate":
        result = await startCreatomateRender(payload);
        break;
      case "tavas":
      case "tavus":
        result = await startTavusRender(payload);
        break;
      case "plainly":
      case "pandly":
        result = await startPlainlyRender(payload);
        break;
      default:
        return NextResponse.json({ error: "Unknown API" }, { status: 400 });
    }

    // Normalize minimal response
    const normalized = {
      id: result?.id || result?.data?.id || result?.renderId || "unknown",
      status: result?.status || result?.state || "queued",
      previewUrl: result?.preview_url || result?.previewUrl || null,
      downloadUrl: result?.download_url || result?.downloadUrl || null,
    };

    return NextResponse.json(normalized);
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to start generation" },
      { status: 500 }
    );
  }
}
