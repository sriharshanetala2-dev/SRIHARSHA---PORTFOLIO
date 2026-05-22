"use client";

import { cn } from "@/lib/utils";

/**
 * @fileOverview A professional Developer Logo component.
 * Features a terminal-inspired design with a prompt and cursor.
 */

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full drop-shadow-[0_0_12px_rgba(var(--primary),0.3)]", className)}
    >
      {/* Terminal Window Container */}
      <rect
        x="10"
        y="20"
        width="80"
        height="60"
        rx="12"
        className="fill-card stroke-primary"
        strokeWidth="4"
      />
      
      {/* Terminal Header dots */}
      <circle cx="22" cy="32" r="3" className="fill-destructive/50" />
      <circle cx="32" cy="32" r="3" className="fill-yellow-500/50" />
      <circle cx="42" cy="32" r="3" className="fill-green-500/50" />

      {/* Developer Prompt ">" */}
      <path
        d="M30 45L45 55L30 65"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      />
      
      {/* Blinking Cursor "_" */}
      <path
        d="M52 65H70"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        className="text-accent animate-pulse"
      />
    </svg>
  );
}
