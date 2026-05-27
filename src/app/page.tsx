'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { motion, AnimatePresence } from "framer-motion";

const About = dynamic(() => import('@/components/sections/About').then(mod => mod.About), { ssr: false });
const SystemRegistry = dynamic(() => import('@/components/sections/ProfessionalTimeline').then(mod => mod.SystemRegistry), { ssr: false });
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
    <div className="min-h-screen bg-background relative selection:bg-primary/10">
      {/* Enhanced Persistent Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 neural-grid opacity-[0.05]" />
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[120px] animate-float" />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <AnimatePresence mode="wait">
          {mounted && (
            <motion.div
              key="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <About />
              <SystemRegistry />
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