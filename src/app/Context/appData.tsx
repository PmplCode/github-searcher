"use client";

import { createContext, useContext, SetStateAction, useState } from "react";
import { GitHubUser, GlobalContextProps } from '../types';

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

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<GitHubUser[] | null>(null);
  const [uniqueUser, setUniqueUser] = useState<GitHubUser | null>(null);
  const [userProjects, setUserProjects] = useState<any[] | null>(null);
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
