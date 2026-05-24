
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
      {/* High-Fidelity Neural OS Backdrop - Triple Layer Flux Architecture */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Atmospheric Base Image */}
        {bgImage && (
          <div className="absolute inset-0 grayscale opacity-10 blur-[2px]">
            <Image 
              src={bgImage.imageUrl} 
              alt="System Logic Backdrop" 
              fill 
              className="object-cover"
              priority
              data-ai-hint={bgImage.imageHint}
            />
          </div>
        )}

        {/* Layer 2: Neural Node Matrix */}
        <div className="absolute inset-0 neural-grid" />
        
        {/* Layer 3: High-Frequency Logic Scan */}
        <div className="logic-scan-subsystem" />
        
        {/* Environmental Depth Mask & Vignette */}
        <div className="atmospheric-mask" />
        
        {/* Lens Optics */}
        <div className="lens-flare top-[-10%] left-[-10%]" />
        <div className="lens-flare bottom-[-10%] right-[-10%] opacity-40" />
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
