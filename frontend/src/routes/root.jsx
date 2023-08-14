import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";

const Root = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#1f1f1f]">
      <Navbar currentUser={currentUser} handleLogout={handleLogout} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
