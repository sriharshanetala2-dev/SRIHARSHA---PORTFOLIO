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
        {/* Adaptive Industrial Background Subsystem */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Neural Logic Layers with Dynamic Theme Opacity */}
          <div className="absolute inset-0 neural-grid opacity-[0.1] dark:opacity-[0.3]" />
          <div className="absolute inset-0 data-packet-layer opacity-[0.2] dark:opacity-[0.4]" />
          
          {/* Volumetric Ambient Glows */}
          <div 
            className="ambient-glow-node top-[-15%] left-[-10%] w-[1200px] h-[1200px]" 
            style={{ animationDelay: '0s', animationDuration: '15s' }} 
          />
          <div 
            className="ambient-glow-node bottom-[-25%] right-[-15%] w-[1500px] h-[1500px]" 
            style={{ animationDelay: '-5s', animationDuration: '20s' }} 
          />
          <div 
            className="ambient-glow-node top-[30%] left-[15%] w-[800px] h-[800px] bg-primary/10" 
            style={{ animationDelay: '-10s', animationDuration: '18s' }} 
          />

          {/* Dynamic Logic Scan Registry */}
          <div className="logic-scan-subsystem opacity-[0.1] dark:opacity-[0.2]" />
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