import { useState } from "react";
import { courseData, collegeData } from "../../misc/data";
import { Link } from "react-router-dom";

const PopularCourses = () => {
  const [courses, setCourses] = useState(courseData);
  const [college, setCollegeData] = useState(collegeData);

  return (
    <div className="mx-auto">
      <div>
        {courses.map((course, id) => (
          <Link
            // to={`/college/${collegeData}/courses/${course.id}`}
            to={`/colleges/${college[id]}/courses/${courses[id]}`}
            key={course.id}
          >
            <button className="w-40 h-32 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 mx-4 rounded shadow-[2px_2px_1px_rgba(0,0,0,0.25)]">
              {course}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
