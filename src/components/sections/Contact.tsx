"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, Loader2, Activity, Zap, ShieldCheck, Terminal } from "lucide-react";
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
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      window.open(gmailUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ name: "" , email: "" , message: "" });
      toast({ title: "Signal Synced", description: "Handshaking with mail client..." });
    }, 1200);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="py-20 sm:py-40 px-4 sm:px-6 bg-background relative overflow-hidden border-t border-border scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_70%)]" />
        <div className="absolute inset-0 neural-grid opacity-[0.04]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-10 mb-12 sm:mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            <Zap className="w-4 h-4" />
            SECURE_SYNC_PORT
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-6xl lg:text-8xl font-headline font-black tracking-tighter uppercase leading-[0.9]"
          >
            SYNC <span className="text-gradient">NODES</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] sm:text-2xl text-muted-foreground max-w-3xl font-bold uppercase tracking-widest opacity-80"
          >
            High-performance handshake for technical collaboration.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-20 items-stretch"
        >
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <motion.div variants={itemVariants} className="p-6 sm:p-14 rounded-[1.5rem] sm:rounded-[3rem] bg-card border border-border shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                <ShieldCheck className="w-10 h-10 sm:w-16 sm:h-16 text-primary" />
              </div>
              <div className="space-y-8 relative z-10">
                <div className="space-y-3">
                  <p className="text-[12px] sm:text-[14px] font-black text-primary uppercase tracking-[0.4em]">Email Port</p>
                  <h3 className="text-[16px] sm:text-xl lg:text-2xl font-headline font-black uppercase tracking-tight break-all leading-tight">
                    {userEmail}
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-[12px] sm:text-[14px] font-black text-primary uppercase tracking-[0.4em]">Contact Node</p>
                  <h3 className="text-[16px] sm:text-xl lg:text-2xl font-headline font-black uppercase tracking-tight">
                    +91 9346759263
                  </h3>
                </div>
                <div className="pt-8 border-t border-border/60 flex items-center gap-3">
                  <Activity className="w-4 h-4 text-primary animate-pulse" />
                  <p className="text-[11px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground opacity-60">Awaiting Signal...</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 rounded-[1.25rem] sm:rounded-[2.5rem] bg-primary/5 border border-primary/20 backdrop-blur-xl flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                <p className="text-[14px] sm:text-sm font-bold uppercase tracking-tight text-muted-foreground leading-relaxed opacity-80">
                  Initialization complete. Secure channel verified for enterprise collaboration and technical orchestration.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="lg:col-span-7 p-6 sm:p-16 rounded-[1.5rem] sm:rounded-[4rem] bg-card border-2 border-border shadow-4xl backdrop-blur-3xl relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-12 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10">
                <div className="space-y-2">
                  <label className="text-[12px] sm:text-[14px] font-black uppercase tracking-[0.4em] text-primary ml-1">Identity Manifest</label>
                  <Input 
                    required 
                    placeholder="NAME" 
                    className="h-14 sm:h-16 rounded-xl bg-secondary/30 border-border/60 font-black text-sm uppercase tracking-widest px-6" 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] sm:text-[14px] font-black uppercase tracking-[0.4em] text-primary ml-1">Secure Port</label>
                  <Input 
                    type="email" 
                    required 
                    placeholder="EMAIL" 
                    className="h-14 sm:h-16 rounded-xl bg-secondary/30 border-border/60 font-black text-sm uppercase tracking-widest px-6" 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[12px] sm:text-[14px] font-black uppercase tracking-[0.4em] text-primary ml-1">Transmission Data</label>
                <Textarea 
                  required 
                  placeholder="MANIFEST CONTENT..." 
                  className="min-h-[140px] sm:min-h-[200px] rounded-[1.25rem] sm:rounded-[2.5rem] bg-secondary/30 border-border/60 p-6 font-bold text-sm sm:text-base uppercase tracking-tight resize-none" 
                  value={formData.message} 
                  onChange={(e) => setFormData({...formData, message: e.target.value})} 
                />
              </div>
              <Button type="submit" className="w-full h-14 sm:h-20 rounded-full text-[12px] sm:text-base font-black uppercase tracking-[0.5em] shadow-2xl bg-primary text-primary-foreground" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5 mr-3" /> Start Transmission</>}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}