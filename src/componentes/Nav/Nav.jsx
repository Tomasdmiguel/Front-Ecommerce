"use client";
import Image from "next/image";
import perfil from "@/assets/img/perfil/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  const [userData, setuserData] = useState();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const user = localStorage.getItem("userSesion");

      if (user && !userData?.token) {
        setuserData(JSON.parse(user));
      }
    }
  }, [pathname, userData?.token]);

  return (
    <nav className="bg-gray-900/50 py-4 md:py-6">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <div className="text-white font-bold text-lg">Electronic</div>
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="text-white hover:text-gray-300">
                Products
              </a>
            </li>

            <li>
              <a href="/contactos" className="text-white hover:text-gray-300">
                Contact Us
              </a>
            </li>
          </ul>

          <a
            href="/carrito"
            className="bg-white text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300">
            Shop
          </a>
          {userData?.token ? (
            <div>
              <Link href={"/user"}>
                <Image
                  width={900}
                  height={900}
                  className="w-10 h-10 rounded-full"
                  src={perfil}
                />
              </Link>
            </div>
          ) : (
            <div>
              <a
                href="/Login"
                className="bg-white text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300">
                Log in
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
//
