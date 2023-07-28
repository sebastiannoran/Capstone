import React from "react";

import { AiFillCaretLeft } from "react-icons/ai";
import {FaSchool} from "react-icons/fa";
import {useState} from 'react';

const Sidebar =() =>{
  const [open,setOpen] = useState(true);
    return(
        <div class="flex">
          <div class={`bg-cyan-400 h-screen p-3 pt-8  ${open? "w-72" : "w-20"} duration-300 relative `}>
              <AiFillCaretLeft class={`bg-white text-dark-purple text-4xl absolute -right-9 top-1/2 transform -translate-y-1/2
              border boarder-dark cursor-pointer ${!open && "rotate-180"}`} onClick={()=> setOpen(!open)}/>
          <div class="inline-flex">
              <FaSchool class="bg-indigo-400 text-4xl rounded cursor-pointer block float-left mr-12"/>
              <h1 class= {`text-dark origin-left font-medium text-2xl duration-300 ${!open && "scale-0"} `}>
              College
              </h1>
          </div>
          </div>
        </div>
    );
};

export default Sidebar;