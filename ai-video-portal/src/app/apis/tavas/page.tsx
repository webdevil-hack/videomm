"use client";

import { ApiShell } from "@/components/api/ApiShell";
import { postGenerate } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function TavasPage() {
  return (
    <ApiShell title="Tavas API" onGenerate={(payload) => postGenerate({ api: "tavus", payload })}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input placeholder="Subtitle style" />
        <Input placeholder="Translate to language" />
        <Textarea placeholder="Story-screen builder JSON" className="sm:col-span-2" />
      </div>
    </ApiShell>
  );
}
