import { useEffect, useState } from "react";
import { Octokit } from "octokit";

function useGithubUser(username) {
  const oktokit = new Octokit({
    userAgent: "github-finder/v1.0.0",
    auth: import.meta.env.PERSONAL_ACCESS_TOKEN
  });

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    async function fetchUserData() {
      // If no username is provided, just return with default values.
      if (!username) {
        setData(null);
        setError(null);
        setUserExists(false);
        return;
      }

      try {
        // Initally before fetching the api show loading screen
        // And change state of error to null and userExists to false
        setLoading(true);
        setError(null);
        setUserExists(false);

        const response = await oktokit.request(`GET /users/${username}`);
        console.log(response);

        // Update state variables based on api response.
        setData(response.data);
        setUserExists(true);
      } catch (error) {
        setUserExists(false);
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, [username]);

  return { data, loading, error, userExists };
}

export default useGithubUser;