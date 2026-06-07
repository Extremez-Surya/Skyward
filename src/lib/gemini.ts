import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.warn('⚠️ GEMINI_API_KEY is missing. Please check your Vercel environment variables.');
}

const genAI = new GoogleGenerativeAI(apiKey || 'placeholder');

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default genAI;
