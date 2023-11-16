export async function FetchUniqueUser(query) {
  try {
    const [userResponse, projectsResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${query}`),
      fetch(`https://api.github.com/users/${query}/repos`),
    ]);

    const userData = await handleResponse(userResponse);
    const projectsData = await handleResponse(projectsResponse);

    return { user: userData, projects: projectsData };
  } catch (error) {
    if (error.message === "Not Found") {
      throw new Error(`User not found, please be more specific.`);
    } else {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }
}

async function handleResponse(response) {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}
