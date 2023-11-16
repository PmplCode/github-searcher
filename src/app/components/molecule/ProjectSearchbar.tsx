import React, { useState, useEffect, useCallback } from "react";
import { Select } from "@nextui-org/select";
import { SelectItem } from "@nextui-org/select";
import { FetchUniqueTechnologies } from "../fetch/FetchTechnologies";

interface ProjectSearchBarProps {
  onSearch: (data: { name: string; technologies: string[] }) => void;
  projects: YourProjectType[]; // Replace YourProjectType with the actual type of your project
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

  return (
    <div className="flex items-center space-x-4 mt-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search by name"
          className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="relative">
        <Select
          label="Technologies"
          placeholder="Select technologies"
          selectionMode="single"
          className="w-[30vw] max-w-xl"
          value={selectedTechnologies}
          onChange={(value) => setSelectedTechnologies(value)}
        >
          {collectedTechnologies.length > 0 &&
            collectedTechnologies.map((tech) => (
              <SelectItem key={tech} value={tech}>
                {tech}
              </SelectItem>
            ))}
        </Select>
      </div>
    </div>
  );
};

export default ProjectSearchBar;
