"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { StudentDashboard } from "@/components/sections/StudentDashboard";
import { AITool } from "@/components/sections/AITool";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen selection:bg-accent selection:text-accent-foreground relative">
      <div className="glow-cursor" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <StudentDashboard />
        <AITool />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
