"use client";

import { ApiShell } from "@/components/api/ApiShell";
import { postGenerate } from "@/lib/api";
import { Input } from "@/components/ui/input";

export default function PandlyPage() {
  return (
    <ApiShell title="Pandly Videos API" onGenerate={(payload) => postGenerate({ api: "plainly", payload })}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input placeholder="Scene count" />
        <Input placeholder="Stock assets keywords" />
        <Input placeholder="Pacing control (slow/medium/fast)" />
      </div>
    </ApiShell>
  );
}
