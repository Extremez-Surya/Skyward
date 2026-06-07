import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyD5VYmiBJmqQGtiDFAkcn6pqQYj9xFM5iA");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export {
  model as m
};
