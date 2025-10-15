import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import capibara from "../assets/capibara.png";
import capibara2 from "../assets/capibara2.png";
import capibara3 from "../assets/capibara3.png";

function Footer() {
  return (
    <div className="relative mt-32">
      {/* 🦫 Capibara visible solo en pantallas pequeñas */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-40 z-20 flex justify-center md:hidden -translate-y-12">
        <img
          src={capibara}
          alt="Capibara móvil"
          className="w-50 drop-shadow-xl transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* 🦫 Grupo de capibaras (solo en pantallas medianas o mayores) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 md:-top-44 lg:-top-56 z-20 items-center justify-center space-x-20 lg:space-x-32">
        <img
          src={capibara2}
          alt="Capibara izquierda"
          className="w-40 lg:w-48 -translate-y-6 drop-shadow-xl transition-transform duration-500 hover:scale-105"
        />
        <img
          src={capibara}
          alt="Capibara centro"
          className="w-48 lg:w-56 drop-shadow-xl transition-transform duration-500 hover:scale-105 -translate-y-6 lg:-translate-y-3"
        />
        <img
          src={capibara3}
          alt="Capibara derecha"
          className="w-40 lg:w-48 -translate-y-10 drop-shadow-xl transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* 🌈 Footer principal */}
      <footer className="relative z-10 bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white pt-20 pb-7 transition-colors duration-500 shadow-inner rounded-t-3xl">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <h1 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-purple-200">
              FitLife
            </h1>
            <p className="text-sm text-gray-100 dark:text-gray-400 leading-relaxed">
              Vive saludable, entrena con pasión y alcanza tus metas. Tu
              bienestar es nuestra prioridad.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h2 className="text-lg font-semibold mb-2 text-white">
              Información
            </h2>
            <ul className="space-y-1 text-gray-100 dark:text-gray-400">
              <li>
                <Link to="./home" className="hover:text-pink-300 transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="./about" className="hover:text-pink-300 transition">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/programas"
                  className="hover:text-pink-300 transition"
                >
                  Programas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-pink-300 transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h2 className="text-lg font-semibold mb-2 text-white">Recursos</h2>
            <ul className="space-y-1 text-gray-100 dark:text-gray-400">
              <li>
                <Link to="/blog" className="hover:text-pink-300 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/salud" className="hover:text-pink-300 transition">
                  Consejos de salud
                </Link>
              </li>
              <li>
                <Link to="/guias" className="hover:text-pink-300 transition">
                  Guías de entrenamiento
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h2 className="text-lg font-semibold mb-2 text-white">Síguenos</h2>
            <div className="flex space-x-4 mt-3 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-pink-300/30 dark:border-gray-700 pt-4 text-center text-sm text-gray-100 dark:text-gray-400">
          © {new Date().getFullYear()} FitLife. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
