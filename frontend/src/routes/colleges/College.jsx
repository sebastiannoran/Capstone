import { Link, Outlet, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const College = () => {
  return (
    <div className="flex bg-[#1f1f1f] text-white">
      <Sidebar />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default College;
