'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

// Streaming Component Registry
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
    <div className="min-h-screen bg-background relative selection:bg-primary/20">
      {/* High-Fidelity Industrial OS Backdrop */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Professional Moving Workspace (Parallax Drift) */}
        {bgImage && (
          <div className="absolute inset-0 grayscale contrast-[1.1] brightness-[0.4] dark:brightness-[0.2] opacity-[0.25] transition-all duration-1000 parallax-container">
            <Image 
              src={bgImage.imageUrl} 
              alt="Developer AI Environment" 
              fill 
              className="object-cover blur-[2px]"
              priority
              data-ai-hint={bgImage.imageHint}
            />
          </div>
        )}

        {/* Layer 2: Neural Logic Matrix (Animated) */}
        <div className="absolute inset-0 neural-grid" />
        
        {/* Layer 3: Dynamic Lens Flare System (Floating) */}
        <div className="lens-flare top-[-25%] left-[-20%] opacity-40 scale-150 blur-[120px]" />
        <div className="lens-flare bottom-[-30%] right-[-15%] opacity-30 scale-125 blur-[100px] [animation-delay:-10s]" />
        <div className="lens-flare top-[30%] left-[55%] opacity-15 scale-75 blur-[80px] [animation-delay:-20s]" />
        
        {/* Layer 4: Industrial Logic Scan (Active) */}
        <div className="logic-scan-subsystem" />
        
        {/* Layer 5: Focus Calibration Mask */}
        <div className="atmospheric-mask" />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        {mounted && (
          <>
            <About />
            <ProfessionalTimeline />
            <Projects />
            <AITool />
            <StudentDashboard />
            <Skills />
            <Contact />
          </>
        )}
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}