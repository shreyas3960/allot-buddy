import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

const AuthContext = createContext(null);

/**
 * AuthProvider – wraps the app to provide authentication state
 * and sign-in / sign-out helpers to all child components.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  /** Sign in with Google popup. */
  const loginWithGoogle = () => {
    if (!auth || !googleProvider) return Promise.reject(new Error("Firebase not configured"));
    return signInWithPopup(auth, googleProvider);
  };

  /** Sign the current user out. */
  const logout = () => {
    if (!auth) return Promise.resolve();
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/** Hook to access auth state from any component. */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
