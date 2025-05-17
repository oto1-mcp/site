import { NextRequest, NextResponse } from "next/server";
import { generateClaudeResponse } from "@/lib/claude";
import { CLAUDE_API_KEY } from "@/lib/constants";

export async function POST(request: NextRequest) {
  console.log("Claude API route called");
  console.log("Environment CLAUDE_API_KEY exists:", !!process.env.CLAUDE_API_KEY);
  console.log("API key from constants:", CLAUDE_API_KEY.substring(0, 10) + "...");
  console.log("API key length:", CLAUDE_API_KEY.length);
  
  try {
    const requestBody = await request.json();
    console.log("Request body received:", JSON.stringify(requestBody));
    
    const { messages, systemPrompt } = requestBody;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      console.error("Invalid messages in request:", messages);
      return NextResponse.json(
        { error: "Messages are required and must be an array" },
        { status: 400 }
      );
    }

    console.log("Calling Claude API with messages:", JSON.stringify(messages));
    console.log("System prompt:", systemPrompt);
    
    try {
      const response = await generateClaudeResponse(messages, systemPrompt);
      console.log("Claude API response received:", JSON.stringify(response));
      return NextResponse.json(response);
    } catch (claudeError: any) {
      console.error("Error from Claude API:", claudeError);
      return NextResponse.json(
        { error: `Claude API error: ${claudeError.message || "Unknown error"}` },
        { status: 502 }
      );
    }
  } catch (error: any) {
    console.error("Error in Claude API route:", error);
    return NextResponse.json(
      { error: "Failed to generate response", details: error.message || "Unknown error" },
      { status: 500 }
    );
  }
} 