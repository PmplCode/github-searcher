interface Project {
  full_name: string;
}

/**
 * ¡Un-used component!
 * Fetches unique technologies used across a list of projects.
 *
 * @param {Project[]} projects - The list of projects to fetch technologies for.
 * @returns {Promise<string[]>} A Promise resolving to an array of unique technologies.
 * @throws {Error} If there's an error fetching technologies.
 */
export async function FetchUniqueTechnologies(
  projects: Project[]
): Promise<string[]> {
  try {
    const uniqueTechnologies = new Set<string>();

    // Fetch technologies for each project
    await Promise.all(
      projects.map(async (project) => {
        try {
          const languagesResponse = await fetch(
            `https://api.github.com/repos/${project.full_name}/languages`
          );
          const languagesData = await handleResponse(languagesResponse);

          // Add each technology to the set
          Object.keys(languagesData).forEach((technology) => {
            uniqueTechnologies.add(technology);
          });
        } catch (error) {
          console.error(
            `Error fetching technologies for ${project.full_name}:`,
            error
          );
        }
      })
    );

    // Convert set to an array
    const technologiesArray = Array.from(uniqueTechnologies);
    return technologiesArray;
  } catch (error: any) {
    console.error("Error fetching technologies:", (error as Error).message);
    throw new Error(`Error fetching technologies: ${(error as Error).message}`);
  }
}

async function handleResponse(response: Response) {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}
