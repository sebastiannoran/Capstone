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
    <div className=" text-white">
      <div className="">
        <Sidebar college={college} majors={majors} />
      </div>
      <div className="flex flex-col items-center justify-center mx-16">
        <Link className="mb-14" to={`/colleges/${college.id}`}>
          <FaUniversity className="text-center text-4xl" />
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
export default College;
