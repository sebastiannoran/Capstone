import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { SearchBar } from "../components/SearchBar";

const Homepage = () => {
  // State to track user input and search results
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle user input and perform search
  const handleSearch = (query) => {
    setSearchQuery(query);

  // search results empty for now
    setSearchResults([]);
  };

  return (
    <div className="bg-[#FFFDED] h-screen flex flex-col justify-center items-center">
      <p className="text-5xl mb-8">Welcome to Insight</p>
      <p className="text-1xl italic mb-5 text-[#b7b7b7]">Where Insightful Connections are Made</p>
      <div className="flex gap-4">
        <div className='items-center search-bar-container'>
          {/* Pass the handleSearch function as a prop to the SearchBar component */}
          <SearchBar handleSearch={handleSearch} />
          {/* Display the search results in the dropdown */}
          <div className='SearchResults'>
            {searchResults.map((result, index) => (
              <div key={index}>{result}</div>
            ))}
          </div>
        </div>
      </div>
      {/* Login and Register buttons */}
      <div className="flex gap-4 mt-4">
        <Link to="/LoginPage">
          <button className="bg-[#D1D5B5] text-black px-6 py-2 rounded">Login</button>
        </Link>
        <Link to="/Register">
          <button className="bg-[#D1D5B5] text-black px-4 py-2 rounded">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;

