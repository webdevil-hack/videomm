"use client";

import { ApiShell } from "@/components/api/ApiShell";
import { Select } from "@/components/ui/select";

export default function LuckyEditPage() {
  return (
    <ApiShell title="LuckyEdit API" onGenerate={() => Promise.resolve()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Select
          placeholder="Preset"
          options={[
            { label: "Auto Edit", value: "auto" },
            { label: "Stabilization", value: "stab" },
            { label: "Color Grade", value: "grade" },
          ]}
        />
      </div>
    </ApiShell>
  );
}
