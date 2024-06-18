import IProducts from "@/Interface/IProducts/IProducts";
const apiKey = process.env.NEXT_PUBLIC_API_URL;

export const FetchDataProduct = async (): Promise<IProducts[]> => {
  try {
    const response = await fetch(`${apiKey}/products`, {
      next: { revalidate: 86400 },
    });
    if (!response.ok) {
      throw new Error("Error al obtener los productos");
    }
    const products: IProducts[] = await response.json();
    return products;
  } catch (error) {
    throw new Error(
      `Error al obtener los productos: ${
        error instanceof Error ? error.message : error
      }`
    );
  }
};

export default FetchDataProduct;
//