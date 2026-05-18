
"use client";

import { useState } from "react";
import { generateProjectDescription } from "@/ai/flows/generate-project-description-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Loader2, Copy, Check } from "lucide-react";
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
      const output = await generateProjectDescription({ techStack, projectScope });
      setResult(output.projectDescription);
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
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="brand-tool" className="py-24 px-6 bg-accent/5">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            Sriharsha Branding Tool
          </div>
          <h2 className="text-4xl font-headline font-bold">Personal Brand Engine</h2>
          <p className="text-muted-foreground">
            Craft high-impact project descriptions for your own portfolio using our proprietary AI model.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="border-border bg-card shadow-2xl">
            <CardHeader>
              <CardTitle className="font-headline">Input Details</CardTitle>
              <CardDescription>Tell the AI about your work.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGenerate} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Tech Stack</label>
                  <Input 
                    placeholder="e.g. Next.js, Tailwind, GraphQL" 
                    value={techStack}
                    onChange={(e) => setTechStack(e.target.value)}
                    className="bg-secondary/30 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Project Scope & Purpose</label>
                  <Textarea 
                    placeholder="Briefly describe what the project does..." 
                    className="min-h-[120px] bg-secondary/30 border-border"
                    value={projectScope}
                    onChange={(e) => setProjectScope(e.target.value)}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 rounded-xl font-bold gap-2"
                  disabled={loading}
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                  Generate Brand Copy
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="border-border bg-card min-h-[350px] flex flex-col shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                {result && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={copyToClipboard}
                    className="hover:bg-accent/10 text-accent"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                )}
              </div>
              <CardHeader>
                <CardTitle className="font-headline">AI Output</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex items-center justify-center p-8">
                {result ? (
                  <p className="text-lg leading-relaxed text-foreground animate-in fade-in duration-500 italic">
                    "{result}"
                  </p>
                ) : (
                  <div className="text-center space-y-4 opacity-30">
                    <Sparkles className="w-12 h-12 mx-auto" />
                    <p className="text-sm">Enter your project details to see the magic.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
