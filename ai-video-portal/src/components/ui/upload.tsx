"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Upload({ onFiles, accept, className }: { onFiles?: (files: FileList) => void; accept?: string; className?: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      className={cn(
        "rounded-md border border-dashed border-[--border] p-4 text-sm text-zinc-400 cursor-pointer glass-panel",
        className
      )}
      onClick={() => inputRef.current?.click()}
    >
      <p>Click to upload or drag and drop</p>
      <p className="text-zinc-500 text-xs mt-1">Supported types based on API</p>
      <input ref={inputRef} type="file" accept={accept} className="hidden" onChange={(e) => e.target.files && onFiles?.(e.target.files)} multiple />
    </div>
  );
}
