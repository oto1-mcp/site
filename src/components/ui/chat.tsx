import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, CornerDownLeft, RefreshCw, User } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { ClaudeMessage } from "@/lib/claude";

interface ChatProps {
  initialPrompt?: string;
  onSend: (message: string) => void;
  messages: ClaudeMessage[];
  isLoading: boolean;
}

export function Chat({ initialPrompt, onSend, messages, isLoading }: ChatProps) {
  const [message, setMessage] = useState(initialPrompt || "");
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Send button clicked, message:", message);
    if (message.trim() && !isLoading) {
      console.log("Sending message to onSend function");
      onSend(message.trim());
      setMessage("");
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  return (
          <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            } animate-fadeIn`}
          >
            <div
              className={`flex max-w-[85%] ${
                msg.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center ${
                  msg.role === "user"
                    ? "bg-blue-600 ml-2"
                    : "bg-gradient-to-br from-blue-600 to-indigo-600 mr-2"
                }`}
              >
                {msg.role === "user" ? (
                  <User className="h-3 w-3 text-white" />
                ) : (
                  <Sparkles className="h-3 w-3 text-white" />
                )}
              </div>

              <div
                className={`rounded-lg p-3 shadow-sm text-sm ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-background/70 backdrop-blur-sm border border-border/50"
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.content}</div>
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start animate-fadeIn">
                          <div className="flex max-w-[85%]">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 mr-2 flex items-center justify-center">
                <Sparkles className="h-3 w-3 text-white" />
              </div>
              <div className="rounded-lg p-3 bg-background/70 backdrop-blur-sm border border-border/50 shadow-sm text-sm">
                <div className="flex items-center space-x-2">
                  <RefreshCw className="h-4 w-4 text-blue-500 animate-spin" />
                  <div className="text-sm">AI is thinking...</div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={endOfMessagesRef} />
      </div>

      <Card className="border-t rounded-none border-x-0 border-b-0 bg-background/90 backdrop-blur-md mt-auto">
        <form onSubmit={handleSend} className="flex p-4">
          <div className="relative flex-1 mr-2">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="w-full rounded-xl border border-input bg-background/70 backdrop-blur-sm px-4 py-3 pr-12 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[2.5rem] max-h-[8rem] resize-none"
              disabled={isLoading}
              rows={1}
            />
            <div className="absolute right-3 bottom-3 text-xs text-muted-foreground">
              <CornerDownLeft className="h-3 w-3 inline mr-1" />
              to send
            </div>
          </div>
          <Button
            type="submit"
            disabled={!message.trim() || isLoading}
            className="rounded-full h-12 w-12 p-0 flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-opacity"
          >
            <Send className="h-5 w-5 text-white" />
          </Button>
        </form>
      </Card>
    </div>
  );
} 