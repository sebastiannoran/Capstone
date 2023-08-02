import React from "react";
import { Link, useParams, useLocation, Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import col_Name from "./CollegeData";

function College({ courses }) {
  const { collegeId } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("query");
  const college = col_Name.find(
    (college) => college.id === parseInt(collegeId)
  );
  return (
    <div className="flex bg-[#1f1f1f] text-white">
      <Sidebar />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default College;
