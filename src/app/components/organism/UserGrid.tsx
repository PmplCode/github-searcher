import { useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { FetchUniqueUser } from "../fetch/FetchUniqueUser";

export const UserGrid = ({ users, handleUniqueUser }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!users) return null;

  const handleClickOnUser = async (e) => {
    setError(null);

    if (!e) {
      handleUniqueUser(null);
      return setError("Please click a User.");
    }
    setLoading(true);

    try {
      const data = await FetchUniqueUser(e);
      handleUniqueUser(data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error.message || "An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row flex-wrap">
      {users.items.map((user) => (
        <div
          key={user.id}
          onClick={() => handleClickOnUser(user.login)}
          className=""
        >
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
      ))}
    </div>
  );
};
export default UserGrid;
