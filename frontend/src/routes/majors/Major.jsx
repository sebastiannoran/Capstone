import { Link } from "react-router-dom";

const Major = ({ majors, college }) => {
  console.log(college.id);
  return (
    <div className="">
      {majors.map(({ id, name, CollegeId }) => (
        <Link
          // to={`/college/${collegeData}/courses/${course.id}`}
          to={`/colleges/${college.id}/majors/${id}`}
          key={id}
        >
          <button
            className="px-14 py-10 bg-[#272727] rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.40)] 
              hover:bg-fuchsia-500 transition duration-200 hover:shadow-[inset_0_0px_10px_rgba(0,0,0,0.5)]
              font-bold m-4 border-b-[1px] border-fuchsia-700
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
