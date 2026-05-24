'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
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
  const bgImage = PlaceHolderImages.find(img => img.id === 'system-backdrop');

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 transition-colors duration-700">
      {/* 5-Layer Industrial OS Backdrop (Hardware Accelerated) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Developer AI Workspace (Moving Parallax) */}
        {bgImage && (
          <div className="absolute inset-[-5%] grayscale contrast-[1.15] brightness-[0.35] dark:brightness-[0.18] opacity-30 transition-all duration-1000 parallax-container">
            <Image 
              src={bgImage.imageUrl} 
              alt="Developer AI Environment" 
              fill 
              className="object-cover blur-[1.5px] scale-110"
              priority
              data-ai-hint={bgImage.imageHint}
            />
          </div>
        )}

        {/* Layer 2: Neural Logic Matrix (Animated Pulse) */}
        <div className="absolute inset-0 neural-grid" />
        
        {/* Layer 3: Dynamic Lens Flare System (Floating Optics) */}
        <div className="lens-flare top-[-20%] left-[-15%] opacity-40 scale-150 blur-[120px]" />
        <div className="lens-flare bottom-[-25%] right-[-10%] opacity-35 scale-125 blur-[100px] [animation-delay:-8s]" />
        <div className="lens-flare top-[40%] left-[50%] opacity-20 scale-75 blur-[90px] [animation-delay:-15s]" />
        
        {/* Layer 4: Industrial Logic Scan (Active Sweep) */}
        <div className="logic-scan-subsystem" />
        
        {/* Layer 5: Focus Calibration Mask */}
        <div className="atmospheric-mask" />
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