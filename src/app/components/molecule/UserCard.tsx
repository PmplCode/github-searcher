import Image from "next/image";

export const UserCard = ({ uniqueUser }) => {
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
    <div className="bg-white p-4 rounded-md shadow-sm flex flex-col gap-5">
      <Image
        src={avatar_url}
        alt={`Avatar of ${login}`}
        className="w-20 h-20 rounded-full mx-auto mb-4"
        width={80}
        height={80}
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">@{login}</p>
      <p className="mt-2 text-gray-600">{bio}</p>
      <div className="mt-4">
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
      <div className="mt-4 text-gray-500">
        <p>
          <strong>GitHub:</strong>{" "}
          <a href={html_url} target="_blank" rel="noopener noreferrer">
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
  );
};
