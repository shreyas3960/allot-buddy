/**
 * ToolCard – displays a single AI tool as a card with icon, name,
 * description, and an "Open Tool" button.
 */
function ToolCard({ name, description, icon }) {
  return (
    <div className="group flex h-full flex-col items-center rounded-2xl border border-gray-800 bg-gray-900 p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-indigo-500/10">
      {/* Icon */}
      <span className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>

      {/* Tool name */}
      <h3 className="text-lg font-semibold text-gray-100">{name}</h3>

      {/* Short description */}
      <p className="mt-2 flex-1 text-sm text-gray-400">{description}</p>

      {/* Action button */}
      <button
        type="button"
        onClick={() => alert(`${name} – coming soon!`)}
        className="mt-6 rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        Open Tool
      </button>
    </div>
  );
}

export default ToolCard;
