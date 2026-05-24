'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { motion, AnimatePresence } from "framer-motion";

// High-Performance Streaming Components
const About = dynamic(() => import('@/components/sections/About').then(mod => mod.About), { ssr: false });
const ProfessionalTimeline = dynamic(() => import('@/components/sections/ProfessionalTimeline').then(mod => mod.ProfessionalTimeline), { ssr: false });
const Projects = dynamic(() => import('@/components/sections/Projects').then(mod => mod.Projects), { ssr: false });
const AITool = dynamic(() => import('@/components/sections/AITool').then(mod => mod.AITool), { ssr: false });
const StudentDashboard = dynamic(() => import('@/components/sections/StudentDashboard').then(mod => mod.StudentDashboard), { ssr: false });
const Skills = dynamic(() => import('@/components/sections/Skills').then(mod => mod.Skills), { ssr: false });
const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => mod.Contact), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 transition-colors duration-700">
      {/* 5-Layer Industrial OS Backdrop (Hardware Accelerated) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
        {/* Layer 1: Base Depth Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.03),transparent_70%)]" />

        {/* Layer 2: Neural Logic Matrix (Animated Pulse) */}
        <div className="absolute inset-0 neural-grid" />
        
        {/* Layer 3: Dynamic Flash Glares (Moving streaks) */}
        <div className="glare-streak top-[15%] left-[-10%] opacity-40" style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <div className="glare-streak top-[45%] left-[-10%] opacity-60" style={{ animationDelay: '2.5s', animationDuration: '3s' }} />
        <div className="glare-streak top-[75%] left-[-10%] opacity-30" style={{ animationDelay: '1.2s', animationDuration: '5s' }} />
        <div className="glare-streak top-[30%] left-[-10%] opacity-20 scale-x-150" style={{ animationDelay: '4s', animationDuration: '6s' }} />
        
        {/* Layer 4: Industrial Logic Scan (Active Sweep) */}
        <div className="logic-scan-subsystem" />
        
        {/* Layer 5: Optic Flare System */}
        <div className="lens-flare top-[-20%] left-[-15%] opacity-40 scale-150 blur-[120px]" />
        <div className="lens-flare bottom-[-25%] right-[-10%] opacity-35 scale-125 blur-[100px] [animation-delay:-8s]" />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <AnimatePresence>
          {mounted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <About />
              <ProfessionalTimeline />
              <Projects />
              <AITool />
              <StudentDashboard />
              <Skills />
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}