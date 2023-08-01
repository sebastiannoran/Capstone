import PopularCourses from "./PopularCourses";

const CollegeHomepage = () => {
  return (
    <div className="px-12 pt-10 text-center">
      <div className="text-3xl">
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
