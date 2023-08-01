import React, { useState } from "react";

import { Link, useNavigate } from 'react-router-dom';
import { SearchBar } from "../components/SearchBar";

const Homepage = ({ collegeId }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query);


    navigate({
      pathname: `/college/${collegeId}`,
      state: { searchQuery: query }
    });
  }

  return (
    <div className="bg-[#FFFDED] h-screen flex flex-col justify-center items-center">
      
      <p className="text-5xl mb-8">Welcome to Insight</p>
      
      <p className="text-1xl italic mb-5 text-[#b7b7b7]">Where Insightful Connections are Made</p>
      
      <div className="flex gap-2">

        <div className="flex-1 ml-16 mr-2">
          <SearchBar
          className="h-10 "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onSubmit={handleSearch}  
          />

        </div>

        <div>
          <button 
          className="h-10 bg-[#D1D5B5] text-black px-4 py-2 rounded mt-1"
          onClick={() => handleSearch(searchQuery)}>
            Search
          </button>
        </div>

      </div>

      <div className="flex gap-4 mt-4">


        <Link to="/login">
          <button className="bg-[#D1D5B5] text-black px-6 py-2 rounded ">Login</button>
        </Link>

        <Link to="/register">
          <button className="bg-[#D1D5B5] text-black px-4 py-2 rounded">Register</button>


        </Link>

      </div>

    </div>
  );

}

export default Homepage;

