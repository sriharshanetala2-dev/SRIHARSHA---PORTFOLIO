
import { Github, Linkedin, Mail } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const linkedInUrl = "https://www.linkedin.com/in/sriharshanetala/";
  const email = "sriharshanetala2@gmail.com";

  return (
    <footer className="py-16 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Logo />
            <p className="text-muted-foreground text-center md:text-left max-w-sm text-sm font-medium">
              Building intuitive, high-performance digital experiences with modern web technologies.
            </p>
          </div>

          <div className="flex gap-4">
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
                className="p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} NETALA SRIHARSHA.
          </p>

          <div className="flex gap-6">
            <a href="#about" className="text-xs font-bold text-muted-foreground hover:text-primary uppercase tracking-widest">About</a>
            <a href="#portfolio" className="text-xs font-bold text-muted-foreground hover:text-primary uppercase tracking-widest">Showcase</a>
            <a href="#contact" className="text-xs font-bold text-muted-foreground hover:text-primary uppercase tracking-widest">Hire</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
