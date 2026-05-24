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

  const copyPhone = () => {
    navigator.clipboard.writeText(userPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
    toast({ title: "System Sync", description: "Mobile registry digits stored in buffer." });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=Inquiry: ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      window.open(gmailUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ name: "" , email: "" , message: "" });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 sm:py-40 px-6 relative overflow-hidden bg-transparent border-t border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-40 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-label"
          >
            <ShieldCheck className="w-4 h-4" />
            SYSTEM SYNC V4.0
          </motion.div>
          <h2 className="text-5xl sm:text-7xl lg:text-9xl font-headline font-black tracking-tighter uppercase leading-[0.8] shimmer-text">
            COLLABORATION <span className="text-gradient">NODE</span>
          </h2>
          <p className="text-lg sm:text-2xl text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-95 max-w-3xl px-6">
            Architecting high-frequency engineering partnerships and technical synchronization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 sm:space-y-12"
          >
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}`} target="_blank" className="flex items-center gap-8 p-10 bg-card/40 backdrop-blur-3xl border border-border rounded-[3.5rem] hover:border-primary transition-all duration-700 group shadow-3xl">
              <div className="p-5 rounded-[1.5rem] bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-2xl">
                <Mail className="w-8 h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-black uppercase text-primary tracking-[0.5em] mb-2 opacity-70">REGISTRY_ENDPOINT</p>
                <p className="font-black text-lg sm:text-2xl truncate uppercase tracking-tight">{userEmail}</p>
              </div>
              <ExternalLink className="w-6 h-6 opacity-30 group-hover:opacity-100 duration-500" />
            </a>

            <div onClick={copyPhone} className="flex items-center gap-8 p-10 bg-card/40 backdrop-blur-3xl border border-border rounded-[3.5rem] hover:border-primary transition-all duration-700 cursor-pointer group shadow-3xl">
              <div className="p-5 rounded-[1.5rem] bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-2xl">
                <Phone className="w-8 h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-black uppercase text-primary tracking-[0.5em] mb-2 opacity-70">MOBILE_PORT</p>
                <p className="font-black text-lg sm:text-2xl uppercase tracking-tight">{userPhone}</p>
              </div>
              <div className="flex items-center gap-2">
                <AnimatePresence mode="wait">
                  {copiedPhone ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <Check className="w-8 h-8 text-green-500" />
                    </motion.div>
                  ) : (
                    <Copy className="w-8 h-8 opacity-30 group-hover:opacity-100 duration-500" />
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="p-10 rounded-[3.5rem] bg-secondary/20 border border-border/50 backdrop-blur-3xl space-y-8 shadow-4xl hidden lg:block">
              <p className="text-[12px] font-black uppercase tracking-[0.6em] text-primary opacity-60">SYSTEM_LOGS</p>
              <div className="space-y-4 font-mono text-[11px] font-black uppercase tracking-widest text-muted-foreground/40">
                <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> INITIALIZING COMMS_LAYER...</p>
                <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary/40" /> PORTAL_READY_FOR_SYNC</p>
                <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary/40" /> WAIT_FOR_USER_MANIFEST</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="p-10 sm:p-20 rounded-[4rem] border-2 border-border bg-card/30 backdrop-blur-4xl shadow-4xl relative overflow-hidden group/form"
          >
            <div className="absolute top-0 right-0 p-16 opacity-5 group-hover/form:opacity-15 transition-opacity duration-1000">
              <Terminal className="w-32 h-32 text-primary" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
              <div className="grid grid-cols-1 gap-10">
                <div className="space-y-4">
                  <label className="text-[12px] font-black uppercase text-muted-foreground tracking-[0.6em] ml-6">IDENTITY_ROOT</label>
                  <div className="relative group">
                    <Input placeholder="FULL NAME" required className="bg-background/60 border-2 border-border h-20 rounded-2xl text-[13px] font-black px-16 uppercase tracking-[0.2em] focus:border-primary transition-all shadow-xl" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary opacity-40 group-focus-within:opacity-100 duration-500" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[12px] font-black uppercase text-muted-foreground tracking-[0.6em] ml-6">COMMUNICATION_PORT</label>
                  <div className="relative group">
                    <Input type="email" placeholder="EMAIL ADDRESS" required className="bg-background/60 border-2 border-border h-20 rounded-2xl text-[13px] font-black px-16 uppercase tracking-[0.2em] focus:border-primary transition-all shadow-xl" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    <Activity className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary opacity-40 group-focus-within:opacity-100 duration-500" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[12px] font-black uppercase text-muted-foreground tracking-[0.6em] ml-6">MANIFEST_TRANSMISSION</label>
                <div className="relative group">
                  <Textarea placeholder="TRANSMIT MESSAGE..." className="min-h-[220px] bg-background/60 border-2 border-border p-8 rounded-[2rem] text-[13px] font-black uppercase tracking-[0.1em] focus:border-primary transition-all shadow-xl resize-none" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                  <Terminal className="absolute right-8 bottom-8 w-6 h-6 text-primary opacity-30 group-focus-within:opacity-100 duration-500" />
                </div>
              </div>
              <Button type="submit" className="w-full h-24 rounded-full font-black uppercase tracking-[0.6em] text-[12px] gap-5 shadow-[0_0_50px_rgba(var(--primary),0.2)] transition-all bg-primary text-primary-foreground hover:scale-[1.02] hover:shadow-[0_0_70px_rgba(var(--primary),0.3)] group/btn overflow-hidden" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Send className="w-6 h-6 group-hover/btn:translate-x-3 duration-500" /> START_TRANSMISSION</>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}