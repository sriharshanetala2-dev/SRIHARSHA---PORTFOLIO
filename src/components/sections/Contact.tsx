"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Linkedin, Github, Phone, MapPin, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useFirestore } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const db = useFirestore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!db) {
      toast({
        variant: "destructive",
        title: "Configuration Missing",
        description: "Firebase is not configured. Please use the direct email link instead.",
      });
      return;
    }

    setIsSubmitting(true);
    
    const messagesRef = collection(db, 'messages');
    const submissionData = {
      ...formData,
      timestamp: serverTimestamp(),
      recipient: "sriharshanetala2@gmail.com"
    };

    addDoc(messagesRef, submissionData)
      .then(() => {
        setIsSubmitting(false);
        toast({
          title: "Message Sent!",
          description: "Your message has been saved. I will be notified and get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(async (error) => {
        setIsSubmitting(false);
        const permissionError = new FirestorePermissionError({
          path: messagesRef.path,
          operation: 'create',
          requestResourceData: submissionData,
        });
        errorEmitter.emit('permission-error', permissionError);
        
        toast({
          variant: "destructive",
          title: "Submission Error",
          description: "Something went wrong. Please try emailing me directly.",
        });
      });
  };

  return (
    <section id="contact" className="py-32 px-6 border-t border-border bg-background/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Let's Connect</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-border group hover:border-accent/50 transition-all duration-300">
              <div className="p-4 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Email Me</p>
                <a href="mailto:sriharshanetala2@gmail.com" className="text-lg font-medium hover:text-accent transition-colors">
                  sriharshanetala2@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-border group hover:border-accent/50 transition-all duration-300">
              <div className="p-4 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Call Me</p>
                <a href="tel:+919346759263" className="text-lg font-medium hover:text-accent transition-colors">
                  +91 9346759263
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-border group hover:border-accent/50 transition-all duration-300">
              <div className="p-4 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Location</p>
                <p className="text-lg font-medium">India</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pt-4">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sriharshanetala/" },
              { icon: Github, label: "GitHub", href: "https://github.com/sriharshanetala2-dev" }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-secondary text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-accent/5 blur-3xl rounded-full -z-10" />
          <form onSubmit={handleSubmit} className="space-y-8 p-10 bg-card rounded-3xl border border-border shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-semibold ml-1">Full Name</label>
                <Input 
                  placeholder="Your Name" 
                  required
                  className="bg-secondary/20 h-14 rounded-xl border-border focus:border-accent"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold ml-1">Email Address</label>
                <Input 
                  type="email" 
                  placeholder="name@example.com" 
                  required
                  className="bg-secondary/20 h-14 rounded-xl border-border focus:border-accent"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-sm font-semibold ml-1">Your Message</label>
              <Textarea 
                placeholder="Hi Sri Harsha, I'd like to talk about..." 
                className="min-h-[200px] bg-secondary/20 rounded-xl border-border focus:border-accent"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-16 bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl font-bold text-lg gap-3 shadow-xl transition-all active:scale-[0.98]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}