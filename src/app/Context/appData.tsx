"use client";

import { createContext, useContext, SetStateAction, useState } from "react";

const GlobalContext = createContext({
  users: "" || null,
  setUsers: (): string | null => "" || null,
  uniqueUser: "" || null,
  setUniqueUser: (): string | null => "" || null,
  userProjects: [] || null,
  setUserProjects: (): [] => [],
  loading: false,
  setLoading: (): boolean => false,
  error: "",
  setError: (): string => "",
  searchStep: 0,
  setSearchStep: (): number => 0,
});

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState(null);
  const [uniqueUser, setUniqueUser] = useState(null);
  const [userProjects, setUserProjects] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchStep, setSearchStep] = useState(0);

  return (
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

export const useGlobalContext = () => useContext(GlobalContext);
