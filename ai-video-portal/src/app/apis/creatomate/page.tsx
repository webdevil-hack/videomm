"use client";

import { ApiShell } from "@/components/api/ApiShell";
import { postGenerate } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

export default function CreatoMatePage() {
  return (
    <ApiShell title="CreatoMate API" onGenerate={(payload) => postGenerate({ api: "creatomate", payload })}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Select
          placeholder="Template"
          options={[
            { label: "Promo 15s", value: "promo-15" },
            { label: "Promo 30s", value: "promo-30" },
            { label: "Explainer", value: "explainer" },
          ]}
        />
        <Input placeholder="Dynamic asset mapping (JSON)" />
        <Textarea placeholder="Animations notes" className="sm:col-span-2" />
      </div>
    </ApiShell>
  );
}
