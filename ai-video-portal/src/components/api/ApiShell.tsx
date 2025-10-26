"use client";

import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Upload } from "@/components/ui/upload";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

type OnGenerate = (payload: Record<string, unknown>) => Promise<unknown> | unknown | void;

export function ApiShell({ title, children, onGenerate }: { title: string; children?: ReactNode; onGenerate?: OnGenerate }) {
  const [resolution, setResolution] = useState("1080p");
  const [style, setStyle] = useState("cinematic");
  const [aiVoice, setAiVoice] = useState(true);
  const [bgMusic, setBgMusic] = useState(true);
  const [autoSubtitles, setAutoSubtitles] = useState(true);
  const [subtitlesLang, setSubtitlesLang] = useState("en");

  const [result, setResult] = useState<any | null>(null);

  const mutation = useMutation({
    mutationFn: async () => {
      const payload = {
        resolution,
        style,
        audio: { aiVoice, bgMusic },
        subtitles: { auto: autoSubtitles, lang: subtitlesLang },
      };
      const res = await onGenerate?.(payload);
      return res ?? null;
    },
    onSuccess: (data) => {
      setResult(data ?? null);
      toast.success("Generation started");
    },
    onError: () => toast.error("Failed to start generation"),
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold heading-gradient">{title}</h1>
        <Button onClick={() => mutation.mutate()} disabled={mutation.isPending}>
          {mutation.isPending ? "Generating..." : "Generate Video"}
        </Button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Inputs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {children}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Select
                options={[
                  { label: "720p", value: "720p" },
                  { label: "1080p", value: "1080p" },
                  { label: "4K", value: "4k" },
                ]}
                placeholder="Resolution"
                value={resolution}
                onChange={setResolution}
              />
              <Select
                options={[
                  { label: "Cinematic", value: "cinematic" },
                  { label: "Neon", value: "neon" },
                  { label: "Documentary", value: "doc" },
                ]}
                placeholder="Style"
                value={style}
                onChange={setStyle}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={aiVoice} onChange={(e) => setAiVoice(e.target.checked)} className="accent-[--accent]" />
                AI Voice
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={bgMusic} onChange={(e) => setBgMusic(e.target.checked)} className="accent-[--accent]" />
                BG Music
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={autoSubtitles} onChange={(e) => setAutoSubtitles(e.target.checked)} className="accent-[--accent]" />
                Auto Subtitles
              </label>
              <input
                value={subtitlesLang}
                onChange={(e) => setSubtitlesLang(e.target.value)}
                placeholder="Subtitle language (e.g., en, es)"
                className="h-10 rounded-md border border-[--border] bg-black/30 px-3 text-sm glass-panel"
              />
            </div>

            <div>
              <div className="text-xs text-zinc-400 mb-1">Media Upload</div>
              <Upload accept="video/*,audio/*,image/*" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video rounded-md border glass-panel grid place-items-center">
              <span className="text-xs text-zinc-500">Preview appears after generation</span>
            </div>
            {result && (
              <div className="mt-3 space-y-1 text-xs text-zinc-400">
                {result?.previewUrl && (
                  <a href={String(result.previewUrl)} className="text-[--accent]" target="_blank" rel="noreferrer">
                    View Preview
                  </a>
                )}
                {result?.downloadUrl && (
                  <a href={String(result.downloadUrl)} className="text-[--accent]" target="_blank" rel="noreferrer">
                    Download
                  </a>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
