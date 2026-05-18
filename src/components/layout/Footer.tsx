
import { Rocket } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Rocket className="w-6 h-6 text-accent" />
          <span className="text-lg font-headline font-bold tracking-tight uppercase">
            NETALA SRI <span className="text-accent">HARSHA</span>
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} NETALA SRI HARSHA Portfolio. Built with Next.js & AI.
        </p>

        <div className="flex gap-8">
          <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
