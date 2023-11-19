"use client";
import { useState } from "react";
import { Search } from "./components/molecule/Search";
import { UserCard } from "./components/molecule/UserCard";
import { UserGrid } from "./components/organism/UserGrid";
import { ProjectList } from "./components/organism/ProjectList";
import Image from "next/image";
import { Spinner } from "./components/atom/spinner";
import { useGlobalContext } from "./Context/appData";
import ScrollToTopButton from "./components/atom/ScrollToTopButton";
import { HomeSvg } from "./components/atom/HomeSvg";
import { ArrowBackSvg } from "./components/atom/ArrowBackSvg";

export default function Home() {
  const {
    users,
    setUsers,
    searchStep,
    setSearchStep,
    error,
    loading,
    uniqueUser,
    userProjects,
  } = useGlobalContext();
  const [nana, setUniqueUser] = useState(null);
  const [nana1, setUserProjects] = useState(null);

  const handleUsers = (e) => {
    setUsers(e);
  };

  return (
    <main className="text-[#414141] pb-6 max-w-[1440px] mx-auto">
      <div className="navbar bg-base-100 flex-row items-center justify-around border-b-3 border-[#414141]">
        <div className="flex flex-row items-center">
          <Image
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            alt="github logo"
            width={100}
            height={100}
            className="w-20 md:w-16 lg:w-[100px]"
          />
        </div>
        <Search />
      </div>

      <div className="relative">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {error && (
              <div
                role="alert"
                className="alert alert-error w-[fit-content] mx-auto mt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            )}
            {searchStep > 0 && (
              <button
                onClick={() => setSearchStep((current) => --current)}
                className="ml-4 mt-4 lg:ml-12"
              >
                {searchStep === 1 ? <HomeSvg /> : <ArrowBackSvg />}
              </button>
            )}
            {searchStep === 1 && <UserGrid users={users} />}
            {searchStep === 2 && (
              <div className="flex flex-col md:flex-row md:gap-[5vw]">
                <aside className="w-full md:w-[35vw]">
                  {<UserCard uniqueUser={uniqueUser} />}
                </aside>
                <section className="w-full md:pr-6">
                  <ProjectList projects={userProjects} />
                </section>
              </div>
            )}
          </>
        )}
      </div>
      <ScrollToTopButton />
    </main>
  );
}
