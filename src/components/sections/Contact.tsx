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
    toast({ description: "Email address copied." });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) {
      toast({
        variant: "destructive",
        title: "Connection Error",
        description: "Directing to default mail client...",
      });
      window.location.href = `mailto:${userEmail}?subject=Contact&body=Hi Sri Harsha, my name is ${formData.name}. %0D%0A%0D%0A${formData.message}`;
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
    } catch (error: any) {
      const permissionError = new FirestorePermissionError({ path: 'messages', operation: 'create' });
      errorEmitter.emit('permission-error', permissionError);
      toast({ variant: "destructive", title: "Failed to Send", description: "Please use direct email." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-7xl font-headline font-bold">Let's <br /><span className="text-primary">Collaborate</span></h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="space-y-4">
            <div 
              onClick={copyEmail}
              className="flex items-center gap-6 p-6 glass-card rounded-3xl hover:border-primary/50 transition-all cursor-pointer group"
            >
              <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-black uppercase text-primary tracking-widest mb-1">Direct Mail</p>
                <p className="text-lg font-bold">{userEmail}</p>
              </div>
              {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 opacity-30" />}
            </div>

            <div className="flex items-center gap-6 p-6 glass-card rounded-3xl">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-primary tracking-widest mb-1">Mobile</p>
                <p className="text-lg font-bold">+91 9346759263</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 glass-card rounded-3xl">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-primary tracking-widest mb-1">Location</p>
                <p className="text-lg font-bold">India (IST)</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/sriharshanetala/" },
              { icon: Github, href: "https://github.com/sriharshanetala2-dev" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                target="_blank"
                className="p-5 rounded-3xl glass-card hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="glass-card p-10 rounded-[3rem] space-y-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-primary tracking-widest ml-1">Full Name</label>
                <Input 
                  placeholder="John Doe" 
                  required
                  className="bg-white/5 h-14 rounded-2xl border-white/5 focus:ring-primary font-medium"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-primary tracking-widest ml-1">Email Address</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  required
                  className="bg-white/5 h-14 rounded-2xl border-white/5 focus:ring-primary font-medium"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase text-primary tracking-widest ml-1">Message Body</label>
              <Textarea 
                placeholder="What can I help you with?" 
                className="min-h-[200px] bg-white/5 rounded-2xl border-white/5 focus:ring-primary p-6 font-medium resize-none"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-16 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg uppercase tracking-widest gap-3 shadow-xl shadow-primary/20"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5" /> Send Message</>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}