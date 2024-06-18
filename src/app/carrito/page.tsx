"use client";
import Swal from "sweetalert2";
import IProducts from "@/Interface/IProducts/IProducts";
import IUsertoken from "@/Interface/IUsertoken/IUsertoken";
import { CreateOrders } from "@/service/ApiOrders";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const Carrito: React.FC = () => {
  const [cart, setCart] = useState<IProducts[]>([]);
  const [totalprice, setTotalprice] = useState<number>(0);
  const [userData, setUserData] = useState<IUsertoken>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData: IUsertoken = JSON.parse(
        localStorage.getItem("userSesion")!
      );
      setUserData(userData);
      if (!userData?.token) {
        Swal.fire({
          title: "You have to log in to buy",
          timer: 3000,
          timerProgressBar: true,
        });

        redirect("/Login");
      }

      const stored = JSON.parse(localStorage.getItem("cart") || "[]");
      let total = 0;
      stored?.map((product: IProducts) => {
        total = total + product.price;
      });
      setTotalprice(total);
      setCart(stored);
    }
  }, []);

  const handleBuy = async () => {
    try {
      const idProduct = new Set(cart.map((product) => product.id));
      await CreateOrders(userData?.token!, Array.from(idProduct));

      Swal.fire({
        title: "Buy successfully",
        timer: 3000,
        timerProgressBar: true,
      });

      setCart([]);
      setTotalprice(0);

      localStorage.removeItem("cart");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      Swal.fire("The purchase could not be made");
    }
  };
  const HandleDeleteCart = () => {
    localStorage.removeItem("cart");
    Swal.fire({
      title: "Successfully removed",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
        {cart?.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 p-4 border-b border-gray-200">
              <div>
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-gray-600">Price: ${item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">
            You don t have any product in your cart yet
          </div>
        )}
        <div className="mt-6">
          <p className="text-xl font-semibold mb-4">Total: ${totalprice}</p>
          {cart?.length > 0 ? (
            <div>
              <button
                onClick={handleBuy}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                Buy
              </button>
              <button
                onClick={HandleDeleteCart}
                className=" mt-3 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                Delete cart
              </button>
            </div>
          ) : (
            <h2 className="text-center text-red-500 font-semibold">
              Add products to buy
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carrito;

//
