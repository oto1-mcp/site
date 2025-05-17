import { CLAUDE_API_KEY } from "./constants";

export interface ClaudeMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ClaudeResponse {
  content: string;
}

export async function generateClaudeResponse(
  messages: ClaudeMessage[],
  systemPrompt?: string
): Promise<ClaudeResponse> {
  try {
    console.log("Generating Claude response with messages:", JSON.stringify(messages));
    
    const requestBody = {
      model: "claude-3-opus-20240229",
      messages: messages,
      system: systemPrompt || "You are a helpful brainstorming assistant that helps users build their dream startup or project. Be creative, insightful, and provide actionable steps.",
      max_tokens: 2000
    };
    
    console.log("Claude API request body:", JSON.stringify(requestBody));
    console.log("Claude API key being used:", CLAUDE_API_KEY.substring(0, 10) + "...");
    
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": CLAUDE_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify(requestBody),
    });

    console.log("Claude API response status:", response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Claude API error response:", errorText);
      let errorMessage;
      
      try {
        const errorData = JSON.parse(errorText);
        errorMessage = errorData.error?.message || response.statusText;
      } catch (e) {
        errorMessage = errorText || response.statusText;
      }
      
      throw new Error(`Claude API error: ${errorMessage}`);
    }

    const data = await response.json();
    console.log("Claude API response data:", JSON.stringify(data, null, 2).substring(0, 500) + "...");
    
    return {
      content: data.content[0].text
    };
  } catch (error) {
    console.error("Error generating Claude response:", error);
    throw error;
  }
} 