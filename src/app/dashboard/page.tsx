"use client";

import React, { useState, useEffect } from 'react';
import { Send, Cpu, AlertCircle, CheckCircle, RefreshCw, Sparkles, FileText, BriefcaseIcon, PanelsTopLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { DREAM_TRIGGER, ROUTES } from '@/lib/constants';

export default function DashboardPage() {
  const router = useRouter();
  const [prompt, setPrompt] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Check if the prompt should trigger the brainstorming feature
  const checkForDreamTrigger = (text: string) => {
    const lowercaseText = text.toLowerCase();
    
    // Match any text starting with "build" - this will be more flexible
    return lowercaseText.startsWith("build");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    // Check if the prompt contains the dream trigger
    if (checkForDreamTrigger(prompt)) {
      router.push(`${ROUTES.BRAINSTORM}?prompt=${encodeURIComponent(prompt)}`);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const resetForm = () => {
    setPrompt('');
    setSubmitted(false);
  };

  return (
    <div className="container py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mx-auto">
        <div className="mb-10">
          <motion.div 
            className="flex items-center mb-4 gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Dashboard</h1>
          </motion.div>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Enter your startup idea and our 0to1 will orchestrate specialized AI Agents to bring your vision to life.
          </motion.p>
        </div>

        <Card className="mb-10 border-border/50 overflow-hidden bg-background/50 backdrop-blur-sm shadow-lg rounded-xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl">Your Startup Vision</CardTitle>
            <CardDescription>
              Provide a detailed description of your startup idea and our AI Agents will get to work.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="relative">
                  <textarea
                    id="prompt"
                    rows={5}
                    className="w-full rounded-xl border border-input bg-background/70 backdrop-blur-sm px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Describe your startup idea in detail. For example: I want to build a platform that helps independent coffee shops manage their inventory and discover new suppliers..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    disabled={isSubmitting || submitted}
                  />
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-xl">
                      <div className="flex flex-col items-center">
                        <RefreshCw className="h-8 w-8 animate-spin text-blue-500 mb-3" />
                        <p className="text-sm font-medium">Processing your request...</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    disabled={!prompt.trim() || isSubmitting || submitted}
                    className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-opacity"
                  >
                    Submit <Send className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={resetForm}
                    disabled={isSubmitting}
                    className="rounded-full"
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
          {submitted && (
            <div className="p-4 bg-green-500/10 border-t border-green-500/20">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-500" />
                <div>
                  <p className="font-medium text-green-700 dark:text-green-300">Request Submitted Successfully!</p>
                  <p className="text-sm text-muted-foreground mt-1">Your startup vision has been submitted and AI Agents are now processing your request.</p>
                </div>
              </div>
            </div>
          )}
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">AI Agent Status</h2>
            <div className="text-sm px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              <span className="font-medium">Status:</span> {submitted ? 'Active' : 'Waiting for input'}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {aiAgentStatuses.map((agent, index) => (
              <Card 
                key={agent.name} 
                className="border-border/50 bg-background/50 backdrop-blur-sm rounded-xl hover:shadow-md transition-shadow overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="pt-5 px-5 pb-4 border-b border-border/40">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-lg mr-3 ${getStatusColor(agent.status).bgColor}`}>
                          {getAgentIcon(agent.name, getStatusColor(agent.status).textColor)}
                        </div>
                        <div>
                          <h3 className="font-medium">{agent.name}</h3>
                          <p className="text-xs text-muted-foreground">{getStatusText(agent.status, submitted)}</p>
                        </div>
                      </div>
                      <StatusIndicator status={agent.status} submitted={submitted} delay={index * 3} />
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex justify-between text-xs text-muted-foreground">
                      <span>Progress</span>
                      <span>{getProgressWidth(agent.status, index)}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getStatusColor(agent.status).bgProgress} rounded-full transition-all duration-1000`} 
                        style={{ width: submitted ? `${getProgressWidth(agent.status, index)}%` : '0%' }}
                      ></div>
                    </div>
                    <div className="mt-4">
                      <p className="text-xs text-muted-foreground">{getAgentDescription(agent.name)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <Card className="border-amber-200/50 dark:border-amber-700/30 bg-amber-50/50 dark:bg-amber-900/10 rounded-xl">
          <CardContent className="p-4">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 mr-3 mt-0.5 text-amber-500" />
              <div>
                <p className="font-medium text-amber-700 dark:text-amber-400">Demo Version</p>
                <p className="text-sm text-muted-foreground mt-1">
                  This is a demo version. In the full version, each AI Agent will generate actual deliverables based on your input.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function getAgentIcon(name: string, colorClass: string) {
  switch (name) {
    case 'Web Development Agent':
      return <PanelsTopLeft className={`h-5 w-5 ${colorClass}`} />;
    case 'Social Media Agent':
      return <BriefcaseIcon className={`h-5 w-5 ${colorClass}`} />;
    case 'Content Creation Agent':
      return <FileText className={`h-5 w-5 ${colorClass}`} />;
    case 'Growth Hacking Agent':
      return <Cpu className={`h-5 w-5 ${colorClass}`} />;
    default:
      return <Cpu className={`h-5 w-5 ${colorClass}`} />;
  }
}

function getAgentDescription(name: string) {
  switch (name) {
    case 'Web Development Agent':
      return 'Builds functional web applications and landing pages for your startup';
    case 'Social Media Agent':
      return 'Creates and sets up social media profiles on relevant platforms';
    case 'Content Creation Agent':
      return 'Generates engaging copy, blog posts, and marketing content';
    case 'Growth Hacking Agent':
      return 'Identifies growth opportunities and marketing strategies';
    default:
      return 'Processing your startup vision';
  }
}

type AgentStatus = 'idle' | 'processing' | 'completed' | 'error';

interface Agent {
  name: string;
  status: AgentStatus;
}

const aiAgentStatuses: Agent[] = [
  { name: 'Web Development Agent', status: 'idle' },
  { name: 'Social Media Agent', status: 'idle' },
  { name: 'Content Creation Agent', status: 'idle' },
  { name: 'Growth Hacking Agent', status: 'idle' },
];

function getStatusColor(status: AgentStatus) {
  switch (status) {
    case 'idle':
      return { 
        bgColor: 'bg-blue-100 dark:bg-blue-900/30', 
        textColor: 'text-blue-500',
        bgProgress: 'bg-blue-500'
      };
    case 'processing':
      return { 
        bgColor: 'bg-amber-100 dark:bg-amber-900/30', 
        textColor: 'text-amber-500',
        bgProgress: 'bg-amber-500'
      };
    case 'completed':
      return { 
        bgColor: 'bg-green-100 dark:bg-green-900/30', 
        textColor: 'text-green-500',
        bgProgress: 'bg-green-500'
      };
    case 'error':
      return { 
        bgColor: 'bg-red-100 dark:bg-red-900/30', 
        textColor: 'text-red-500',
        bgProgress: 'bg-red-500'
      };
  }
}

function getStatusText(status: AgentStatus, submitted: boolean): string {
  if (!submitted) return "Waiting for input";
  
  switch (status) {
    case 'idle':
      return 'Starting soon...';
    case 'processing':
      return 'In progress';
    case 'completed':
      return 'Completed';
    case 'error':
      return 'Error';
    default:
      return 'Unknown status';
  }
}

function getProgressWidth(status: AgentStatus, index: number): number {
  if (status === 'idle') return 0;
  if (status === 'completed') return 100;
  
  // Simulate different progress percentages based on index
  return Math.min(100, 15 + index * 25);
}

interface StatusIndicatorProps {
  status: AgentStatus;
  submitted: boolean;
  delay: number;
}

function StatusIndicator({ status, submitted, delay }: StatusIndicatorProps) {
  const [currentStatus, setCurrentStatus] = useState<AgentStatus>(status);
  
  React.useEffect(() => {
    if (!submitted) return;
    
    // Simulate status changes
    const timer1 = setTimeout(() => {
      setCurrentStatus('processing');
    }, 1000 + delay);
    
    const timer2 = setTimeout(() => {
      setCurrentStatus('completed');
    }, 8000 + delay);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [submitted, delay]);
  
  return (
    <span className={`${statusBadgeStyle(currentStatus)} ${!submitted ? 'opacity-50' : ''}`}>
      {capitalizeFirst(currentStatus)}
    </span>
  );
}

function statusBadgeStyle(status: AgentStatus): string {
  switch (status) {
    case 'idle':
      return 'text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
    case 'processing':
      return 'text-xs px-2 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300';
    case 'completed':
      return 'text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
    case 'error':
      return 'text-xs px-2 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300';
  }
}

function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
} 