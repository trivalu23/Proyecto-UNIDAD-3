import React, { useState } from "react";
import catalogo from "../data/catalogo.json";

const Catalogo = () => {
  const [busquedaEntrenamiento, setBusquedaEntrenamiento] = useState("");
  const [nivelFiltro, setNivelFiltro] = useState("todos");
  const [busquedaComida, setBusquedaComida] = useState("");
  const [dietaFiltro, setDietaFiltro] = useState("todos");

  // 🏋️ Filtrado de entrenamientos
  const entrenamientos = catalogo.filter(
    (item) => item.tipo === "entrenamiento"
  );
  const resultadosEntrenamiento = entrenamientos.filter((item) => {
    const coincideBusqueda = item.titulo
      .toLowerCase()
      .includes(busquedaEntrenamiento.toLowerCase());
    const coincideNivel = nivelFiltro === "todos" || item.nivel === nivelFiltro;
    return coincideBusqueda && coincideNivel;
  });

  // 🥗 Filtrado de comidas
  const comidas = catalogo.filter((item) => item.tipo === "comida");
  const resultadosComida = comidas.filter((item) => {
    const coincideBusqueda = item.titulo
      .toLowerCase()
      .includes(busquedaComida.toLowerCase());
    const coincideDieta = dietaFiltro === "todos" || item.dieta === dietaFiltro;
    return coincideBusqueda && coincideDieta;
  });

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-violet-600 dark:text-violet-300 mb-12">
          Catálogo de Planes 🌱
        </h2>

        {/* ===================== 🏋️ ENTRENAMIENTOS ===================== */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-pink-600 dark:text-pink-300 mb-6">
            Planes de Entrenamiento
          </h3>

          {/* Filtros */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <input
              type="text"
              placeholder="Buscar entrenamiento..."
              value={busquedaEntrenamiento}
              onChange={(e) => setBusquedaEntrenamiento(e.target.value)}
              className="w-full sm:w-1/2 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-800 dark:text-gray-100"
            />
            <select
              value={nivelFiltro}
              onChange={(e) => setNivelFiltro(e.target.value)}
              className="w-full sm:w-1/3 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-800 dark:text-gray-100"
            >
              <option value="todos">Todos los niveles</option>
              <option value="Principiante">Principiante</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
          </div>

          {/* Resultados */}
          {resultadosEntrenamiento.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {resultadosEntrenamiento.map((item) => (
                <div
                  key={item.id}
                  className="border border-pink-200 dark:border-pink-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition bg-white dark:bg-gray-800"
                >
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-5">
                    <h4 className="text-xl font-semibold text-violet-700 dark:text-violet-300 mb-2">
                      {item.titulo}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-200 mb-3">
                      {item.descripcion}
                    </p>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>⭐ {item.nivel}</span>
                      <span>⏱️ {item.duracion}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
              No se encontraron entrenamientos para “{busquedaEntrenamiento}”
            </p>
          )}
        </div>

        {/* ===================== 🥗 COMIDAS ===================== */}
        <div>
          <h3 className="text-2xl font-semibold text-center text-emerald-600 dark:text-emerald-300 mb-6">
            Planes de Alimentación Saludable
          </h3>

          {/* Filtros */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <input
              type="text"
              placeholder="Buscar plan de comida..."
              value={busquedaComida}
              onChange={(e) => setBusquedaComida(e.target.value)}
              className="w-full sm:w-1/2 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-gray-800 dark:text-gray-100"
            />
            <select
              value={dietaFiltro}
              onChange={(e) => setDietaFiltro(e.target.value)}
              className="w-full sm:w-1/3 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-gray-800 dark:text-gray-100"
            >
              <option value="todos">Todas las dietas</option>
              <option value="Detox">Detox</option>
              <option value="Balanceada">Balanceada</option>
              <option value="Vegetariana">Vegetariana</option>
            </select>
          </div>

          {/* Resultados */}
          {resultadosComida.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {resultadosComida.map((item) => (
                <div
                  key={item.id}
                  className="border border-green-200 dark:border-green-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition bg-white dark:bg-gray-800"
                >
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-5">
                    <h4 className="text-xl font-semibold text-violet-700 dark:text-violet-300 mb-2">
                      {item.titulo}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-200 mb-3">
                      {item.descripcion}
                    </p>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>🥗 {item.dieta}</span>
                      <span>⏱️ {item.duracion}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
              No se encontraron planes de comida para “{busquedaComida}”
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Catalogo;
