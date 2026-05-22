"use client";

import { useState } from "react";
import { generateProjectDescription, type GenerateProjectDescriptionOutput, type GenerateProjectDescriptionInput } from "@/ai/flows/generate-project-description-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Loader2, Copy, Check, Terminal, Type, Box, ShieldCheck, Cpu, MessageSquareQuote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export function AITool() {
  const [formData, setFormData] = useState<GenerateProjectDescriptionInput>({
    technologyStack: "",
    projectScope: "",
  });
  
  const [result, setResult] = useState<GenerateProjectDescriptionOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!formData.technologyStack || !formData.projectScope) {
      toast({
        title: "Input Required",
        description: "Please provide the tech stack and project scope to synthesize.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setResult(null);
    try {
      const output = await generateProjectDescription(formData);
      setResult(output);
      toast({
        title: "Narrative Synthesized",
        description: "Project description has been successfully optimized.",
      });
    } catch (error: any) {
      toast({
        title: "Synthesis Error",
        description: error.message || "The engine encountered an unexpected exception.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyResult = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.projectDescription);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({ description: "Copied to clipboard." });
  };

  return (
    <section id="ai-narrative-engine" className="py-24 px-6 bg-background relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.02),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-black text-primary uppercase tracking-[0.4em] flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" />
            Project Narrative Synthesizer v1.0
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-headline font-black tracking-tighter uppercase leading-none">
            NARRATIVE <span className="text-gradient">ENGINE</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base sm:text-lg font-medium opacity-70 uppercase tracking-widest">
            Convert technical specs into high-impact professional narratives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Input Panel */}
          <Card className="glass-card border-border/50 bg-card/20 overflow-hidden rounded-[2.5rem]">
            <CardContent className="p-8 space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight">Source Parameters</h3>
              </div>

              <form onSubmit={handleGenerate} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
                    Technology Stack
                  </label>
                  <Input 
                    placeholder="e.g. Next.js, Firebase, Tailwind" 
                    value={formData.technologyStack}
                    onChange={(e) => setFormData({...formData, technologyStack: e.target.value})}
                    className="h-14 bg-background/50 border-border rounded-xl font-bold focus:ring-primary"
                    disabled={loading}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
                    Project Scope
                  </label>
                  <Textarea 
                    placeholder="Describe what the project does..." 
                    value={formData.projectScope}
                    onChange={(e) => setFormData({...formData, projectScope: e.target.value})}
                    className="min-h-[120px] bg-background/50 border-border rounded-xl p-4 resize-none focus:ring-primary text-sm font-medium"
                    disabled={loading}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-14 rounded-full font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] transition-all"
                  disabled={loading}
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Synthesize Narrative"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Result Panel */}
          <Card className="glass-card border-border/50 bg-black/20 overflow-hidden rounded-[2.5rem] flex flex-col">
            <CardContent className="p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight">Output Matrix</h3>
                </div>
                {result && (
                  <Button variant="ghost" size="icon" onClick={copyResult} className="text-muted-foreground hover:text-primary transition-colors">
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                )}
              </div>

              <div className="flex-1 flex flex-col justify-center">
                {result ? (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="p-6 rounded-2xl bg-background/40 border border-border/50 italic text-lg leading-relaxed font-medium">
                      "{result.projectDescription}"
                    </div>
                    <div className="flex justify-center">
                       <MessageSquareQuote className="w-8 h-8 text-primary/20" />
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-6 opacity-30 py-12">
                    <Sparkles className={cn("w-12 h-12 mx-auto text-muted-foreground", loading && "animate-pulse")} />
                    <p className="text-sm font-black uppercase tracking-widest">
                      {loading ? "Synthesizing..." : "Awaiting Parameters"}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
