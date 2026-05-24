import { Github, Linkedin, Mail, Sparkles, Activity } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const linkedInUrl = "https://www.linkedin.com/in/sriharsha-netala-dev/";
  const email = "sriharshanetala2@gmail.com";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <footer className="py-20 sm:py-32 px-4 sm:px-8 border-t border-border bg-transparent relative overflow-hidden">
      {/* Neural Optic Subsystem */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="lens-flare top-[-50%] left-[-20%] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      </div>
      
      {/* Refined Horizon Scan */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30 shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
      
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-20">
          <div className="flex flex-col items-center lg:items-start gap-8">
            <div className="flex items-center gap-4">
              <Logo className="scale-[1.5] origin-center lg:origin-left" />
              <Activity className="w-6 h-6 text-primary/20 animate-pulse hidden sm:block" />
            </div>
            <p className="text-muted-foreground text-center lg:text-left max-w-lg text-[11px] sm:text-xs font-black leading-relaxed opacity-70 uppercase tracking-[0.2em] px-4 lg:px-0">
              Architecting high-performance digital ecosystems with a focus on Full Stack integrity and UI precision.
            </p>
          </div>

          <div className="flex gap-5 sm:gap-8">
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/sriharshanetala2-dev" },
              { icon: Linkedin, label: "Linkedin", href: linkedInUrl },
              { icon: Mail, label: "Email", href: gmailComposeUrl }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 sm:p-10 rounded-2xl sm:rounded-[3rem] bg-secondary/40 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-700 shadow-2xl group relative overflow-hidden"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-6 transition-transform relative z-10" />
                <Sparkles className="absolute -top-2 -right-2 w-10 h-10 opacity-0 group-hover:opacity-20 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-16 sm:pt-24 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-10">
          <p className="text-[10px] sm:text-[11px] text-muted-foreground font-black uppercase tracking-[0.5em] opacity-50 text-center">
            &copy; SRI HARSHA // SYSTEM_LOGIC_V3 // ALL RIGHTS RESERVED.
          </p>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            {["About", "Portfolio", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] sm:text-[11px] font-black text-muted-foreground hover:text-primary uppercase tracking-[0.5em] sm:tracking-[0.8em] transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}