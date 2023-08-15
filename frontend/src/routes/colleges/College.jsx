import { Link, Outlet, useLoaderData } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { FaUniversity } from "react-icons/fa";

export async function loader({ params }) {
  const majorResponse = await fetch(`
  /api/majors?collegeId=${params.collegeId}
  `);
  const majors = await majorResponse.json();
  // console.log(majors, college);
  const collegeResponse = await fetch(`/api/colleges/${params.collegeId}`);
  const college = await collegeResponse.json();
  return { majors, college };
}
function College() {
  const { majors, college } = useLoaderData();
  return (
    <div>
      <div className="flex">
        <Sidebar college={college} majors={majors} />
      </div>
      <div className="flex items-start justify-center">
        <div className="text-white flex flex-col justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default College;
