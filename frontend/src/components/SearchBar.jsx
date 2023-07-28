import React from 'react';
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export const SearchBar = () => {
    return (
    <div
      className="flex flex-col items-center space-y-4"
      style={{ filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))" }}
    >
      <div
        className="w-[400px] h-[50px] relative"
        style={{ filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))" }}
      >
        <div className="w-[400px] h-[50px] absolute left-[-1px] top-[-1px] rounded-[60px] bg-white/[0.89] border-2 border-black" />
        <FaSearch
          className="w-[26.56px] h-[28.72px] absolute left-[19.55px] top-[10.14px] object-cover"
        />
        <p className="w-[308.94px] h-[29.79px] absolute left-[57.99px] top-[2.57px] text-2xl italic text-left text-[#b7b7b7]">
          Type to Search...
        </p>
      </div>
      <div className="flex gap-4">
        {/* Login button */}
        <button
          className="bg-[#D1D5B5] text-black px-4 py-2 rounded"
          onClick={() => {
            <Link to = '/LoginPage'></Link>
          }}
        >
          Login
        </button>
        {/* Register button */}
        <button
          className="bg-[#D1D5B5] text-black px-4 py-2 rounded"
          onClick={() => {
            <Link to = '/Register'></Link>
          }}
        >
          Register
        </button>
      </div>
    </div>
    )
}


