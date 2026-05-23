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
      toast({ title: "Synthesis Complete", description: "Narrative registry optimized." });
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
      toast({ title: "Identity Forged", description: "Architecture synthesized." });
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
    toast({ description: "Registry data copied." });
  };

  return (
    <section id="architectural-toolkit" className="py-24 sm:py-32 px-4 sm:px-6 bg-transparent relative overflow-hidden border-t border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-[0.5em] flex items-center gap-3 shadow-lg"
          >
            <Cpu className="w-4 h-4 animate-pulse" />
            AI TOOLKIT v2.0
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-7xl font-headline font-black tracking-tighter uppercase leading-none shimmer-text"
          >
            SYSTEM <span className="text-gradient">SYNTHESIS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-3xl text-xs sm:text-xl font-bold uppercase tracking-tight opacity-80"
          >
            Professional utility nodes leveraging Google Genkit for automated project orchestration and system narratives.
          </motion.p>
        </div>

        <Tabs defaultValue="narrative" className="max-w-6xl mx-auto" onValueChange={setActiveTool}>
          <div className="flex justify-center mb-12 sm:mb-16">
            <TabsList className="bg-secondary/20 p-1.5 rounded-2xl h-14 sm:h-20 border border-border shadow-xl backdrop-blur-md">
              <TabsTrigger value="narrative" className="px-4 sm:px-12 rounded-xl font-black uppercase text-[9px] sm:text-[10px] tracking-widest data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-lg transition-all h-full">
                NEURAL NARRATIVE
              </TabsTrigger>
              <TabsTrigger value="brand" className="px-4 sm:px-12 rounded-xl font-black uppercase text-[9px] sm:text-[10px] tracking-widest data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-lg transition-all h-full">
                STRUCTURAL IDENTITY
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <TabsContent value="narrative" className="m-0">
                <Card className="glass-card border-border bg-card/5 rounded-[2rem] overflow-hidden shadow-2xl">
                  <CardContent className="p-8 sm:p-12 space-y-10">
                    <div className="flex items-center gap-4">
                      <Terminal className="w-6 h-6 text-primary" />
                      <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight">System Params</h3>
                    </div>
                    <form onSubmit={handleNarrative} className="space-y-8">
                      <div className="space-y-3">
                        <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-4">Tech Stack</label>
                        <Input 
                          placeholder="e.g. Next.js, Firebase" 
                          value={narrativeData.techStack}
                          onChange={(e) => setNarrativeData({...narrativeData, techStack: e.target.value})}
                          className="h-16 bg-background/30 border-border rounded-xl font-black text-xs uppercase tracking-widest pl-6 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-4">Project Scope</label>
                        <Textarea 
                          placeholder="Define the mission..." 
                          value={narrativeData.scope}
                          onChange={(e) => setNarrativeData({...narrativeData, scope: e.target.value})}
                          className="min-h-[180px] bg-background/30 border-border rounded-2xl p-6 resize-none font-bold text-xs uppercase tracking-tight"
                        />
                      </div>
                      <Button type="submit" className="w-full h-16 rounded-full font-black uppercase tracking-widest text-[10px] shadow-xl bg-primary text-primary-foreground" disabled={loading}>
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Zap className="w-4 h-4 mr-2" /> Synthesize Logic</>}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="brand" className="m-0">
                <Card className="glass-card border-border bg-card/5 rounded-[2rem] overflow-hidden shadow-2xl">
                  <CardContent className="p-8 sm:p-12 space-y-10">
                    <div className="flex items-center gap-4">
                      <Briefcase className="w-6 h-6 text-primary" />
                      <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight">Brand Matrix</h3>
                    </div>
                    <form onSubmit={handleBrand} className="space-y-8">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-4">Entity Name</label>
                          <Input 
                            placeholder="Name" 
                            value={brandData.name}
                            onChange={(e) => setBrandData({...brandData, name: e.target.value})}
                            className="h-16 bg-background/30 border-border rounded-xl font-black text-xs uppercase pl-6"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-4">Tone</label>
                          <select 
                            value={brandData.tone}
                            onChange={(e) => setBrandData({...brandData, tone: e.target.value as any})}
                            className="w-full h-16 bg-background/30 border border-border rounded-xl px-4 font-black text-[10px] uppercase tracking-widest focus:outline-none"
                          >
                            <option>Professional</option>
                            <option>Futuristic</option>
                            <option>Minimalist</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-4">Mission</label>
                        <Textarea 
                          placeholder="Brand purpose..." 
                          value={brandData.mission}
                          onChange={(e) => setBrandData({...brandData, mission: e.target.value})}
                          className="min-h-[140px] bg-background/30 border-border rounded-2xl p-6 font-bold text-xs uppercase"
                        />
                      </div>
                      <Button type="submit" className="w-full h-16 rounded-full font-black uppercase tracking-widest text-[10px] shadow-xl bg-primary text-primary-foreground" disabled={loading}>
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Sparkles className="w-4 h-4 mr-2" /> Forge Identity</>}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="glass-card border-border bg-black/5 dark:bg-black/20 rounded-[2rem] overflow-hidden h-full flex flex-col shadow-2xl">
                <CardContent className="p-8 sm:p-12 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                      <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight">System Output</h3>
                    </div>
                    {(narrativeResult || brandResult) && (
                      <Button variant="ghost" size="icon" onClick={() => copyToClipboard(narrativeResult?.projectDescription || brandResult?.professionalDescription || "")} className="h-10 w-10 rounded-lg border border-border bg-background/20 backdrop-blur-md">
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    )}
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                      {activeTool === "narrative" ? (
                        narrativeResult ? (
                          <motion.div key="narrative-out" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8 text-center">
                            <div className="p-8 rounded-[2rem] bg-background/40 border border-border text-xs sm:text-xl font-bold uppercase tracking-tight shimmer-text">
                              "{narrativeResult.projectDescription}"
                            </div>
                            <Box className="w-8 h-8 mx-auto opacity-10" />
                          </motion.div>
                        ) : (
                          <EmptyState key="narrative-empty" loading={loading} />
                        )
                      ) : (
                        brandResult ? (
                          <motion.div key="brand-out" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                             <div className="p-8 rounded-[2rem] bg-background/40 border border-border space-y-4">
                               <p className="text-primary font-black text-[9px] uppercase tracking-widest opacity-50">Identity Verified</p>
                               <p className="text-xs sm:text-xl font-bold uppercase tracking-tight leading-relaxed">{brandResult.professionalDescription}</p>
                             </div>
                             <div className="p-6 rounded-xl bg-primary/5 border border-primary/10 text-[10px] font-black uppercase italic tracking-widest opacity-70">
                               {brandResult.uiConcept}
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
    <div className="text-center space-y-8 py-12">
      <div className="relative inline-block">
        <Sparkles className={cn("w-12 h-12 text-muted-foreground/10", loading && "animate-pulse")} />
        {loading && <Loader2 className="absolute inset-0 w-12 h-12 animate-spin text-primary opacity-40" />}
      </div>
      <p className="text-[9px] font-black uppercase tracking-[0.6em] opacity-30">
        {loading ? "Forging Node..." : "Awaiting Registry"}
      </p>
    </div>
  );
}