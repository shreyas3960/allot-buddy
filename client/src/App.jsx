/**
 * App component – renders the landing page with a hero section
 * and an empty AI Tools section placeholder.
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
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

      {/* AI Tools Section (placeholder) */}
      <section
        id="tools"
        className="flex items-center justify-center min-h-screen px-4 text-center"
      >
        <p className="text-gray-500 text-lg">
          AI Tools coming soon&hellip;
        </p>
      </section>
    </div>
  );
}

export default App;
