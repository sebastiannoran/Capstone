import PopularCourses from "./PopularCourses";

const CollegeHomepage = () => {
  return (
    <div className="text-center">
      <div className="text-5xl mb-10 font-bold">
        <p>(College Name) Homepage</p>
      </div>

      <div className="pt-12">
        <p className="italic pb-4">Popular Courses</p>
        <PopularCourses />
      </div>
    </div>
  );
};

export default CollegeHomepage;
