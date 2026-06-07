import { GoogleGenerativeAI } from "@google/generative-ai";
const apiKey = "AIzaSyD5VYmiBJmqQGtiDFAkcn6pqQYj9xFM5iA";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export {
  model as m
};
