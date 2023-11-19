import React, { useState, useEffect } from "react";
import ProjectCard from "../molecule/ProjectCard";
import ProjectSearchBar from "../molecule/ProjectSearchbar";
import { ProjectListProps, Project } from "@/app/types";

interface ProjectSearchBarProps {
  projects: Project[];
  onSearch: (data: { name: string; technologies: string }) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    setFilteredProjects(projects);
  }, [projects]);

  const handleSearch = (searchParams: {
    name: string;
    technologies: string;
  }) => {
    const filtered = projects.filter((project) => {
      const nameMatch =
        !searchParams.name ||
        project.name.toLowerCase().includes(searchParams.name.toLowerCase());
      const techMatch =
        !searchParams.technologies ||
        searchParams.technologies === project.language?.toLowerCase();

      return nameMatch && techMatch;
    });

    setFilteredProjects(filtered);
  };

  if (filteredProjects === null) return null;

  return (
    <>
      <ProjectSearchBar projects={projects} onSearch={handleSearch} />
      <div className="project-list bg-white dark:bg-[#1E272E]">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="font-raleway text-xl text-center w-[91vw] md:w-auto mx-auto md:text-2xl lg:text-3xl text-balance my-3 md:my-8 dark:text-[#fff]">
            No projects found.
          </p>
        )}
      </div>
    </>
  );
};

export default ProjectList;
