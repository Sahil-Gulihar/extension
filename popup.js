import { GoogleGenerativeAI } from "@google/generative-ai";

// Function to initialize the API and run the generation
async function initializeAndRun(apiKey, prompt) {
  const genAI = new GoogleGenerativeAI(apiKey);

  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    console.log(text);
    document.getElementById('output').innerText = text;
  } catch (error) {
    console.error("Error generating content:", error);
    document.getElementById('output').innerText = 'Error generating content';
  }
}

// Event listener for button click
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('generateContent');
  button.addEventListener('click', async function() {
    const apiKey = 'YOUR_API_KEY';  // Replace with your actual API key securely
    const prompt = document.getElementById('prompt').value;
    await initializeAndRun(apiKey, prompt);
  });
});
