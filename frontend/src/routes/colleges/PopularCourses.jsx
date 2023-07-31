import { useState } from "react";
import { courseData } from "../../misc/data";

const PopularCourses = () => {
  const [courses, setCourses] = useState(courseData);

  return (
    <div>
      {courses.map((course) => {
        return <div key={course}>{course}</div>;
      })}
    </div>
  );
};

export default PopularCourses;
