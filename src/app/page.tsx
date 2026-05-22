"use client";

import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { motion, AnimatePresence } from "framer-motion";

const About = dynamic(() => import('@/components/sections/About').then(mod => mod.About));
const Projects = dynamic(() => import('@/components/sections/Projects').then(mod => mod.Projects));
const StudentDashboard = dynamic(() => import('@/components/sections/StudentDashboard').then(mod => mod.StudentDashboard));
const Education = dynamic(() => import('@/components/sections/Education').then(mod => mod.Education));
const Experience = dynamic(() => import('@/components/sections/Experience').then(mod => mod.Experience));
const Skills = dynamic(() => import('@/components/sections/Skills').then(mod => mod.Skills));
const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => mod.Contact));
const Footer = dynamic(() => import('@/components/layout/Footer').then(mod => mod.Footer));
const Toaster = dynamic(() => import('@/components/ui/toaster').then(mod => mod.Toaster));


export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen relative overflow-x-hidden bg-background">
        <div className="glow-cursor" />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <StudentDashboard />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </AnimatePresence>
  );
}