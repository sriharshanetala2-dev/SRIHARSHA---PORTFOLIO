import { Code2, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <Code2 className="w-8 h-8 text-accent" />
              <span className="text-2xl font-headline font-bold tracking-tight uppercase">
                NETALA <span className="text-accent">SRIHARSHA</span>
              </span>
            </div>
            <p className="text-muted-foreground text-center md:text-left max-w-sm">
              Passionate Software Developer focused on creating beautiful, functional, and user-centered digital experiences.
            </p>
          </div>

          <div className="flex gap-6">
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/sriharshanetala2-dev" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sriharshanetala/" },
              { icon: Mail, label: "Email", href: "mailto:sriharshanetala2@gmail.com" }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-md"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground font-medium">
            &copy; NETALA SRIHARSHA. All rights reserved.
          </p>

          <div className="flex gap-10">
            <a href="#" className="text-sm font-semibold text-muted-foreground hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="text-sm font-semibold text-muted-foreground hover:text-accent transition-colors">Terms</a>
            <a href="#contact" className="text-sm font-semibold text-muted-foreground hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}