import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="glow-mesh" />
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto text-center space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-bold tracking-widest text-primary uppercase">
          <Sparkles className="w-3 h-3" />
          Software Engineering • Full Stack AI
        </div>

        <h1 className="text-6xl md:text-9xl font-headline font-bold leading-[1] tracking-tight">
          Architecting <br />
          <span className="text-gradient">Digital Futures</span>
        </h1>

        <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
          Netala Sriharsha — Junior Software Developer specializing in building high-performance applications with clean code and modern AI integration.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <Button 
            asChild
            size="lg" 
            className="h-16 px-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg group transition-all"
          >
            <a href="#portfolio">
              Explore Showcase
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="ghost" 
            className="h-16 px-10 rounded-full glass-card hover:bg-white/5 font-bold text-lg"
          >
            <a href="#contact">Start a Conversation</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float opacity-40">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
}