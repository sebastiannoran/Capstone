import { AuthContext } from "../../contexts/AuthContext";
import { Form, Navigate } from "react-router-dom";
import { useContext } from "react";

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
      className="h-screen"
      style={{
        backgroundSize: "cover",
        backgroundImage: "url(src/misc/Sunset.jpg)",
      }}
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className=" bg-[#1C1C1C]/95 text-white rounded-2xl px-16 py-12 grid justify-items-center gap-6">
          <div className="flex flex-col">
            <p className="text-center text-3xl pb-6">Login</p>

            {authError && <div className="text-red-500">{authError}</div>}

            <fieldset className="flex flex-col">
              <label htmlFor="title">Email</label>
              <input
                type="email"
                name="email"
                required
                className="border-none focus:outline-none p-2 text-black rounded-md"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="company">Password</label>
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
            className="bg-blue-500 text-white px-4 py-2 rounded"
          ></input>
        </div>
      </div>
    </Form>
  );
}

export default Login;
