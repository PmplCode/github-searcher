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
import landingImageSrc2 from "../../public/landing-image-2.jpg";

/**
 * Home component representing the main page of the application.
 *
 * @returns {React.ReactNode} The main content of the home page.
 */
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
    <main className="text-[#414141] dark:text-[#fff] pb-6 max-w-[1440px] mx-auto bg-base-100">
      <div className="navbar flex-row items-center justify-around border-b-3 border-[#414141] bg-white dark:bg-[#1E272E]">
        <div className="flex flex-row items-center">
          <Image
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            alt="github logo"
            width={100}
            height={100}
            className="w-20 lg:w-[100px] md:h-auto mix-blend-multiply"
            priority={true}
          />
        </div>
        <Search />
      </div>

      <div className="relative">
        {searchStep === 0 && (
          <>
            <div className="text-center text-balance px-4 mb-8 mt-12">
              <h1 className="text-4xl lg:text-5xl font-semibold text-[#414141] dark:text-[#fff] font-raleway">
                Welcome to Github User Searcher
              </h1>
              <p className="text-[#636363] dark:text-[#ccc] mt-8">
                Discover GitHub users and their projects with ease.
              </p>
            </div>
            <Image
              src={landingImageSrc2}
              alt="landing image"
              className="max-w-[80vw] mx-auto rounded-lg shadow-lg"
              width={1024}
              height={1024}
            />
          </>
        )}
        {/* Loading spinner or content based on search step */}
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

            {searchStep === 1 && (
              // @ts-ignore: Unreachable code error
              <UserGrid users={users} />
            )}
            {searchStep === 2 && (
              <div className="flex flex-col md:flex-row md:gap-[5vw]">
                <aside className="w-full md:w-[35vw]">
                  {
                    // @ts-ignore: Unreachable code error
                    <UserCard uniqueUser={uniqueUser} />
                  }
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
