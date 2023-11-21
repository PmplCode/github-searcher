/**
 * Fetches details of a unique GitHub user and their associated projects.
 * (I know it's a bad principle to have two utils at the same logic.)
 *
 * @param {string} query - The GitHub username to fetch information for.
 * @returns {Promise<{ user: any, projects: any }>} A Promise resolving to an object containing user and projects data.
 * @throws {Error} If the user is not found or if there's an error fetching data.
 */
export async function FetchUniqueUser(query: string) {
  try {
    // Fetch user and projects data concurrently
    const [userResponse, projectsResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${query}`),
      fetch(`https://api.github.com/users/${query}/repos`),
    ]);

    // Parse user and projects data
    const userData = await handleResponse(userResponse);
    const projectsData = await handleResponse(projectsResponse);

    return { user: userData, projects: projectsData };
  } catch (error: any) {
    if (error.message === "Not Found") {
      throw new Error(`User not found, please be more specific.`);
    } else {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }
}

/**
 * Handles the response from a fetch request.
 *
 * @param {Response} response - The response object from a fetch request.
 * @returns {Promise<any>} A Promise resolving to the parsed JSON data from the response.
 * @throws {Error} If the response status is not OK or if there's an error parsing the JSON data.
 */
async function handleResponse(response: Response) {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}
