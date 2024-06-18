import IRegister from "@/Interface/IRegister/IRegister";

export const FetchRegister = async (UserRegister: IRegister) => {
  const apiKey = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${apiKey}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UserRegister),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Message: ${errorData.message}`
      );
    }

    const data = await response.json();

    return { message: "Successfully registered user", data };
  } catch (error: any) {
    return {
      
      success: false,
      message: error.message || "Ocurrió un error inesperado",
    };
  }
};
//