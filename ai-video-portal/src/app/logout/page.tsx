"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import * as Dialog from "@radix-ui/react-dialog";

export default function LogoutPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-6">
      <div className="rounded-2xl border glass-panel p-6">
        <h1 className="text-xl font-semibold heading-gradient">Logout</h1>
        <p className="text-sm text-zinc-400 mt-1">Futuristic warp effect on exit.</p>
        <Button className="mt-4" onClick={() => setOpen(true)}>Logout</Button>
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80" />
          <Dialog.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border glass-panel p-6">
            <Dialog.Title className="text-lg font-semibold">Are you sure?</Dialog.Title>
            <Dialog.Description className="text-sm text-zinc-400 mt-1">
              You will be logged out of AstraEdit.
            </Dialog.Description>
            <div className="mt-6 flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button className="btn-primary" onClick={() => window.location.assign("/")}>Confirm</Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
