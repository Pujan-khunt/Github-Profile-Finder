import React from "react";

function Loader() {
  return (
    <div className="flex justify-center my-20">
      <div className="text-yellow text-4xl w-full max-w-lg border-yellow-500 border-2 rounded-4xl flex justify-center py-4">
        Loading...
      </div>
    </div>
  );
}

export default Loader;
