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
      toast({
        title: "Identity Synthesized",
        description: "Project identity has been successfully architected.",
      });
    } catch (error: any) {
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.03),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="px-5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-black text-accent uppercase tracking-[0.4em] flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" />
            GenAI Identity Architect v4.0
          </div>
          <h2 className="text-6xl md:text-8xl font-headline font-black tracking-tighter">AI BRAND ENGINE</h2>
          <p className="text-muted-foreground max-w-2xl text-xl font-medium opacity-70">
            Convert vision into engineering specifications. Architected by LLMs, designed for elite performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-[3.5rem] overflow-hidden border border-white/10 bg-card/10 backdrop-blur-3xl shadow-3xl">
          {/* Input Terminal */}
          <div className="lg:col-span-5 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-white/10 space-y-12 bg-black/20">
            <div className="flex items-center gap-5">
              <div className="p-4 rounded-3xl bg-accent/10 text-accent ring-1 ring-accent/20">
                <Terminal className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-black font-headline uppercase tracking-tight">Blueprint Terminal</h3>
                <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em]">Awaiting parameters...</p>
              </div>
            </div>

            <form onSubmit={handleGenerate} className="space-y-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-accent flex items-center gap-2 ml-1">
                  <Type className="w-3.5 h-3.5" /> Project Name
                </label>
                <Input 
                  placeholder="e.g., NovaStream" 
                  value={formData.projectName}
                  onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                  className="h-16 bg-secondary/30 border-white/5 rounded-2xl font-bold text-lg focus:ring-accent"
                  disabled={loading}
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-accent flex items-center gap-2 ml-1">
                  <Box className="w-3.5 h-3.5" /> Core Mission
                </label>
                <Textarea 
                  placeholder="Describe the functional problem being solved..." 
                  value={formData.mission}
                  onChange={(e) => setFormData({...formData, mission: e.target.value})}
                  className="min-h-[160px] bg-secondary/30 border-white/5 rounded-2xl p-6 resize-none focus:ring-accent text-lg"
                  disabled={loading}
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-accent ml-1">Target Segment</label>
                  <Input 
                    placeholder="e.g., Devs" 
                    value={formData.audience}
                    onChange={(e) => setFormData({...formData, audience: e.target.value})}
                    className="h-16 bg-secondary/30 border-white/5 rounded-2xl font-bold"
                    disabled={loading}
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-accent ml-1">Tone Profile</label>
                  <Select 
                    value={formData.tone} 
                    onValueChange={(val: any) => setFormData({...formData, tone: val})}
                    disabled={loading}
                  >
                    <SelectTrigger className="h-16 bg-secondary/30 border-white/5 rounded-2xl font-bold">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="glass-card">
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
                className="w-full h-20 bg-accent text-accent-foreground hover:bg-accent/90 rounded-[2rem] font-black uppercase tracking-[0.3em] text-lg shadow-2xl shadow-accent/20 transition-all hover:scale-[1.03] active:scale-[0.97]"
                disabled={loading}
              >
                {loading ? <Loader2 className="w-8 h-8 animate-spin" /> : "Initiate Synthesis"}
              </Button>

              <div className="flex items-center justify-center gap-3 text-[9px] text-muted-foreground font-black uppercase tracking-widest opacity-50">
                <Bug className="w-3 h-3" /> Diagnostic logs enabled in console
              </div>
            </form>
          </div>

          {/* Result Interface */}
          <div className="lg:col-span-7 bg-black/40 p-10 md:p-14 flex flex-col relative">
            {result && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={copyPackage}
                className="absolute top-10 right-10 text-muted-foreground hover:text-accent transition-colors"
              >
                {copied ? <Check className="w-6 h-6 text-green-500" /> : <Copy className="w-6 h-6" />}
              </Button>
            )}

            <div className="flex items-center gap-5 border-b border-white/5 pb-8 mb-12">
              <div className="p-4 rounded-3xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-black font-headline uppercase tracking-tight">Identity Matrix</h3>
                <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em]">Verified Synthesis Output</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar">
              {result ? (
                <div className="space-y-16 animate-in fade-in slide-in-from-right-12 duration-1000">
                  <div className="flex flex-col md:flex-row gap-12 items-start">
                    {result.logoUrl && (
                      <div className="space-y-5 shrink-0">
                        <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em] ml-1">Visual Signature</p>
                        <div className="relative w-48 h-48 rounded-[2.5rem] overflow-hidden border-2 border-white/5 shadow-3xl group cursor-crosshair">
                          <Image src={result.logoUrl} alt="Visual Signature" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                          <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    )}
                    
                    <div className="flex-1 space-y-8">
                      <div className="space-y-4">
                        <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em] ml-1">Core Narrative</p>
                        <h4 className="text-3xl font-headline font-bold leading-tight italic tracking-tight text-white/90">"{result.professionalDescription}"</h4>
                      </div>
                      <div className="space-y-4">
                        <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em] ml-1">UIUX Direction</p>
                        <p className="text-lg text-muted-foreground font-medium leading-relaxed">{result.uiConcept}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8 pt-12 border-t border-white/5">
                    <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em] ml-1">Recommended Tech Stack</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                      {result.techStack.map((tech) => (
                        <div key={tech} className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 text-center text-xs font-black uppercase tracking-widest hover:border-accent/40 transition-colors shadow-lg">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-10 opacity-40 py-24">
                  <div className="relative">
                    <BrainCircuit className={cn("w-28 h-28 text-accent", loading && "animate-pulse")} />
                    <div className="absolute inset-0 blur-[60px] bg-accent/20 animate-pulse" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-2xl font-black font-headline uppercase tracking-[0.2em]">Architect Idle</p>
                    <p className="text-lg max-w-[320px] font-medium leading-relaxed">
                      {loading ? "Synthesizing requirements into identity matrix..." : "Submit a blueprint to begin the neural synthesis sequence."}
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
