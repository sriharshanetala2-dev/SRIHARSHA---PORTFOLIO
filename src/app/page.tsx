
'use client';

import dynamic from 'next/dynamic';
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from 'react';

// Optimized dynamic hydration registry
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

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30">
      {/* Universal Neural Subsystem - GPU Optimized */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 neural-grid opacity-[0.05] dark:opacity-[0.2]" />
        <div className="logic-scan-subsystem opacity-[0.05] dark:opacity-[0.15]" />
        <div className="ambient-glow-node top-[-10%] left-[-10%] w-[100vw] h-[100vh] blur-[150px]" />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        {mounted && (
          <AnimatePresence mode="wait">
            <div className="space-y-0">
              <About />
              <ProfessionalTimeline />
              <Projects />
              <AITool />
              <StudentDashboard />
              <Skills />
              <Contact />
            </div>
          </AnimatePresence>
        )}
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}
