import React from "react";
import { Link } from "react-router-dom";
// Íconos de redes sociales (Font Awesome)
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-indigo-400 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo y descripción */}
        <div>
          <h1 className="text-2xl font-bold mb-3">FitLife</h1>
          <p className="text-sm text-gray-200">
            Vive saludable, entrena con pasión y alcanza tus metas. Tu bienestar
            es nuestra prioridad.
          </p>
        </div>

        {/* Sección de navegación */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Información</h2>
          <ul className="space-y-1 text-gray-200">
            <li>
              <Link to="/" className="hover:text-white transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="hover:text-white transition">
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link to="/programas" className="hover:text-white transition">
                Programas
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-white transition">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Recursos */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Recursos</h2>
          <ul className="space-y-1 text-gray-200">
            <li>
              <Link to="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/salud" className="hover:text-white transition">
                Consejos de salud
              </Link>
            </li>
            <li>
              <Link to="/guias" className="hover:text-white transition">
                Guías de entrenamiento
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Síguenos</h2>
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

      <div className="mt-8 border-t border-purple-400 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} FitLife. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
