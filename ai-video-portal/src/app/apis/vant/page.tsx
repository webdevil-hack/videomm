"use client";

import { ApiShell } from "@/components/api/ApiShell";
import { Input } from "@/components/ui/input";

export default function VantPage() {
  return (
    <ApiShell title="Vant 2.1 API" onGenerate={() => Promise.resolve()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input placeholder="Animation overlays config" />
        <Input placeholder="Face tracking (on/off)" />
        <Input placeholder="Speed edits (0.5x - 3x)" />
      </div>
    </ApiShell>
  );
}
