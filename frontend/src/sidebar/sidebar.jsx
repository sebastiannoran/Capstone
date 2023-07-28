import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import {FaSchool} from "react-icons/fa";
import {BiSearch} from "react-icons/bi";
import {useState} from 'react';

const Sidebar =() =>{
  const [open,setOpen] = useState(true);
    return(
        <div class="flex">
          <div class={`bg-cyan-400 h-screen p-5 pt-8 ${open? "w-72" : "w-20"} duration-300 relative `}>
              <AiFillCaretLeft class={`bg-black text-white text-4xl absolute -right-8 top-1/2 transform -translate-y-1/2
              border boarder-dark border-5 cursor-pointer ${!open && "rotate-180"}`} onClick={()=> setOpen(!open)}/>
          <div class="inline-flex">
              <FaSchool class={`bg-indigo-400 text-4xl rounded cursor-pointer block float-left mr-5 duration-500 ${open && "rotate-[360deg]"}`}/>
              <h1 class= {`text-dark origin-left font-medium text-2xl duration-300 ${!open && "scale-0"} `}>
              College
              </h1>
          </div>
          <div class={`flex items-center rounded-md bg-white mt-5 ${!open ? "px-2.5" : "px-7"}`}>
            <BiSearch class={`text-black text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>
            <input type={"search"} placeholder="Search" class={`text-base bg-transparent w-full text-black focus:outline-none ${!open && "hidden"}`}/>
          </div>
          </div>
        </div>
    );
};

export default Sidebar;