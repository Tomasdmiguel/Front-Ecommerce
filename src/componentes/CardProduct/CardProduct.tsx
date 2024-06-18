import React from "react";
// Importación de componente card
import Card from "../Producto/Card";
// Importación de interface
import IProducts from "@/Interface/IProducts/IProducts";
//Importacion para pedir a productos  desed la BD
import FetchDataProduct from "@/service/ApiProduct";

const CardProduct: React.FC = async () => {
  const Products: IProducts[] = await FetchDataProduct();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      
      {Products.map((product: IProducts) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};

export default CardProduct;
//