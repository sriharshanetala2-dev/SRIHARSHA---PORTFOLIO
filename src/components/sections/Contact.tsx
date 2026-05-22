
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Linkedin, Github, Phone, Copy, Check, Loader2 } from "lucide-react";
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
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=Hiring Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    
    setIsSubmitting(true);
    
    // Log message to Firestore if available
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

    toast({ title: "Redirecting...", description: "Opening Gmail for direct synchronization." });
    
    // Always open Gmail for better user experience
    setTimeout(() => {
      window.open(gmailUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-[0.4em]">
              Connect
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-headline font-black tracking-tighter leading-none uppercase">
              HIRE <span className="text-primary">ME</span>
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-md font-medium">
              Ready to engineer your next high-performance digital product. Let's discuss your Full Stack, UI, or Frontend requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div 
              onClick={copyEmail}
              className="flex items-center gap-5 p-6 md:p-8 glass-card rounded-[2rem] hover:border-primary transition-all cursor-pointer group shadow-xl"
            >
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-[10px] font-black uppercase text-primary tracking-widest">Mailbox</p>
                <p className="font-bold text-sm sm:text-base truncate">{userEmail}</p>
              </div>
              {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />}
            </div>

            <div className="flex items-center gap-5 p-6 md:p-8 glass-card rounded-[2rem] shadow-xl">
              <div className="p-4 rounded-xl bg-primary/10 text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-primary tracking-widest">Voice</p>
                <p className="font-bold text-sm sm:text-base">+91 9346759263</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {[
              { icon: Linkedin, href: linkedInUrl },
              { icon: Github, href: "https://github.com/sriharshanetala2-dev" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass-card hover:bg-primary hover:text-primary-foreground transition-all shadow-xl border-white/10"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-[3.5rem] shadow-3xl border-white/5 bg-card/40 backdrop-blur-3xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Full Name</label>
                <Input 
                  placeholder="John Doe" 
                  required
                  className="bg-background/50 border-border focus:ring-primary h-14 rounded-2xl text-base font-bold"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Email</label>
                <Input 
                  type="email" 
                  placeholder="name@domain.com" 
                  required
                  className="bg-background/50 border-border focus:ring-primary h-14 rounded-2xl text-base font-bold"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Requirement Brief</label>
              <Textarea 
                placeholder="Describe your project scope or role requirements..." 
                className="min-h-[160px] bg-background/50 border-border focus:ring-primary p-5 resize-none rounded-3xl text-base font-medium"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-16 rounded-[2rem] bg-primary text-primary-foreground hover:bg-primary/90 font-black uppercase tracking-[0.3em] gap-3 shadow-2xl shadow-primary/30 transition-all active:scale-[0.98]"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Send className="w-5 h-5" /> Initiate Sync</>}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
