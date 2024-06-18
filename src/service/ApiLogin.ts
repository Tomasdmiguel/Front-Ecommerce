import ILogin from "@/Interface/Login/ILogin";
//Importacion de alertas
import Swal from "sweetalert2";

export const FetchLogin = async (Userlogin: ILogin) => {
  const apiKey = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${apiKey}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Userlogin),
    });

    if (response.ok) {
      return response.json();
    } else {
      Swal.fire("failed to login, Incorrect password or email");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

//