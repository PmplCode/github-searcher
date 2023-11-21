import { createContext, useContext, useState } from "react";
import { GitHubUser, GlobalContextProps } from "../types";

// Create a context with default values
const GlobalContext = createContext<GlobalContextProps>({
  users: null,
  setUsers: () => {},
  uniqueUser: null,
  setUniqueUser: () => {},
  userProjects: null,
  setUserProjects: () => {},
  loading: false,
  setLoading: () => {},
  error: "",
  setError: () => {},
  searchStep: 0,
  setSearchStep: () => {},
});

/**
 * Provides a global context to manage state across components.
 *
 * @param {React.ReactNode} children - The child components wrapped by the provider.
 * @returns {React.ReactNode} The children components with access to the global context.
 */
export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // State variables to manage global state
  const [users, setUsers] = useState<GitHubUser[] | null>(null);
  const [uniqueUser, setUniqueUser] = useState<GitHubUser | null>(null);
  const [userProjects, setUserProjects] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchStep, setSearchStep] = useState(0);

  return (
    // Provide the state variables and update functions to the context
    <GlobalContext.Provider
      value={{
        users,
        setUsers,
        uniqueUser,
        setUniqueUser,
        userProjects,
        setUserProjects,
        loading,
        setLoading,
        searchStep,
        setSearchStep,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

/**
 * Custom hook to access the global context.
 *
 * @returns {GlobalContextProps} The global context values and update functions.
 */
export const useGlobalContext = () => useContext(GlobalContext);