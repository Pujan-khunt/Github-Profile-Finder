import { useState } from "react";

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-700 text-center mt-10 mb-6">
        Github Profile Finder
      </div>

      <div className="flex justify-center items-center h-1/10 mb-10">
        <form
          className="relative md:w-full max-w-md w-4/5"
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(inputValue.trim()); // Passes input value to the parent.
            setInputValue("");
          }}
        >
          <input
            type="text"
            value={inputValue} // Controlled input.
            placeholder="Search..."
            className="w-full mx-auto focus:scale-110 focus:duration-200 duration-300 px-4 py-2 pr-10 outline-none border text-orange-400 border-[#7B7265] rounded-lg"
            onFocus={() =>
              document
                .getElementById("search-icon")
                .classList.add("translate-x-4")
            }
            onBlur={() =>
              document
                .getElementById("search-icon")
                .classList.remove("translate-x-4")
            }
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <svg
            id="search-icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform duration-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              color="orange"
              d="M21 21l-4.35-4.35m2.35-6.15a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
