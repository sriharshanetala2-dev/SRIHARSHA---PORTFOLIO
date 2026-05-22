"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Phone, Copy, Check, Loader2, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useFirestore } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { toast } = useToast();
  const db = useFirestore();

  const userEmail = "sriharshanetala2@gmail.com";
  const userPhone = "+91 9346759263";

  // Direct Gmail compose link
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}`;

  const copyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
    toast({ description: "Email address copied to clipboard." });
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(userPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
    toast({ description: "Phone number copied to clipboard." });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

    toast({ title: "Synchronizing Gateway", description: "Redirecting to Gmail compose..." });
    
    setTimeout(() => {
      const mailUrl = `${gmailComposeUrl}&su=Portfolio Inquiry: ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      window.open(mailUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative overflow-hidden bg-background border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-widest">
              <Mail className="w-4 h-4" />
              Collaboration Gate
            </div>
            <h2 className="text-3xl sm:text-5xl font-headline font-black tracking-tighter leading-none uppercase">
              GET IN <span className="text-primary">TOUCH</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg font-bold opacity-80 uppercase tracking-widest">
              Open for professional Full Stack development opportunities and secure collaboration.
            </p>
          </div>

          <div className="space-y-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              onClick={copyEmail}
              className="flex items-center gap-4 p-6 bg-secondary/30 rounded-2xl border border-border hover:border-primary transition-all cursor-pointer group shadow-sm"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] font-black uppercase text-primary tracking-widest mb-1 opacity-60">Professional Email</p>
                <p className="font-black text-sm sm:text-base truncate tracking-tight uppercase">{userEmail}</p>
              </div>
              {copiedEmail ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />}
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              onClick={copyPhone}
              className="flex items-center gap-4 p-6 bg-secondary/30 rounded-2xl border border-border hover:border-primary transition-all cursor-pointer group shadow-sm"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[9px] font-black uppercase text-primary tracking-widest mb-1 opacity-60">Direct Line</p>
                <p className="font-black text-sm sm:text-base tracking-tight uppercase">{userPhone}</p>
              </div>
              {copiedPhone ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />}
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card/50 border border-border p-8 rounded-[2rem] shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Full Name</label>
                <div className="relative">
                  <Input 
                    placeholder="ENTER NAME" 
                    required
                    className="bg-background/40 border-border focus:ring-primary h-12 rounded-xl text-xs font-black pl-10 shadow-inner uppercase tracking-wider"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground opacity-30" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="ENTER EMAIL" 
                    required
                    className="bg-background/40 border-border focus:ring-primary h-12 rounded-xl text-xs font-black pl-10 shadow-inner uppercase tracking-wider"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={isSubmitting}
                  />
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground opacity-30" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Message</label>
              <Textarea 
                placeholder="YOUR MESSAGE CONTENT..." 
                className="min-h-[140px] bg-background/40 border-border focus:ring-primary p-5 resize-none rounded-xl text-xs font-black leading-relaxed shadow-inner uppercase tracking-tight"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-14 rounded-full font-black uppercase tracking-widest text-[11px] gap-3 shadow-lg transition-all bg-primary text-primary-foreground hover:brightness-110"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Send className="w-4 h-4" /> Send Message</>}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
