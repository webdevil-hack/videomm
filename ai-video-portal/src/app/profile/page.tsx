"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { maskApiKey } from "@/lib/utils";

export default function ProfilePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold heading-gradient">Profile</h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Personal Info</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Company" />
            <Button className="sm:col-span-2">Save</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Subscription</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm">Plan: Pro</div>
            <div className="text-sm">Credits: 2,450</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>API Key</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm">{maskApiKey("sk_live_1234567890abcdef")}</div>
          </CardContent>
        </Card>
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Usage Logs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center justify-between border rounded-md p-2 glass-panel">
                <span>CreatoMate • Project #{320 + i}</span>
                <span className="text-zinc-400">Success</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
