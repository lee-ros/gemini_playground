require("dotenv").config();

import { GoogleGenerativeAI } from "@google/generative-ai";
import mockData from "./mockData.json";

// Access your API key as an environment variable (see "Set up your API key" above)
const API_KEY = process.env.GEMINI_KEY || null

if (!API_KEY) process.exit();

const genAI = new GoogleGenerativeAI(API_KEY);

// The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function run() {
    const prompt = `You are a fitness trainer that
        is here to help analyze and give insights to the user
        from an activity report: ${JSON.stringify(mockData)}
        only answer with points on how to improve my next activity`

    // console.log(prompt);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  
  run();
  
