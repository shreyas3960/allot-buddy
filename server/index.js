const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all origins
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// List of AI tools served to the frontend
const tools = [
  {
    name: "AI Text Generator",
    description: "Generate high-quality text content with AI assistance.",
    icon: "✍️",
  },
  {
    name: "Code Assistant",
    description: "Get intelligent code suggestions and debugging help.",
    icon: "💻",
  },
  {
    name: "Image Generator",
    description: "Create stunning images from text prompts.",
    icon: "🎨",
  },
  {
    name: "Resume Analyzer",
    description: "Analyze and improve your resume with AI insights.",
    icon: "📄",
  },
  {
    name: "PDF Summarizer",
    description: "Summarize lengthy PDFs into concise key points.",
    icon: "📑",
  },
  {
    name: "Chatbot Assistant",
    description: "Interact with an AI-powered conversational assistant.",
    icon: "🤖",
  },
  {
    name: "Productivity Planner",
    description: "Plan and organize your tasks with AI-driven scheduling.",
    icon: "📅",
  },
];

// Test route to verify the server is running
app.get("/api/test", (_req, res) => {
  res.json({ status: "ok" });
});

// Return the list of available AI tools
app.get("/api/tools", (_req, res) => {
  res.json(tools);
});

// Mock AI text generation
app.post("/api/text", (req, res) => {
  const { prompt } = req.body;
  res.json({
    result: `[Mock] AI-generated text for: "${prompt || "no prompt provided"}"`,
  });
});

// Mock AI code generation
app.post("/api/code", (req, res) => {
  const { prompt } = req.body;
  res.json({
    result: `// [Mock] AI-generated code for: "${prompt || "no prompt provided"}"\nconsole.log("Hello from AI Code Assistant!");`,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
