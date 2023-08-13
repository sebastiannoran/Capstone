import React, { useContext } from "react";
import { Link, Navigate, Form } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
  const { currentUser, login, authError } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const credentials = Object.fromEntries(formData);
    await login(credentials);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="h-screen bg-cover"
      style={{ backgroundImage: "url(src/misc/Sunset.jpg)" }}
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-[#1C1C1C]/95 text-white rounded-2xl px-16 py-12 grid justify-items-center gap-6">
          <div className="flex flex-col">
            <p className="text-center text-3xl pb-6">Login</p>

            {authError && <div className="text-red-500">{authError}</div>}

            <fieldset className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email_address"
                required
                className="border-none focus:outline-none p-2 text-black rounded-md"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                required
                className="border-none focus:outline-none p-2 text-black rounded-md"
              />
            </fieldset>
          </div>
          <input
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            value="Login"
          />
          <div className="mt-4 text-center ">
            <p>{`Don't have an account?`}</p>
            <Link
              reloadDocument={true}
              to="/register"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 m-3"
            >
              <div className="">Register</div>
            </Link>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default Login;
