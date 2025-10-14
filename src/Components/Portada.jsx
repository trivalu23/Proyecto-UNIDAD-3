import React from "react";
import { Link } from "react-router-dom";
import portadaDia from "../assets/portada.png";
import portadaNoche from "../assets/portadanoche.png";

const Portada = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center transition-all duration-700">
      {/* Imagen de día */}
      <div
        className="absolute inset-0 bg-cover bg-center dark:hidden"
        style={{ backgroundImage: `url(${portadaDia})` }}
      ></div>

      {/* Imagen de noche */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden dark:block"
        style={{ backgroundImage: `url(${portadaNoche})` }}
      ></div>

      {/* Capa de oscurecimiento suave */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/40"></div>

      {/* Contenido */}
      <div className="relative text-center text-violet-950 dark:text-gray-100 px-6 transition-all duration-700">
        <div className="bg-white/20 dark:bg-black/40 backdrop-blur-xxs px-8 py-10 rounded-3xl inline-block shadow-lg">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-sm tracking-wide">
            FITLIFE
          </h1>
          <p className="text-lg md:text-2xl font-medium opacity-90 dark:opacity-80 max-w-2xl mx-auto leading-relaxed">
            Crea una vida más sana y equilibrada, paso a paso, con energía y
            amor propio.
          </p>

          {/* Botón con modo día/noche */}
          <Link to="./inscripcion">
            <button
              className="mt-8 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold py-3 px-10 rounded-full shadow-md hover:opacity-90 
              transition duration-300
              dark:from-purple-700 dark:to-fuchsia-700 dark:shadow-[0_0_12px_rgba(255,255,255,0.2)] dark:border dark:border-fuchsia-500/30"
            >
              Comienza ahora
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portada;
