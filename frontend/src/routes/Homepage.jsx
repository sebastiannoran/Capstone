import React from "react";
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="bg-[#FFFDED] h-screen flex flex-col justify-center items-center">
      <p className="text-5xl mb-8">Welcome</p>
      <div className="flex gap-4">
        <Link to = '/Login'>
      <button className="bg-[#D1D5B5] text-black px-4 py-2 rounded">Login</button> {/*Route to Login.jsx*/}
      </Link>
      <Link to = '/Register'>
      <button className="bg-[#D1D5B5] text-black px-4 py-2 rounded">Register</button> {/*Route to Register.jsx */}
      </Link>
      </div>
    </div>
  );
};

export default Homepage;
