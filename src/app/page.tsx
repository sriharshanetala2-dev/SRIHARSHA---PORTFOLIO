"use client";

import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { AnimatePresence } from "framer-motion";

// High-performance dynamic imports to prevent hydration mismatches
const About = dynamic(() => import('@/components/sections/About').then(mod => mod.About), { ssr: false });
const ProfessionalTimeline = dynamic(() => import('@/components/sections/ProfessionalTimeline').then(mod => mod.ProfessionalTimeline), { ssr: false });
const Projects = dynamic(() => import('@/components/sections/Projects').then(mod => mod.Projects), { ssr: false });
const Skills = dynamic(() => import('@/components/sections/Skills').then(mod => mod.Skills), { ssr: false });
const AITool = dynamic(() => import('@/components/sections/AITool').then(mod => mod.AITool), { ssr: false });
const StudentDashboard = dynamic(() => import('@/components/sections/StudentDashboard').then(mod => mod.StudentDashboard), { ssr: false });
const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => mod.Contact), { ssr: false });
const Toaster = dynamic(() => import('@/components/ui/toaster').then(mod => mod.Toaster), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen bg-background relative overflow-x-hidden">
        {/* Elite Kinetic Interface Subsystem v3.5 */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Base Grid Layers */}
          <div className="absolute inset-0 neural-grid opacity-[0.25]" />
          <div className="absolute inset-0 data-flow-grid opacity-[0.15]" />
          
          {/* Logic Matrix Code Stream */}
          <div className="matrix-overlay">
            <div className="matrix-content">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="flex gap-8 opacity-60">
                  {Array.from({ length: 12 }).map((_, j) => (
                    <span key={j} className="uppercase font-mono tracking-widest">
                      {Math.random().toString(36).substring(2, 15).toUpperCase()} // LOGIC_NODE_{i}_{j} // [SYSTEM_KERNEL_SYNCED]
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Professional Running Glares */}
          <div 
            className="running-glare top-[-15%] left-[-15%] w-[900px] h-[900px] bg-primary/25" 
            style={{ animationDelay: '0s', animationDuration: '12s' }} 
          />
          <div 
            className="running-glare bottom-[-25%] right-[-10%] w-[1100px] h-[1100px] bg-accent/20" 
            style={{ animationDelay: '-4s', animationDuration: '20s' }} 
          />
          <div 
            className="running-glare top-[25%] right-[15%] w-[700px] h-[700px] bg-blue-500/15" 
            style={{ animationDelay: '-10s', animationDuration: '25s' }} 
          />

          {/* Logic Scan Subsystem */}
          <div className="absolute inset-0 logic-scan-line" />
          
          {/* Central Pulse Node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[1300px] bg-primary/10 rounded-full blur-[200px] animate-pulse" />
        </div>

        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <ProfessionalTimeline />
          <Projects />
          <AITool />
          <StudentDashboard />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </AnimatePresence>
  );
}