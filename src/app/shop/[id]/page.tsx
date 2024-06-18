"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FetchDataProduct from "@/service/ApiProduct";

import Swal from "sweetalert2";
import IProducts from "@/Interface/IProducts/IProducts";
import { useRouter } from "next/navigation";

const ProductById = ({ params }: any) => {
  const router = useRouter();
  const [userData, setUserData] = useState<any>();
  const [matchingProduct, setMatchingProduct] = useState<any>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const user = localStorage.getItem("userSesion");
      if (user) {
        setUserData(JSON.parse(user));
      }
    }
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      const productById = parseInt(params.id, 10);
      const Products = await FetchDataProduct();
      const product = Products.find((product) => product.id === productById);
      setMatchingProduct(product);
    };

    fetchProduct();
  }, [params.id]);

  const handleAddTocart = (event: any) => {
    if (!userData?.token) {
      Swal.fire("Sign in to buy");
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const exist = cart.some((matchingProduct: IProducts) => {
        if (matchingProduct.id === Number(event?.target?.id)) return true;
        return false;
      });
      if (exist) {
        Swal.fire("This product exist in your cart");
        router.push("/shop");
      } else {
        cart.push(matchingProduct);
        localStorage.setItem("cart", JSON.stringify(cart));
        Swal.fire("Product added to your cart ");
        router.push("/shop");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen mt-16 mb-16">
      {matchingProduct ? (
        <div className="max-w-lg p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">{matchingProduct.name}</h1>
          <Image
            width={900}
            height={900}
            src={matchingProduct.image}
            alt={matchingProduct.name}
            className="w-full mb-4 rounded-lg"
          />
          <p className="text-gray-700 mb-2">{matchingProduct.description}</p>
          <p className="text-gray-700 mb-2">Stock: {matchingProduct.stock}</p>
          <h3 className="text-xl font-semibold mb-4">
            Price: ${matchingProduct.price}
          </h3>
          {userData ? (
            <Link href={"/carrito"}>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-4"
                id={matchingProduct?.id?.toString()}
                onClick={handleAddTocart}>
                Add to cart
              </button>
            </Link>
          ) : (
            <Link href={"/Login"}>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 mb-4">
                Login to Buy
              </button>
            </Link>
          )}
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ProductById;
//