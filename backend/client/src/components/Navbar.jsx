import { LuLogOut, LuLogIn } from "react-icons/lu";
import { HiUserAdd } from "react-icons/hi";
import { Form, Link } from "react-router-dom";

const Navbar = ({ currentUser, handleLogout }) => {
  return (
    <nav className="bg-[#0d0d0d] py-2 border-b-[1px] border-fuchsia-900 sticky top-0 z-50 flex items-center justify-between drop-shadow-[0_-2px_5px_rgb(255,0,255,0.5)]">
      <p className="text-white flex items-center">
        <Link
          className="text-4xl font-bold flex items-center gap-1 px-3"
          to="/"
        >
          INSIGHT
        </Link>
      </p>
      <div className="text-white pr-6 pt-1">
        {currentUser ? (
          <Form method="post" onSubmit={handleLogout}>
            <button
              type="submit"
              className="flex items-center justify-center gap-2"
            >
              <p className="text-lg">Logout</p>
              <LuLogOut className="text-2xl" />
            </button>
          </Form>
        ) : (
          <div className="flex items-center justify-center gap-8">
            <Link
              reloadDocument={true}
              to="/login"
              className="flex items-center justify-center gap-2"
            >
              <p className="text-lg">Login</p>
              <LuLogIn className="text-2xl" />
            </Link>
            <Link
              reloadDocument={true}
              to="/register"
              className="flex items-center justify-center gap-2"
            >
              <p className="text-lg">Register</p>
              <HiUserAdd className="text-2xl" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
