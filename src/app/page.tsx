"use client";
import { useState } from "react";
import { Search } from "./components/molecule/Search";
import { UserCard } from "./components/molecule/UserCard";
import { UserGrid } from "./components/organism/UserGrid";
import { ProjectList } from "./components/organism/ProjectList";
import Image from "next/image";
import { Spinner } from "./components/atom/spinner";
import { useGlobalContext } from "./Context/appData";

export default function Home() {
  /* const [users, setUsers] = useState(null); */
  const { users, setUsers, searchStep, setSearchStep } = useGlobalContext();
  const [uniqueUser, setUniqueUser] = useState(null);
  const [userProjects, setUserProjects] = useState(null);
  const [loading, setLoading] = useState<Boolean>(false);

  const loadingHandler = (state: boolean) => {
    setLoading(state);
  };

  const handleUsers = (e) => {
    if (e === null) {
      setUsers(null);
      setUniqueUser(null);
      setUserProjects(null);
    }
    setUsers(e);
  };
  const handleUniqueUser = (e) => {
    setUniqueUser(e.user);
    setUserProjects(e.projects);
    setSearchStep((current) => ++current);
  };
  return (
    <main className="text-[#414141]">
      <div className="navbar bg-base-100 flex-row items-center justify-around border-b-3 border-[#414141] border-2">
        <div className="flex flex-row items-center">
          <Image
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            alt="github logo"
            width={100}
            height={100}
            className=""
          />
        </div>
        <Search
          handleUsers={(e) => handleUsers(e)}
          loadingHandler={(state: boolean) => loadingHandler(state)}
        />
      </div>

      <div className="relative">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {searchStep > 0 && (
              <button onClick={() => setSearchStep((current) => --current)}>
                {searchStep === 1 ? "Clear page" : "Go back"}
              </button>
            )}
            {searchStep === 1 && (
              <UserGrid
                users={users}
                handleUniqueUser={(e) => handleUniqueUser(e)}
                loadingHandler={(state: boolean) => loadingHandler(state)}
              />
            )}
            {searchStep === 2 && (
              <div className="flex flex-row">
                <aside className="w-full md:w-[30vw]">
                  {<UserCard uniqueUser={uniqueUser} />}
                </aside>
                <section>
                  <ProjectList projects={userProjects} />
                </section>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
