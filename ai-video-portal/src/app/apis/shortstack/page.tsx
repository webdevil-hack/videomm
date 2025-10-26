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
      onGenerate={(payload) =>
        postGenerate({
          api: "shotstack",
          payload: {
            ...payload,
            script: (document.querySelector(
              'textarea[placeholder="Script prompt"]'
            ) as HTMLTextAreaElement)?.value,
            transitions: (document.querySelector(
              'input[placeholder="Transitions (comma separated)"]'
            ) as HTMLInputElement)?.value,
            brandingTheme: (document.querySelector(
              'input[placeholder="Branding theme"]'
            ) as HTMLInputElement)?.value,
            voiceId: (document.querySelector(
              'input[placeholder="AI voice ID"]'
            ) as HTMLInputElement)?.value,
          },
        })
      }
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
