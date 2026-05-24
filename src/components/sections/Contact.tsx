"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, Loader2, Activity } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const userEmail = "sriharshanetala2@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=Inquiry: ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      window.open(gmailUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ name: "" , email: "" , message: "" });
      toast({ title: "Redirecting...", description: "Opening your mail client." });
    }, 1000);
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 bg-secondary/5 border-t border-border relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        <div className="text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mx-auto"
          >
            COLLABORATION_NODE_SYNC
          </motion.div>
          <h2 className="text-4xl sm:text-7xl font-headline font-black tracking-tighter uppercase leading-none">Get In <span className="text-gradient">Touch</span></h2>
          <p className="text-lg sm:text-2xl text-muted-foreground max-w-2xl mx-auto font-black uppercase tracking-widest leading-relaxed opacity-70">
            Ready to synchronize on your next high-performance engineering project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            className="space-y-8"
          >
            <div className="p-12 rounded-[3rem] bg-card/40 border border-border/60 backdrop-blur-3xl flex items-center gap-10 group hover:border-primary/40 transition-all shadow-xl">
              <div className="p-6 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl">
                <Mail className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <p className="text-[14px] font-black text-muted-foreground uppercase tracking-[0.4em]">Email Port</p>
                <p className="text-base sm:text-2xl font-black uppercase tracking-tight text-foreground">{userEmail}</p>
              </div>
            </div>
            
            <div className="p-12 rounded-[3rem] bg-card/40 border border-border/60 backdrop-blur-3xl flex items-center gap-10 group hover:border-primary/40 transition-all shadow-xl">
              <div className="p-6 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl">
                <Phone className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <p className="text-[14px] font-black text-muted-foreground uppercase tracking-[0.4em]">Contact Node</p>
                <p className="text-base sm:text-2xl font-black uppercase tracking-tight text-foreground">+91 9346759263</p>
              </div>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-primary/5 border border-primary/20 flex items-center gap-8 opacity-60">
              <Activity className="w-7 h-7 text-primary animate-pulse" />
              <p className="text-[14px] font-black uppercase tracking-[0.5em] text-primary">Awaiting Connection Signal...</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            className="p-10 sm:p-16 rounded-[4rem] bg-card border border-border shadow-4xl backdrop-blur-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[14px] font-black uppercase tracking-[0.5em] text-muted-foreground ml-3">Full Identity</label>
                  <Input 
                    required 
                    placeholder="JOHN DOE" 
                    className="h-16 sm:h-20 rounded-2xl bg-background/50 border-border/60 font-black text-base uppercase tracking-widest px-8 focus:border-primary" 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[14px] font-black uppercase tracking-[0.5em] text-muted-foreground ml-3">Email Port</label>
                  <Input 
                    type="email" 
                    required 
                    placeholder="JOHN@EXAMPLE.COM" 
                    className="h-16 sm:h-20 rounded-2xl bg-background/50 border-border/60 font-black text-base uppercase tracking-widest px-8 focus:border-primary" 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[14px] font-black uppercase tracking-[0.5em] text-muted-foreground ml-3">Manifest Content</label>
                <Textarea 
                  required 
                  placeholder="YOUR MESSAGE..." 
                  className="min-h-[200px] sm:min-h-[260px] rounded-[2.5rem] bg-background/50 border-border/60 p-8 sm:p-10 font-bold text-base sm:text-lg uppercase tracking-tight resize-none focus:border-primary" 
                  value={formData.message} 
                  onChange={(e) => setFormData({...formData, message: e.target.value})} 
                />
              </div>
              <Button type="submit" className="w-full h-18 sm:h-24 rounded-full text-base font-black uppercase tracking-[0.5em] shadow-2xl shadow-primary/20 hover:scale-105 transition-all" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Send className="w-6 h-6 mr-5" /> Start Transmission</>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}