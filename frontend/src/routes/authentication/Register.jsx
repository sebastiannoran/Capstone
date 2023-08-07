import { AuthContext } from "../../contexts/AuthContext";
import { Form, Navigate } from "react-router-dom";
import { useContext } from "react";

const Register = () => {
  const { currentUser, register, authError } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const credentials = Object.fromEntries(formData);
    await register(credentials);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="h-screen"
      style={{
        backgroundSize: "cover",
        backgroundImage: "url(src/misc/friends.jpg)",
      }}
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className=" bg-[#1C1C1C]/95 text-white rounded-2xl px-16 py-12 grid justify-items-center gap-6">
          <div className="flex flex-col">
            <p className="text-center text-3xl pb-6">Register</p>

            {/* {authError && <div className="text-red-500">{authError}</div>} */}

            <fieldset className="flex flex-col">
              <label htmlFor="title">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-none focus:outline-none p-2 text-black rounded-md"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="title">Email</label>
              <input
                type="email"
                name="email_address"
                id="email"
                className="border-none focus:outline-none p-2 text-black rounded-md"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="company">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="border-none focus:outline-none p-2 text-black rounded-md"
              />
            </fieldset>
          </div>
          <input
            className="bg-white text-black hover:bg-gray-200 transition mt-4 px-6 py-2 cursor-pointer rounded-md"
            type="submit"
          ></input>
        </div>
      </div>
    </Form>
  );
};

export default Register;
