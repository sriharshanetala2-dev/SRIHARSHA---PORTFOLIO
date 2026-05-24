"use client";

import { cn } from "@/lib/utils";
import { Activity } from "lucide-react";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="p-2 rounded-lg bg-primary text-primary-foreground shadow-lg flex items-center justify-center">
        <Activity className="w-5 h-5" />
      </div>
      <div className="flex flex-col -space-y-1">
        <span className="text-sm font-headline font-black tracking-tighter uppercase leading-none">SRI</span>
        <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase">CORE</span>
      </div>
    </div>
  );
}
