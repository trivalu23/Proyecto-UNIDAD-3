import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-purple-500 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo / Nombre */}
        <Link to="/">
          <img
            src="/src/assets/logo.png"
            alt="FitLife Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Botón para móvil */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Ícono tipo hamburguesa */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navegación en escritorio */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:underline"
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:underline"
            }
          >
            Sobre nosotros
          </NavLink>
          <NavLink
            to="/mision-vision"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:underline"
            }
          >
            Misión y Visión
          </NavLink>
          <NavLink
            to="/inscripcion"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:underline"
            }
          >
            Inscripción
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:underline"
            }
          >
            Contacto
          </NavLink>
        </nav>
      </div>

      {/* Menú desplegable en móvil */}
      {menuOpen && (
        <div className="md:hidden bg-purple-600 text-center py-4 space-y-3">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:underline"
          >
            Inicio
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block hover:underline"
          >
            Sobre nosotros
          </NavLink>
          <NavLink
            to="/mision-vision"
            onClick={() => setMenuOpen(false)}
            className="block hover:underline"
          >
            Misión y Visión
          </NavLink>
          <NavLink
            to="/inscripcion"
            onClick={() => setMenuOpen(false)}
            className="block hover:underline"
          >
            Inscripción
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block hover:underline"
          >
            Contacto
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;
