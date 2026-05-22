import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[140px] -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/40 border border-border text-[13px] font-bold text-accent uppercase tracking-[0.2em]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
          </span>
          NETALA SRIHARSHA • Emerging Software Developer
        </div>

        <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[1.1] tracking-tight">
          Building Future <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
            Digital Solutions
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
          Passionate about clean code, full-stack architecture, and solving complex problems with modern technology.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <Button 
            asChild
            size="lg" 
            className="h-14 px-10 bg-accent text-accent-foreground hover:bg-accent/90 rounded-2xl font-bold text-lg group shadow-xl transition-all hover:scale-105 active:scale-[0.98]"
          >
            <a href="#portfolio">
              View My Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="h-14 px-10 rounded-2xl border-border hover:bg-secondary font-bold text-lg shadow-md transition-all"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
