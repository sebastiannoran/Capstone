import { useContext } from "react";
import { Link, Outlet, useNavigation, Form, redirect  } from "react-router-dom";
import classNames from "classnames";
import { AuthContext } from "../contexts/AuthContext";

const Root = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigation = useNavigation();

  const outletClasses = classNames(
    // "mx-auto max-w-4xl sm:px-12 px-4 transition-opacity",
    {
      "opacity-100": navigation.state !== "loading",
      "opacity-50": navigation.state === "loading",
    }
  );

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    redirect("/login");
  };

  return (
    <div>
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
      <div className={outletClasses}>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
