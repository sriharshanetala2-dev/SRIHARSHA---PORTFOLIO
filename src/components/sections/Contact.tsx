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
      // Logic for pre-filled Gmail compose
      const mailUrl = `${gmailComposeUrl}&su=Inquiry from Portfolio: ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      window.open(mailUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ name: "" , email: "" , message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 sm:py-40 px-4 sm:px-6 relative overflow-hidden bg-background border-t border-border/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-black text-primary uppercase tracking-[0.5em] mx-auto lg:mx-0 shadow-lg">
              <Mail className="w-5 h-5" />
              Collaboration Hub
            </div>
            <h2 className="text-4xl sm:text-7xl font-headline font-black tracking-tighter leading-none uppercase shimmer-text">
              LET'S <span className="text-gradient">CONNECT</span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed max-w-lg font-bold uppercase tracking-widest opacity-70 mx-auto lg:mx-0">
              Direct recruitment and project synchronization available. Optimized for high-performance development partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <a 
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-8 bg-card border border-border/50 rounded-[2.5rem] hover:border-primary transition-all cursor-pointer group shadow-2xl"
            >
              <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-black uppercase text-primary tracking-[0.4em] mb-2 opacity-60">Primary Endpoint</p>
                <p className="font-black text-xs sm:text-xl truncate tracking-widest uppercase">{userEmail}</p>
              </div>
              <ExternalLink className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />
            </a>

            <div 
              onClick={copyPhone}
              className="flex items-center gap-6 p-8 bg-card border border-border/50 rounded-[2.5rem] hover:border-primary transition-all cursor-pointer group shadow-2xl"
            >
              <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-black uppercase text-primary tracking-[0.4em] mb-2 opacity-60">Mobile Subsystem</p>
                <p className="font-black text-xs sm:text-xl tracking-widest uppercase">{userPhone}</p>
              </div>
              <div className="flex items-center gap-3">
                {copiedPhone ? <Check className="w-6 h-6 text-green-500" /> : <Copy className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity" />}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card border border-border/50 p-8 sm:p-14 rounded-[3rem] shadow-3xl relative"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase text-muted-foreground tracking-[0.4em] ml-2">Full Name</label>
                <div className="relative">
                  <Input 
                    placeholder="ENTER NAME" 
                    required
                    className="bg-background border border-border focus:ring-primary h-16 rounded-2xl text-sm font-black pl-14 shadow-inner uppercase tracking-widest"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary opacity-30" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase text-muted-foreground tracking-[0.4em] ml-2">Email Address</label>
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="ENTER EMAIL" 
                    required
                    className="bg-background border border-border focus:ring-primary h-16 rounded-2xl text-sm font-black pl-14 shadow-inner uppercase tracking-widest"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary opacity-30" />
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase text-muted-foreground tracking-[0.4em] ml-2">Message</label>
              <Textarea 
                placeholder="TYPE YOUR MESSAGE..." 
                className="min-h-[180px] bg-background border border-border focus:ring-primary p-8 resize-none rounded-[2.5rem] text-sm font-black leading-relaxed shadow-inner uppercase tracking-tight"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-20 rounded-full font-black uppercase tracking-[0.5em] text-xs gap-4 shadow-3xl transition-all bg-primary text-primary-foreground hover:scale-[1.02] active:scale-95 shadow-primary/30"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader2 className="w-7 h-7 animate-spin" /> : <><Send className="w-6 h-6" /> Send Message</>}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}