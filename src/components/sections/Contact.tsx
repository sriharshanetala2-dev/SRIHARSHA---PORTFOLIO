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
    <section id="contact" className="py-20 sm:py-32 px-6 relative overflow-hidden bg-transparent border-t border-border scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-label"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            SYSTEM SYNC V4.0
          </motion.div>
          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-tight shimmer-text">
            COLLABORATION <span className="text-gradient">NODE</span>
          </h2>
          <p className="text-sm sm:text-xl text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-90 max-w-2xl px-6">
            Architecting high-frequency engineering partnerships and technical synchronization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 sm:space-y-8"
          >
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}`} target="_blank" className="flex items-center gap-6 p-8 bg-card/60 backdrop-blur-xl border border-border/40 rounded-3xl hover:border-primary/40 transition-all group">
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] font-black uppercase text-primary tracking-[0.3em] mb-1 opacity-60">REGISTRY_ENDPOINT</p>
                <p className="font-black text-sm sm:text-lg truncate uppercase tracking-tight">{userEmail}</p>
              </div>
              <ExternalLink className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />
            </a>

            <div onClick={copyPhone} className="flex items-center gap-6 p-8 bg-card/60 backdrop-blur-xl border border-border/40 rounded-3xl hover:border-primary/40 transition-all cursor-pointer group">
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] font-black uppercase text-primary tracking-[0.3em] mb-1 opacity-60">MOBILE_PORT</p>
                <p className="font-black text-sm sm:text-lg uppercase tracking-tight">{userPhone}</p>
              </div>
              <div className="flex items-center gap-2">
                <AnimatePresence mode="wait">
                  {copiedPhone ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <Check className="w-6 h-6 text-green-500" />
                    </motion.div>
                  ) : (
                    <Copy className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity" />
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-secondary/10 border border-border/40 backdrop-blur-xl space-y-6 hidden lg:block">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/60">SYSTEM_LOGS</p>
              <div className="space-y-3 font-mono text-[10px] font-black uppercase tracking-widest text-muted-foreground/40">
                <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> INITIALIZING COMMS_LAYER...</p>
                <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary/30" /> PORTAL_READY_FOR_SYNC</p>
                <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary/30" /> WAIT_FOR_USER_MANIFEST</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 sm:p-12 rounded-[2.5rem] border border-border/40 bg-card/60 backdrop-blur-xl shadow-2xl relative overflow-hidden group/form"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <Terminal className="w-20 h-20 text-primary" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-4">IDENTITY_ROOT</label>
                  <div className="relative group">
                    <Input placeholder="FULL NAME" required className="bg-background/40 border border-border/40 h-14 rounded-xl text-[11px] font-black px-12 uppercase tracking-[0.1em] focus:border-primary transition-all" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary opacity-30 group-focus-within:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-4">COMM_PORT</label>
                  <div className="relative group">
                    <Input type="email" placeholder="EMAIL ADDRESS" required className="bg-background/40 border border-border/40 h-14 rounded-xl text-[11px] font-black px-12 uppercase tracking-[0.1em] focus:border-primary transition-all" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    <Activity className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary opacity-30 group-focus-within:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-4">MANIFEST_TRANSMISSION</label>
                <div className="relative group">
                  <Textarea placeholder="TRANSMIT MESSAGE..." className="min-h-[160px] bg-background/40 border border-border/40 p-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.1em] focus:border-primary transition-all resize-none" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                  <Terminal className="absolute right-4 bottom-4 w-4 h-4 text-primary opacity-20 group-focus-within:opacity-100 transition-opacity" />
                </div>
              </div>
              <Button type="submit" className="w-full h-16 rounded-full font-black uppercase tracking-[0.4em] text-[10px] gap-3 shadow-lg bg-primary text-primary-foreground hover:scale-[1.01] transition-all" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-4 h-4" /> START_TRANSMISSION</>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}