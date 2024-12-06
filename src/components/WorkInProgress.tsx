"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WorkInProgress() {
  const handleClose = () => {
    window.close();
  };

  return (
    <main className="fixed inset-0 flex min-h-screen w-full items-center justify-center bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold">🚧 Work in Progress 🚧</h1>
        <p className="mb-8 text-lg text-neutral-600 dark:text-neutral-400">
          This project is currently under development. Check back soon for
          updates!
        </p>
        <Button onClick={handleClose} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Close Tab
        </Button>
      </div>
    </main>
  );
}
