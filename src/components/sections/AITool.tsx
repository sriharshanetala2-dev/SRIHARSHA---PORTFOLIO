"use client";

import { useState } from "react";
import { generateProjectDescription, type GenerateProjectDescriptionOutput } from "@/ai/flows/generate-project-description-flow";
import { generateBrandIdentity, type BrandIdentityOutput } from "@/ai/flows/generate-brand-identity-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Loader2, Copy, Check, Terminal, ShieldCheck, Cpu, Briefcase, Zap, Box } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export function AITool() {
  const [activeTool, setActiveTool] = useState("narrative");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  // Narrative Form
  const [narrativeData, setNarrativeData] = useState({ techStack: "", scope: "" });
  const [narrativeResult, setNarrativeResult] = useState<GenerateProjectDescriptionOutput | null>(null);

  // Brand Form
  const [brandData, setBrandData] = useState({ name: "", mission: "", audience: "", tone: "Professional" as any });
  const [brandResult, setBrandResult] = useState<BrandIdentityOutput | null>(null);

  const handleNarrative = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!narrativeData.techStack || !narrativeData.scope) return;
    setLoading(true);
    try {
      const output = await generateProjectDescription({ technologyStack: narrativeData.techStack, projectScope: narrativeData.scope });
      setNarrativeResult(output);
      toast({ title: "Synthesis Complete", description: "Project narrative has been optimized." });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleBrand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandData.name || !brandData.mission) return;
    setLoading(true);
    try {
      const output = await generateBrandIdentity({ projectName: brandData.name, mission: brandData.mission, audience: brandData.audience, tone: brandData.tone });
      setBrandResult(output);
      toast({ title: "Identity Forged", description: "Brand architecture synthesized successfully." });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({ description: "Copied to clipboard." });
  };

  return (
    <section id="architectural-toolkit" className="py-24 px-6 bg-background relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 data-flow-grid opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-black text-primary uppercase tracking-[0.4em] flex items-center gap-3">
            <Cpu className="w-4 h-4" />
            Architectural AI Toolkit v2.0
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-headline font-black tracking-tighter uppercase leading-none">
            ENGINEERING <span className="text-gradient">SUBSYSTEMS</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl text-sm sm:text-lg font-medium opacity-70 uppercase tracking-[0.2em] leading-relaxed">
            Professional utility nodes leveraging Google Genkit for automated project orchestration.
          </p>
        </div>

        <Tabs defaultValue="narrative" className="max-w-6xl mx-auto" onValueChange={setActiveTool}>
          <div className="flex justify-center mb-12">
            <TabsList className="bg-secondary/50 p-1.5 rounded-2xl h-16 border border-border/50">
              <TabsTrigger value="narrative" className="px-8 rounded-xl font-black uppercase text-[10px] tracking-widest data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-xl transition-all h-full">
                Narrative Engine
              </TabsTrigger>
              <TabsTrigger value="brand" className="px-8 rounded-xl font-black uppercase text-[10px] tracking-widest data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-xl transition-all h-full">
                Brand Architect
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Input Panel */}
            <div className="space-y-6">
              <TabsContent value="narrative" className="m-0">
                <Card className="glass-card border-border/50 bg-card/10 rounded-[2.5rem] overflow-hidden">
                  <CardContent className="p-10 space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-2xl bg-primary/10 text-primary shadow-inner">
                        <Terminal className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-tight">System Parameters</h3>
                    </div>
                    <form onSubmit={handleNarrative} className="space-y-8">
                      <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Tech Stack Matrix</label>
                        <Input 
                          placeholder="e.g. Next.js, Firebase, Genkit" 
                          value={narrativeData.techStack}
                          onChange={(e) => setNarrativeData({...narrativeData, techStack: e.target.value})}
                          className="h-16 bg-background/50 border-border rounded-2xl font-bold focus:ring-primary shadow-inner text-base"
                          disabled={loading}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Architectural Scope</label>
                        <Textarea 
                          placeholder="Define the project mission and key features..." 
                          value={narrativeData.scope}
                          onChange={(e) => setNarrativeData({...narrativeData, scope: e.target.value})}
                          className="min-h-[160px] bg-background/50 border-border rounded-[2rem] p-6 resize-none focus:ring-primary text-base font-medium shadow-inner"
                          disabled={loading}
                        />
                      </div>
                      <Button type="submit" className="w-full h-16 rounded-full font-black uppercase tracking-[0.3em] text-[12px] shadow-3xl hover:scale-[1.02] active:scale-95 transition-all" disabled={loading}>
                        {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Zap className="w-5 h-5 mr-2" /> Synthesize Logic</>}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="brand" className="m-0">
                <Card className="glass-card border-border/50 bg-card/10 rounded-[2.5rem] overflow-hidden">
                  <CardContent className="p-10 space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-2xl bg-primary/10 text-primary shadow-inner">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-tight">Brand Matrix</h3>
                    </div>
                    <form onSubmit={handleBrand} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Entity Name</label>
                          <Input 
                            placeholder="e.g. CloudScale" 
                            value={brandData.name}
                            onChange={(e) => setBrandData({...brandData, name: e.target.value})}
                            className="h-14 bg-background/50 border-border rounded-xl font-bold"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Persona Tone</label>
                          <select 
                            value={brandData.tone}
                            onChange={(e) => setBrandData({...brandData, tone: e.target.value as any})}
                            className="w-full h-14 bg-background/50 border border-border rounded-xl px-4 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                          >
                            <option>Professional</option>
                            <option>Futuristic</option>
                            <option>Minimalist</option>
                            <option>Bold</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Mission Statement</label>
                        <Textarea 
                          placeholder="What problem does this brand solve?" 
                          value={brandData.mission}
                          onChange={(e) => setBrandData({...brandData, mission: e.target.value})}
                          className="min-h-[120px] bg-background/50 border-border rounded-2xl p-6 resize-none"
                        />
                      </div>
                      <Button type="submit" className="w-full h-16 rounded-full font-black uppercase tracking-[0.3em] text-[12px] shadow-3xl hover:scale-[1.02] active:scale-95 transition-all" disabled={loading}>
                        {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Sparkles className="w-5 h-5 mr-2" /> Forge Identity</>}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>

            {/* Output Panel */}
            <Card className="glass-card border-border/50 bg-black/30 rounded-[2.5rem] overflow-hidden flex flex-col shadow-3xl">
              <CardContent className="p-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-accent/10 text-accent">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight">System Output</h3>
                  </div>
                  {(narrativeResult || brandResult) && (
                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(narrativeResult?.projectDescription || brandResult?.professionalDescription || "")} className="text-muted-foreground hover:text-primary h-12 w-12 rounded-xl border border-border/50">
                      {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                    </Button>
                  )}
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  {activeTool === "narrative" ? (
                    narrativeResult ? (
                      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="p-8 rounded-3xl bg-background/40 border border-border/50 italic text-xl leading-relaxed font-medium shadow-2xl">
                          "{narrativeResult.projectDescription}"
                        </div>
                        <div className="flex items-center gap-6 justify-center opacity-30">
                          <div className="h-px flex-1 bg-border" />
                          <Box className="w-8 h-8" />
                          <div className="h-px flex-1 bg-border" />
                        </div>
                      </div>
                    ) : (
                      <EmptyState loading={loading} />
                    )
                  ) : (
                    brandResult ? (
                      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="grid grid-cols-2 gap-4">
                          {brandResult.techStack.map(tech => (
                            <div key={tech} className="px-5 py-3 rounded-xl bg-primary/10 border border-primary/20 text-[11px] font-black uppercase tracking-widest text-center">
                              {tech}
                            </div>
                          ))}
                        </div>
                        <div className="p-8 rounded-3xl bg-background/40 border border-border/50 space-y-4 shadow-2xl">
                           <p className="text-primary font-black text-[11px] uppercase tracking-[0.4em]">Professional Identity</p>
                           <p className="text-lg leading-relaxed font-medium">{brandResult.professionalDescription}</p>
                        </div>
                        <div className="flex items-center gap-4 p-6 rounded-2xl bg-accent/5 border border-accent/20">
                           <Sparkles className="w-5 h-5 text-accent" />
                           <p className="text-xs font-bold italic opacity-80">{brandResult.uiConcept}</p>
                        </div>
                      </div>
                    ) : (
                      <EmptyState loading={loading} />
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

function EmptyState({ loading }: { loading: boolean }) {
  return (
    <div className="text-center space-y-8 py-20">
      <div className="relative inline-block">
        <Sparkles className={cn("w-20 h-20 text-muted-foreground/20", loading && "animate-pulse")} />
        {loading && <Loader2 className="absolute inset-0 w-20 h-20 animate-spin text-primary opacity-40" />}
      </div>
      <p className="text-sm font-black uppercase tracking-[0.6em] opacity-30">
        {loading ? "Forging Subsystem..." : "Awaiting Parameters"}
      </p>
    </div>
  );
}