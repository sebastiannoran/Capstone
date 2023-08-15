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
    <div className="">
      <div
        style={{ "--image-url": `url(${college.homepageImg})` }}
        className="bg-[image:var(--image-url)] text-5xl mb-10 bg-center bg-cover flex 
        justify-center items-center w-screen md:h-[40rem] xl:h-[50rem] lg:h-[45rem] sm:h-[35rem] xs:h-[30rem]"
      >
        <div className="bg-[#00000065] w-full h-full flex justify-center items-center">
          <div className="text-white text-center textShadow font-bold">
            <p className="">{`${college.name}`}</p>
            <p className="">Forums</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <Major college={college} majors={majors} />
      </div>
    </div>
  );
};
export default CollegeHomepage;
