import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
// import collegeData from "../routes/colleges/CollegeData";

export const SearchBar = ({ input, handleChange, setResults, setCollege }) => {
  const fetchdata = async (value) => {
    try {
      const response = await fetch(`api/colleges`);
      const data = await response.json();

      const results = data.filter((college) => {
        return college.name.toLowerCase().includes(value.toLowerCase());
      });

      setResults(results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange2 = (value) => {
    console.log(value);
    // setCollege(value.id);
    fetchdata(value);
    handleChange(value);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        {/* Search bar container */}
        <div
          className="w-[400px] h-[50px] relative"
          style={{ filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25)), " }}
        >
          <div
            className="w-[400px] h-[50px] absolute left-[-1px] top-[-1px] rounded-[60px] bg-white border-2 border-fuchsia-700 
          shadow-[0px_0px_5px_rgba(0,0,0,0.40)] hover:shadow-[inset_0_0px_10px_rgba(0,0,0,0.5)]"
          />
          <FaSearch className="text-black w-[26.56px] h-[28.72px] absolute left-[19.55px] top-[10.14px] object-cover" />
          <input
            type="text"
            className="w-[308.94px] h-[29.79px] absolute left-[57.99px] top-[7.10px] bg-transparent text-lg italic text-left text-black focus:outline-none mt-1"
            placeholder="Type to Search..."
            value={input}
            onChange={(e) => handleChange2(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
