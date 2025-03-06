import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import useGithubUser from "../hooks/useGithubUser";

function Home() {
  const [username, setUsername] = useState("");
  const { data, loading, error } = useGithubUser(username);

  return (
    <>
      <SearchBar onSearch={setUsername} />
      <UserCard userData={data} loading={loading} error={error}/>
    </>
  );
}

export default Home;
