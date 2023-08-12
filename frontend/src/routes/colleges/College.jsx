import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function College({ courses }) {
  return (
    <div className="flex text-white">
      <div className="mr-[5rem]">
        <Sidebar />
      </div>
      <div className="max-w-7xl mx-auto p-12">
        <Outlet />
      </div>
    </div>
  );
}

export default College;
