"use client";

import { cn } from "@/lib/utils";

/**
 * @fileOverview A custom SVG Logo component combining a stylized 'S' with developer syntax brackets.
 * Used for primary site branding.
 */

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full drop-shadow-[0_0_8px_rgba(var(--primary),0.2)]", className)}
    >
      {/* Stylized 'S' Signature */}
      <path
        d="M68 32C68 24 62 22 55 22H45C38 22 32 28 32 36C32 44 38 50 45 50H55C62 50 68 56 68 64C68 72 62 82 55 82H45C38 82 32 74 32 66"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary transition-all duration-300"
      />
      
      {/* Developer Syntax Brackets */}
      <path
        d="M18 44L10 50L18 56"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent"
      />
      <path
        d="M82 44L90 50L82 56"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent"
      />
    </svg>
  );
}
