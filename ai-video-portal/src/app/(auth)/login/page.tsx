"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="relative min-h-[calc(100vh-2rem)] grid place-items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -left-40 -top-40 h-[60vmax] w-[60vmax] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(0,229,255,0.12), transparent 60%), radial-gradient(circle at 70% 70%, rgba(155,107,255,0.12), transparent 60%)",
            filter: "blur(30px)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute right-[-20%] top-1/2 h-[50vmax] w-[50vmax] -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(32,255,149,0.1), transparent 60%)",
            filter: "blur(40px)",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-2xl border glass-panel p-6"
      >
        <div className="mb-6">
          <h1 className="text-xl font-semibold heading-gradient">Welcome back</h1>
          <p className="text-sm text-zinc-400">Login to your AstraEdit dashboard</p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="text-xs text-zinc-400">Email</label>
            <Input type="email" placeholder="name@domain.com" />
          </div>
          <div>
            <label className="text-xs text-zinc-400">Password</label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[--accent]" /> Remember me
            </label>
            <a href="#" className="text-[--accent] hover:underline">Forgot password?</a>
          </div>
          <Button className="w-full">Sign in</Button>
          <Button variant="secondary" className="w-full">Continue with Google</Button>
        </form>
      </motion.div>
    </div>
  );
}
