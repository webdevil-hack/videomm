"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NeonReel } from "@/components/hero/NeonReel";

export default function Landing() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border glass-panel p-8 md:p-12">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="absolute left-1/2 top-0 h-[60vmax] w-[60vmax] -translate-x-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(0,229,255,0.15), transparent 60%)", filter: "blur(40px)" }} />
        </div>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight heading-gradient">Futuristic AI Video Editing</h1>
          <p className="mt-4 text-zinc-400">Automate content, power with 8 APIs, render globally in cinematic quality.</p>
          <div className="mt-6 flex gap-3">
            <Button>Get Started</Button>
            <Button variant="secondary">Go to Dashboard</Button>
          </div>
        </div>
        <div className="absolute right-6 bottom-6">
          <NeonReel />
        </div>
      </section>

      {/* Demo */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border glass-panel p-6">
          <h2 className="text-xl font-semibold heading-gradient">Demo Showcase</h2>
          <div className="mt-3 aspect-video rounded-md border glass-panel" />
        </div>
        <div className="rounded-2xl border glass-panel p-6">
          <h2 className="text-xl font-semibold heading-gradient">What We Do</h2>
          <p className="text-sm text-zinc-400 mt-2">
            Template-powered automation across ShortStack, CreatoMate, Pandly, Tavas, PromptClip, LuckyEdit, LTX, and Vant 2.1.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="rounded-2xl border glass-panel p-6">
        <h2 className="text-xl font-semibold heading-gradient">APIs & Services</h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-3">
          {["ShortStack","CreatoMate","Pandly","Tavas","PromptClip","LuckyEdit","LTX","Vant 2.1"].map((s) => (
            <div key={s} className="rounded-lg border glass-panel p-3 text-sm text-center card-hover">{s}</div>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {["Speed","Automation","Quality","Modes"].map((a) => (
          <div key={a} className="rounded-lg border glass-panel p-4 text-center">
            <div className="text-lg font-semibold heading-gradient">{a}</div>
          </div>
        ))}
      </section>

      {/* Why choose us */}
      <section className="rounded-2xl border glass-panel p-6">
        <h2 className="text-xl font-semibold heading-gradient">Why Choose Us</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-zinc-400">
          <div className="rounded-lg border glass-panel p-3">Serverless scalable processing</div>
          <div className="rounded-lg border glass-panel p-3">Global rendering pipeline</div>
          <div className="rounded-lg border glass-panel p-3">Smart templates + automated scenes</div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Generated Videos", value: "128,431" },
          { label: "Users", value: "42,900" },
          { label: "APIs", value: "8" },
          { label: "Templates", value: "160+" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border glass-panel p-4 text-center">
            <div className="text-2xl font-semibold">{s.value}</div>
            <div className="text-xs text-zinc-400">{s.label}</div>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="rounded-2xl border glass-panel p-6">
        <h2 className="text-xl font-semibold heading-gradient">FAQ</h2>
        <div className="mt-3 space-y-2">
          {[
            { q: "How fast are renders?", a: "Most complete under 2 minutes using our global pipeline." },
            { q: "Do you support 4K?", a: "Yes, for LTX and CreatoMate templates." },
            { q: "Is there a free tier?", a: "Yes, 100 credits on signup." },
          ].map((f) => (
            <details key={f.q} className="rounded-md border glass-panel p-3">
              <summary className="cursor-pointer">{f.q}</summary>
              <p className="text-sm text-zinc-400 mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="rounded-2xl border glass-panel p-6">
        <h2 className="text-xl font-semibold heading-gradient">Contact</h2>
        <p className="text-sm text-zinc-400 mt-2">Live chat coming soon. Email support@astraedit.io</p>
      </section>

      {/* Footer */}
      <footer className="pb-10 text-xs text-zinc-500">
        © {new Date().getFullYear()} AstraEdit — All rights reserved.
      </footer>
    </div>
  );
}
