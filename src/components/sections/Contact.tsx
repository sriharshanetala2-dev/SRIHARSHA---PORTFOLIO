"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Phone, Copy, Check, Loader2, User, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { toast } = useToast();

  const userEmail = "sriharshanetala2@gmail.com";
  const userPhone = "+91 9346759263";

  // Direct Gmail compose link logic
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}`;

  const copyPhone = () => {
    navigator.clipboard.writeText(userPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
    toast({ description: "Phone number copied to clipboard." });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    toast({ title: "Secure Gateway Active", description: "Synchronizing with Gmail compose module..." });
    
    setTimeout(() => {
      const mailUrl = `${gmailComposeUrl}&su=Inquiry from Portfolio: ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      window.open(mailUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ name: "" , email: "" , message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden bg-background border-t border-border">
      <div className="absolute inset-0 data-flow-grid opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-black text-primary uppercase tracking-[0.4em] mx-auto lg:mx-0">
              <Mail className="w-4 h-4" />
              Collaboration Gateway
            </div>
            <h2 className="text-4xl sm:text-6xl font-headline font-black tracking-tighter leading-none uppercase">
              GET IN <span className="text-primary">TOUCH</span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed max-w-lg font-bold opacity-80 uppercase tracking-widest mx-auto lg:mx-0">
              Available for high-performance Full Stack development and secure digital orchestration.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <a 
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 sm:p-8 bg-secondary/30 rounded-3xl border-2 border-border hover:border-primary transition-all cursor-pointer group shadow-xl"
            >
              <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-inner">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-black uppercase text-primary tracking-[0.4em] mb-2 opacity-60">Communication Endpoint</p>
                <p className="font-black text-sm sm:text-xl truncate tracking-widest uppercase">{userEmail}</p>
              </div>
              <ExternalLink className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />
            </a>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              onClick={copyPhone}
              className="flex items-center gap-6 p-6 sm:p-8 bg-secondary/30 rounded-3xl border-2 border-border hover:border-primary transition-all cursor-pointer group shadow-xl"
            >
              <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-inner">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-black uppercase text-primary tracking-[0.4em] mb-2 opacity-60">Direct Voice Terminal</p>
                <p className="font-black text-sm sm:text-xl tracking-widest uppercase">{userPhone}</p>
              </div>
              {copiedPhone ? <Check className="w-6 h-6 text-green-500" /> : <Copy className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity" />}
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="bg-card/50 border-2 border-border p-8 sm:p-14 rounded-[3rem] shadow-2xl relative"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase text-muted-foreground tracking-[0.4em] ml-2">Full Name</label>
                <div className="relative">
                  <Input 
                    placeholder="ENTER IDENTITY" 
                    required
                    className="bg-background/40 border-border focus:ring-primary h-16 rounded-2xl text-sm font-black pl-14 shadow-inner uppercase tracking-widest"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary opacity-30" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase text-muted-foreground tracking-[0.4em] ml-2">Email Address</label>
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="ENTER GATEWAY" 
                    required
                    className="bg-background/40 border-border focus:ring-primary h-16 rounded-2xl text-sm font-black pl-14 shadow-inner uppercase tracking-widest"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary opacity-30" />
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-black uppercase text-muted-foreground tracking-[0.4em] ml-2">Message Payload</label>
              <Textarea 
                placeholder="YOUR DATA CONTENT..." 
                className="min-h-[180px] bg-background/40 border-border focus:ring-primary p-8 resize-none rounded-[2rem] text-sm font-black leading-relaxed shadow-inner uppercase tracking-tight"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-20 rounded-full font-black uppercase tracking-[0.4em] text-[12px] gap-4 shadow-3xl transition-all bg-primary text-primary-foreground hover:scale-[1.02] active:scale-95"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Send className="w-5 h-5" /> Send Message</>}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}