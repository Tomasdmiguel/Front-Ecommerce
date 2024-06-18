"use client";
import IOrders from "@/Interface/IOrders/IOrders";
import IUsertoken from "@/Interface/IUsertoken/IUsertoken";
import { getOrders } from "@/service/ApiOrders";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [userData, setUserData] = useState<IUsertoken>();
  const [orders, setOrders] = useState<IOrders[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSesion");
      setUserData(JSON.parse(userData!));
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const orderesponse = await getOrders(userData?.token!);
      setOrders(orderesponse);
    };
    userData?.token && fetchData();
  }, [userData?.token]);

  return (
    <div>
      <h2 className="text-2xl font-bold">Your Orders</h2>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div
            className="bg-white shadow-md rounded-md p-6 mt-2 mb-2"
            key={order.id}>
            <p className="text-sm sm:text-base text-gray-600">{new Date(order.date).toLocaleDateString()}</p>
            {order.products.map((product) => (
                    <p
                      key={product.id}
                      className="text-sm sm:text-base font-semibold text-gray-800"
                    >
                      {product.name}
                    </p>
                  ))}
          </div>
        ))
      ) : (
        <div className="bg-white shadow-md rounded-md p-6 mt-3">
          <h2 className="text-2xl font-bold text-red-500" >No orders yet</h2>
        </div>
      )}
    </div>
  );
};

export default Orders;
//