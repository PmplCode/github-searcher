"use client";
import { useState } from "react";
import { Spacer } from "@nextui-org/spacer";

import { FetchUsers } from "../utils/get-users";
import { useGlobalContext } from "@/app/Context/appData";

export const Search = ({ handleUsers, loadingHandler }) => {
  const { setSearchStep } = useGlobalContext();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    setDisabled(false);
    setError(null);
    const inputQuery = e.target.value;
    setQuery(inputQuery.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchStep((current) => ++current);
    setError(null);
    handleUsers(null);
    loadingHandler(true);

    if (!query) {
      loadingHandler(false);
      handleUsers(null);
      return setError("Please enter a user.");
    }

    try {
      const data = await FetchUsers(query);
      handleUsers(data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error.message || "An error occurred. Please try again later.");
    } finally {
      loadingHandler(false);
    }
  };

  const handleClear = () => {
    setQuery("");
    setDisabled(true);
    setError(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && query !== "") {
      handleSubmit(event);
    }
  };

  return (
    <>
      <div className="flex items-center">
        {/*         <Input
          isClearable
          value={query}
          color="default"
          radius="sm"
          autoComplete="off"
          placeholder="Search GitHub user"
          onClear={() => handleClear()}
          onChange={(e) => handleInput(e)}
          onKeyDown={handleKeyDown}
          width="200px"
          className="rounded-l w-100"
        /> */}
        <input
          type="text"
          placeholder="Search GitHub user"
          className="input input-bordered sm:input-sm md:input-md lg:input-lg w-full max-w-xs"
          isClearable
          value={query}
          autoComplete="off"
          onClear={() => handleClear()}
          onChange={(e) => handleInput(e)}
          onKeyDown={handleKeyDown}
        />

        <Spacer x={0.5} />
        {/* <button
          onClick={handleSubmit}
          disabled={disabled}
          className="rounded-l"
        >
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="2em"
            width="2em"
          >
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
          </svg>
        </button> */}
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          onClick={handleSubmit}
          disabled={query === "" ? true : false}
        >
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="inherit"
            width="inherit"
          >
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
          </svg>
        </button>
      </div>
      {error && <p className="text-red">{error}</p>}
    </>
  );
};
