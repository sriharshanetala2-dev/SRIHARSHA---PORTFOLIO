"use client";

import { cn } from "@/lib/utils";

/**
 * @fileOverview High-Precision Engineering Brand Mark.
 * A sophisticated monogram combining architectural symmetry with dynamic motion.
 */

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full filter drop-shadow-[0_0_12px_rgba(var(--primary),0.5)]", className)}
    >
      {/* Precision Hexagonal Frame */}
      <path
        d="M50 5L89.5 27.5V72.5L50 95L10.5 72.5V27.5L50 5Z"
        className="stroke-primary/30"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      
      {/* Architectural 'S' Structure - Lower Facet (Stability) */}
      <path
        d="M30 70C30 75 35 80 45 80H55C65 80 70 75 70 70V60L30 50"
        className="stroke-primary"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Architectural 'S' Structure - Upper Facet (Innovation) */}
      <path
        d="M70 30C70 25 65 20 55 20H45C35 20 30 25 30 30V40L70 50"
        className="stroke-accent"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center Pivot Point (Integration) */}
      <circle cx="50" cy="50" r="5" className="fill-foreground animate-pulse" />
      
      {/* Dynamic Glow Accents */}
      <path
        d="M50 20V5"
        className="stroke-accent/60"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M50 95V80"
        className="stroke-primary/60"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
