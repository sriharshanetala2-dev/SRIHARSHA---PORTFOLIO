import { Github, Linkedin, Mail } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const linkedInUrl = "https://www.linkedin.com/in/sriharsha-netala-dev/";
  const email = "sriharshanetala2@gmail.com";
  // Direct Gmail compose link
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <footer className="py-20 sm:py-32 px-4 sm:px-8 border-t border-border bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-16">
          <div className="flex flex-col items-center md:items-start gap-8">
            <Logo className="scale-[1.5] origin-center md:origin-left" />
            <p className="text-muted-foreground text-center md:text-left max-w-md text-sm font-bold leading-relaxed opacity-60 uppercase tracking-widest px-4 md:px-0">
              Architecting high-performance digital ecosystems with a focus on Full Stack integrity and UI precision.
            </p>
          </div>

          <div className="flex gap-5 sm:gap-8">
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/sriharshanetala2-dev" },
              { icon: Linkedin, label: "LinkedIn", href: linkedInUrl },
              { icon: Mail, label: "Email", href: gmailComposeUrl }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 sm:p-8 rounded-[2rem] bg-secondary/50 border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 shadow-2xl group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 group-hover:scale-125 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-16 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-10">
          <p className="text-[10px] sm:text-[11px] text-muted-foreground font-black uppercase tracking-[0.5em] opacity-40 text-center">
            &copy; SRI HARSHA // ALL RIGHTS RESERVED.
          </p>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {["About", "Portfolio", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] sm:text-[11px] font-black text-muted-foreground hover:text-primary uppercase tracking-[0.6em] transition-all"
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