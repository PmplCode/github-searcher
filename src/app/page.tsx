"use client";
import { useState } from "react";
import { Search } from "./components/molecule/Search";
import { UserCard } from "./components/molecule/UserCard";
import { UserGrid } from "./components/organism/UserGrid";
import { ProjectList } from "./components/organism/ProjectList";
import Image from "next/image";

export default function Home() {
  const [users, setUser] = useState(null);
  const [uniqueUser, setUniqueUser] = useState(null);
  const [userProjects, setUserProjects] = useState(null);

  const handleUsers = (e) => {
    setUser(e);
  };
  const handleUniqueUser = (e) => {
    setUser(null);
    setUniqueUser(e.user);
    setUserProjects(e.projects);
  };
  return (
    <main className="text-[#414141]">
      <header className="flex flex-row items-center justify-around border-b-3 border-[#414141]">
        <div className="flex flex-row items-center">
          <Image
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            alt="github logo"
            width={100}
            height={100}
          />
          <h1 className="font-[Raleway] font-primary font-semibold text-5xl leading-6xl">
            Github user search
          </h1>
        </div>
        <Search handleUsers={(e) => handleUsers(e)} />
      </header>

      <div className="flex flex-row">
        <aside className="w-full md:w-[30vw]">
          {<UserCard uniqueUser={uniqueUser} />}
        </aside>
        <section>
          <ProjectList projects={userProjects} />
        </section>
      </div>
      <UserGrid users={users} handleUniqueUser={(e) => handleUniqueUser(e)} />
    </main>
  );
}
