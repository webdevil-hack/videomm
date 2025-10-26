"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold heading-gradient">Contact</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl">
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Textarea placeholder="How can we help?" className="md:col-span-2" />
        <Button className="md:col-span-2">Send</Button>
      </form>
    </div>
  );
}
