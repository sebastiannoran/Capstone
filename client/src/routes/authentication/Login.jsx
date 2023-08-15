import { useContext } from "react";
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

  //style={{ backgroundImage: "url(src/misc/Sunset.jpg)" }}

  return (
    <Form
      onSubmit={handleSubmit}
      style={{ "--image-url": `url(/src/misc/Friends.jpg)` }}
      className="h-screen bg-cover bg-[image:var(--image-url)] text-white"
    >
      <div className="w-full h-full flex justify-center items-center backdrop-blur-[2px]">
        <div className="bg-[#000000db] shadow-[0px_0px_14px_rgba(0,0,0,1)] rounded-lg px-16 py-12 grid justify-items-center gap-6">
          <div className="flex flex-col w-[25rem] gap-6">
            <p className="text-center text-4xl">Welcome Back</p>
            <p className="text-center text-md">Please log in to your account</p>

            {authError && <div className="text-red-500">{authError}</div>}

            <fieldset className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email_address"
                required
                className="
                focus:outline-none p-2 rounded-md w-full
                border-b-[1px] bg-[#00000000] 
                focus:border-fuchsia-500 autofill:bg-[#00000000]
                "
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                required
                className="
                focus:outline-none p-2 rounded-md w-full
                border-b-[1px] bg-[#00000000] 
                focus:border-fuchsia-500 autofill:bg-[#00000000]
                "
              />
            </fieldset>
          </div>
          <input
            type="submit"
            className="rounded-lg bg-[#ffffff] hover:hover:bg-fuchsia-500 transition 
            duration-100 py-3 px-6 hover:text-white mt-4
            shadow-[0px_0px_5px_rgba(0,0,0,0.40)] cursor-pointer text-black
            "
            value="Login"
          />
          <div className="text-center text-sm">
            <p className="mb-1">{`Don't have an account?`}</p>
            <Link
              reloadDocument
              to="/register"
              className="
              text-fuchsia-400 hover:text-fuchsia-500 transition duration-100
              "
            >
              Register here
            </Link>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default Login;
