
"use client";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex items-center text-primary font-code font-bold text-xl">
        <span className="text-accent">&lt;</span>
        <span className="mx-0.5">/</span>
        <span className="text-accent">&gt;</span>
      </div>
    </div>
  );
}
