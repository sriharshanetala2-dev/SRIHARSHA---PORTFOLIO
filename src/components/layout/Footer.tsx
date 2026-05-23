import { Github, Linkedin, Mail } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const linkedInUrl = "https://www.linkedin.com/in/sriharsha-netala-dev/";
  const email = "sriharshanetala2@gmail.com";
  // Direct Gmail compose link
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <footer className="py-16 sm:py-32 px-4 sm:px-8 border-t border-border bg-transparent relative overflow-hidden">
      {/* Professional Horizon Flux Subsystem */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      {/* Static Logic Nodes */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-50" />
      
      {/* Deep Atmospheric Glows */}
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[120%] h-96 bg-primary/10 rounded-[100%] blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      
      {/* Local Logic Scan Sweep */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[200%] h-full bg-[linear-gradient(45deg,transparent_25%,rgba(var(--primary),0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_15s_infinite_linear] opacity-30" />
      </div>
      
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-16">
          <div className="flex flex-col items-center md:items-start gap-6 sm:gap-8">
            <Logo className="scale-[1.2] sm:scale-[1.5] origin-center md:origin-left" />
            <p className="text-muted-foreground text-center md:text-left max-w-md text-xs sm:text-sm font-bold leading-relaxed opacity-60 uppercase tracking-widest px-4 md:px-0">
              Architecting high-performance digital ecosystems with a focus on Full Stack integrity and UI precision.
            </p>
          </div>

          <div className="flex gap-4 sm:gap-8">
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
                className="p-4 sm:p-8 rounded-2xl sm:rounded-[2rem] bg-secondary/50 border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 shadow-2xl group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-125 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-12 sm:pt-16 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[9px] sm:text-[11px] text-muted-foreground font-black uppercase tracking-[0.4em] opacity-40 text-center">
            &copy; SRI HARSHA // ALL RIGHTS RESERVED.
          </p>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
            {["About", "Portfolio", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[9px] sm:text-[11px] font-black text-muted-foreground hover:text-primary uppercase tracking-[0.4em] sm:tracking-[0.6em] transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
