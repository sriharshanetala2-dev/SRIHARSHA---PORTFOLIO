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

  const copyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      description: "Email address copied to clipboard.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!db) {
      toast({
        variant: "destructive",
        title: "Database Offline",
        description: "Firestore is not connected. Please use the direct email link instead.",
      });
      window.location.href = `mailto:${userEmail}?subject=Contact from Portfolio&body=Hi Sri Harsha, my name is ${formData.name}. %0D%0A%0D%0A${formData.message}`;
      return;
    }

    setIsSubmitting(true);
    
    try {
      const messagesRef = collection(db, 'messages');
      const submissionData = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
        recipient: userEmail,
        source: "Portfolio Contact Form"
      };

      await addDoc(messagesRef, submissionData);
      
      toast({
        title: "Message Transmitted",
        description: "Your message has been securely stored. I will review it and get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Submission error:", error);
      const permissionError = new FirestorePermissionError({
        path: 'messages',
        operation: 'create',
      });
      errorEmitter.emit('permission-error', permissionError);
      
      toast({
        variant: "destructive",
        title: "Transmission Failed",
        description: "Neural link interrupted. Please use the direct email button below.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 border-t border-border bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(var(--primary),0.03),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-black text-accent uppercase tracking-[0.2em]">
              Contact Module v2.0
            </div>
            <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter">Get in <span className="text-accent">Touch</span></h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-md font-medium">
              I'm ready to collaborate on your next big idea. Drop a message or reach out directly via the channels below.
            </p>
          </div>

          <div className="space-y-4">
            <div 
              onClick={copyEmail}
              className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border group hover:border-accent/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-4 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform relative z-10">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 relative z-10">
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black mb-1">Direct Correspondence</p>
                <p className="text-lg font-bold group-hover:text-accent transition-colors">
                  {userEmail}
                </p>
              </div>
              <div className="relative z-10 text-muted-foreground/30 group-hover:text-accent transition-colors">
                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border group hover:border-accent/50 transition-all duration-300">
              <div className="p-4 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black mb-1">Voice Communication</p>
                <a href="tel:+919346759263" className="text-lg font-bold hover:text-accent transition-colors">
                  +91 9346759263
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border group hover:border-accent/50 transition-all duration-300">
              <div className="p-4 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black mb-1">Home Base</p>
                <p className="text-lg font-bold">India (UTC+5:30)</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sriharshanetala/" },
              { icon: Github, label: "GitHub", href: "https://github.com/sriharshanetala2-dev" }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-secondary text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-500 shadow-xl transform hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />
          <form onSubmit={handleSubmit} className="space-y-8 p-10 bg-card rounded-[2rem] border border-border shadow-2xl relative overflow-hidden backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-accent ml-1">Identity Name</label>
                <Input 
                  placeholder="e.g. John Doe" 
                  required
                  className="bg-secondary/20 h-14 rounded-xl border-border focus:ring-accent focus:border-accent font-medium"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-accent ml-1">Return Email</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  required
                  className="bg-secondary/20 h-14 rounded-xl border-border focus:ring-accent focus:border-accent font-medium"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-accent ml-1">Mission Details</label>
              <Textarea 
                placeholder="Briefly describe your project or inquiry..." 
                className="min-h-[220px] bg-secondary/20 rounded-xl border-border focus:ring-accent focus:border-accent p-6 font-medium resize-none"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-16 bg-accent text-accent-foreground hover:bg-accent/90 rounded-2xl font-black text-sm uppercase tracking-[0.2em] gap-3 shadow-xl transition-all hover:scale-[1.01] active:scale-[0.98]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Synchronizing...
                </>
              ) : (
                <>
                  Establish Connection
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
            
            <p className="text-center text-[9px] text-muted-foreground uppercase font-bold tracking-tighter opacity-50">
              * Messages are encrypted and stored in the secure Firebase Cloud.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
