"use client";
import perfil from "@/assets/img/perfil/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import IUsertoken from "@/Interface/IUsertoken/IUsertoken";

//Importacion de componente
import Orders from "@/componentes/Orders/Orders";

const User: React.FC = () => {
  const [userData, setUserData] = useState<IUsertoken>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const user = localStorage.getItem("userSesion");
      setUserData(user ? JSON.parse(user) : undefined);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userSesion");
    window.location.reload();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {userData?.token ? (
        <div className="bg-white shadow-md rounded-md p-6 flex items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">
              Welcome, {userData?.userData.name}!
            </h1>
            <div className="space-y-4">
              <div>
                <h2 className="font-semibold">Nombre:</h2>
                <p>{userData?.userData.name}</p>
              </div>
              <div>
                <h2 className="font-semibold">Email:</h2>
                <p>{userData?.userData.email}</p>
              </div>
              <div>
                <h2 className="font-semibold">Address:</h2>
                <p>{userData?.userData.address}</p>
              </div>
              <div>
                <h2 className="font-semibold">Phone:</h2>
                <p>{userData?.userData.phone}</p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">
                Logout
              </button>
            </div>
          </div>
          <div className="ml-4">
            <Image
              width={900}
              height={900}
              src={perfil}
              alt="User Profile"
              className="w-60 h-60 rounded-full"
            />
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl font-bold">You don t have a user</h2>
        </div>
      )}
      <div className="mt-8">
        <Orders />
      </div>
    </div>
  );
};

export default User;
//
