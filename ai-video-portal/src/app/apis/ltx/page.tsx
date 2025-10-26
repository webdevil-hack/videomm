"use client";

import { ApiShell } from "@/components/api/ApiShell";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

export default function LTXPage() {
  return (
    <ApiShell title="LTX Video API" onGenerate={() => Promise.resolve()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Textarea placeholder="Text-to-video prompt" className="sm:col-span-2" />
        <Select
          placeholder="Camera motion"
          options={[
            { label: "Dolly In", value: "dolly-in" },
            { label: "Pan", value: "pan" },
            { label: "Crane", value: "crane" },
          ]}
        />
        <Select
          placeholder="Quality"
          options={[
            { label: "HD", value: "hd" },
            { label: "4K", value: "4k" },
          ]}
        />
      </div>
    </ApiShell>
  );
}
