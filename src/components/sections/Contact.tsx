
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
    
    // Fallback always works for mail clients
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=Inquiry from Portfolio&body=Hi Sri Harsha, my name is ${formData.name}. %0D%0A%0D%0A${formData.message}`;
    
    if (!db) {
      window.open(gmailUrl, '_blank');
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: serverTimestamp(),
        recipient: userEmail,
      });
      toast({ title: "Message Sent", description: "I will get back to you shortly." });
      setFormData({ name: "", email: "", message: "" });
      // Also open the mail client for better redundancy
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
    <section id="contact" className="py-24 px-6 bg-secondary/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-headline font-black">Let's <span className="text-primary">Connect</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Currently open for Full Stack, Frontend, or UI Developer opportunities. Let's build something amazing together.
            </p>
          </div>

          <div className="space-y-4">
            <div 
              onClick={copyEmail}
              className="flex items-center gap-4 p-5 glass-card rounded-2xl hover:border-primary/50 cursor-pointer group"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Email</p>
                <p className="font-bold">{userEmail}</p>
              </div>
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 opacity-30" />}
            </div>

            <div className="flex items-center gap-4 p-5 glass-card rounded-2xl">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Phone</p>
                <p className="font-bold">+91 9346759263</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 glass-card rounded-2xl">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Location</p>
                <p className="font-bold">India (IST)</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl glass-card hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/sriharshanetala2-dev" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl glass-card hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest ml-1">Name</label>
                <Input 
                  placeholder="Your Name" 
                  required
                  className="bg-background/50 border-border focus:ring-primary h-12"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest ml-1">Email</label>
                <Input 
                  type="email" 
                  placeholder="email@example.com" 
                  required
                  className="bg-background/50 border-border focus:ring-primary h-12"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest ml-1">Message</label>
              <Textarea 
                placeholder="How can I help you?" 
                className="min-h-[150px] bg-background/50 border-border focus:ring-primary p-4 resize-none"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-14 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-widest gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Send className="w-4 h-4" /> Send Inquiry</>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
