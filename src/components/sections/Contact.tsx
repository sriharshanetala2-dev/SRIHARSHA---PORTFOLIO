
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Phone, Copy, Check, Loader2, User, ExternalLink, ShieldCheck, Activity, Terminal } from "lucide-react";
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
      title: "Data Synced",
      description: "Mobile registry digits stored in local buffer." 
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    toast({ title: "Initializing Transmission", description: "Orchestrating Gmail module for secure sync..." });
    
    setTimeout(() => {
      const mailUrl = `${gmailComposeUrl}&su=Inquiry: ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      window.open(mailUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ name: "" , email: "" , message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 sm:py-48 px-6 relative overflow-hidden bg-background border-t-2 border-border scroll-mt-20">
      {/* Decorative Subsystem - Strictly no interaction to fix cursor issues */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 neural-grid opacity-[0.03] dark:opacity-[0.1]" />
        <div className="absolute inset-0 data-packet-layer opacity-[0.02] dark:opacity-[0.05]" />
        <div className="logic-scan-subsystem opacity-[0.05] dark:opacity-[0.2]" />
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-[0.5em] mx-auto lg:mx-0 shadow-lg backdrop-blur-md">
              <ShieldCheck className="w-4 h-4" />
              SYSTEM SYNC V3.0
            </div>
            <h2 className="text-4xl sm:text-7xl lg:text-8xl font-headline font-black tracking-tighter leading-none uppercase shimmer-text">
              COLLABORATION <span className="text-gradient">NODE</span>
            </h2>
            <p className="text-sm sm:text-xl text-muted-foreground leading-relaxed max-w-xl font-bold uppercase tracking-tight opacity-80 mx-auto lg:mx-0">
              Architecting high-frequency engineering partnerships and elite technical synchronization.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <motion.a 
              whileHover={{ x: 5 }}
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-8 bg-card/10 dark:bg-card/30 backdrop-blur-xl border border-border rounded-[2rem] hover:border-primary transition-all group shadow-xl relative cursor-pointer"
            >
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] font-black uppercase text-primary tracking-widest mb-1 opacity-50">REGISTRY_ENDPOINT</p>
                <p className="font-black text-xs sm:text-xl truncate uppercase tracking-tight">{userEmail}</p>
              </div>
              <ExternalLink className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-all" />
            </motion.a>

            <motion.div 
              whileHover={{ x: 5 }}
              onClick={copyPhone}
              className="flex items-center gap-6 p-8 bg-card/10 dark:bg-card/30 backdrop-blur-xl border border-border rounded-[2rem] hover:border-primary transition-all cursor-pointer group shadow-xl"
            >
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] font-black uppercase text-primary tracking-widest mb-1 opacity-50">MOBILE_PORT</p>
                <p className="font-black text-xs sm:text-xl uppercase tracking-tight">{userPhone}</p>
              </div>
              <div className="flex items-center gap-3">
                <AnimatePresence mode="wait">
                  {copiedPhone ? (
                    <motion.div key="ch" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}>
                      <Check className="w-6 h-6 text-green-500" />
                    </motion.div>
                  ) : (
                    <motion.div key="cp" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}>
                      <Copy className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-all" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="p-8 sm:p-14 rounded-[3rem] shadow-2xl relative border border-border/50 bg-secondary/10 backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-4">IDENTITY_ROOT</label>
                <div className="relative group">
                  <Input 
                    placeholder="ENTER FULL NAME" 
                    required
                    className="bg-background/40 border-border focus:border-primary h-16 rounded-xl text-[10px] font-black pl-14 uppercase tracking-widest transition-all cursor-text shadow-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary opacity-40 group-focus-within:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-4">COMMUNICATION_PORT</label>
                <div className="relative group">
                  <Input 
                    type="email" 
                    placeholder="ENTER EMAIL ADDRESS" 
                    required
                    className="bg-background/40 border-border focus:border-primary h-16 rounded-xl text-[10px] font-black pl-14 uppercase tracking-widest transition-all cursor-text shadow-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <Activity className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary opacity-40 group-focus-within:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-4">MANIFEST_TRANSMISSION</label>
              <div className="relative group">
                <Textarea 
                  placeholder="TRANSMIT MESSAGE CONTENT..." 
                  className="min-h-[200px] bg-background/40 border-border focus:border-primary p-8 resize-none rounded-2xl text-[10px] font-black uppercase tracking-tight transition-all cursor-text shadow-none"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  disabled={isSubmitting}
                />
                <Terminal className="absolute right-6 top-6 w-4 h-4 text-primary opacity-20 pointer-events-none" />
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full h-20 rounded-full font-black uppercase tracking-[0.5em] text-[10px] gap-4 shadow-xl transition-all bg-primary text-primary-foreground hover:brightness-110 active:scale-95 group relative overflow-hidden cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" /> START_TRANSMISSION</>}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
