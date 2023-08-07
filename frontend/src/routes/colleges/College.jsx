import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function College({ courses }) {
  return (
    <div className="flex bg-[#1f1f1f] text-white">
      <Sidebar />
      <div className="max-w-7xl mx-auto p-12">
        <Outlet />
      </div>
    </div>
  );
}

export default College;
