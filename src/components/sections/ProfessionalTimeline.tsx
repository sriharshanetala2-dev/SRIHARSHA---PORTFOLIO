"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  BrainCircuit, 
  Layers, 
  GraduationCap, 
  BookOpen,
  CalendarDays,
  CircleDot,
  Mail,
  Phone,
  Send,
  Loader2,
  Activity,
  Terminal,
  ChevronRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const timelineItems = [
  {
    id: "01",
    type: "work",
    role: "Java Full Stack Developer",
    company: "NxtWave Academy",
    period: "2025 — 2026",
    description: "Architecting high-performance enterprise systems with Java 21, Spring Boot, and PostgreSQL. Mastering the orchestration of complex full-stack ecosystems.",
    icon: Code2
  },
  {
    id: "02",
    type: "work",
    role: "Generative AI Specialist",
    company: "AI Buildathons & Academy",
    period: "2025 — 2026",
    description: "Developing autonomous task agents and semantic intent layers using Google Genkit, Claude 3.5, and Gemini 2.0.",
    icon: BrainCircuit
  },
  {
    id: "03",
    type: "work",
    role: "Full Stack Software Developer",
    company: "Independent Projects",
    period: "2024 — 2025",
    description: "Building responsive digital platforms with React, Node.js, and Python focusing on atomic data mutations and real-time logic.",
    icon: Layers
  },
  {
    id: "04",
    type: "edu",
    role: "B.Sc in Computer Science",
    institution: "Glocal University",
    period: "Academic Registry",
    description: "Graduated with honors focusing on computational logic, data structures, and systems engineering principles.",
    icon: GraduationCap
  },
  {
    id: "05",
    type: "edu",
    role: "Intermediate Education",
    institution: "SRR & CVR Govt Jr College",
    period: "Higher Secondary Registry",
    description: "Advanced computational mathematics and logic foundation processing.",
    icon: BookOpen
  },
  {
    id: "06",
    type: "edu",
    role: "Secondary School Certificate",
    institution: "Christ the King High School",
    period: "Foundational Registry",
    description: "Initial logic processing foundation and primary academic registry.",
    icon: CircleDot
  }
];

export function SystemRegistry() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const userEmail = "sriharshanetala2@gmail.com";

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=Inquiry from Portfolio: ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      window.open(gmailUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      toast({ title: "Redirecting...", description: "Opening Gmail compose window for secure sync." });
    }, 1000);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 border-t border-border bg-background relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 neural-grid opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto space-y-32 relative z-10">
        {/* Header Block */}
        <div className="text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mx-auto"
          >
            SYSTEM_REGISTRY_V6.0
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-7xl font-headline font-black tracking-tighter uppercase leading-none shimmer-text"
          >
            LIFECYCLE <span className="text-gradient">ARCHIVE</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-muted-foreground font-bold uppercase tracking-widest opacity-80 max-w-2xl mx-auto"
          >
            A high-fidelity audit of professional milestones, academic foundation, and active collaboration channels.
          </motion.p>
        </div>

        {/* Unified Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-12 relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border/40 hidden md:block" />
            
            {timelineItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="relative flex flex-col md:flex-row gap-8 pl-0 md:pl-24 group"
              >
                <div className="absolute left-6 top-10 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block z-20 shadow-[0_0_15px_rgba(var(--primary),0.4)] group-hover:scale-150 transition-transform" />
                
                <div className="flex-1 space-y-8 bg-card/40 p-10 sm:p-12 rounded-[2.5rem] border border-border/60 shadow-2xl backdrop-blur-3xl group-hover:border-primary/40 transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-xl">
                        <item.icon className="w-7 h-7" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-headline font-black uppercase tracking-tight leading-none group-hover:text-primary transition-colors">{item.role}</h3>
                        <p className="text-[12px] font-mono font-black text-primary/60 uppercase tracking-[0.3em] mt-1">{item.company || item.institution}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] font-black text-muted-foreground bg-secondary/40 border border-border/40 px-5 py-2.5 rounded-full w-fit uppercase tracking-[0.3em]">
                      <CalendarDays className="w-4 h-4 opacity-50" />
                      {item.period}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-70">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Hub Subsystem */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12 lg:sticky lg:top-40"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4 px-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <h3 className="text-2xl font-headline font-black uppercase tracking-tight">Collaboration Hub</h3>
                </div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-tight leading-relaxed opacity-70 px-2">
                  Initialize a secure transmission to synchronize on high-performance projects and systems architecture.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-8 rounded-[2.5rem] bg-card/60 border border-border/60 backdrop-blur-3xl flex items-center gap-8 group hover:border-primary/40 transition-all shadow-xl">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.4em]">Secure Port</p>
                    <p className="text-base sm:text-lg font-black uppercase tracking-tight text-foreground">{userEmail}</p>
                  </div>
                </div>

                <div className="p-8 rounded-[2.5rem] bg-card/60 border border-border/60 backdrop-blur-3xl flex items-center gap-8 group hover:border-primary/40 transition-all shadow-xl">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.4em]">Mobile Uplink</p>
                    <p className="text-base sm:text-lg font-black uppercase tracking-tight text-foreground">+91 9346759263</p>
                  </div>
                </div>
              </div>

              {/* Minimized Contact Form */}
              <div className="p-10 rounded-[3rem] bg-card border border-border shadow-4xl backdrop-blur-3xl space-y-8">
                <div className="flex items-center justify-between border-b border-border/40 pb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">SYNC_CHANNEL</span>
                  <Activity className="w-4 h-4 text-primary animate-pulse" />
                </div>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Input 
                      required 
                      placeholder="NAME" 
                      className="h-14 rounded-xl bg-background/50 border-border/60 font-black text-[11px] uppercase tracking-[0.2em] px-6 focus:border-primary" 
                      value={formData.name} 
                      onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    />
                    <Input 
                      type="email" 
                      required 
                      placeholder="EMAIL" 
                      className="h-14 rounded-xl bg-background/50 border-border/60 font-black text-[11px] uppercase tracking-[0.2em] px-6 focus:border-primary" 
                      value={formData.email} 
                      onChange={(e) => setFormData({...formData, email: e.target.value})} 
                    />
                    <Textarea 
                      required 
                      placeholder="MANIFEST..." 
                      className="min-h-[140px] rounded-2xl bg-background/50 border-border/60 p-6 font-bold text-[12px] uppercase tracking-tight resize-none focus:border-primary" 
                      value={formData.message} 
                      onChange={(e) => setFormData({...formData, message: e.target.value})} 
                    />
                  </div>
                  <Button type="submit" className="w-full h-16 rounded-full text-[11px] font-black uppercase tracking-[0.4em] shadow-xl hover:scale-105 transition-all" disabled={isSubmitting}>
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5 mr-3" /> Start Sync</>}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
