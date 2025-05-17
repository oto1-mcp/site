"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Chat } from "@/components/ui/chat";
import { ClaudeMessage } from "@/lib/claude";
import { DREAM_TRIGGER } from "@/lib/constants";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, Loader2, Rocket } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

const BRAINSTORM_SYSTEM_PROMPT = `You are an expert startup ideation assistant who provides EXTREMELY BRIEF and CONCISE responses.
Keep all responses under 2-3 sentences maximum.
Help the user flesh out their "build" idea into a viable startup concept with minimal text.
Ask very focused questions to understand their vision.
Provide only the most essential action items.
Be direct and to the point - always prioritize brevity over explanation.
Use bullet points when listing options or steps.`;

function BrainstormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialPrompt = searchParams.get("prompt") || DREAM_TRIGGER;
  
  const [messages, setMessages] = useState<ClaudeMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Initialize chat with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setIsLoading(true);
      
      // Start with user's initial prompt if provided
             if (initialPrompt && initialPrompt !== DREAM_TRIGGER) {
        setMessages([
          { role: "user" as const, content: initialPrompt }
        ]);
        
        // Automatically send the first message to get a response
        sendMessage(initialPrompt);
      } else {
        // Send a welcome message from the assistant
        setTimeout(() => {
          setMessages([
            { 
              role: "assistant" as const, 
              content: "What's your startup idea? Let's make it happen." 
            }
          ]);
          setIsLoading(false);
        }, 1000);
      }
    }
  }, [initialPrompt]);

     const sendMessage = async (content: string) => {
    console.log("sendMessage called with content:", content);
    try {
      // If this isn't the initial prompt being automatically sent
      if (messages.length > 0 || initialPrompt === DREAM_TRIGGER) {
        // Add user message to chat
        const newMessages = [...messages, { role: "user" as const, content }];
        setMessages(newMessages);
        console.log("Added user message to chat:", newMessages);
      }
      
      setIsLoading(true);
      console.log("Setting loading state to true");

      // Prepare request body
      const requestBody = {
        messages: messages.length > 0 ? [...messages, { role: "user" as const, content }] : [{ role: "user" as const, content }],
        systemPrompt: BRAINSTORM_SYSTEM_PROMPT,
      };
      console.log("Request body:", JSON.stringify(requestBody));

      // Call Claude API
      console.log("Calling Claude API at /api/claude");
      const response = await fetch("/api/claude", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      console.log("API response status:", response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("API error response:", errorText);
        throw new Error(`Failed to get response: ${response.status} ${errorText}`);
      }

      const data = await response.json();
      console.log("API response data:", data);
      
      // Add assistant response
      setMessages(prev => [...prev, { role: "assistant" as const, content: data.content }]);
      console.log("Added assistant response to chat");
    } catch (error) {
      console.error("Error sending message:", error);
             // Show error in chat
      setMessages(prev => [
        ...prev, 
        { 
          role: "assistant" as const, 
          content: "I'm sorry, I encountered an error while processing your request. Please try again."
        }
      ]);
      console.log("Added error message to chat");
    } finally {
      setIsLoading(false);
      console.log("Setting loading state to false");
    }
  };

  const handleBuildIt = () => {
    // Navigate to dashboard to start building
    router.push(ROUTES.DASHBOARD);
  };

  return (
    <div className="container py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 min-h-screen flex flex-col">
      <div className="mb-10">
        <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <motion.div 
          className="flex items-center mb-4 gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Build Your Dream</h1>
        </motion.div>
        <motion.p 
          className="text-lg text-muted-foreground max-w-3xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let's brainstorm how to bring your startup vision to life. Share your ideas and goals, and I'll help you develop them into actionable plans.
        </motion.p>
      </div>

      <Card className="flex-1 border-border/50 overflow-hidden bg-background/50 backdrop-blur-sm shadow-lg rounded-xl flex flex-col">
        <CardContent className="flex-1 p-0 flex flex-col">
          <div className="flex-1 flex flex-col min-h-[350px]">
            <Chat
              initialPrompt=""
              onSend={sendMessage}
              messages={messages}
              isLoading={isLoading}
            />
          </div>
        </CardContent>
        <div className="p-4 border-t border-border/40 flex justify-center">
          <button
            onClick={handleBuildIt}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90 transition-opacity text-white font-medium flex items-center gap-2 shadow-md"
          >
            Build it! <Rocket className="h-4 w-4" />
          </button>
        </div>
      </Card>
    </div>
  );
}

// Add a loading fallback for the Suspense boundary
function BrainstormLoading() {
  return (
    <div className="container py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Loader2 className="h-12 w-12 animate-spin text-blue-500 mb-4" />
        <p className="text-lg font-medium">Loading your brainstorming session...</p>
      </div>
    </div>
  );
}

// Wrap the content component with Suspense
export default function BrainstormPage() {
  return (
    <Suspense fallback={<BrainstormLoading />}>
      <BrainstormContent />
    </Suspense>
  );
} 