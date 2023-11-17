import { useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { FetchUniqueUser } from "../utils/get-unique-user-with-projects";

export const UserGrid = ({ users, handleUniqueUser, loadingHandler }) => {
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  if (!users) return null;

  const handleClickOnUser = async (alias: string) => {
    loadingHandler(true);
    setError(null);

    if (!alias) {
      loadingHandler(false);
      handleUniqueUser(null);
      return setError("Please click a User.");
    }

    try {
      loadingHandler(true);
      const data = await FetchUniqueUser(alias);
      setError(null);
      handleUniqueUser(data);
    } catch (error) {
      console.error(error);
      setError(error.message || "An error occurred. Please try again later.");
    } finally {
      loadingHandler(false);
    }
  };

  const resultPhrase =
    users.total_count > 0 ? (
      <h3>
        Found <b>{users.total_count}</b> results for{" "}
        <b>{users.items[0].login}</b>
      </h3>
    ) : (
      <h3>No matches found</h3>
    );

  // Calculate the range of users to display for the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.items.slice(indexOfFirstUser, indexOfLastUser);

  const renderUsers = () => {
    return currentUsers.map((user) => (
      <div key={user.id} onClick={() => handleClickOnUser(user.login)}>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{user.login}</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={user.avatar_url}
              width={100}
            />
          </CardBody>
        </Card>
      </div>
    ));
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section>
      {resultPhrase}
      <div className="flex flex-row flex-wrap">{renderUsers()}</div>
      <div className="pagination-buttons">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button
          onClick={handleNextPage}
          disabled={indexOfLastUser >= users.items.length}
        >
          Next Page
        </button>
      </div>
    </section>
  );
};

export default UserGrid;
