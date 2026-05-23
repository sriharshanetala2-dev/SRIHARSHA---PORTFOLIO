'use client';

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
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 sm:py-48 px-6 relative overflow-hidden bg-background border-t-2 border-border scroll-mt-20">
      {/* Decorative Isolation Layer - Locked Interaction */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 neural-grid opacity-[0.03] dark:opacity-[0.1]" />
        <div className="logic-scan-subsystem opacity-[0.05] dark:opacity-[0.2]" />
      </div>
      
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-primary/10 border-2 border-primary/30 text-[11px] font-black text-primary uppercase tracking-[0.6em] shadow-xl backdrop-blur-md">
            <ShieldCheck className="w-5 h-5" />
            SYSTEM SYNC V3.0
          </div>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-headline font-black tracking-tighter uppercase leading-[0.9] shimmer-text">
            COLLABORATION <span className="text-gradient">NODE</span>
          </h2>
          <p className="text-sm sm:text-xl text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-80 max-w-3xl">
            Architecting high-frequency engineering partnerships and elite technical synchronization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="grid grid-cols-1 gap-8">
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}`} target="_blank" className="flex items-center gap-8 p-10 bg-card/40 backdrop-blur-2xl border-2 border-border rounded-[3rem] hover:border-primary transition-all group shadow-4xl relative overflow-hidden">
                <div className="p-5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Mail className="w-8 h-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-black uppercase text-primary tracking-[0.4em] mb-2 opacity-50">REGISTRY_ENDPOINT</p>
                  <p className="font-black text-xs sm:text-2xl truncate uppercase tracking-tight">{userEmail}</p>
                </div>
                <ExternalLink className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity" />
              </a>

              <div onClick={copyPhone} className="flex items-center gap-8 p-10 bg-card/40 backdrop-blur-2xl border-2 border-border rounded-[3rem] hover:border-primary transition-all cursor-pointer group shadow-4xl relative overflow-hidden">
                <div className="p-5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Phone className="w-8 h-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-black uppercase text-primary tracking-[0.4em] mb-2 opacity-50">MOBILE_PORT</p>
                  <p className="font-black text-xs sm:text-2xl uppercase tracking-tight">{userPhone}</p>
                </div>
                <div className="flex items-center gap-4">
                  <AnimatePresence mode="wait">
                    {copiedPhone ? <Check className="w-8 h-8 text-green-500" /> : <Copy className="w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity" />}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 sm:p-20 rounded-[4rem] shadow-4xl relative border-2 border-border/50 bg-secondary/5 backdrop-blur-3xl overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
              <div className="grid grid-cols-1 gap-10">
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-muted-foreground tracking-[0.5em] ml-6">IDENTITY_ROOT</label>
                  <div className="relative group">
                    <Input placeholder="FULL NAME" required className="bg-background/50 border-2 border-border h-20 rounded-2xl text-[11px] font-black pl-16 uppercase tracking-widest focus:border-primary" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary opacity-40" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-muted-foreground tracking-[0.5em] ml-6">COMMUNICATION_PORT</label>
                  <div className="relative group">
                    <Input type="email" placeholder="EMAIL ADDRESS" required className="bg-background/50 border-2 border-border h-20 rounded-2xl text-[11px] font-black pl-16 uppercase tracking-widest focus:border-primary" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    <Activity className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary opacity-40" />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase text-muted-foreground tracking-[0.5em] ml-6">MANIFEST_TRANSMISSION</label>
                <div className="relative group">
                  <Textarea placeholder="TRANSMIT MESSAGE..." className="min-h-[250px] bg-background/50 border-2 border-border p-10 rounded-[2rem] text-[11px] font-black uppercase tracking-tight focus:border-primary" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                  <Terminal className="absolute right-8 top-8 w-5 h-5 text-primary opacity-20" />
                </div>
              </div>
              <Button type="submit" className="w-full h-24 rounded-full font-black uppercase tracking-[0.6em] text-[11px] sm:text-xs gap-6 shadow-4xl transition-all bg-primary text-primary-foreground hover:scale-[1.02] active:scale-95 shadow-primary/40 group overflow-hidden" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Send className="w-6 h-6 group-hover:translate-x-2 transition-transform" /> START_TRANSMISSION</>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
