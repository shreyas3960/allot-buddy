import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ToolsSection from "./components/ToolsSection";

/**
 * App component – renders the landing page with a hero section
 * and the AI Tools grid, wrapped in an AuthProvider for Google sign-in.
 */
function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
        {/* Navigation bar with login / user profile */}
        <Navbar />

        {/* Hero / Landing Section */}
        <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Allot Buddy
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-400 sm:text-xl">
            Your intelligent assistant for smarter resource allocation and
            planning.
          </p>
          <a
            href="#tools"
            className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Explore AI Tools
          </a>
        </section>

        {/* AI Tools Section */}
        <ToolsSection />
      </div>
    </AuthProvider>
  );
}

export default App;
