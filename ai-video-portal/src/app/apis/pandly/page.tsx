"use client";

import { ApiShell } from "@/components/api/ApiShell";
import { postGenerate } from "@/lib/api";
import { Input } from "@/components/ui/input";

export default function PandlyPage() {
  return (
    <ApiShell
      title="Pandly Videos API"
      onGenerate={(payload) =>
        postGenerate({
          api: "plainly",
          payload: {
            ...payload,
            sceneCount: (document.querySelector('input[placeholder="Scene count"]') as HTMLInputElement)?.value,
            keywords: (document.querySelector('input[placeholder="Stock assets keywords"]') as HTMLInputElement)?.value,
            pacing: (document.querySelector('input[placeholder="Pacing control (slow/medium/fast)"]') as HTMLInputElement)?.value,
          },
        })
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input placeholder="Scene count" />
        <Input placeholder="Stock assets keywords" />
        <Input placeholder="Pacing control (slow/medium/fast)" />
      </div>
    </ApiShell>
  );
}
