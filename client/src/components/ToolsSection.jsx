import ToolCard from "./ToolCard";
import { useAuth } from "../context/AuthContext";

/** List of AI tools displayed in the grid. */
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

/**
 * ToolsSection – renders a responsive grid of AI tool cards.
 * If the user is not logged in, a prompt to sign in is shown instead.
 */
function ToolsSection() {
  const { user, loading } = useAuth();

  return (
    <section id="tools" className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          AI Tools
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading…</p>
        ) : user ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 py-20">
            <p className="text-lg text-gray-400">
              Please login to access tools
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ToolsSection;
