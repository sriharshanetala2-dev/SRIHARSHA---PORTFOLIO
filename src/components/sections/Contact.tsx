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
    <section id="contact" className="py-24 sm:py-48 px-6 relative overflow-hidden bg-background border-t-2 border-border scroll-mt-20">
      <div className="absolute inset-0 neural-grid opacity-5 pointer-events-none" />
      <div className="absolute inset-0 logic-scan-subsystem opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 sm:gap-40 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="space-y-20 sm:space-y-32"
        >
          <div className="space-y-12 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-primary/15 border-2 border-primary/25 text-[10px] sm:text-[11px] font-black text-primary uppercase tracking-[0.6em] mx-auto lg:mx-0 shadow-2xl backdrop-blur-xl"
            >
              <ShieldCheck className="w-5 h-5 animate-pulse" />
              COLLABORATION HUB
            </motion.div>
            <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black tracking-tighter leading-none uppercase shimmer-text">
              LET'S <span className="text-gradient">CONNECT</span>
            </h2>
            <p className="text-sm sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-bold uppercase tracking-[0.2em] opacity-90 mx-auto lg:mx-0">
              Direct recruitment and project synchronization available. Optimized for high-performance development partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10">
            <motion.a 
              whileHover={{ scale: 1.02, translateX: 10 }}
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-10 p-12 bg-card/40 backdrop-blur-3xl border-2 border-border/50 rounded-[3.5rem] hover:border-primary transition-all cursor-pointer group shadow-4xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity"><Activity className="w-24 h-24" /></div>
              <div className="p-6 rounded-[1.5rem] bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner border border-primary/20">
                <Mail className="w-8 h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-black uppercase text-primary tracking-[0.6em] mb-3 opacity-60">PRIMARY ENDPOINT</p>
                <p className="font-black text-xs sm:text-3xl truncate tracking-tight uppercase leading-none">{userEmail}</p>
              </div>
              <ExternalLink className="w-8 h-8 opacity-20 group-hover:opacity-100 transition-all group-hover:translate-x-2" />
            </motion.a>

            <motion.div 
              whileHover={{ scale: 1.02, translateX: 10 }}
              onClick={copyPhone}
              className="flex items-center gap-10 p-12 bg-card/40 backdrop-blur-3xl border-2 border-border/50 rounded-[3.5rem] hover:border-primary transition-all cursor-pointer group shadow-4xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity"><Activity className="w-24 h-24 rotate-90" /></div>
              <div className="p-6 rounded-[1.5rem] bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner border border-primary/20">
                <Phone className="w-8 h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-black uppercase text-primary tracking-[0.6em] mb-3 opacity-60">MOBILE SUBSYSTEM</p>
                <p className="font-black text-xs sm:text-3xl tracking-tight uppercase leading-none">{userPhone}</p>
              </div>
              <div className="flex items-center gap-6">
                <AnimatePresence mode="wait">
                  {copiedPhone ? (
                    <motion.div key="checked" initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }}>
                      <Check className="w-8 h-8 text-green-500" />
                    </motion.div>
                  ) : (
                    <motion.div key="copy" initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }}>
                      <Copy className="w-8 h-8 opacity-20 group-hover:opacity-100 transition-all" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          className="glass-card p-10 sm:p-20 rounded-[5rem] shadow-4xl relative overflow-hidden border-2 border-border/60"
        >
          <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(circle_at_top_right,black,transparent)] pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-5">
                <label className="text-[10px] sm:text-[11px] font-black uppercase text-muted-foreground tracking-[0.6em] ml-6">FULL NAME</label>
                <div className="relative group">
                  <Input 
                    placeholder="ENTER NAME" 
                    required
                    className="bg-background/40 border-2 border-border/50 focus:border-primary h-24 rounded-[2.5rem] text-xs sm:text-sm font-black pl-20 shadow-inner uppercase tracking-widest transition-all backdrop-blur-xl group-hover:bg-background/60"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <User className="absolute left-8 top-1/2 -translate-y-1/2 w-7 h-7 text-primary opacity-40 group-focus-within:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="space-y-5">
                <label className="text-[10px] sm:text-[11px] font-black uppercase text-muted-foreground tracking-[0.6em] ml-6">EMAIL ADDRESS</label>
                <div className="relative group">
                  <Input 
                    type="email" 
                    placeholder="ENTER EMAIL" 
                    required
                    className="bg-background/40 border-2 border-border/50 focus:border-primary h-24 rounded-[2.5rem] text-xs sm:text-sm font-black pl-20 shadow-inner uppercase tracking-widest transition-all backdrop-blur-xl group-hover:bg-background/60"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <Mail className="absolute left-8 top-1/2 -translate-y-1/2 w-7 h-7 text-primary opacity-40 group-focus-within:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <label className="text-[10px] sm:text-[11px] font-black uppercase text-muted-foreground tracking-[0.6em] ml-6">MESSAGE SUBSYSTEM</label>
              <Textarea 
                placeholder="TYPE YOUR MESSAGE..." 
                className="min-h-[250px] bg-background/40 border-2 border-border/50 focus:border-primary p-12 resize-none rounded-[4rem] text-xs sm:text-sm font-black leading-relaxed shadow-inner uppercase tracking-tight transition-all backdrop-blur-xl hover:bg-background/60"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-28 rounded-full font-black uppercase tracking-[0.8em] text-xs sm:text-sm gap-8 shadow-4xl transition-all bg-primary text-primary-foreground hover:scale-[1.03] active:scale-95 shadow-primary/40 group overflow-hidden"
              disabled={isSubmitting}
            >
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              {isSubmitting ? <Loader2 className="w-10 h-10 animate-spin" /> : <><Send className="w-8 h-8 group-hover:translate-x-5 transition-transform" /> SEND MESSAGE</>}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}