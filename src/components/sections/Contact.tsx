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
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 relative overflow-hidden bg-transparent border-t border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-primary/10 border border-primary/25 text-[11px] font-black text-primary uppercase tracking-[0.5em]">
            <ShieldCheck className="w-4 h-4" />
            SYSTEM SYNC V3.0
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black tracking-tighter uppercase leading-none shimmer-text">
            COLLABORATION <span className="text-gradient">NODE</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-70 max-w-2xl">
            Architecting high-frequency engineering partnerships and technical synchronization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-start">
          <div className="space-y-6 sm:space-y-10">
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}`} target="_blank" className="flex items-center gap-6 p-8 bg-card/40 backdrop-blur-xl border border-border rounded-[2.5rem] hover:border-primary transition-all group shadow-xl">
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-black uppercase text-primary tracking-[0.4em] mb-1 opacity-50">REGISTRY_ENDPOINT</p>
                <p className="font-black text-sm sm:text-lg truncate uppercase tracking-tight">{userEmail}</p>
              </div>
              <ExternalLink className="w-5 h-5 opacity-20 group-hover:opacity-100" />
            </a>

            <div onClick={copyPhone} className="flex items-center gap-6 p-8 bg-card/40 backdrop-blur-xl border border-border rounded-[2.5rem] hover:border-primary transition-all cursor-pointer group shadow-xl">
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-black uppercase text-primary tracking-[0.4em] mb-1 opacity-50">MOBILE_PORT</p>
                <p className="font-black text-sm sm:text-lg uppercase tracking-tight">{userPhone}</p>
              </div>
              <div className="flex items-center gap-2">
                <AnimatePresence mode="wait">
                  {copiedPhone ? <Check className="w-6 h-6 text-green-500" /> : <Copy className="w-6 h-6 opacity-20 group-hover:opacity-100" />}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12 rounded-[3rem] border border-border/50 bg-secondary/5 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-muted-foreground tracking-[0.4em] ml-4">IDENTITY_ROOT</label>
                  <div className="relative group">
                    <Input placeholder="FULL NAME" required className="bg-background/50 border border-border h-16 rounded-xl text-xs font-black pl-14 uppercase tracking-widest focus:border-primary" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary opacity-30" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-muted-foreground tracking-[0.4em] ml-4">COMMUNICATION_PORT</label>
                  <div className="relative group">
                    <Input type="email" placeholder="EMAIL ADDRESS" required className="bg-background/50 border border-border h-16 rounded-xl text-xs font-black pl-14 uppercase tracking-widest focus:border-primary" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    <Activity className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary opacity-30" />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase text-muted-foreground tracking-[0.4em] ml-4">MANIFEST_TRANSMISSION</label>
                <div className="relative group">
                  <Textarea placeholder="TRANSMIT MESSAGE..." className="min-h-[180px] bg-background/50 border border-border p-6 rounded-[1.5rem] text-xs font-black uppercase tracking-tight focus:border-primary" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                  <Terminal className="absolute right-6 top-6 w-4 h-4 text-primary opacity-20" />
                </div>
              </div>
              <Button type="submit" className="w-full h-20 rounded-full font-black uppercase tracking-[0.5em] text-[11px] gap-4 shadow-xl transition-all bg-primary text-primary-foreground hover:scale-[1.01] group overflow-hidden" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> START_TRANSMISSION</>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
