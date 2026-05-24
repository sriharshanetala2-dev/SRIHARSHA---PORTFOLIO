"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const userEmail = "sriharshanetala2@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=Inquiry: ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      window.open(gmailUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ name: "" , email: "" , message: "" });
      toast({ title: "Redirecting...", description: "Opening your mail client." });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="section-label mx-auto">COLLABORATION NODE</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to synchronize on your next high-performance engineering project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-card border border-border flex items-center gap-6">
              <div className="p-4 rounded-xl bg-primary/10 text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email Address</p>
                <p className="text-lg font-bold">{userEmail}</p>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border flex items-center gap-6">
              <div className="p-4 rounded-xl bg-primary/10 text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Contact Phone</p>
                <p className="text-lg font-bold">+91 9346759263</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-card border border-border shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                  <Input required placeholder="JOHN DOE" className="h-14 rounded-xl bg-muted/30" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Port</label>
                  <Input type="email" required placeholder="JOHN@EXAMPLE.COM" className="h-14 rounded-xl bg-muted/30" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message Manifest</label>
                <Textarea required placeholder="YOUR MESSAGE..." className="min-h-[160px] rounded-2xl bg-muted/30" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
              </div>
              <Button type="submit" className="w-full h-16 rounded-full text-base font-bold uppercase tracking-widest" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5 mr-2" /> Start Transmission</>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}