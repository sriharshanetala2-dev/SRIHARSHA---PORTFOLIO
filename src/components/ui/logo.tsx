
"use client";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center font-code font-bold text-xl sm:text-2xl text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]">
        <span className="text-accent">&lt;</span>
        <span className="mx-0.5">/</span>
        <span className="text-accent">&gt;</span>
      </div>
    </div>
  );
}
