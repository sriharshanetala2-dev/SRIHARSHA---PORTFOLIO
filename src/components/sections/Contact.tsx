
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Linkedin, Github, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you shortly.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-headline font-bold">Get In Touch</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a project in mind or want to discuss a new opportunity? 
              I'm always open to talking about new ideas and collaborative ventures.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 border border-border group hover:border-accent/50 transition-colors">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Email Me</p>
                <p className="text-lg font-medium">hello@sriharsha.dev</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            {[
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Github, label: "GitHub" },
              { icon: Twitter, label: "Twitter" }
            ].map((social) => (
              <button 
                key={social.label}
                className="p-4 rounded-full bg-secondary text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-md"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card rounded-3xl border border-border shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <Input 
                placeholder="John Doe" 
                required
                className="bg-secondary/30 h-12"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <Input 
                type="email" 
                placeholder="john@example.com" 
                required
                className="bg-secondary/30 h-12"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Your Message</label>
            <Textarea 
              placeholder="Tell me about your project..." 
              className="min-h-[180px] bg-secondary/30"
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl font-bold text-lg gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <Send className="w-5 h-5" />}
          </Button>
        </form>
      </div>
    </section>
  );
}
