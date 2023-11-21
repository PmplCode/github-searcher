import React from "react";

interface Project {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string;
  forks_count: number;
  stargazers_count: number;
  topics: string[];
}

interface ProjectCardProps {
  project: Project;
}

/**
 * Represents a GitHub project with details such as name, description, language, etc.
 */

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Destructuring project object for easy access to its properties
  const {
    name,
    full_name,
    description,
    html_url,
    language,
    forks_count,
    stargazers_count,
    topics,
  } = project;

  return (
    <div className="rounded overflow-hidden shadow-lg bg-white dark:bg-[#1E272E] mx-auto max-w-sm my-8 md:max-w-none">
      <div className="px-6 py-4">
        <div className="dark:text-[#636262] text-[#fff] font-bold text-2xl mb-2">
          {name}
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          {full_name}
        </p>
        {description && (
          <p className="text-gray-700 dark:text-gray-300 text-base mt-2">
            {description}
          </p>
        )}
        <p className="text-gray-700 dark:text-gray-300 text-base mt-2">
          Language: {language}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          Forks: {forks_count}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          Stars: {stargazers_count}
        </p>
        <div className="mt-4">
          {topics.map((topic) => (
            <span
              key={topic}
              className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 py-4">
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3498DB] dark:bg-[#0f54a9] hover:bg-[#0d2244] text-white font-bold py-2 px-4 rounded"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
