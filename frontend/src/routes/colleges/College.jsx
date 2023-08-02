import React from "react";
import { Link, useParams,useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import col_Name from "./CollegeData";

function College({ courses }) {
  const { collegeId } = useParams();
  const {search} = useLocation();
  const query = new URLSearchParams(search).get('query');
  const college = col_Name.find((college) => college.id === parseInt(collegeId));
  return (
    <div className="grid grid-cols-6">
      <Sidebar />
      
      <div className="col-span-4 flex flex-col justify-center items-center">
      
        <h1 className="text-center mb-14 text-5xl font-bold mt-10">Welcome to <br/> College of Staten Island </h1>
        
          <h1 className="text-center mb-1 text-3xl text-red-600 font-bold">Popular Courses:</h1>
          
          <div className="container mt-[-9rem] m-auto h-screen grid grid-cols-3 gap-20 content-center place-items-center w-1/2">

            {courses.map(course => (
              <Link key={course.id} to={`/college-home/${collegeId}/${course.id}`}>
                <button className="w-40 h-32 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {course.courseCode}:
                <br />{course.courseName}
              </button>
              </Link>
            ))}

          </div>
        
      
      </div>

    </div>
  );

}

export default College;






