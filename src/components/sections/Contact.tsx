"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Linkedin, Github, Phone, Copy, Check, Loader2, User } from "lucide-react";
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
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=Portfolio Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    
    setIsSubmitting(true);
    
    // Attempt Firestore sync for analytics/records
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

    toast({ title: "Redirecting...", description: "Opening Gmail to sync your inquiry." });
    
    setTimeout(() => {
      window.open(gmailUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-black text-primary uppercase tracking-[0.3em]">
              Connect
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-headline font-black tracking-tighter leading-none uppercase">
              HIRE <span className="text-primary">ME</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md font-medium">
              Ready to engineer your next digital product. Let's discuss your Full Stack, UI, or Frontend requirements.
            </p>
          </div>

          <div className="space-y-4">
            <div 
              onClick={copyEmail}
              className="flex items-center gap-5 p-6 glass-card rounded-2xl hover:border-primary transition-all cursor-pointer group shadow-lg"
            >
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-xs font-black uppercase text-primary tracking-widest">Email</p>
                <p className="font-bold text-sm sm:text-base truncate">{userEmail}</p>
              </div>
              {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />}
            </div>

            <div className="flex items-center gap-5 p-6 glass-card rounded-2xl shadow-lg">
              <div className="p-4 rounded-xl bg-primary/10 text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-black uppercase text-primary tracking-widest">Voice</p>
                <p className="font-bold text-sm sm:text-base tracking-tight">+91 9346759263</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="p-5 rounded-2xl glass-card hover:bg-primary hover:text-primary-foreground transition-all shadow-lg border-border">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/sriharshanetala2-dev" target="_blank" rel="noopener noreferrer" className="p-5 rounded-2xl glass-card hover:bg-primary hover:text-primary-foreground transition-all shadow-lg border-border">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-[3rem] shadow-2xl border-border bg-card/40"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-muted-foreground tracking-widest ml-1">Full Name</label>
                <div className="relative">
                  <Input 
                    placeholder="Enter your name" 
                    required
                    className="bg-background/50 border-border focus:ring-primary h-14 rounded-xl text-base font-bold pl-10"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground opacity-40" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-muted-foreground tracking-widest ml-1">Email</label>
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="name@domain.com" 
                    required
                    className="bg-background/50 border-border focus:ring-primary h-14 rounded-xl text-base font-bold pl-10"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground opacity-40" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-muted-foreground tracking-widest ml-1">Message</label>
              <Textarea 
                placeholder="Describe your project scope..." 
                className="min-h-[160px] bg-background/50 border-border focus:ring-primary p-5 resize-none rounded-2xl text-base font-medium"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-16 rounded-full font-black uppercase tracking-[0.2em] gap-3 shadow-xl transition-all active:scale-[0.98]"
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
