"use client";

function SearchBar() {
  return (
    <input
      type="text"
      className="w-full h-full px-2 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-blue-300"
      placeholder="Search..."
      // onChange={}
    />
  );
}

export default SearchBar;
