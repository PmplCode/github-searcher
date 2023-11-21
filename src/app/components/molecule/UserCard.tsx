import { UserCardProps } from "@/app/types";
import Image from "next/image";

/**
 * UserCard component displays information about a GitHub user, including
 * their avatar, name, bio, public repositories, followers, following, and GitHub profile details.
 *
 * @component
 * @param {UserCardProps} props - The props for the UserCard component.
 * @param {Object} props.uniqueUser - The GitHub user object with details to be displayed.
 * @returns {JSX.Element | null} The rendered UserCard component or null if uniqueUser is falsy.
 */
export const UserCard: React.FC<UserCardProps> = ({ uniqueUser }) => {
  if (!uniqueUser) return null;

  const {
    login,
    avatar_url,
    html_url,
    name,
    bio,
    public_repos,
    followers,
    following,
    created_at,
    updated_at,
  } = uniqueUser;

  return (
    <div className="bg-white dark:bg-[#1E272E] rounded-md overflow-hidden transition-transform transform hover:scale-[101%]">
      <div className="card w-full bg-base-100 dark:bg-[#1E272E] shadow-xl">
        <figure className="px-5 pt-5">
          <Image
            src={avatar_url}
            alt={`Avatar of ${login}`}
            className="w-20 h-20 rounded-full mx-auto mb-4"
            width={80}
            height={80}
          />
        </figure>
        <div className="card-body items-center text-center py-1 pb-4">
          <h2 className="text-xl font-semibold dark:text-[#fff]">{name}</h2>
          <p className="text-gray-500 dark:text-gray-400">@{login}</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{bio}</p>
          <div className="text-gray-500 dark:text-gray-400">
            <p>
              <strong>Repos:</strong> {public_repos}
            </p>
            <p>
              <strong>Followers:</strong> {followers}
            </p>
            <p>
              <strong>Following:</strong> {following}
            </p>
          </div>
          <div className="mt-4 text-gray-500 dark:text-gray-400">
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-500 dark:hover:text-blue-300"
              >
                {html_url}
              </a>
            </p>
            <p>
              <strong>Joined GitHub:</strong>{" "}
              {new Date(created_at).toLocaleDateString()}
            </p>
            <p>
              <strong>Last updated:</strong>{" "}
              {new Date(updated_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
