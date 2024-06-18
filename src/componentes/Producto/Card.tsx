import React from "react";
import Link from "next/link";
import Image from "next/image";

//*Importacion de Interfaces

import IProducts from "@/Interface/IProducts/IProducts";

const Card: React.FC<IProducts> = ({
  name,
  description,
  price,
  image,
  id,
}): React.ReactElement => {
  const truncatedDescription =
    description.length > 150 ? description.slice(0, 150) + "..." : description;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{name}</h2>
      <Image
        width={900}
        height={900}
        className="w-full h-48 object-cover mb-4"
        src={image}
        alt={name}
      />
      <p className="text-gray-700 mb-2">
        Price: <span className="text-blue-500">${price}</span>
      </p>
      <p className="text-gray-700 mb-4">{truncatedDescription}</p>
      <Link href={`/shop/${id}`}>
        <button className="inline-block bg-blue-500 text-white text-center px-4 py-2 rounded hover:bg-blue-600">
          Details
        </button>
      </Link>
    </div>
  );
};
export default Card;
//
