import React, { useState, useEffect } from "react";
import ProjectCard from "../molecule/ProjectCard";
import ProjectSearchBar from "../molecule/ProjectSearchbar";

interface Owner {
  login: string;
  avatar_url: string;
}

interface License {
  key: string;
  name: string;
}

interface Project {
  id: number;
  name: string;
  owner: Owner;
  html_url: string;
  description: string;
  language: string;
  forks_count: number;
  watchers_count: number;
  stargazers_count: number;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

interface ProjectListProps {
  projects: Project[];
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
        searchParams.technologies == project.language?.toLowerCase();

      return nameMatch && techMatch;
    });

    setFilteredProjects(filtered);
  };

  if (filteredProjects === null) return null;

  return (
    <>
      <ProjectSearchBar projects={projects} onSearch={handleSearch} />
      <div className="project-list">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectList;
