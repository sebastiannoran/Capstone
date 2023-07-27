import React from "react";
import {useNavigate,Link} from 'react-router-dom';

function College({course}){
const navigate =useNavigate();

const handleCourseClick =() => {
    navigate(`/api/colleges/collegesId/courses/${course.id}`)
};



    return(
      
      <div class=" container m-auto h-screen grid grid-cols-3 gap-20 content-center place-items-center w-1/2">
        <Link to ="`/api/colleges/collegesId/courses/${course.id}`">
        <button class="w-40 h-32 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onclick={handleCourseClick}>    
            BIO 101L: 
            <br/>Introduction to Biology  
        </button>
        </Link>
        <Link to ="`/api/colleges/collegesId/courses/${course.id}`">
        <button class="w-40 h-32 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  " onclick={handleCourseClick}>    
            CHEM 101: 
            <br/>General Chemistry  
        </button>
        </Link>
        <Link to ="`/api/colleges/collegesId/courses/${course.id}`">
        <button class="w-40 h-32 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  " onclick={handleCourseClick}>    
            BUS 101: 
            <br/>Introduction to Business  
        </button>
        </Link>
        <Link to ="`/api/colleges/collegesId/courses/${course.id}`">
        <button class="w-40 h-32 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  " onclick={handleCourseClick}>    
            Econ 101: 
            <br/>Principles of Economics  
        </button>
        </Link>
        <Link to ="`/api/colleges/collegesId/courses/${course.id}`">
        <button class="w-40 h-32 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  " onclick={handleCourseClick}>    
            STAT 101: 
            <br/>Introductory Statistics  
        </button>
        </Link>
        <Link to ="`/api/colleges/collegesId/courses/${course.id}`">
        <button class="w-40 h-32 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  " onclick={handleCourseClick}>    
            CSC 126: 
            <br/>Introduction to Computer Science  
        </button>
        </Link>
        </div>     
    );
}

export default College;