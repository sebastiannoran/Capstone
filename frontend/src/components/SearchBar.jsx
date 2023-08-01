import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {SearchResultsList} from './SearchResultsList';

export const SearchBar = ({setResults}) => {
  const [input, setInput] = useState("");
  
  const fetchdata = (value)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) =>{
   
    const results = json.filter((user)=>{
      return (
        value &&
        user && 
        user.name &&
        user.name.toLowerCase().includes(value)
        );
      });
    setResults(results);
  });
  };


  const handleChange = (value) => {
  setInput(value);
  fetchdata(value);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        {/* Search bar container */}
        <div
          className="w-[400px] h-[50px] relative"
          style={{ filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25)), " }}
        >
          <div className="w-[400px] h-[50px] absolute left-[-1px] top-[-1px] rounded-[60px] bg-white/[0.89] border-2 border-black" />
          <FaSearch
            className="w-[26.56px] h-[28.72px] absolute left-[19.55px] top-[10.14px] object-cover"
          />
          <input
            type="text"
            className="w-[308.94px] h-[29.79px] absolute left-[57.99px] top-[7.10px] bg-transparent text-lg italic text-left text-black focus:outline-none mt-1"
            placeholder="Type to Search..."
            value={input}
            onChange={(e)=>handleChange(e.target.value)}
          />
        </div>
        {/* Search results container */}
        <div className='SearchResults'>
          {/* Display the search results here */}
          {/* keep empty since no database exiists */}
        </div>
      </div>
    </div>
  );
};
