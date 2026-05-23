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
import { motion, AnimatePresence } from "framer-motion";

export function AITool() {
  const [activeTool, setActiveTool] = useState("narrative");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const [narrativeData, setNarrativeData] = useState({ techStack: "", scope: "" });
  const [narrativeResult, setNarrativeResult] = useState<GenerateProjectDescriptionOutput | null>(null);

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
    <section id="architectural-toolkit" className="py-24 sm:py-48 px-6 bg-background relative overflow-hidden scroll-mt-20 border-t-2 border-border">
      <div className="absolute inset-0 neural-grid opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-40">
        <div className="flex flex-col items-center text-center space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-8 py-3 rounded-full bg-primary/10 border-2 border-primary/20 text-[10px] sm:text-[11px] font-black text-primary uppercase tracking-[0.5em] flex items-center gap-4 shadow-2xl"
          >
            <Cpu className="w-5 h-5 animate-pulse" />
            Architectural AI Toolkit v2.0
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-7xl md:text-8xl font-headline font-black tracking-tighter uppercase leading-none shimmer-text"
          >
            ENGINEERING <span className="text-gradient">SUBSYSTEMS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-4xl text-sm sm:text-xl font-bold uppercase tracking-[0.2em] leading-relaxed opacity-80"
          >
            Professional utility nodes leveraging Google Genkit for automated project orchestration and system synthesis.
          </motion.p>
        </div>

        <Tabs defaultValue="narrative" className="max-w-6xl mx-auto" onValueChange={setActiveTool}>
          <div className="flex justify-center mb-16 sm:mb-24">
            <TabsList className="bg-secondary/40 p-2 rounded-[2rem] h-20 border-2 border-border shadow-2xl backdrop-blur-xl">
              <TabsTrigger value="narrative" className="px-12 rounded-[1.5rem] font-black uppercase text-[10px] sm:text-[11px] tracking-widest data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-2xl transition-all h-full">
                Narrative Engine
              </TabsTrigger>
              <TabsTrigger value="brand" className="px-12 rounded-[1.5rem] font-black uppercase text-[10px] sm:text-[11px] tracking-widest data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-2xl transition-all h-full">
                Brand Architect
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24">
            {/* Input Panel */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <TabsContent value="narrative" className="m-0">
                <Card className="glass-card border-2 border-border/50 bg-card/5 rounded-[3rem] overflow-hidden shadow-4xl hover:border-primary/40 transition-all">
                  <CardContent className="p-10 sm:p-16 space-y-12">
                    <div className="flex items-center gap-6">
                      <div className="p-5 rounded-2xl bg-primary/10 text-primary shadow-inner border border-primary/20">
                        <Terminal className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-headline font-black uppercase tracking-tight">System Parameters</h3>
                    </div>
                    <form onSubmit={handleNarrative} className="space-y-10">
                      <div className="space-y-4">
                        <label className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] text-muted-foreground ml-6">Tech Stack Matrix</label>
                        <Input 
                          placeholder="e.g. Next.js, Firebase, Genkit" 
                          value={narrativeData.techStack}
                          onChange={(e) => setNarrativeData({...narrativeData, techStack: e.target.value})}
                          className="h-24 bg-background/40 border-2 border-border rounded-[2rem] font-black focus:ring-primary shadow-inner text-xs sm:text-sm uppercase tracking-widest pl-8"
                          disabled={loading}
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] text-muted-foreground ml-6">Architectural Scope</label>
                        <Textarea 
                          placeholder="Define the project mission and key features..." 
                          value={narrativeData.scope}
                          onChange={(e) => setNarrativeData({...narrativeData, scope: e.target.value})}
                          className="min-h-[250px] bg-background/40 border-2 border-border rounded-[3rem] p-10 resize-none focus:ring-primary text-xs sm:text-sm font-bold shadow-inner uppercase tracking-tight leading-relaxed"
                          disabled={loading}
                        />
                      </div>
                      <Button type="submit" className="w-full h-24 rounded-full font-black uppercase tracking-[0.6em] text-[11px] shadow-4xl hover:scale-[1.02] active:scale-95 transition-all bg-primary text-primary-foreground group" disabled={loading}>
                        {loading ? <Loader2 className="w-8 h-8 animate-spin" /> : <><Zap className="w-7 h-7 mr-4 group-hover:scale-125 transition-transform" /> Synthesize Logic</>}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="brand" className="m-0">
                <Card className="glass-card border-2 border-border/50 bg-card/5 rounded-[3rem] overflow-hidden shadow-4xl hover:border-primary/40 transition-all">
                  <CardContent className="p-10 sm:p-16 space-y-12">
                    <div className="flex items-center gap-6">
                      <div className="p-5 rounded-2xl bg-primary/10 text-primary shadow-inner border border-primary/20">
                        <Briefcase className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-headline font-black uppercase tracking-tight">Brand Matrix</h3>
                    </div>
                    <form onSubmit={handleBrand} className="space-y-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <label className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] text-muted-foreground ml-6">Entity Name</label>
                          <Input 
                            placeholder="e.g. CloudScale" 
                            value={brandData.name}
                            onChange={(e) => setBrandData({...brandData, name: e.target.value})}
                            className="h-24 bg-background/40 border-2 border-border rounded-[2rem] font-black uppercase tracking-widest text-xs sm:text-sm pl-8"
                          />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] text-muted-foreground ml-6">Persona Tone</label>
                          <select 
                            value={brandData.tone}
                            onChange={(e) => setBrandData({...brandData, tone: e.target.value as any})}
                            className="w-full h-24 bg-background/40 border-2 border-border rounded-[2rem] px-8 font-black text-[11px] uppercase tracking-widest focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
                          >
                            <option>Professional</option>
                            <option>Futuristic</option>
                            <option>Minimalist</option>
                            <option>Bold</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] text-muted-foreground ml-6">Mission Statement</label>
                        <Textarea 
                          placeholder="What problem does this brand solve?" 
                          value={brandData.mission}
                          onChange={(e) => setBrandData({...brandData, mission: e.target.value})}
                          className="min-h-[180px] bg-background/40 border-2 border-border rounded-[3rem] p-10 resize-none font-bold uppercase tracking-tight leading-relaxed"
                        />
                      </div>
                      <Button type="submit" className="w-full h-24 rounded-full font-black uppercase tracking-[0.6em] text-[11px] shadow-4xl hover:scale-[1.02] active:scale-95 transition-all bg-primary text-primary-foreground group" disabled={loading}>
                        {loading ? <Loader2 className="w-8 h-8 animate-spin" /> : <><Sparkles className="w-7 h-7 mr-4 group-hover:rotate-12 transition-transform" /> Forge Identity</>}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>

            {/* Output Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card border-2 border-border/50 bg-black/5 dark:bg-black/40 rounded-[3rem] overflow-hidden flex flex-col shadow-4xl h-full">
                <CardContent className="p-10 sm:p-16 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-16">
                    <div className="flex items-center gap-6">
                      <div className="p-5 rounded-2xl bg-accent/10 text-accent border border-accent/20">
                        <ShieldCheck className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-headline font-black uppercase tracking-tight">System Output</h3>
                    </div>
                    <AnimatePresence>
                      {(narrativeResult || brandResult) && (
                        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                          <Button variant="ghost" size="icon" onClick={() => copyToClipboard(narrativeResult?.projectDescription || brandResult?.professionalDescription || "")} className="text-muted-foreground hover:text-primary h-14 w-14 rounded-2xl border-2 border-border/50 bg-background/20 backdrop-blur-xl">
                            {copied ? <Check className="w-6 h-6 text-green-500" /> : <Copy className="w-6 h-6" />}
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                      {activeTool === "narrative" ? (
                        narrativeResult ? (
                          <motion.div key="narrative-output" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-12">
                            <div className="p-10 sm:p-16 rounded-[3.5rem] bg-background/50 dark:bg-background/40 border-2 border-border/50 italic text-xl sm:text-2xl leading-relaxed font-bold shadow-4xl uppercase tracking-tight shimmer-text">
                              "{narrativeResult.projectDescription}"
                            </div>
                            <div className="flex items-center gap-10 justify-center opacity-20">
                              <div className="h-px flex-1 bg-border" />
                              <Box className="w-12 h-12" />
                              <div className="h-px flex-1 bg-border" />
                            </div>
                          </motion.div>
                        ) : (
                          <EmptyState key="narrative-empty" loading={loading} />
                        )
                      ) : (
                        brandResult ? (
                          <motion.div key="brand-output" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-12">
                            <div className="grid grid-cols-2 gap-6">
                              {brandResult.techStack.map(tech => (
                                <div key={tech} className="px-8 py-4 rounded-2xl bg-primary/10 border-2 border-primary/25 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-center shadow-inner">
                                  {tech}
                                </div>
                              ))}
                            </div>
                            <div className="p-10 sm:p-14 rounded-[3rem] bg-background/50 dark:bg-background/40 border-2 border-border/50 space-y-6 shadow-4xl relative overflow-hidden">
                               <div className="absolute top-0 right-0 p-8 opacity-5"><Zap className="w-20 h-20" /></div>
                               <p className="text-primary font-black text-[10px] sm:text-[11px] uppercase tracking-[0.5em] opacity-60">Professional Identity</p>
                               <p className="text-lg sm:text-2xl leading-relaxed font-bold uppercase tracking-tight">{brandResult.professionalDescription}</p>
                            </div>
                            <div className="flex items-center gap-6 p-8 rounded-[2rem] bg-accent/10 border-2 border-accent/25 shadow-2xl">
                               <Sparkles className="w-7 h-7 text-accent animate-pulse" />
                               <p className="text-[11px] sm:text-sm font-black uppercase tracking-[0.1em] italic opacity-80">{brandResult.uiConcept}</p>
                            </div>
                          </motion.div>
                        ) : (
                          <EmptyState key="brand-empty" loading={loading} />
                        )
                      )}
                    </AnimatePresence>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

function EmptyState({ loading }: { loading: boolean }) {
  return (
    <div className="text-center space-y-12 py-24">
      <div className="relative inline-block">
        <Sparkles className={cn("w-28 h-28 text-muted-foreground/10", loading && "animate-pulse")} />
        {loading && <Loader2 className="absolute inset-0 w-28 h-28 animate-spin text-primary opacity-60" />}
      </div>
      <p className="text-[11px] sm:text-sm font-black uppercase tracking-[0.8em] opacity-30 animate-pulse">
        {loading ? "Forging Subsystem..." : "Awaiting Parameters"}
      </p>
    </div>
  );
}