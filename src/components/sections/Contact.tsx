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
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-10 mb-12 sm:mb-24">
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
            className="text-2xl sm:text-4xl lg:text-5xl font-headline font-black tracking-tighter uppercase leading-[0.9]"
          >
            SYNC <span className="text-primary/60">NODES</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] sm:text-2xl text-foreground max-w-3xl font-bold uppercase tracking-widest opacity-90"
          >
            High-performance handshake for technical collaboration.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-stretch"
        >
          <div className="lg:col-span-5 space-y-6">
            <motion.div variants={itemVariants} className="p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] bg-card border border-border/50 shadow-4xl backdrop-blur-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 sm:p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck className="w-16 h-16 sm:w-20 sm:h-20 text-primary" />
              </div>
              <div className="space-y-10 relative z-10">
                <div className="space-y-4">
                  <p className="text-[11px] font-black text-primary uppercase tracking-[0.5em]">Email Port</p>
                  <h3 className="text-sm sm:text-lg font-headline font-black uppercase tracking-tight break-all leading-tight text-foreground">
                    {userEmail}
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-[11px] font-black text-primary uppercase tracking-[0.5em]">Contact Node</p>
                  <h3 className="text-sm sm:text-xl font-headline font-black uppercase tracking-tight text-foreground">
                    +91 9346759263
                  </h3>
                </div>
                <div className="pt-8 border-t border-border/10 flex items-center gap-4">
                  <Activity className="w-5 h-5 text-primary animate-pulse" />
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">Awaiting Signal Transmission</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-secondary/20 border border-border/40 backdrop-blur-xl flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Terminal className="w-6 h-6 text-primary/40" />
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-tight text-foreground leading-relaxed opacity-80">
                  Initialization complete. Secure channel verified for enterprise collaboration and technical orchestration.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="lg:col-span-7 p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] bg-card border border-border shadow-4xl backdrop-blur-3xl relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-10 relative z-10 flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-[0.5em] text-primary ml-2">Identity Manifest</label>
                  <Input 
                    required 
                    placeholder="NAME" 
                    className="h-14 sm:h-16 rounded-xl bg-background border border-primary/20 font-black text-sm uppercase tracking-widest px-6 focus:bg-background focus:border-primary focus:shadow-[0_0_20px_rgba(var(--primary),0.05)] transition-all text-foreground w-full" 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-[0.5em] text-primary ml-2">Secure Port</label>
                  <Input 
                    type="email" 
                    required 
                    placeholder="EMAIL" 
                    className="h-14 sm:h-16 rounded-xl bg-background border border-primary/20 font-black text-sm uppercase tracking-widest px-6 focus:bg-background focus:border-primary focus:shadow-[0_0_20px_rgba(var(--primary),0.05)] transition-all text-foreground w-full" 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-[0.5em] text-primary ml-2">Transmission Data</label>
                <Textarea 
                  required 
                  placeholder="MANIFEST CONTENT..." 
                  className="min-h-[140px] sm:min-h-[200px] rounded-2xl bg-background border border-primary/20 p-6 font-bold text-sm uppercase tracking-tight resize-none focus:bg-background focus:border-primary focus:shadow-[0_0_30px_rgba(var(--primary),0.05)] transition-all text-foreground" 
                  value={formData.message} 
                  onChange={(e) => setFormData({...formData, message: e.target.value})} 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full sm:w-fit mx-auto px-8 sm:px-12 h-12 sm:h-16 rounded-full text-[10px] sm:text-sm font-black uppercase tracking-[0.4em] shadow-2xl bg-primary text-primary-foreground hover:shadow-[0_0_50px_rgba(var(--primary),0.5)] hover:scale-105 active:scale-95 transition-all duration-300 border-none" 
                disabled={isSubmitting}
              >
                {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Send className="w-5 h-5 mr-3" /> Start Transmission</>}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
