"use client";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Spacer } from "@nextui-org/spacer";

import { FetchUsers } from "../utils/get-users";

export const Search = ({ handleUsers, loadingHandler }) => {
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
        <Input
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
        />
        <Spacer x={0.5} />
        <Button
          onClick={handleSubmit}
          disabled={disabled}
          className="rounded-l"
        >
          Search
        </Button>
      </div>
      {error && <p className="text-red">{error}</p>}
    </>
  );
};
