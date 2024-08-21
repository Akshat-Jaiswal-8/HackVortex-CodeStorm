"use client";
import { GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "dotenv";
import toast from "react-hot-toast";

config();
const genAI: GoogleGenerativeAI = new GoogleGenerativeAI(
  "AIzaSyC1loRgGWuETY86H8TOKlsiCSAbeyB8sHo",
);

export default async function checkAnswer({
  question,
  answer,
}: {
  question: string;
  answer: string;
}): Promise<void> {
  const model: GenerativeModel = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  const prompt: string = `Q: ${question}\nA: ${answer}\nRate this answer on a scale of 0 to 5 and only provide the rating to me like a number only:`;
  const result = await model.generateContent(prompt);
  const response = result.response;
  const text: string = await response.text();
  toast.success(`You got a rating of${text}`);
}
