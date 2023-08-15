import { Link } from "react-router-dom";

const Major = ({ majors, college }) => {
  console.log(college.id);
  return (
    <div
      className="
    grid gap-8 justify-items-center
    sm:grid-flow-row 
    md:grid-cols-2 md:grid-flow-row
    lg:grid-cols-3
    xl:grid-cols-3
    "
    >
      {majors.map(({ id, name, CollegeId }) => (
        <Link
          // to={`/college/${collegeData}/courses/${course.id}`}
          to={`/colleges/${college.id}/majors/${id}`}
          key={id}
        >
          <button
            className="px-5 py-5 bg-[#272727] rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.40)] 
              hover:bg-fuchsia-500 transition duration-200 font-bold 
              border-b-[1px] border-fuchsia-700
              w-[20rem] max-h-[15rem] min-h-[10rem]
            
              "
          >
            {name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Major;
