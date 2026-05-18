"use client";

import { useState } from "react";
import { generateProjectDescription } from "@/ai/flows/generate-project-description-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Loader2, Copy, Check, BrainCircuit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function AITool() {
  const [techStack, setTechStack] = useState("");
  const [projectScope, setProjectScope] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!techStack || !projectScope) {
      toast({
        title: "Missing Information",
        description: "Please fill in both the technology stack and project scope.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const output = await generateProjectDescription({ technologyStack: techStack, projectScope });
      setResult(output.projectDescription);
      toast({
        title: "Success",
        description: "Your professional project description is ready!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate description. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Description copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-brand-engine" className="py-24 px-6 bg-accent/5">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-widest">
            <BrainCircuit className="w-3 h-3" />
            AI Content Generator
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">AI Brand Engine</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Instantly generate high-impact project descriptions for your portfolio. Powered by Google Gemini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <Card className="border-border bg-card shadow-xl flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline">Technical Context</CardTitle>
              <CardDescription>Detail your project's DNA for the AI.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <form onSubmit={handleGenerate} className="space-y-6 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Technology Stack</label>
                    <Input 
                      placeholder="e.g. Next.js, Firebase, TypeScript, Genkit" 
                      value={techStack}
                      onChange={(e) => setTechStack(e.target.value)}
                      className="bg-secondary/30 border-border h-12 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Scope & Objective</label>
                    <Textarea 
                      placeholder="Describe what your project achieves and why it exists..." 
                      className="min-h-[150px] bg-secondary/30 border-border rounded-xl resize-none"
                      value={projectScope}
                      onChange={(e) => setProjectScope(e.target.value)}
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-14 rounded-xl font-bold gap-2 mt-6 shadow-lg shadow-accent/20 transition-all active:scale-[0.98]"
                  disabled={loading}
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                  Generate Brand Copy
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-xl flex flex-col relative overflow-hidden group">
            {result && (
              <div className="absolute top-4 right-4 z-10">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={copyToClipboard}
                  className="bg-background/80 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground rounded-lg h-9 gap-2"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied" : "Copy Result"}
                </Button>
              </div>
            )}
            <CardHeader>
              <CardTitle className="font-headline">Generated Description</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center p-8 bg-accent/5">
              {result ? (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                   <p className="text-lg md:text-xl leading-relaxed text-foreground italic font-medium">
                    "{result}"
                  </p>
                  <div className="h-1 w-20 bg-accent rounded-full" />
                </div>
              ) : (
                <div className="text-center space-y-6 opacity-30 select-none">
                  <div className="relative inline-block">
                    <Sparkles className="w-16 h-16 mx-auto text-accent animate-pulse" />
                    <div className="absolute inset-0 blur-2xl bg-accent opacity-20" />
                  </div>
                  <div className="space-y-2">
                    <p className="font-headline font-bold text-xl">Engine Idle</p>
                    <p className="text-sm max-w-[200px] mx-auto">Input your project details and click generate to see the magic.</p>
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
