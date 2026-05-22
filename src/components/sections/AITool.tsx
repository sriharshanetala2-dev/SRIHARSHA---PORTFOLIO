"use client";

import { useState } from "react";
import Image from "next/image";
import { generateBrandIdentity, type BrandIdentityOutput, type BrandIdentityInput } from "@/ai/flows/generate-brand-identity-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Loader2, Copy, Check, BrainCircuit, Rocket, Layout, Database, Terminal, UserSquare2, Type, Box, ShieldCheck, Cpu, Bug } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export function AITool() {
  const [formData, setFormData] = useState<BrandIdentityInput>({
    projectName: "",
    mission: "",
    audience: "",
    tone: "Professional"
  });
  
  const [result, setResult] = useState<BrandIdentityOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    console.log('%c[CLIENT DEBUG] Initiating Brand Synthesis...', 'color: #3b82f6; font-weight: bold;');
    console.log('[CLIENT DEBUG] Form Data:', formData);

    if (!formData.projectName || !formData.mission || !formData.audience) {
      toast({
        title: "Blueprint Incomplete",
        description: "Please specify all blueprint parameters to activate the architect.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setResult(null);
    try {
      const output = await generateBrandIdentity(formData);
      setResult(output);
      console.log('%c[CLIENT DEBUG] Synthesis Success!', 'color: #10b981; font-weight: bold;', output);
      toast({
        title: "Identity Synthesized",
        description: "Project identity has been successfully architected.",
      });
    } catch (error: any) {
      console.error('%c[CLIENT DEBUG] Synthesis Error!', 'color: #ef4444; font-weight: bold;', error);
      toast({
        title: "System Error",
        description: error.message || "The architect encountered an unexpected exception.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyPackage = () => {
    if (!result) return;
    const text = `IDENTITY PACKAGE: ${formData.projectName}\n----------------\nMISSION: ${formData.mission}\nSTACK: ${result.techStack.join(", ")}\nUI DIRECTION: ${result.uiConcept}\nNARRATIVE: ${result.professionalDescription}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-brand-engine" className="py-32 px-6 bg-background relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.02),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-black text-accent uppercase tracking-[0.3em] flex items-center gap-2">
            <Cpu className="w-3 h-3" />
            Advanced Identity Architect v3.0
          </div>
          <h2 className="text-5xl md:text-8xl font-headline font-bold tracking-tight">AI Brand Engine</h2>
          <p className="text-muted-foreground max-w-2xl text-lg font-medium opacity-80">
            Convert your project vision into a high-performance brand identity. Architected by GenAI, designed for impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 rounded-[3rem] overflow-hidden border border-border/50 bg-card/10 backdrop-blur-md shadow-2xl">
          {/* Input Terminal */}
          <div className="lg:col-span-5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-border/50 space-y-10">
            <div className="flex items-center gap-4 border-b border-border pb-6">
              <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-headline uppercase tracking-tight">Blueprint Terminal</h3>
                <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Awaiting Input Parameters...</p>
              </div>
            </div>

            <form onSubmit={handleGenerate} className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-2">
                  <Type className="w-3 h-3" /> Project Descriptor
                </label>
                <Input 
                  placeholder="e.g., NovaStream, FinPulse..." 
                  value={formData.projectName}
                  onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                  className="h-14 bg-secondary/20 border-border rounded-xl font-bold focus:ring-accent"
                  disabled={loading}
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-2">
                  <Box className="w-3 h-3" /> Functional Mission
                </label>
                <Textarea 
                  placeholder="What problem does this solve? Be specific." 
                  value={formData.mission}
                  onChange={(e) => setFormData({...formData, mission: e.target.value})}
                  className="min-h-[140px] bg-secondary/20 border-border rounded-xl p-4 resize-none focus:ring-accent"
                  disabled={loading}
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-accent">Market Segment</label>
                  <Input 
                    placeholder="e.g., Developers" 
                    value={formData.audience}
                    onChange={(e) => setFormData({...formData, audience: e.target.value})}
                    className="h-14 bg-secondary/20 border-border rounded-xl"
                    disabled={loading}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-accent">Semantic Tone</label>
                  <Select 
                    value={formData.tone} 
                    onValueChange={(val: any) => setFormData({...formData, tone: val})}
                    disabled={loading}
                  >
                    <SelectTrigger className="h-14 bg-secondary/20 border-border rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Professional">Professional</SelectItem>
                      <SelectItem value="Futuristic">Futuristic</SelectItem>
                      <SelectItem value="Minimalist">Minimalist</SelectItem>
                      <SelectItem value="Bold">Bold</SelectItem>
                      <SelectItem value="Friendly">Friendly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-16 bg-accent text-accent-foreground hover:bg-accent/90 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-accent/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                disabled={loading}
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Initiate Synthesis"}
              </Button>

              <div className="flex items-center justify-center gap-2 text-[8px] text-muted-foreground font-bold uppercase tracking-widest opacity-40">
                <Bug className="w-2 h-2" /> Open console (F12) for diagnostics
              </div>
            </form>
          </div>

          {/* Result Interface */}
          <div className="lg:col-span-7 bg-black/40 p-8 md:p-12 flex flex-col relative">
            {result && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={copyPackage}
                className="absolute top-8 right-8 text-muted-foreground hover:text-accent transition-colors"
              >
                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
              </Button>
            )}

            <div className="flex items-center gap-4 border-b border-border/30 pb-6 mb-10">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-headline uppercase tracking-tight">Identity Output</h3>
                <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Verified Architecture</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar">
              {result ? (
                <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-700">
                  <div className="flex flex-col md:flex-row gap-10 items-start">
                    {result.logoUrl && (
                      <div className="space-y-4 shrink-0">
                        <p className="text-[10px] font-black text-accent uppercase tracking-widest">Visual Signature</p>
                        <div className="relative w-40 h-40 rounded-3xl overflow-hidden border-2 border-accent/20 shadow-2xl group cursor-crosshair">
                          <Image src={result.logoUrl} alt="Visual Signature" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    )}
                    
                    <div className="flex-1 space-y-6">
                      <div className="space-y-3">
                        <p className="text-[10px] font-black text-accent uppercase tracking-widest">Core Narrative</p>
                        <h4 className="text-2xl font-headline font-bold leading-tight italic">"{result.professionalDescription}"</h4>
                      </div>
                      <div className="space-y-3">
                        <p className="text-[10px] font-black text-accent uppercase tracking-widest">UI Direction</p>
                        <p className="text-sm text-muted-foreground font-medium">{result.uiConcept}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 pt-10 border-t border-border/30">
                    <p className="text-[10px] font-black text-accent uppercase tracking-widest">Architected Stack</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {result.techStack.map((tech) => (
                        <div key={tech} className="p-4 rounded-xl bg-secondary/30 border border-border/50 text-center text-xs font-bold uppercase tracking-tight hover:border-accent/40 transition-colors">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-30 py-20">
                  <div className="relative">
                    <BrainCircuit className={cn("w-20 h-20 text-accent", loading && "animate-pulse")} />
                    <div className="absolute inset-0 blur-3xl bg-accent/20 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl font-bold font-headline uppercase tracking-tighter">Architect Idle</p>
                    <p className="text-sm max-w-[240px] font-medium leading-relaxed">
                      {loading ? "Synthesizing requirements into identity matrix..." : "Submit a blueprint to begin the synthesis sequence."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
