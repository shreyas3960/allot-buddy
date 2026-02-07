import ToolCard from "./ToolCard";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "";

/**
 * ToolsSection – fetches the tool list from the backend API and
 * renders a responsive grid of AI tool cards.
 * If the user is not logged in, a prompt to sign in is shown instead.
 */
function ToolsSection() {
  const { user, loading: authLoading } = useAuth();
  const [tools, setTools] = useState([]);
  const [loadingTools, setLoadingTools] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;

    setLoadingTools(true);
    setError(null);
    fetch(`${API_BASE}/api/tools`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tools");
        return res.json();
      })
      .then((data) => setTools(data))
      .catch((err) => {
        console.error("Failed to fetch tools:", err);
        setError("Failed to load tools. Please try again.");
      })
      .finally(() => setLoadingTools(false));
  }, [user]);

  return (
    <section id="tools" className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          AI Tools
        </h2>

        {authLoading || loadingTools ? (
          <p className="text-center text-gray-500">Loading…</p>
        ) : !user ? (
          <div className="flex flex-col items-center gap-4 py-20">
            <p className="text-lg text-gray-400">
              Please login to access tools
            </p>
          </div>
        ) : error ? (
          <p className="text-center text-red-400">{error}</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ToolsSection;
