
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Linkedin, Github, Phone, Copy, Check, Loader2, User, Terminal } from "lucide-react";
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

  const copyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({ description: "Email address copied to clipboard." });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    
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

    toast({ title: "Sending Message", description: "Opening your email client..." });
    
    setTimeout(() => {
      window.open(gmailUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-44 px-6 relative overflow-hidden bg-background border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-10">
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs font-black text-primary uppercase tracking-widest">
              <Mail className="w-5 h-5" />
              Get In Touch
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-headline font-black tracking-tighter leading-[1.05] uppercase">
              LET'S <span className="text-primary">TALK</span>
            </h2>
            <p className="text-lg sm:text-2xl text-muted-foreground leading-relaxed max-w-lg font-bold opacity-80 uppercase tracking-tight">
              Open for professional collaboration and Full Stack opportunities.
            </p>
          </div>

          <div className="space-y-8">
            <div 
              onClick={copyEmail}
              className="flex items-center gap-8 p-10 glass-card rounded-3xl hover:border-primary transition-all cursor-pointer group shadow-lg border-border bg-card/10"
            >
              <div className="p-6 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
                <Mail className="w-8 h-8" />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-xs font-black uppercase text-primary tracking-widest mb-2 opacity-60">Email Address</p>
                <p className="font-black text-xl sm:text-2xl truncate tracking-tight">{userEmail}</p>
              </div>
              {copied ? <Check className="w-8 h-8 text-green-500" /> : <Copy className="w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity" />}
            </div>

            <div className="flex items-center gap-8 p-10 glass-card rounded-3xl shadow-lg border-border bg-card/10">
              <div className="p-6 rounded-2xl bg-primary/10 text-primary shadow-inner">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xs font-black uppercase text-primary tracking-widest mb-2 opacity-60">Phone Number</p>
                <p className="font-black text-xl sm:text-2xl tracking-tight">+91 9346759263</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-14 rounded-[3rem] shadow-2xl border-border bg-card/30"
        >
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-xs font-black uppercase text-muted-foreground tracking-widest ml-3">Full Name</label>
                <div className="relative">
                  <Input 
                    placeholder="NAME" 
                    required
                    className="bg-background/40 border-border focus:ring-primary h-16 rounded-2xl text-base font-black pl-14 shadow-inner uppercase tracking-wider"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground opacity-30" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black uppercase text-muted-foreground tracking-widest ml-3">Email Address</label>
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="EMAIL" 
                    required
                    className="bg-background/40 border-border focus:ring-primary h-16 rounded-2xl text-base font-black pl-14 shadow-inner uppercase tracking-wider"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground opacity-30" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-xs font-black uppercase text-muted-foreground tracking-widest ml-3">Message</label>
              <Textarea 
                placeholder="YOUR MESSAGE..." 
                className="min-h-[200px] bg-background/40 border-border focus:ring-primary p-8 resize-none rounded-3xl text-base font-black leading-relaxed shadow-inner uppercase tracking-tight"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-18 rounded-full font-black uppercase tracking-widest text-sm gap-6 shadow-2xl transition-all bg-primary text-primary-foreground hover:brightness-110 py-8"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader2 className="w-8 h-8 animate-spin" /> : <><Send className="w-6 h-6" /> Send Message</>}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
