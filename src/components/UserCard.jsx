import React from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import githubLogo from "../Assets/github-mark-white.svg";

function UserCard({ userData, loading, error, userExists }) {
  if (loading) {
    return <Loader />;
  }

  if (userExists == false) {
    return <ErrorMessage message="No user data available" />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  if (!userData) {
    return null;
  }

  return (
    <div className="w-full flex justify-center min-h-40">
      <div className="relative border rounded-2xl border-[#323638] md:w-3/5 md:flex-row flex-col w-1/2 flex gap-x-10 p-4">
        <div className="flex justify-center md:block">
          <img
            className="rounded-xl w-4/5"
            src={userData.avatar_url}
            alt="User avatar"
          />
        </div>

        <div className="text-orange-500 flex-col gap-y-4 w-full">
          <p className="text-3xl md:text-5xl text-center my-4">{userData.name}</p>
          <p className="text-sm md:text-lg text-center">{userData.bio}</p>
          <a
            href={`https://github.com/${userData.login}`}
            className="absolute right-4 bottom-4 w-10 md:w-16"
          >
            <img src={githubLogo} alt="Github Logo" />
          </a>

          <ul className="list-disc list-inside">
            <li className="my-2">
              Followers:{" "}
              <span className="text-white">{userData.followers}</span>
            </li>
            <li className="my-2">
              Repositories:{" "}
              <span className="text-white">{userData.public_repos}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
