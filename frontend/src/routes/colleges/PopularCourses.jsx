import { useState } from "react";
import { courseData, collegeData } from "../../misc/data";
import { Link } from "react-router-dom";

const PopularCourses = () => {
  const [courses, setCourses] = useState(courseData);
  const [college, setCollegeData] = useState(collegeData);

  return (
    <div className="mx-auto">
      <div className="">
        {courses.map((course, id) => (
          <Link
            // to={`/college/${collegeData}/courses/${course.id}`}
            to={`/colleges/${college[id]}/courses/${courses[id]}`}
            key={course.id}
          >
            <button
              className="px-14 py-10 bg-[#272727] rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.40)] 
              hover:bg-fuchsia-500 transition duration-200 hover:shadow-[inset_0_0px_10px_rgba(0,0,0,0.5)]
              font-bold m-4 border-b-[1px] border-fuchsia-700
              "
            >
              {course}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
