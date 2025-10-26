"use client";

import { ApiShell } from "@/components/api/ApiShell";
import { Input } from "@/components/ui/input";

export default function PromptClipPage() {
  return (
    <ApiShell title="PromptClip API" onGenerate={() => Promise.resolve()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input placeholder="Trim start (s)" />
        <Input placeholder="Trim end (s)" />
        <Input placeholder="Join clips (IDs)" className="sm:col-span-2" />
        <Input placeholder="Sound sync (on/off)" />
      </div>
    </ApiShell>
  );
}
