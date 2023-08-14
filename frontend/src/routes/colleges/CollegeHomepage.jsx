import { useLoaderData } from "react-router-dom";
import Major from "../majors/Major";

export async function loader({ params }) {
  const majorResponse = await fetch(`
  /api/majors?collegeId=${params.collegeId}
  `);
  const majors = await majorResponse.json();
  const collegeResponse = await fetch(`/api/colleges/${params.collegeId}`);
  const college = await collegeResponse.json();
  console.log(majors, college);
  return { majors, college };
}
const CollegeHomepage = () => {
  const { majors, college } = useLoaderData();
  // const { id, name } = college;
  return (
    <div className="text-center">
      <div className="text-5xl mb-10 font-bold">
        <p>{`${college.name} Major Forums`}</p>
      </div>
      <div className="">
        <Major college={college} majors={majors} />
      </div>
    </div>
  );
};
export default CollegeHomepage;
