import React from 'react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-black-600 mb-4">Esta pagina no existe</h1>
      <p className="text-xl text-gray-800 mb-8">Vuelve a intentarlo mas tarde</p>
      <a
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ir a la página principal
      </a>
    </div>
  );
}