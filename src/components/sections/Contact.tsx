"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Phone, Copy, Check, Loader2, User, ExternalLink, ShieldCheck, Activity } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { toast } = useToast();

  const userEmail = "sriharshanetala2@gmail.com";
  const userPhone = "+91 9346759263";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}`;

  const copyPhone = () => {
    navigator.clipboard.writeText(userPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
    toast({ 
      title: "Registry Data Copied",
      description: "Mobile subsystem digits copied to clipboard." 
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    toast({ title: "Initializing Communication", description: "Synchronizing data with Gmail module..." });
    
    setTimeout(() => {
      const mailUrl = `${gmailComposeUrl}&su=Technical Inquiry from Portfolio: ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      window.open(mailUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ name: "" , email: "" , message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 sm:py-48 px-6 relative overflow-hidden bg-background border-t-2 border-border scroll-mt-20">
      {/* Background Decor Layer - pointer-events-none is CRITICAL */}
      <div className="absolute inset-0 neural-grid opacity-[0.05] pointer-events-none z-0" />
      <div className="absolute inset-0 logic-scan-subsystem pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-40 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16 sm:space-y-32"
        >
          <div className="space-y-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-4 px-7 py-2.5 rounded-full bg-primary/10 border-2 border-primary/20 text-[10px] sm:text-[11px] font-black text-primary uppercase tracking-[0.5em] mx-auto lg:mx-0 shadow-2xl backdrop-blur-xl"
            >
              <ShieldCheck className="w-4 h-4 animate-pulse" />
              COLLABORATION HUB
            </motion.div>
            <h2 className="text-4xl sm:text-7xl md:text-8xl font-headline font-black tracking-tighter leading-none uppercase shimmer-text">
              LET'S <span className="text-gradient">CONNECT</span>
            </h2>
            <p className="text-sm sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-bold uppercase tracking-[0.2em] opacity-80 mx-auto lg:mx-0">
              Direct recruitment and project synchronization available. Optimized for high-performance engineering partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <motion.a 
              whileHover={{ scale: 1.02, x: 10 }}
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-8 p-10 bg-card/10 dark:bg-card/40 backdrop-blur-3xl border-2 border-border/50 rounded-[3rem] hover:border-primary transition-all cursor-pointer group shadow-3xl relative overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5 group-hover:opacity-10 transition-opacity">
                <Activity className="absolute top-0 right-0 w-20 h-20 m-8" />
              </div>
              <div className="p-5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner border border-primary/20">
                <Mail className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-black uppercase text-primary tracking-[0.5em] mb-2 opacity-60">PRIMARY ENDPOINT</p>
                <p className="font-black text-xs sm:text-2xl truncate tracking-tight uppercase leading-none">{userEmail}</p>
              </div>
              <ExternalLink className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-all group-hover:translate-x-2" />
            </motion.a>

            <motion.div 
              whileHover={{ scale: 1.02, x: 10 }}
              onClick={copyPhone}
              className="flex items-center gap-8 p-10 bg-card/10 dark:bg-card/40 backdrop-blur-3xl border-2 border-border/50 rounded-[3rem] hover:border-primary transition-all cursor-pointer group shadow-3xl relative overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5 group-hover:opacity-10 transition-opacity">
                <Activity className="absolute top-0 right-0 w-20 h-20 m-8 rotate-90" />
              </div>
              <div className="p-5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner border border-primary/20">
                <Phone className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-black uppercase text-primary tracking-[0.5em] mb-2 opacity-60">MOBILE SUBSYSTEM</p>
                <p className="font-black text-xs sm:text-2xl tracking-tight uppercase leading-none">{userPhone}</p>
              </div>
              <div className="flex items-center gap-5">
                <AnimatePresence mode="wait">
                  {copiedPhone ? (
                    <motion.div key="checked" initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }}>
                      <Check className="w-7 h-7 text-green-500" />
                    </motion.div>
                  ) : (
                    <motion.div key="copy" initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }}>
                      <Copy className="w-7 h-7 opacity-20 group-hover:opacity-100 transition-all" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-16 rounded-[3rem] lg:rounded-[4rem] shadow-4xl relative overflow-hidden border-2 border-border/60"
        >
          <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(circle_at_top_right,black,transparent)] pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-[10px] sm:text-[11px] font-black uppercase text-muted-foreground tracking-[0.5em] ml-6">FULL NAME</label>
                <div className="relative group">
                  <Input 
                    placeholder="ENTER NAME" 
                    required
                    className="bg-background/40 border-2 border-border/50 focus:border-primary h-20 rounded-2xl lg:rounded-[2rem] text-[11px] sm:text-xs font-black pl-16 uppercase tracking-widest transition-all hover:bg-background/60 cursor-text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-primary opacity-40 group-focus-within:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] sm:text-[11px] font-black uppercase text-muted-foreground tracking-[0.5em] ml-6">EMAIL ADDRESS</label>
                <div className="relative group">
                  <Input 
                    type="email" 
                    placeholder="ENTER EMAIL" 
                    required
                    className="bg-background/40 border-2 border-border/50 focus:border-primary h-20 rounded-2xl lg:rounded-[2rem] text-[11px] sm:text-xs font-black pl-16 uppercase tracking-widest transition-all hover:bg-background/60 cursor-text"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-primary opacity-40 group-focus-within:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] sm:text-[11px] font-black uppercase text-muted-foreground tracking-[0.5em] ml-6">MESSAGE SUBSYSTEM</label>
              <Textarea 
                placeholder="TYPE YOUR MESSAGE..." 
                className="min-h-[220px] bg-background/40 border-2 border-border/50 focus:border-primary p-10 resize-none rounded-[2.5rem] lg:rounded-[3rem] text-[11px] sm:text-xs font-black leading-relaxed uppercase tracking-tight transition-all hover:bg-background/60 cursor-text"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-24 rounded-full font-black uppercase tracking-[0.6em] text-[11px] sm:text-xs gap-6 shadow-4xl transition-all bg-primary text-primary-foreground hover:scale-[1.02] active:scale-95 shadow-primary/40 group overflow-hidden cursor-pointer"
              disabled={isSubmitting}
            >
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              {isSubmitting ? <Loader2 className="w-8 h-8 animate-spin" /> : <><Send className="w-6 h-6 group-hover:translate-x-3 transition-transform" /> SEND MESSAGE</>}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}