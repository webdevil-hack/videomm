"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Select({
  value,
  onChange,
  placeholder,
  options,
  className,
}: {
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  options: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger asChild>
        <button className={cn("w-full justify-between flex items-center h-10 rounded-md border border-[--border] px-3 glass-panel", className)}>
          <span className={cn(!value && "text-zinc-500")}>{value ? options.find(o => o.value === value)?.label : placeholder ?? "Select"}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content align="start" className="min-w-[220px] p-1 glass-panel rounded-md border">
        {options.map((opt) => (
          <SelectPrimitive.Item key={opt.value} onSelect={() => onChange?.(opt.value)} className="px-3 py-2 rounded-md hover:bg-[--muted] cursor-pointer">
            {opt.label}
          </SelectPrimitive.Item>
        ))}
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
}
