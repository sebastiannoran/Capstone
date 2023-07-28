import React from "react";
import {Link} from 'react-router-dom';
import Sidebar from "../../sidebar/sidebar";

function College({courses}){
    return(
    <div class="grid grid-cols-6">
        <Sidebar/>
        <div className="col-span-4 flex flex-col justify-center">
      <div class=" container m-auto h-screen grid grid-cols-3 gap-20 content-center place-items-center w-1/2">
        <Link to ="`/api/colleges/collegesId/courses/${course.id}:1`">
        <button class="w-40 h-32 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " >    
            BIO 101L: 
            <br/>Introduction to Biology  
        </button>
        </Link>
        <Link to ="`/api/colleges/collegesId/courses/${course.id}:2`">
        <button class="w-40 h-32 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">    
            CHEM 101: 
            <br/>General Chemistry  
        </button>
        </Link>
        <Link to ="`/api/colleges/collegesId/courses/${course.id}:3`">
        <button class="w-40 h-32 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " >    
            BUS 101: 
            <br/>Introduction to Business  
        </button>
        </Link>
        <Link to ="`/api/colleges/collegesId/courses/${course.id}:4`">
        <button class="w-40 h-32 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  " >    
            Econ 101: 
            <br/>Principles of Economics  
        </button>
        </Link>
        <Link to ="`/api/colleges/collegesId/courses/${course.id}:5`">
        <button class="w-40 h-32 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  " >    
            STAT 101: 
            <br/>Introductory Statistics  
        </button>
        </Link>
        <Link to ="`/api/colleges/collegesId/courses/${course.id}:6`">
        <button class="w-40 h-32 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  " >    
            CSC 126: 
            <br/>Introduction to Computer Science  
        </button>
        </Link>
        </div>     
        </div>
    </div>
    );
}

export default College;



