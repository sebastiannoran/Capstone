import { useContext } from "react";
import { Form, Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

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
      <nav className="bg-[#0d0d0d] py-2 border-b-[1px] border-fuchsia-900 sticky top-0 z-50 flex justify-items-center justify-between drop-shadow-[0_-2px_5px_rgb(255,0,255,0.5)]">
        <p className="text-white flex items-center">
          <Link
            className="text-4xl font-bold flex items-center gap-1 px-3"
            to="/"
          >
            INSIGHT
          </Link>
        </p>
        <div className="text-white text-xl pr-7 pt-1">
          {currentUser && (
            <Form method="post" onSubmit={handleLogout}>
              <button type="submit" className="">
                Logout
              </button>
            </Form>
          )}
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
