import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold heading-gradient">Dashboard Overview</h1>
        <div className="flex gap-2">
          <Button className="btn-primary">
            <Play className="h-4 w-4" /> Generate New Video
          </Button>
          <Button variant="outline">View Projects</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Generated Videos</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">1,284</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Jobs</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">7</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Credits Remaining</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">2,450</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>APIs Used</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">8</CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>API Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              {[
                "ShortStack",
                "CreatoMate",
                "Pandly",
                "Tavas",
                "PromptClip",
                "LuckyEdit",
                "LTX",
                "Vant",
              ].map((api) => (
                <div
                  key={api}
                  className="glass-panel rounded-lg border p-3 flex items-center justify-between"
                >
                  <span>{api}</span>
                  <span className="text-[--accent]">{Math.floor(Math.random() * 100)}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Render Queue</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between text-sm border rounded-md p-2 glass-panel"
              >
                <span className="truncate">Project #{1280 + i}</span>
                <span className="text-yellow-300">Queued</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="mb-3 text-sm font-semibold text-zinc-300">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-lg border glass-panel overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-[--accent]/20 to-[--accent-2]/20" />
              <div className="p-3 text-sm flex items-center justify-between">
                <span className="truncate">AI Reel #{530 + i}</span>
                <span className="text-[--accent]">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
