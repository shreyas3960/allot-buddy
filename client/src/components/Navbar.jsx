import { useAuth } from "../context/AuthContext";

/**
 * Navbar – displays the app title, and either a Google Sign-In button
 * or the logged-in user's avatar + name with a Logout button.
 */
function Navbar() {
  const { user, loginWithGoogle, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-gray-900/80 px-4 py-3 backdrop-blur-md sm:px-6">
      <span className="text-lg font-bold tracking-tight text-gray-100">
        Allot Buddy
      </span>

      <div className="flex items-center gap-3">
        {user ? (
          <>
            {/* User profile */}
            <img
              src={user.photoURL || ""}
              alt={user.displayName || "User"}
              referrerPolicy="no-referrer"
              className="h-8 w-8 rounded-full border border-gray-700"
            />
            <span className="hidden text-sm text-gray-300 sm:inline">
              {user.displayName || "User"}
            </span>

            {/* Logout button */}
            <button
              type="button"
              onClick={logout}
              className="rounded-lg bg-gray-800 px-4 py-1.5 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Logout
            </button>
          </>
        ) : (
          /* Login button */
          <button
            type="button"
            onClick={loginWithGoogle}
            className="rounded-lg bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Sign in with Google
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
