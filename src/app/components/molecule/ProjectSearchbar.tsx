import React, { useState, useEffect, useCallback } from "react";
import { Select } from "@nextui-org/select";
import { SelectItem } from "@nextui-org/select";
import { Project } from "@/app/types";

interface ProjectSearchBarProps {
  onSearch: (data: { name: string; technologies: string }) => void;
  projects: Project[]; // Replace YourProjectType with the actual type of your project
}

export const ProjectSearchBar: React.FC<ProjectSearchBarProps> = ({
  onSearch,
  projects,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState();
  const [collectedTechnologies, setCollectedTechnologies] = useState<string[]>(
    []
  );

  const handleSearch = useCallback(() => {
    onSearch({
      name: searchTerm,
      // @ts-ignore: Unreachable code error
      technologies: selectedTechnologies?.target?.value.toLowerCase(),
    });
  }, [onSearch, searchTerm, selectedTechnologies]);

  useEffect(() => {
    let uniqueTechnologies = new Set<string>();

    projects?.forEach((project) => {
      if (typeof project.language === "string") {
        uniqueTechnologies.add(project.language);
      }
    });

    const technologiesArray: string[] = Array.from(uniqueTechnologies);

    setCollectedTechnologies(technologiesArray);
  }, [projects]);

  useEffect(() => {
    handleSearch();
  }, [searchTerm, selectedTechnologies]);

  if (projects.length === 0) return null;

  return (
    <div className="flex items-center space-x-4 mt-4 px-3 md:pt-0">
      <input
        type="text"
        placeholder="Search by name"
        className="input input-bordered input-md w-full flex-1 max-w-[50vw] bg-white dark:bg-[#1E272E] text-gray-800 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#3498DB] dark:focus:border-[#3498DB] rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Select
        label="Technologies"
        selectionMode="single"
        className="max-w-xl flex-1"
        value={selectedTechnologies}
        // @ts-ignore: Unreachable code error
        onChange={(value) => setSelectedTechnologies(value)}
      >
        {collectedTechnologies.map((tech) => (
          <SelectItem key={tech} value={tech}>
            {tech}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default ProjectSearchBar;
