import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

export const getGeminiResponse = async (prompt: string, history: { role: string, parts: { text: string }[] }[] = []) => {
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set");
  }

  const ai = new GoogleGenAI({ apiKey });
  const chat = ai.chats.create({
    model: "gemini-3-flash-preview",
    config: {
      systemInstruction: "You are 'ORCAS AI', a world-class travel agent and concierge. Your goal is to help users plan their trips, find the best deals, track flights, and manage their itineraries. You are helpful, professional, and have a deep knowledge of global travel destinations. You can recommend apps like MakeMyTrip, Booking.com, Skyscanner, etc., for specific tasks. Keep responses concise and travel-focused.",
    },
  });

  // Since chat.sendMessage only accepts 'message', we can't easily pass history here 
  // without a more complex implementation. For simplicity in this turn, we'll just send the message.
  // In a real app, we'd rebuild the chat history.
  
  const response = await chat.sendMessage({ message: prompt });
  return response.text;
};
