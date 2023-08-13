import { Outlet, useLoaderData } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

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
    <div className="flex text-white">
      <div className="mr-[5rem]">
        <Sidebar college={college} majors={majors} />
      </div>
      <div className="max-w-7xl mx-auto p-12">
        <Outlet />  
      </div>
    </div>
  );
}
export default College;
