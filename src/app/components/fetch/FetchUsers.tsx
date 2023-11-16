export async function FetchUsers(query) {
  const res = await fetch(`https://api.github.com/search/users?per_page=20&page=1&q=${query}`);

  try {
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Request failed");
    }

    return data;
  } catch (error) {
    // Handle errors that occur during JSON parsing
    if (error.message === "Not Found") {
      throw new Error(`Error, try again later.`);
    } else {
      throw new Error(`Error parsing response: ${error.message}`);
    }
  }
}
