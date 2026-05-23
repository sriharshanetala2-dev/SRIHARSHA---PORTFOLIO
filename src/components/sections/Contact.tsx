"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Phone, Copy, Check, Loader2, User, ExternalLink, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { toast } = useToast();

  const userEmail = "sriharshanetala2@gmail.com";
  const userPhone = "+91 9346759263";

  // Direct Gmail compose link
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
    <section id="contact" className="py-24 sm:py-40 px-6 relative overflow-hidden bg-background border-t-2 border-border scroll-mt-20">
      <div className="absolute inset-0 data-flow-grid opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-black text-primary uppercase tracking-[0.5em] mx-auto lg:mx-0 shadow-2xl backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5" />
              COLLABORATION HUB
            </div>
            <h2 className="text-4xl sm:text-7xl font-headline font-black tracking-tighter leading-none uppercase shimmer-text">
              LET'S <span className="text-gradient">CONNECT</span>
            </h2>
            <p className="text-xs sm:text-lg text-muted-foreground leading-relaxed max-w-lg font-bold uppercase tracking-[0.2em] opacity-80 mx-auto lg:mx-0">
              Direct recruitment and project synchronization available. Optimized for high-performance development partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <a 
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-8 p-10 bg-card/60 backdrop-blur-xl border border-border/50 rounded-[3rem] hover:border-primary transition-all cursor-pointer group shadow-3xl"
            >
              <div className="p-5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-inner">
                <Mail className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-black uppercase text-primary tracking-[0.5em] mb-2 opacity-60">PRIMARY ENDPOINT</p>
                <p className="font-black text-xs sm:text-2xl truncate tracking-widest uppercase">{userEmail}</p>
              </div>
              <ExternalLink className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity" />
            </a>

            <div 
              onClick={copyPhone}
              className="flex items-center gap-8 p-10 bg-card/60 backdrop-blur-xl border border-border/50 rounded-[3rem] hover:border-primary transition-all cursor-pointer group shadow-3xl"
            >
              <div className="p-5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-inner">
                <Phone className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-black uppercase text-primary tracking-[0.5em] mb-2 opacity-60">MOBILE SUBSYSTEM</p>
                <p className="font-black text-xs sm:text-2xl tracking-widest uppercase">{userPhone}</p>
              </div>
              <div className="flex items-center gap-4">
                {copiedPhone ? <Check className="w-7 h-7 text-green-500" /> : <Copy className="w-7 h-7 opacity-20 group-hover:opacity-100 transition-opacity" />}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-16 rounded-[4rem] shadow-4xl relative"
        >
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.5em] ml-3">FULL NAME</label>
                <div className="relative">
                  <Input 
                    placeholder="ENTER NAME" 
                    required
                    className="bg-background/40 border-2 border-border/50 focus:border-primary h-20 rounded-3xl text-xs font-black pl-16 shadow-inner uppercase tracking-widest transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-primary opacity-40" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.5em] ml-3">EMAIL ADDRESS</label>
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="ENTER EMAIL" 
                    required
                    className="bg-background/40 border-2 border-border/50 focus:border-primary h-20 rounded-3xl text-xs font-black pl-16 shadow-inner uppercase tracking-widest transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-primary opacity-40" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.5em] ml-3">MESSAGE SUBSYSTEM</label>
              <Textarea 
                placeholder="TYPE YOUR MESSAGE..." 
                className="min-h-[200px] bg-background/40 border-2 border-border/50 focus:border-primary p-10 resize-none rounded-[3rem] text-xs font-black leading-relaxed shadow-inner uppercase tracking-tight transition-all"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-24 rounded-full font-black uppercase tracking-[0.6em] text-xs gap-5 shadow-4xl transition-all bg-primary text-primary-foreground hover:scale-[1.03] active:scale-95 shadow-primary/40 group"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader2 className="w-8 h-8 animate-spin" /> : <><Send className="w-7 h-7 group-hover:translate-x-3 transition-transform" /> SEND MESSAGE</>}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}