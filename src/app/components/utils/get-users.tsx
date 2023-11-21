/**
 * Fetches a list of GitHub users based on a search query.
 *
 * @param {string} query - The search query to find GitHub users.
 * @returns {Promise<any>} A Promise resolving to the response data containing a list of GitHub users.
 * @throws {Error} If there's an error fetching data or parsing the JSON response.
 */
export async function FetchUsers(query: string) {
  try {
    // Fetch GitHub users based on the search query
    const res = await fetch(`https://api.github.com/search/users?q=${query}`);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Request failed");
    }

    return data;
  } catch (error: any) {
    // Handle errors that occur during JSON parsing
    if (error.message === "Not Found") {
      throw new Error(`Error, try again later.`);
    } else {
      throw new Error(`Error parsing response: ${error.message}`);
    }
  }
}
