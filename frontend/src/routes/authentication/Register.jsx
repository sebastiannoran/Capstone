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
      className="h-screen bg-cover"
      style={{ backgroundImage: "url(src/misc/friends.jpg)" }}
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-[#1C1C1C]/95 text-white rounded-2xl px-16 py-12 grid justify-items-center gap-6">
          <div className="flex flex-col">
            <p className="text-center text-3xl pb-6">Register</p>

            {authError && <div className="text-red-500">{authError}</div>}

            <fieldset className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-none focus:outline-none p-2 text-black rounded-md"
                required 
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email_address"
                id="email"
                className="border-none focus:outline-none p-2 text-black rounded-md"
                required
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="border-none focus:outline-none p-2 text-black rounded-md"
                required
              />
            </fieldset>
          </div>
          <input className={buttonStyle} type="submit" value="Register" />
          <div className="mt-4 text-center ">
            <p>{`Already have an account?`}</p>
            <Link
              reloadDocument={true}
              to="/login"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 m-3"
            >
              <div className="">Login</div>
            </Link>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Register;
