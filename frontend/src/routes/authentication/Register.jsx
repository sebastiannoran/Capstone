import React, { useContext } from "react";
import { Link, Navigate, Form } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const { currentUser, register, authError } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (form.checkValidity()) {
      const formData = new FormData(form);
      const credentials = Object.fromEntries(formData);
      await register(credentials);
    } else {
      // Handle form validation error, show a message or style the form
      console.log("Please fill in all required fields.");
    }
  };

  const buttonStyle =
    "bg-white text-black hover:bg-gray-200 transition mt-4 px-6 py-2 cursor-pointer rounded-md";

  return (
    <Form
      onSubmit={handleSubmit}
      className="h-screen bg-cover bg-[url(src/misc/Sunset.jpg)] text-white"
    >
      <div className="w-full h-full flex justify-center items-center backdrop-blur-[2px]">
        <div className="bg-[#000000db] shadow-[0px_0px_14px_rgba(0,0,0,1)] text-white rounded-lg px-16 py-12 grid justify-items-center gap-6">
          <div className="flex flex-col w-[25rem] gap-6">
            <p className="text-center text-4xl">Welcome</p>
            <p className="text-center text-md">Create an account here</p>

            {authError && <div className="text-red-500">{authError}</div>}

            <fieldset className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="
                focus:outline-none p-2 rounded-md w-full
                border-b-[1px] bg-[#00000000] 
                focus:border-fuchsia-500 autofill:bg-[#00000000]
                "
                required
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email_address"
                id="email"
                className="
                focus:outline-none p-2 rounded-md w-full
                border-b-[1px] bg-[#00000000] 
                focus:border-fuchsia-500 autofill:bg-[#00000000]
                "
                required
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="
                focus:outline-none p-2 rounded-md w-full
                border-b-[1px] bg-[#00000000] 
                focus:border-fuchsia-500 autofill:bg-[#00000000]
                "
                required
              />
            </fieldset>
          </div>
          <input
            type="submit"
            className="
          rounded-lg bg-[#ffffff] hover:hover:bg-fuchsia-500 transition 
            duration-100 py-3 px-6 hover:text-white mt-4
            shadow-[0px_0px_5px_rgba(0,0,0,0.40)] cursor-pointer text-black
          "
            value="Register"
          />
          <div className="text-center text-sm">
            <p className="mb-1">{`Already have an account?`}</p>
            <Link
              reloadDocument
              to="/login"
              className="
              text-fuchsia-400 hover:text-fuchsia-500 transition duration-100
              "
            >
              Log in here
            </Link>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Register;
