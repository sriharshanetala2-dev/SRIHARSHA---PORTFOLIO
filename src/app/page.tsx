"use client";

import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { AnimatePresence, motion } from "framer-motion";

const About = dynamic(() => import('@/components/sections/About').then(mod => mod.About), { ssr: false });
const Experience = dynamic(() => import('@/components/sections/Experience').then(mod => mod.Experience), { ssr: false });
const Education = dynamic(() => import('@/components/sections/Education').then(mod => mod.Education), { ssr: false });
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
    <AnimatePresence>
      <div className="min-h-screen bg-background relative overflow-x-hidden">
        {/* Animated Background Subsystem */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 neural-grid opacity-20" />
          <div className="absolute inset-0 logic-scan-line" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
        </div>

        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Education />
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