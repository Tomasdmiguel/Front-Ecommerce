//!PUEDE SER QUE TENGAMOS QUE AGREGAR LA RUTA SHOP EN EL FOOTER  COMO POR AHORA NO TIENE SU FUNCIONALIDAD NO LA AGREGAMOS
"use client";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const user = localStorage.getItem("userSesion");
      setUserData(JSON.parse(user));
    }
  }, []);
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-bold">Technology used</h2>
          <ul className="mt-2 space-y-1">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-bold">Useful links</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-gray-300">
                Products
              </a>
            </li>
            <li>
              <a href="/carrito" className="hover:text-gray-300">
                Shop
              </a>
            </li>
            <li>
              <a href="/contactos" className="hover:text-gray-300">
                Contact Us
              </a>
            </li>
            {userData?.token ? (
              <li>
                <a href="/user" className="hover:text-gray-300">
                  My Profile
                </a>
              </li>
            ) : (
              <li>
                <a href="/Login" className="hover:text-gray-300">
                  Log in
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">Social networks</h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className="hover:text-gray-300">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-300">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-300">
              Instagram
            </a>
            <a href="#" className="hover:text-gray-300">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        © 2024 My Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
//