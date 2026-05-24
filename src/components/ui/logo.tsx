"use client";

import { cn } from "@/lib/utils";
import { Code2 } from "lucide-react";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="p-2 rounded-lg bg-primary text-primary-foreground shadow-lg flex items-center justify-center">
        <Code2 className="w-5 h-5" />
      </div>
      <div className="flex flex-col -space-y-1">
        <span className="text-sm font-headline font-black tracking-tight uppercase leading-none">SRI</span>
        <span className="text-[10px] font-mono font-bold text-primary tracking-[0.2em] uppercase">DEV</span>
      </div>
    </div>
  );
}