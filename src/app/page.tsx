
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { AITool } from "@/components/sections/AITool";
import { Resume } from "@/components/sections/Resume";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-accent-foreground">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <AITool />
        <Resume />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
