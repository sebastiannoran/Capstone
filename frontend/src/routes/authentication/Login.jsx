import React, { useState } from 'react';
import { AuthContext } from "../../contexts/AuthContext";
import { Form, Navigate } from "react-router-dom";
import { useContext } from "react";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await fetch('/backend/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // Login successful
        window.location.replace('/dashboard'); // Redirect to the dashboard or home page
      } else {
        const data = await response.json();
        alert(data.error); // Display the error message received from the server
      }
    } catch (error) {
      console.error('Error:', error);
    }
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

            {/* {authError && <div className="text-red-500">{authError}</div>} */}

            <fieldset className="flex flex-col">
              <label htmlFor="title">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-none focus:outline-none p-2 text-black rounded-md"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="company">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-none focus:outline-none p-2 text-black rounded-md"
              />
            </fieldset>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
        </div>
      </div>
    </Form>
  );
}

export default Login;