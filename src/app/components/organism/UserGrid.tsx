import { useState } from "react";
import { Image } from "@nextui-org/image";
import { FetchUniqueUser } from "../utils/get-unique-user-with-projects";
import { useGlobalContext } from "@/app/Context/appData";
import { GitHubUserResponse } from "@/app/types";

export const UserGrid = ({ users }: { users: GitHubUserResponse }) => {
  const {
    setError,
    setLoading,
    setUniqueUser,
    setUserProjects,
    setSearchStep,
  } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  if (!users) return null;

  const handleClickOnUser = async (alias: string) => {
    setLoading(true);
    setError("");

    if (!alias) {
      setLoading(false);
      setUniqueUser(null);
      return setError("Please click a User.");
    }

    try {
      setLoading(true);
      const data = await FetchUniqueUser(alias);
      setError("");
      setUniqueUser(data.user);
      setUserProjects(data.projects);
      setSearchStep(2);
    } catch (error) {
      setError(
        (error as Error).message || "An error occurred. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const resultPhrase =
    users.total_count > 0 ? (
      <h3 className="text-center font-raleway text-2xl w-[fit-content] mx-auto my-6 lg:text-3xl">
        Found <b>{users.total_count}</b> results for{" "}
        <b>{users.items[0].login}</b> <br />{" "}
        {users.total_count > 30 && (
          <p className="text-xs text-center lg:text-sm">
            Please, accurate your search if your user does not appear.
          </p>
        )}
      </h3>
    ) : (
      <h3 className="text-center font-raleway text-2xl w-[fit-content] mx-auto my-6 lg:text-3xl">
        No matches found
      </h3>
    );

  // Calculate the range of users to display for the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.items.slice(indexOfFirstUser, indexOfLastUser);

  const renderUsers = () => {
    return currentUsers.map((user) => (
      <div
        className="card w-40 bg-base-100 shadow-xl border-2 cursor-pointer hover:w-44 transition-all duration-100	ease-in"
        key={user.id}
        onClick={() => handleClickOnUser(user.login)}
      >
        <figure className="px-5 pt-5">
          <Image
            src={user.avatar_url}
            alt={user.login}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center break-all">
          <h2 className="card-title">{user.login}</h2>
        </div>
      </div>
    ));
  };

  const handleNextPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section>
      {resultPhrase}
      <div className="flex flex-row flex-wrap gap-3 justify-center lg:max-w-[1000px] lg:mx-auto">
        {renderUsers()}
      </div>
      {users.total_count > 0 && (
        <div className="join grid grid-cols-2 my-8 px-6 md:w-[max-content] md:mx-auto">
          <button
            className="join-item btn btn-outline"
            onClick={handlePrevPage}
            disabled={indexOfFirstUser === 0}
          >
            Previous page
          </button>
          <button
            className="join-item btn btn-outline"
            onClick={handleNextPage}
            disabled={indexOfLastUser >= users.items.length}
          >
            Next page
          </button>
        </div>
      )}
    </section>
  );
};

export default UserGrid;
