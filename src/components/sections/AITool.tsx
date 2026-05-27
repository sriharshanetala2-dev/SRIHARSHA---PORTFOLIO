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
    <section id="architectural-toolkit" className="py-20 sm:py-32 px-4 sm:px-6 bg-transparent relative overflow-hidden border-t border-border scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            <Cpu className="w-3.5 h-3.5" />
            AI TOOLKIT v2.0
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-6xl font-black leading-tight shimmer-text"
          >
            SYSTEM <span className="text-gradient">SYNTHESIS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl font-bold uppercase tracking-tight opacity-90 px-4"
          >
            Professional utility nodes leveraging Google Genkit for automated project orchestration and system narratives.
          </motion.p>
        </div>

        <Tabs defaultValue="narrative" className="w-full" onValueChange={setActiveTool}>
          <div className="flex justify-center mb-8 sm:mb-14">
            <TabsList className="bg-secondary/10 p-1 rounded-xl h-14 sm:h-20 border border-border/40 backdrop-blur-md">
              <TabsTrigger 
                value="narrative" 
                className="px-6 sm:px-16 rounded-lg font-black uppercase text-[12px] sm:text-sm tracking-[0.2em] h-full data-[state=active]:bg-background data-[state=active]:text-primary"
              >
                NARRATIVE
              </TabsTrigger>
              <TabsTrigger 
                value="brand" 
                className="px-6 sm:px-16 rounded-lg font-black uppercase text-[12px] sm:text-sm tracking-[0.2em] h-full data-[state=active]:bg-background data-[state=active]:text-primary"
              >
                IDENTITY
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <TabsContent value="narrative" className="m-0">
                <Card className="glass-card border-border/40 bg-card/40 rounded-[1.5rem] sm:rounded-3xl overflow-hidden shadow-2xl">
                  <CardContent className="p-6 sm:p-10 space-y-6 sm:space-y-8">
                    <div className="flex items-center gap-3">
                      <Terminal className="w-5 h-5 text-primary" />
                      <h3 className="text-sm sm:text-xl font-black uppercase tracking-tight">System Params</h3>
                    </div>
                    <form onSubmit={handleNarrative} className="space-y-4 sm:space-y-6">
                      <div className="space-y-2">
                        <label className="text-[9px] sm:text-[11px] font-black uppercase tracking-widest text-muted-foreground ml-2">Tech Stack</label>
                        <Input 
                          placeholder="e.g. Next.js, Firebase" 
                          value={narrativeData.techStack}
                          onChange={(e) => setNarrativeData({...narrativeData, techStack: e.target.value})}
                          className="h-12 sm:h-14 bg-background/40 border-border/40 rounded-lg font-black text-[10px] uppercase tracking-widest px-4 sm:px-5"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] sm:text-[11px] font-black uppercase tracking-widest text-muted-foreground ml-2">Project Scope</label>
                        <Textarea 
                          placeholder="Define the mission..." 
                          value={narrativeData.scope}
                          onChange={(e) => setNarrativeData({...narrativeData, scope: e.target.value})}
                          className="min-h-[100px] sm:min-h-[140px] bg-background/40 border-border/40 rounded-lg p-4 sm:p-5 resize-none font-bold text-[10px] uppercase tracking-tight"
                        />
                      </div>
                      <Button type="submit" className="w-full h-14 sm:h-16 rounded-lg font-black uppercase tracking-widest text-[10px] shadow-lg bg-primary text-primary-foreground" disabled={loading}>
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Zap className="w-4 h-4 mr-2" /> Synthesize Logic</>}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="brand" className="m-0">
                <Card className="glass-card border-border/40 bg-card/40 rounded-[1.5rem] sm:rounded-3xl overflow-hidden shadow-2xl">
                  <CardContent className="p-6 sm:p-10 space-y-6 sm:space-y-8">
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h3 className="text-sm sm:text-xl font-black uppercase tracking-tight">Brand Matrix</h3>
                    </div>
                    <form onSubmit={handleBrand} className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[9px] sm:text-[11px] font-black uppercase tracking-widest text-muted-foreground ml-2">Entity Name</label>
                          <Input 
                            placeholder="Name" 
                            value={brandData.name}
                            onChange={(e) => setBrandData({...brandData, name: e.target.value})}
                            className="h-12 sm:h-14 bg-background/40 border-border/40 rounded-lg font-black text-[10px] uppercase px-4"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] sm:text-[11px] font-black uppercase tracking-widest text-muted-foreground ml-2">Tone</label>
                          <select 
                            value={brandData.tone}
                            onChange={(e) => setBrandData({...brandData, tone: e.target.value as any})}
                            className="w-full h-12 sm:h-14 bg-background/40 border border-border/40 rounded-lg px-3 font-black text-[9px] uppercase tracking-widest focus:outline-none"
                          >
                            <option>Professional</option>
                            <option>Futuristic</option>
                            <option>Minimalist</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] sm:text-[11px] font-black uppercase tracking-widest text-muted-foreground ml-2">Mission</label>
                        <Textarea 
                          placeholder="Brand purpose..." 
                          value={brandData.mission}
                          onChange={(e) => setBrandData({...brandData, mission: e.target.value})}
                          className="min-h-[100px] sm:min-h-[120px] bg-background/40 border-border/40 rounded-lg p-4 sm:p-5 font-bold text-[10px] uppercase"
                        />
                      </div>
                      <Button type="submit" className="w-full h-14 sm:h-16 rounded-lg font-black uppercase tracking-widest text-[10px] shadow-lg bg-primary text-primary-foreground" disabled={loading}>
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Sparkles className="w-4 h-4 mr-2" /> Forge Identity</>}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="glass-card border-border/40 bg-card/60 rounded-[1.5rem] sm:rounded-3xl overflow-hidden h-full flex flex-col shadow-2xl">
                <CardContent className="p-6 sm:p-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      <h3 className="text-sm sm:text-xl font-black uppercase tracking-tight">Output</h3>
                    </div>
                    {(narrativeResult || brandResult) && (
                      <Button variant="ghost" size="icon" onClick={() => copyToClipboard(narrativeResult?.projectDescription || brandResult?.professionalDescription || "")} className="h-10 w-10 rounded-lg border border-border/40 bg-background/20">
                        {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                      </Button>
                    )}
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                      {activeTool === "narrative" ? (
                        narrativeResult ? (
                          <motion.div key="narrative-out" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6 text-center">
                            <div className="p-6 sm:p-10 rounded-xl bg-background/50 border border-border/40 text-[10px] sm:text-base font-bold uppercase tracking-tight shimmer-text leading-relaxed">
                              "{narrativeResult.projectDescription}"
                            </div>
                            <Box className="w-8 h-8 mx-auto opacity-10" />
                          </motion.div>
                        ) : (
                          <EmptyState key="narrative-empty" loading={loading} />
                        )
                      ) : (
                        brandResult ? (
                          <motion.div key="brand-out" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                             <div className="p-6 sm:p-10 rounded-xl bg-background/50 border border-border/40 space-y-4">
                               <p className="text-primary font-black text-[8px] uppercase tracking-[0.4em] opacity-50">Identity Verified</p>
                               <p className="text-[10px] sm:text-base font-bold uppercase tracking-tight leading-relaxed">{brandResult.professionalDescription}</p>
                             </div>
                             <div className="p-4 sm:p-6 rounded-lg bg-primary/5 border border-primary/10 text-[9px] sm:text-[11px] font-black uppercase tracking-[0.4em] opacity-70">
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
    <div className="text-center space-y-4 py-8">
      <div className="relative inline-block">
        <Sparkles className={cn("w-12 h-12 text-muted-foreground/10", loading && "animate-pulse")} />
        {loading && <Loader2 className="absolute inset-0 w-12 h-12 animate-spin text-primary opacity-30" />}
      </div>
      <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.5em] opacity-30">
        {loading ? "Forging Node..." : "Awaiting Registry"}
      </p>
    </div>
  );
}