"use client";
import React, { useState } from "react";
import { validateEmail } from "@/helpers/validate";

//Importamor route para cuando se logue lo llevemos a el inicio
import { useRouter } from "next/navigation";

//Importacion de alertas
import Swal from "sweetalert2";

//Importamos para hacer la peticion de login
import { FetchLogin } from "@/service/ApiLogin";

const Login: React.FC = () => {
  const route = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailValidation = validateEmail(loginData.email);
    if (!emailValidation.isValid) {
      Swal.fire(emailValidation.message);
      return;
    }
    if (!loginData.email || !loginData.password) {
      Swal.fire("Please complete all the fields.");
      return;
    }

    try {
      const response = await FetchLogin(loginData);
      const { token, user } = response;

      localStorage.setItem(
        "userSesion",
        JSON.stringify({ token: token, userData: user })
      );
      Swal.fire("Logged in successfully.");
      route.push("/user");
    } catch (error: any) {
     
      throw new Error(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 mb-10 p-6 border border-gray-300 rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Log in if you have an account
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Email:
          </label>
          <input
            onChange={handleInputChange}
            value={loginData.email}
            type="text"
            name="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-lg font-semibold mb-2">
            Password:
          </label>
          <input
            onChange={handleInputChange}
            value={loginData.password}
            type="password"
            name="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-blue-500 hover:bg-blue-700 text-white">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
//