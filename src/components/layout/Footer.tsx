import { Github, Linkedin, Mail } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const linkedInUrl = "https://www.linkedin.com/in/sriharsha-netala-dev/";
  const email = "sriharshanetala2@gmail.com";

  return (
    <footer className="py-24 px-8 border-t border-border bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start gap-8">
            <Logo className="scale-[1.75] origin-left" />
            <p className="text-muted-foreground text-center md:text-left max-w-md text-base sm:text-lg font-medium leading-relaxed opacity-70">
              Architecting high-performance digital solutions with a focus on Full Stack integrity and UI precision.
            </p>
          </div>

          <div className="flex gap-6">
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/sriharshanetala2-dev" },
              { icon: Linkedin, label: "LinkedIn", href: linkedInUrl },
              { icon: Mail, label: "Email", href: `mailto:${email}` }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-[2rem] bg-secondary/50 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 shadow-xl group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-16 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-10">
          <p className="text-[11px] text-muted-foreground font-black uppercase tracking-[0.5em] opacity-50">
            &copy; SRI HARSHA // ALL RIGHTS RESERVED.
          </p>

          <div className="flex gap-10">
            {["About", "Portfolio", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-black text-muted-foreground hover:text-primary uppercase tracking-[0.6em] transition-all hover:translate-y-[-2px]"
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