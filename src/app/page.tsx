"use client";
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
import { ErrorModal } from "./components/atom/ErrorModal";

export default function Home() {
  const {
    users,
    searchStep,
    setSearchStep,
    error,
    loading,
    uniqueUser,
    userProjects,
  } = useGlobalContext();

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
            priority={true}
          />
        </div>
        <Search />
      </div>

      <div className="relative">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {error && <ErrorModal error={error} />}
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
                  <ProjectList projects={userProjects ?? []} />
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
