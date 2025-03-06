import React from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

function UserCard({ userData, loading, error, userExists }) {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  if (!userData) {
    return null;
  }
  
  if(!userExists) {
    return <ErrorMessage message="No user data available" />;
  }
  

  return (
    <div className="w-full flex justify-center min-h-40">
      <div className="border rounded-2xl border-[#323638] md:w-3/5 md:flex-row flex-col w-2/5 flex gap-x-10 p-4">
        <div className="max-w-sm">
          <img
            className="rounded-xl"
            src={userData.avatar_url}
            alt="User avatar"
          />
        </div>

        <div className="text-orange-500 flex-col gap-y-4 w-full">
          <p className="text-4xl text-center my-4">{userData.name}</p>
          <p className="text-md text-center">{userData.bio}</p>

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
