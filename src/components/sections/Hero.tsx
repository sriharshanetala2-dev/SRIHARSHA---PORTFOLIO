import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles, Code2, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="glow-mesh" />
      
      {/* Structural Grid Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto text-center space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-card text-[10px] font-black tracking-[0.3em] text-primary uppercase border-primary/20">
          <Code2 className="w-3.5 h-3.5" />
          Software Engineering • Full Stack AI
          <Globe className="w-3.5 h-3.5" />
        </div>

        <h1 className="text-7xl md:text-[10rem] font-headline font-black leading-[0.9] tracking-tighter">
          ARCHITECTING <br />
          <span className="text-gradient">DIGITAL FUTURES</span>
        </h1>

        <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium opacity-80">
          Netala Sriharsha — Crafting high-performance enterprise systems with architectural precision and modern AI synthesis.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
          <Button 
            asChild
            size="lg" 
            className="h-20 px-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-black text-xl uppercase tracking-widest group transition-all shadow-2xl shadow-primary/30 hover:scale-105"
          >
            <a href="#portfolio">
              Explore Showcase
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </a>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="ghost" 
            className="h-20 px-12 rounded-full glass-card hover:bg-white/5 font-black text-xl uppercase tracking-widest border-white/10"
          >
            <a href="#contact">Contact Sri</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float opacity-30">
        <ChevronDown className="w-10 h-10 text-primary" />
      </div>
    </section>
  );
}
