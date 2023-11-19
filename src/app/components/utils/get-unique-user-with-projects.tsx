//I know it's a bad principle to have two utils at the same logic.

export async function FetchUniqueUser(query: string) {
  try {
    const [userResponse, projectsResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${query}`),
      fetch(`https://api.github.com/users/${query}/repos`),
    ]);

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


async function handleResponse(response: Response) {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}
