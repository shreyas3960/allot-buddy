/**
 * Spinner – a simple animated loading spinner.
 */
function Spinner() {
  return (
    <div className="flex justify-center py-12">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-indigo-500" />
    </div>
  );
}

export default Spinner;
