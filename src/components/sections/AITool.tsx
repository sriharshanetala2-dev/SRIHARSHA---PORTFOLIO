"use client";

import { useState } from "react";
import Image from "next/image";
import { generateBrandIdentity, type BrandIdentityOutput } from "@/ai/flows/generate-brand-identity-flow";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Loader2, Copy, Check, BrainCircuit, Rocket, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function AITool() {
  const [projectIdea, setProjectIdea] = useState("");
  const [result, setResult] = useState<BrandIdentityOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectIdea) {
      toast({
        title: "Missing Context",
        description: "Please describe your project idea to start the engine.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setResult(null);
    try {
      const output = await generateBrandIdentity({ projectDescription: projectIdea });
      setResult(output);
      toast({
        title: "Brand Package Ready",
        description: "Technology stack and visual identity generated successfully.",
      });
    } catch (error) {
      toast({
        title: "Engine Failure",
        description: "Failed to generate brand identity. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    const text = `Stack: ${result.techStack}\n\nDescription: ${result.professionalDescription}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Identity details copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-brand-engine" className="py-24 px-6 bg-accent/5">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-widest">
            <BrainCircuit className="w-3 h-3" />
            AI Identity Architect
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">AI Brand Engine</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Describe your project idea. Our AI will architect the tech stack, write your copy, and design your logo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <Card className="border-border bg-card shadow-xl flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2">
                <Rocket className="w-5 h-5 text-accent" />
                Project Nucleus
              </CardTitle>
              <CardDescription>Input your project concept or core mission.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <form onSubmit={handleGenerate} className="space-y-6 h-full flex flex-col justify-between">
                <div className="space-y-4 flex-1">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">The Concept</label>
                    <Textarea 
                      placeholder="e.g. A decentralised task manager that rewards users with crypto for completing goals..." 
                      className="min-h-[220px] bg-secondary/30 border-border rounded-xl resize-none p-4 text-base focus:ring-accent"
                      value={projectIdea}
                      onChange={(e) => setProjectIdea(e.target.value)}
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-16 rounded-xl font-bold gap-3 mt-6 shadow-lg shadow-accent/20 transition-all active:scale-[0.98]"
                  disabled={loading}
                >
                  {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Sparkles className="w-6 h-6" />}
                  Generate Brand Package
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-xl flex flex-col relative overflow-hidden">
            {result && (
              <div className="absolute top-4 right-4 z-20">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={copyToClipboard}
                  className="bg-background/80 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground rounded-lg h-9 gap-2"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied" : "Copy Brand Info"}
                </Button>
              </div>
            )}
            <CardHeader>
              <CardTitle className="font-headline">Identity Result</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-0 overflow-y-auto max-h-[600px] no-scrollbar">
              {result ? (
                <div className="space-y-8 p-8 animate-in fade-in slide-in-from-right-4 duration-500">
                   {result.logoUrl && (
                     <div className="space-y-4">
                        <p className="text-xs font-bold text-accent uppercase tracking-widest">Brand Logo</p>
                        <div className="relative w-40 h-40 rounded-2xl overflow-hidden border border-border shadow-inner bg-accent/5 flex items-center justify-center">
                           <Image 
                              src={result.logoUrl} 
                              alt="Generated Logo" 
                              fill 
                              className="object-cover"
                           />
                        </div>
                     </div>
                   )}

                   <div className="space-y-4">
                      <p className="text-xs font-bold text-accent uppercase tracking-widest">Recommended Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {result.techStack.split(',').map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-secondary rounded-lg text-xs font-bold text-foreground border border-border">
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                   </div>

                   <div className="space-y-4">
                      <p className="text-xs font-bold text-accent uppercase tracking-widest">Portfolio Description</p>
                      <p className="text-lg leading-relaxed text-foreground italic font-medium">
                        "{result.professionalDescription}"
                      </p>
                   </div>
                   
                   <div className="h-1 w-20 bg-accent rounded-full" />
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center space-y-6 opacity-30 select-none py-20">
                  <div className="relative inline-block">
                    {loading ? (
                       <Loader2 className="w-20 h-20 text-accent animate-spin" />
                    ) : (
                       <Sparkles className="w-20 h-20 mx-auto text-accent animate-pulse" />
                    )}
                    <div className="absolute inset-0 blur-3xl bg-accent opacity-20" />
                  </div>
                  <div className="text-center space-y-2 px-8">
                    <p className="font-headline font-bold text-2xl uppercase tracking-tighter">
                      {loading ? "Architecting Identity..." : "Awaiting Inspiration"}
                    </p>
                    <p className="text-sm max-w-[280px] mx-auto">
                      {loading ? "Our AI is choosing your stack and painting your vision." : "Share your project vision to unlock your brand package."}
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
