"use client";
import React, { useState } from "react";

//Validaciones para el formulario
import { validateEmail, validateEmptyFields } from "@/helpers/validate";

//FetchRegister metodo post para registrarnos
import { FetchRegister } from "@/service/ApiRegister";

//Importacion de alertas
import Swal from "sweetalert2";

const Register: React.FC = (): React.ReactElement => {
  const [registro, setRegistro] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    address: "",
    phone: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setRegistro({
      ...registro,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailValidation = validateEmail(registro.email);
    if (!emailValidation.isValid) {
      Swal.fire(emailValidation.message);
      return;
    }

    const fieldsValidation = validateEmptyFields(registro);
    if (!fieldsValidation.isValid) {
      Swal.fire(fieldsValidation.message);

      return;
    }

    if (registro.password !== registro.password2) {
      Swal.fire("Passwords do not match. Please try again.");

      return;
    }

    const { password2, ...registroToSend } = registro;

    try {
      const response = await FetchRegister(registroToSend);
      if (response.success) {
        Swal.fire(response.message);
      } else {
        Swal.fire(response.message);
      }
    } catch (error) {
      Swal.fire("An error occurred during registration. try again");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 mb-10 p-6 border border-gray-300 rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Register if you don t have a username
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={registro.name}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={registro.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Ejemplo@gmail.com"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-lg font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={registro.password}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password2"
            className="block text-lg font-semibold mb-2">
            Repeat password
          </label>
          <input
            type="password"
            name="password2"
            value={registro.password2}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your password again"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-lg font-semibold mb-2">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={registro.address}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your address"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg font-semibold mb-2">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={registro.phone}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 rounded-md bg-blue-500 hover:bg-blue-700 text-white">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
//
