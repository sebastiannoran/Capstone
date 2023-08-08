import { useLoaderData } from "react-router-dom";
import Courses from "./Courses";
import PopularCourses from "./PopularCourses";

export async function loader({ params }) {
  const response = await fetch("/api/majors");
  const majors = await response.json();
  console.log(majors);
  return { majors };
}

const CollegeHomepage = () => {
  const { majors } = useLoaderData();

  return (
    <div className="text-center">
      <div className="text-5xl mb-10 font-bold">
        <p>(College Name) Homepage</p>
      </div>

      <div className="pt-12">
        <p>Prereq Courses</p>
        <Major majors={majors} />
      </div>
    </div>
  );
};

export default CollegeHomepage;
