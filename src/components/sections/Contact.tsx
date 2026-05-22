"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Linkedin, Github, Phone, Copy, Check, Loader2, User, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useFirestore } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const db = useFirestore();

  const userEmail = "sriharshanetala2@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/sriharsha-netala-dev/";

  const copyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({ description: "Email address copied to clipboard." });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=Professional Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    
    setIsSubmitting(true);
    
    if (db) {
      addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: serverTimestamp(),
        recipient: userEmail,
      }).catch((e) => {
        const permissionError = new FirestorePermissionError({ path: 'messages', operation: 'create' });
        errorEmitter.emit('permission-error', permissionError);
      });
    }

    toast({ title: "Connecting Node", description: "Redirecting to secure email gateway..." });
    
    setTimeout(() => {
      window.open(gmailUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-44 px-6 relative overflow-hidden bg-background">
      <div className="absolute inset-0 data-flow-grid opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-[12px] font-black text-primary uppercase tracking-[0.4em]">
              <Sparkles className="w-4 h-4" />
              Collaboration Gate
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black tracking-tighter leading-[1.05] uppercase">
              HIRE <span className="text-primary">ME</span>
            </h2>
            <p className="text-lg sm:text-2xl text-muted-foreground leading-relaxed max-w-lg font-medium opacity-80">
              Ready to engineer your next digital ecosystem. Let's discuss your architectural requirements.
            </p>
          </div>

          <div className="space-y-6">
            <div 
              onClick={copyEmail}
              className="flex items-center gap-6 p-8 glass-card rounded-[2rem] hover:border-primary transition-all cursor-pointer group shadow-2xl active:scale-[0.98]"
            >
              <div className="p-5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <Mail className="w-7 h-7" />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-[11px] font-black uppercase text-primary tracking-[0.5em] mb-1">Direct Sync</p>
                <p className="font-bold text-base sm:text-xl truncate">{userEmail}</p>
              </div>
              {copied ? <Check className="w-6 h-6 text-green-500" /> : <Copy className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity" />}
            </div>

            <div className="flex items-center gap-6 p-8 glass-card rounded-[2rem] shadow-2xl">
              <div className="p-5 rounded-2xl bg-primary/10 text-primary">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[11px] font-black uppercase text-primary tracking-[0.5em] mb-1">Voice Node</p>
                <p className="font-bold text-base sm:text-xl tracking-tight">+91 9346759263</p>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            {[
              { icon: Linkedin, href: linkedInUrl },
              { icon: Github, href: "https://github.com/sriharshanetala2-dev" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-6 rounded-[1.5rem] glass-card hover:bg-primary hover:text-primary-foreground transition-all shadow-xl border-border hover:translate-y-[-5px] active:scale-90"
              >
                <social.icon className="w-7 h-7" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-16 rounded-[3.5rem] shadow-3xl border-border bg-card/30 backdrop-blur-3xl"
        >
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase text-muted-foreground tracking-[0.4em] ml-2">Identity</label>
                <div className="relative">
                  <Input 
                    placeholder="Full name" 
                    required
                    className="bg-background/40 border-border focus:ring-primary h-16 rounded-2xl text-base font-bold pl-12 shadow-inner"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground opacity-40" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase text-muted-foreground tracking-[0.4em] ml-2">Endpoint</label>
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="Email address" 
                    required
                    className="bg-background/40 border-border focus:ring-primary h-16 rounded-2xl text-base font-bold pl-12 shadow-inner"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground opacity-40" />
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-black uppercase text-muted-foreground tracking-[0.4em] ml-2">Payload</label>
              <Textarea 
                placeholder="Message or project brief..." 
                className="min-h-[200px] bg-background/40 border-border focus:ring-primary p-6 resize-none rounded-[2rem] text-base font-medium leading-relaxed shadow-inner"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-16 rounded-full font-black uppercase tracking-[0.3em] text-[12px] gap-4 shadow-3xl transition-all active:scale-[0.98] hover:scale-[1.02]"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Send className="w-5 h-5" /> Execute Transmission</>}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}