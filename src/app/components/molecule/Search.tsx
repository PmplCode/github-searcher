"use client";
import { useState } from "react";
import { FetchUsers } from "../utils/get-users";
import { useGlobalContext } from "@/app/Context/appData";

/**
 * Search component provides a search input and button to search for GitHub users.
 *
 * @component
 * @returns {JSX.Element} The rendered Search component.
 */
export const Search = () => {
  const { setSearchStep, setError, setLoading, setUsers } = useGlobalContext();
  const [query, setQuery] = useState("");

  /**
   * Handles input changes in the search input field.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   */
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    const inputQuery = e.target.value;
    setQuery(inputQuery.trim());
  };

  /**
   * Handles form submission when the search button is clicked.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The form submit event.
   */
  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setError("");
    setUsers(null);
    setLoading(true);

    if (!query) {
      setLoading(false);
      setUsers(null);
      return setError("Please enter a user.");
    }

    try {
      const data = await FetchUsers(query);
      setUsers(data);
      setError("");
      setSearchStep(1);
    } catch (error) {
      console.error(error);
      setError(
        (error as Error).message || "An error occurred. Please try again later."
      );
    } finally {
      setLoading(false);
      setQuery("");
    }
  };

  /**
   * Handles keydown events, triggering form submission on Enter key.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The keydown event.
   */
  const handleKeyDown = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore: Unreachable code error
    if (e.key === "Enter" && query !== "") {
      handleSubmit(e);
    }
  };

  return (
    <div className="flex items-center space-x-4 mt-4 px-3 md:pt-0">
      <input
        className="input input-bordered join-item max-w-[50vw] md:max-w-unset md:input-md xl:input-lg bg-white dark:bg-[#1E272E] text-gray-800 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#3498DB] dark:focus:border-[#3498DB] rounded-l-full"
        type="text"
        placeholder="Search GitHub user"
        value={query}
        autoComplete="off"
        onChange={(e) => handleInput(e)}
        // @ts-ignore: Unreachable code error
        onKeyDown={handleKeyDown}
      />
      <button
        className="btn join-item xl:btn-lg bg-[#3498DB] dark:bg-[#0f54a9] hover:bg-[#0d2244] text-white font-bold py-2 px-4 rounded"
        // @ts-ignore: Unreachable code error
        onClick={handleSubmit}
        disabled={query === "" ? true : false}
      >
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="24px" // Adjusted height to ensure visibility on smaller screens
          width="24px" // Adjusted width to ensure visibility on smaller screens
        >
          <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
        </svg>
      </button>
    </div>
  );
};
