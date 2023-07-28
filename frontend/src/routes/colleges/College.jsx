import { Outlet } from "react-router-dom";

const College = () => {
  return (
    <div className="flex">
      <div className="bg-[#1C1C1C] text-white h-screen w-48">Sidebar</div>
      <div className="mx-auto">
        <div className="">
          <p className="text-5xl text-center">College of Staten Island</p>
        </div>
        <p className="italic">College Component</p>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default College;
