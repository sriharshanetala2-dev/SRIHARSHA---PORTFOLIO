"use client";

import { useState } from "react";
import Image from "next/image";
import { generateBrandIdentity, type BrandIdentityOutput, type BrandIdentityInput } from "@/ai/flows/generate-brand-identity-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Loader2, Copy, Check, BrainCircuit, Rocket, Layout, Database, Terminal, UserSquare2, Type } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
        title: "Missing Requirements",
        description: "Please fill out all blueprint fields to activate the engine.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setResult(null);
    try {
      const output = await generateBrandIdentity(formData);
      if (!output) throw new Error("Empty response from AI engine");
      
      setResult(output);
      toast({
        title: "Brand Identity Generated",
        description: "Your architecture and visual assets are ready.",
      });
    } catch (error: any) {
      console.error("AI Engine Error:", error);
      toast({
        title: "Engine Error",
        description: "The AI model is currently busy. Please check your inputs and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    const text = `Project: ${formData.projectName}\nMission: ${formData.mission}\nStack: ${result.techStack}\nDescription: ${result.professionalDescription}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Full brand package copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-brand-engine" className="py-24 px-6 bg-accent/5 scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-widest">
            <BrainCircuit className="w-3 h-3" />
            AI Identity Architect
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">AI Brand Engine</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Specify your exact requirements. Our engine will architect your stack, craft your story, and design your visual mark.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="border-border bg-card shadow-2xl flex flex-col group hover:border-accent/30 transition-all duration-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="font-headline flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-accent" />
                  Requirement Blueprint
                </CardTitle>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-2 py-0.5 rounded-md bg-secondary">
                  v2.5 Flash
                </div>
              </div>
              <CardDescription>Provide the exact technical and brand constraints for your project.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGenerate} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <Type className="w-3 h-3" /> Project Name
                  </label>
                  <Input 
                    placeholder="e.g. EduSync, Nexus, FinTrack..." 
                    value={formData.projectName}
                    onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                    className="bg-secondary/30 border-border rounded-xl h-12"
                    disabled={loading}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <Terminal className="w-3 h-3" /> Core Mission & Features
                  </label>
                  <Textarea 
                    placeholder="Describe the problem it solves and key technical features..." 
                    value={formData.mission}
                    onChange={(e) => setFormData({...formData, mission: e.target.value})}
                    className="min-h-[120px] bg-secondary/30 border-border rounded-xl resize-none p-4"
                    disabled={loading}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <UserSquare2 className="w-3 h-3" /> Target Audience
                    </label>
                    <Input 
                      placeholder="e.g. Students, CTOs, Retailers..." 
                      value={formData.audience}
                      onChange={(e) => setFormData({...formData, audience: e.target.value})}
                      className="bg-secondary/30 border-border rounded-xl h-12"
                      disabled={loading}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <Sparkles className="w-3 h-3" /> Brand Tone
                    </label>
                    <Select 
                      value={formData.tone} 
                      onValueChange={(val: any) => setFormData({...formData, tone: val})}
                      disabled={loading}
                    >
                      <SelectTrigger className="bg-secondary/30 border-border rounded-xl h-12">
                        <SelectValue placeholder="Select Tone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Professional">Professional</SelectItem>
                        <SelectItem value="Minimalist">Minimalist</SelectItem>
                        <SelectItem value="Bold">Bold</SelectItem>
                        <SelectItem value="Futuristic">Futuristic</SelectItem>
                        <SelectItem value="Friendly">Friendly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-14 rounded-xl font-bold gap-3 mt-4 shadow-xl shadow-accent/20 transition-all active:scale-[0.98] disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Architecting...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>Generate Identity</span>
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-2xl flex flex-col relative overflow-hidden min-h-[500px]">
            {result && (
              <div className="absolute top-6 right-6 z-20">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={copyToClipboard}
                  className="bg-background/80 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground rounded-xl h-10 gap-2 shadow-lg"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied" : "Copy Package"}
                </Button>
              </div>
            )}
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2">
                <Terminal className="w-5 h-5 text-accent" />
                Generated Identity
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-0 overflow-y-auto max-h-[600px] no-scrollbar">
              {result ? (
                <div className="space-y-10 p-8 animate-in fade-in slide-in-from-right-8 duration-700">
                   <div className="flex flex-col md:flex-row gap-8 items-start">
                     {result.logoUrl && (
                       <div className="space-y-4">
                          <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">Generated Mark</p>
                          <div className="relative w-40 h-40 rounded-3xl overflow-hidden border-2 border-accent/20 shadow-2xl bg-accent/5 flex items-center justify-center group/logo">
                             <Image 
                                src={result.logoUrl} 
                                alt="Generated Project Logo" 
                                fill 
                                className="object-cover group-hover/logo:scale-110 transition-transform duration-1000"
                             />
                             <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                          </div>
                       </div>
                     )}

                     <div className="flex-1 space-y-6">
                       <div className="space-y-3">
                          <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">Targeted Stack</p>
                          <div className="flex flex-wrap gap-2">
                            {result.techStack.split(',').map((tech, i) => (
                              <span key={i} className="px-3 py-1.5 bg-secondary border border-border rounded-xl text-[11px] font-bold text-foreground shadow-sm">
                                {tech.trim()}
                              </span>
                            ))}
                          </div>
                       </div>
                       
                       <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 rounded-xl bg-secondary/50 border border-border flex items-center gap-3">
                             <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                <Layout className="w-3 h-3" />
                             </div>
                             <span className="text-[10px] font-bold uppercase tracking-tighter">UI Precision</span>
                          </div>
                          <div className="p-3 rounded-xl bg-secondary/50 border border-border flex items-center gap-3">
                             <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                <Database className="w-3 h-3" />
                             </div>
                             <span className="text-[10px] font-bold uppercase tracking-tighter">Logic Ready</span>
                          </div>
                       </div>
                     </div>
                   </div>

                   <div className="space-y-4 border-t border-border pt-8">
                      <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">Professional Narrative</p>
                      <p className="text-xl leading-relaxed text-foreground italic font-medium font-headline">
                        "{result.professionalDescription}"
                      </p>
                   </div>
                   
                   <div className="h-1.5 w-24 bg-gradient-to-r from-accent to-primary rounded-full" />
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center space-y-8 opacity-40 select-none py-24 px-12">
                  <div className="relative">
                    {loading ? (
                       <Loader2 className="w-24 h-24 text-accent animate-spin" />
                    ) : (
                       <Sparkles className="w-24 h-24 text-accent animate-pulse" />
                    )}
                    <div className="absolute inset-0 blur-3xl bg-accent/20 animate-pulse" />
                  </div>
                  <div className="text-center space-y-3">
                    <p className="font-headline font-bold text-2xl uppercase tracking-tighter">
                      {loading ? "Synthesizing Requirements..." : "Engine Standby"}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {loading ? "Our AI is analyzing your Blueprint to build a specialized identity." : "Complete the Blueprint on the left to activate the generation sequence."}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
