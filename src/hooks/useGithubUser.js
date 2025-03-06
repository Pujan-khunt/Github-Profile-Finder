import { useEffect, useState } from "react";
import { Octokit } from "octokit";

function useGithubUser(username) {
  const oktokit = new Octokit({
    userAgent: "github-finder/v1.0.0",
    auth: import.meta.env.PERSONAL_ACCESS_TOKEN
  });

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      if (!username) return;

      try {
        setLoading(true);
        setError(null);

        const response = await oktokit.request(`GET /users/${username}`);
        console.log(response);

        // Update state variables based on api response.
        setLoading(false);
        setData(response.data);
      } catch (error) {
        // Update and display error.
        setError(true);
        console.error(error);
      }
    }

    fetchUserData();
  }, [username]);

  return { data, loading, error };
}

export default useGithubUser;