import React from "react";
import { Link, useParams } from 'react-router-dom';
import Sidebar from "../../sidebar/sidebar";

function College({ courses }) {
  const { collegeId } = useParams();

  return (
    <div className="grid grid-cols-6">
      <Sidebar />
      <div className="col-span-4 flex flex-col justify-center">
        <div className="container m-auto h-screen grid grid-cols-3 gap-20 content-center place-items-center w-1/2">
          {courses.map((course) => (
            <Link to={`/college-home/${collegeId}/${course.id}`} key={course.id}>
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