import { Link, Outlet, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const College = () => {
  return (
    <div className="flex">
      <div className="bg-cyan-400 text-white h-screen w-20">
        <Sidebar />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default College;
