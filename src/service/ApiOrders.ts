
import Swal from "sweetalert2";
const apiKey = process.env.NEXT_PUBLIC_API_URL;
export const CreateOrders = async (token: string, products:number[]) => {
  try {
    const response = await fetch(`${apiKey}/orders`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products
      }),
    });
    const orders = await response.json();
    Swal.fire("Order created");
    return orders;
  } catch (error: any) {
    Swal.fire(error.message);
  }
};

export const getOrders = async (token: string) => {
  try {
    const response = await fetch(`${apiKey}/users/orders`, {
      cache: "no-cache",
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    const orders = await response.json();
    return orders;
  } catch (error: any) {
    Swal.fire(error.message);
  }
};
//