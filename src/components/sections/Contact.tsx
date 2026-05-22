
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
  const linkedInUrl = "https://www.linkedin.com/in/sriharshanetala/";

  const copyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({ description: "Email address copied." });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Fallback opens Gmail client with pre-filled content
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=Inquiry from Portfolio&body=Hi Sri Harsha, my name is ${formData.name}. %0D%0A%0D%0A${formData.message}`;
    
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
      toast({ title: "Message Logged", description: "Your inquiry has been stored in my records." });
      setFormData({ name: "", email: "", message: "" });
      window.open(gmailUrl, '_blank');
    } catch (error: any) {
      const permissionError = new FirestorePermissionError({ path: 'messages', operation: 'create' });
      errorEmitter.emit('permission-error', permissionError);
      window.open(gmailUrl, '_blank');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter">
              LET'S <span className="text-primary">TALK</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-md font-medium">
              Open for Full Stack, Frontend, or UI engineering roles. Let's discuss how I can contribute to your vision.
            </p>
          </div>

          <div className="space-y-4">
            <div 
              onClick={copyEmail}
              className="flex items-center gap-5 p-6 glass-card rounded-3xl hover:border-primary/50 cursor-pointer group transition-all"
            >
              <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-black uppercase text-primary tracking-widest">Direct Mail</p>
                <p className="font-bold text-lg">{userEmail}</p>
              </div>
              {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />}
            </div>

            <div className="flex items-center gap-5 p-6 glass-card rounded-3xl">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-primary tracking-widest">Inquiry Line</p>
                <p className="font-bold text-lg">+91 9346759263</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 glass-card rounded-3xl">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-primary tracking-widest">Base Region</p>
                <p className="font-bold text-lg">India (IST)</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-3xl glass-card hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1 shadow-lg"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/sriharshanetala2-dev" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-3xl glass-card hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1 shadow-lg"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-10 rounded-[3rem] shadow-3xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Identity</label>
                <Input 
                  placeholder="Your Name" 
                  required
                  className="bg-background/50 border-border focus:ring-primary h-14 rounded-2xl text-lg font-bold"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Registry Email</label>
                <Input 
                  type="email" 
                  placeholder="email@example.com" 
                  required
                  className="bg-background/50 border-border focus:ring-primary h-14 rounded-2xl text-lg font-bold"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Objective</label>
              <Textarea 
                placeholder="Briefly describe your requirements..." 
                className="min-h-[180px] bg-background/50 border-border focus:ring-primary p-6 resize-none rounded-2xl text-lg font-medium"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-20 rounded-[2rem] bg-primary text-primary-foreground hover:bg-primary/90 font-black uppercase tracking-[0.3em] gap-3 shadow-2xl shadow-primary/30 transition-all hover:scale-[1.02]"
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
