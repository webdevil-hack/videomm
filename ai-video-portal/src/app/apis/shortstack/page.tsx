"use client";

import { ApiShell } from "@/components/api/ApiShell";
import { postGenerate } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "@/components/ui/upload";

export default function ShortStackPage() {
  return (
    <ApiShell
      title="ShortStack API"
      onGenerate={(payload) => postGenerate({ api: "shotstack", payload })}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Textarea placeholder="Script prompt" className="sm:col-span-2" />
        <Input placeholder="Transitions (comma separated)" />
        <Input placeholder="Branding theme" />
        <Input placeholder="AI voice ID" />
      </div>
    </ApiShell>
  );
}
