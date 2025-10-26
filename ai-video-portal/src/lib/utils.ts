import { type ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function maskApiKey(key?: string, visibleEnd: number = 4) {
  if (!key) return "••••••••";
  const end = key.slice(-visibleEnd);
  return `${"•".repeat(Math.max(0, key.length - visibleEnd))}${end}`;
}
