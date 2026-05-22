"use client";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center font-mono font-bold text-2xl text-primary">
        <span className="text-primary/60">&lt;</span>
        <span className="mx-0.5">/</span>
        <span className="text-primary/60">&gt;</span>
      </div>
    </div>
  );
}