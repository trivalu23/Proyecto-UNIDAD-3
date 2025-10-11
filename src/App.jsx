import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Calculadora from "./Components/Calculadora.jsx";
import Contenedores from "./Components/Contenedores.jsx";
import Planes from "./Components/Planes.jsx";

function App() { 
  // 🌙 Estado del modo oscuro
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 🌙 Aplica clase dark al <html> y guarda en localStorage
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main className="flex-grow transition-colors duration-500">
        <Outlet />
      </main>
      <Footer />
    </div>
    <>
      <div>
        <Contenedores />
      </div>
      <div>
        <Calculadora />
      </div>
          <div>

        <Planes />
          </div>
    </>
  );
}

export default App;
