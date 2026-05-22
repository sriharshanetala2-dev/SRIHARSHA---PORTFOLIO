"use client";

import { useState } from "react";
import Image from "next/image";
import { generateBrandIdentity, type BrandIdentityOutput, type BrandIdentityInput } from "@/ai/flows/generate-brand-identity-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Loader2, Copy, Check, BrainCircuit, Rocket, Layout, Database, Terminal, UserSquare2, Type, Box } from "lucide-react";
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
        title: "Blueprint Incomplete",
        description: "Please define all project parameters to initiate the generation sequence.",
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
        description: "The AI engine has successfully mapped your requirements.",
      });
    } catch (error: any) {
      console.error("AI Engine Failure:", error);
      toast({
        title: "Synthesis Error",
        description: "The AI model is temporarily unavailable. Please refine your inputs and retry.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyPackage = () => {
    if (!result) return;
    const text = `PROJECT IDENTITY PACKAGE\n------------------------\nName: ${formData.projectName}\nMission: ${formData.mission}\nStack: ${result.techStack}\nDescription: ${result.professionalDescription}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Package Secured",
      description: "Full brand and technical identity copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-brand-engine" className="py-32 px-6 bg-accent/[0.02] border-y border-border/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-[11px] font-black text-accent uppercase tracking-[0.2em] animate-in fade-in zoom-in duration-500">
            <BrainCircuit className="w-3.5 h-3.5" />
            GenAI Identity Architect
          </div>
          <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tight">AI Brand Engine</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xl leading-relaxed font-medium">
            Define your blueprint. Our specialized LLM core will architect your tech stack, craft your narrative, and generate your visual signature.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Card className="lg:col-span-5 border-border bg-card/30 backdrop-blur-sm shadow-2xl flex flex-col group hover:border-accent/30 transition-all duration-700">
            <CardHeader className="border-b border-border/50 pb-8">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="font-headline font-bold flex items-center gap-3 text-2xl">
                  <Rocket className="w-6 h-6 text-accent" />
                  Blueprint
                </CardTitle>
                <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-3 py-1 rounded-full bg-secondary border border-border">
                  System v2.5
                </div>
              </div>
              <CardDescription className="text-sm font-medium">Input exact technical and brand constraints for synthesis.</CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <form onSubmit={handleGenerate} className="space-y-6">
                <div className="space-y-2.5">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/70 flex items-center gap-2 ml-1">
                    <Type className="w-3 h-3" /> Project Identity
                  </label>
                  <Input 
                    placeholder="e.g. NexusAI, CloudScale, GreenLoop..." 
                    value={formData.projectName}
                    onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                    className="bg-secondary/40 border-border rounded-xl h-14 focus:ring-accent transition-all text-lg font-medium"
                    disabled={loading}
                  />
                </div>

                <div className="space-y-2.5">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/70 flex items-center gap-2 ml-1">
                    <Terminal className="w-3 h-3" /> Mission Blueprint
                  </label>
                  <Textarea 
                    placeholder="Describe the core problem solved and technical features..." 
                    value={formData.mission}
                    onChange={(e) => setFormData({...formData, mission: e.target.value})}
                    className="min-h-[140px] bg-secondary/40 border-border rounded-xl resize-none p-4 text-base leading-relaxed focus:ring-accent transition-all"
                    disabled={loading}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/70 flex items-center gap-2 ml-1">
                      <UserSquare2 className="w-3 h-3" /> Target Market
                    </label>
                    <Input 
                      placeholder="e.g. Fintech CEOs, Students..." 
                      value={formData.audience}
                      onChange={(e) => setFormData({...formData, audience: e.target.value})}
                      className="bg-secondary/40 border-border rounded-xl h-14 focus:ring-accent transition-all"
                      disabled={loading}
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/70 flex items-center gap-2 ml-1">
                      <Sparkles className="w-3 h-3" /> Semantic Tone
                    </label>
                    <Select 
                      value={formData.tone} 
                      onValueChange={(val: any) => setFormData({...formData, tone: val})}
                      disabled={loading}
                    >
                      <SelectTrigger className="bg-secondary/40 border-border rounded-xl h-14 focus:ring-accent transition-all">
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
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-16 rounded-2xl font-black uppercase tracking-widest gap-4 mt-6 shadow-2xl shadow-accent/20 transition-all hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span>Synthesizing Identity...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-6 h-6" />
                      <span>Generate Identity</span>
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="lg:col-span-7 border-border bg-card/20 backdrop-blur-sm shadow-2xl flex flex-col relative overflow-hidden min-h-[600px] hover:border-accent/20 transition-all duration-700">
            {result && (
              <div className="absolute top-8 right-8 z-20">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={copyPackage}
                  className="bg-background/80 backdrop-blur-md border border-border hover:bg-accent hover:text-accent-foreground rounded-2xl h-12 px-6 gap-3 shadow-xl transition-all"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span className="font-bold uppercase tracking-widest text-[10px]">{copied ? "Secured" : "Copy Package"}</span>
                </Button>
              </div>
            )}
            
            <CardHeader className="border-b border-border/50 pb-8">
              <CardTitle className="font-headline font-bold flex items-center gap-3 text-2xl">
                <Box className="w-6 h-6 text-accent" />
                Synthesized Identity
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 p-0 overflow-y-auto max-h-[700px] no-scrollbar">
              {result ? (
                <div className="space-y-12 p-10 animate-in fade-in slide-in-from-right-12 duration-1000">
                   <div className="flex flex-col md:flex-row gap-10 items-start">
                     {result.logoUrl && (
                       <div className="space-y-5">
                          <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em] ml-1">Visual Signature</p>
                          <div className="relative w-48 h-48 rounded-[2.5rem] overflow-hidden border-2 border-accent/20 shadow-2xl bg-accent/5 flex items-center justify-center group/logo transition-transform duration-700 hover:rotate-2">
                             <Image 
                                src={result.logoUrl} 
                                alt="AI Generated Identity Mark" 
                                fill 
                                className="object-cover group-hover/logo:scale-110 transition-transform duration-1000"
                             />
                             <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />
                          </div>
                       </div>
                     )}

                     <div className="flex-1 space-y-8">
                       <div className="space-y-4">
                          <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em] ml-1">Architected Stack</p>
                          <div className="flex flex-wrap gap-3">
                            {result.techStack.split(',').map((tech, i) => (
                              <span key={i} className="px-5 py-2.5 bg-secondary/60 border border-border/80 rounded-2xl text-[12px] font-bold text-foreground shadow-sm hover:border-accent/40 transition-colors">
                                {tech.trim()}
                              </span>
                            ))}
                          </div>
                       </div>
                       
                       <div className="grid grid-cols-2 gap-5">
                          <div className="p-5 rounded-2xl bg-secondary/30 border border-border/50 flex items-center gap-4 group/item hover:bg-accent/5 transition-colors">
                             <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover/item:scale-110 transition-transform">
                                <Layout className="w-4 h-4" />
                             </div>
                             <span className="text-[11px] font-black uppercase tracking-widest opacity-70">UI Specification</span>
                          </div>
                          <div className="p-5 rounded-2xl bg-secondary/30 border border-border/50 flex items-center gap-4 group/item hover:bg-accent/5 transition-colors">
                             <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover/item:scale-110 transition-transform">
                                <Database className="w-4 h-4" />
                             </div>
                             <span className="text-[11px] font-black uppercase tracking-widest opacity-70">Logical Node</span>
                          </div>
                       </div>
                     </div>
                   </div>

                   <div className="space-y-6 border-t border-border/50 pt-10">
                      <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em] ml-1">Brand Narrative</p>
                      <div className="relative">
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent/20 rounded-full" />
                        <p className="text-2xl md:text-3xl leading-snug text-foreground italic font-semibold font-headline px-2">
                          "{result.professionalDescription}"
                        </p>
                      </div>
                   </div>
                   
                   <div className="h-1.5 w-32 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse" />
                </div>
              ) : (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center space-y-10 opacity-40 select-none py-32 px-16 text-center">
                  <div className="relative">
                    {loading ? (
                       <Loader2 className="w-32 h-32 text-accent animate-spin" />
                    ) : (
                       <Sparkles className="w-32 h-32 text-accent animate-pulse" />
                    )}
                    <div className="absolute inset-0 blur-[100px] bg-accent/30 animate-pulse" />
                  </div>
                  <div className="space-y-4 max-w-sm">
                    <p className="font-headline font-bold text-3xl uppercase tracking-tighter text-foreground">
                      {loading ? "Synthesizing Requirements..." : "Architect Idle"}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                      {loading ? "Our neural engine is mapping your blueprint to a specialized identity." : "Complete the Blueprint parameters to activate the synthesis sequence."}
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
