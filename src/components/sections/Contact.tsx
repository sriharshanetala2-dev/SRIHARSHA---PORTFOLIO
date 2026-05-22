"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Linkedin, Github, Phone, MapPin, Loader2, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useFirestore } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { motion } from "framer-motion";

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
    
    // Open Gmail client as fallback/primary action
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=Portfolio Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    
    if (!db) {
      window.open(gmailUrl, '_blank');
      return;
    }

    setIsSubmitting(true);
    try {
      addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: serverTimestamp(),
        recipient: userEmail,
      });
      toast({ title: "Transmission Logged", description: "Your message has been stored. Opening Gmail for direct sync..." });
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => window.open(gmailUrl, '_blank'), 1000);
    } catch (error: any) {
      const permissionError = new FirestorePermissionError({ path: 'messages', operation: 'create' });
      errorEmitter.emit('permission-error', permissionError);
      window.open(gmailUrl, '_blank');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-[0.3em]">
              Connect
            </div>
            <h2 className="text-6xl md:text-8xl font-headline font-black tracking-tighter leading-none">
              HIRE <span className="text-primary">ME</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-md font-medium">
              Ready to engineer your next high-performance digital product. Let's discuss your technical requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div 
              onClick={copyEmail}
              className="flex items-center gap-5 p-6 glass-card rounded-3xl hover:border-primary/50 cursor-pointer group transition-all"
            >
              <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-black uppercase text-primary tracking-widest">Mailbox</p>
                <p className="font-bold text-lg truncate">{userEmail}</p>
              </div>
              {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />}
            </div>

            <div className="flex items-center gap-5 p-6 glass-card rounded-3xl">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-primary tracking-widest">Voice</p>
                <p className="font-bold text-lg">+91 9346759263</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a 
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-3xl glass-card hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-2 shadow-xl border-white/5"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/sriharshanetala2-dev" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-3xl glass-card hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-2 shadow-xl border-white/5"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-10 rounded-[3rem] shadow-3xl border-white/5 bg-card/50 backdrop-blur-3xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Full Name</label>
                <Input 
                  placeholder="John Doe" 
                  required
                  className="bg-background/50 border-border focus:ring-primary h-14 rounded-2xl text-lg font-bold"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Email Node</label>
                <Input 
                  type="email" 
                  placeholder="name@domain.com" 
                  required
                  className="bg-background/50 border-border focus:ring-primary h-14 rounded-2xl text-lg font-bold"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Requirement Brief</label>
              <Textarea 
                placeholder="Describe your project scope or role requirements..." 
                className="min-h-[180px] bg-background/50 border-border focus:ring-primary p-6 resize-none rounded-2xl text-lg font-medium"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-20 rounded-[2rem] bg-primary text-primary-foreground hover:bg-primary/90 font-black uppercase tracking-[0.3em] gap-3 shadow-2xl shadow-primary/30 transition-all hover:scale-[1.03] active:scale-[0.98]"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Send className="w-5 h-5" /> Initiate Protocol</>}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
