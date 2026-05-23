"use client";

import dynamic from 'next/dynamic';
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { AnimatePresence } from "framer-motion";

// High-performance dynamic imports with loading states for optimized streaming
const About = dynamic(() => import('@/components/sections/About').then(mod => mod.About), { 
  ssr: false,
  loading: () => <div className="h-96 w-full animate-pulse bg-secondary/10" />
});
const ProfessionalTimeline = dynamic(() => import('@/components/sections/ProfessionalTimeline').then(mod => mod.ProfessionalTimeline), { 
  ssr: false,
  loading: () => <div className="h-screen w-full animate-pulse bg-secondary/5" />
});
const Projects = dynamic(() => import('@/components/sections/Projects').then(mod => mod.Projects), { 
  ssr: false 
});
const Skills = dynamic(() => import('@/components/sections/Skills').then(mod => mod.Skills), { 
  ssr: false 
});
const AITool = dynamic(() => import('@/components/sections/AITool').then(mod => mod.AITool), { 
  ssr: false 
});
const StudentDashboard = dynamic(() => import('@/components/sections/StudentDashboard').then(mod => mod.StudentDashboard), { 
  ssr: false 
});
const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => mod.Contact), { 
  ssr: false 
});
const Toaster = dynamic(() => import('@/components/ui/toaster').then(mod => mod.Toaster), { 
  ssr: false 
});

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen bg-background relative overflow-x-hidden">
        {/* Adaptive Industrial Background Subsystem - Performance Optimized */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 neural-grid opacity-[0.05] dark:opacity-[0.2]" />
          <div className="absolute inset-0 data-packet-layer opacity-[0.1] dark:opacity-[0.3]" />
          
          {/* Volumetric Ambient Glows - Simplified for GPU performance */}
          <div 
            className="ambient-glow-node top-[-10%] left-[-5%] w-[800px] h-[800px]" 
            style={{ animationDuration: '12s' }} 
          />
          <div 
            className="ambient-glow-node bottom-[-20%] right-[-10%] w-[1000px] h-[1000px]" 
            style={{ animationDelay: '-4s', animationDuration: '15s' }} 
          />

          <div className="logic-scan-subsystem opacity-[0.05] dark:opacity-[0.15]" />
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
