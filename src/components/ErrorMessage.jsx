import React from "react";

function ErrorMessage({ message }) {
  return (
    <div className="flex justify-center my-20">
      <div className="text-red-600 text-lg w-full max-w-lg border-red-500 border-2 rounded-xl flex justify-center py-4">
        Oh No! Error: {message}
      </div>
    </div>
  );
}

export default ErrorMessage;
