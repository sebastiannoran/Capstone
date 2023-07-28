import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { SearchBar } from "../components/SearchBar";

const Homepage = () => {
  // use states to manage query results and searches
  // const [searchQuery, setSearchQuery] = useState('');
  // const [searchResults, setSearchResults] = useEffect([]);
  
  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value);
  //   setSearchResults([]); // empty array, result is null until we get working format
  // };

  return (
    <div className="bg-[#FFFDED] h-screen flex flex-col justify-center items-center">
      <p className="text-5xl mb-8">Welcome to Insight</p>
      <p className = 'text-1xl italic mb-5 text-[[#b7b7b7]]'>Where Insightful Connections are Made</p>
      <div className="flex gap-4">
      <div className='items-center search-bar-container'>
        <SearchBar/>
        <div className= 'SearchResults'></div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
