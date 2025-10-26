"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn(
        "relative flex items-center gap-2 select-none",
        className
      )}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative h-8 w-8 rounded-lg bg-black/40 neon-ring grid place-items-center">
        <div className="absolute inset-0 rounded-lg border border-[--border]" />
        <motion.span
          className="h-3 w-3 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, var(--accent), var(--accent-2), var(--accent-3), var(--accent))",
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        />
      </div>
      <span className="text-lg font-semibold tracking-wide heading-gradient">AstraEdit</span>
    </motion.div>
  );
}
