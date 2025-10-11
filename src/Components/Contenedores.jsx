import React from "react";

const Contenedores = () => {
  return (
    <section
      id="bloque-beneficios"
      className="w-full flex flex-col items-center justify-center text-center py-20 px-4 sm:px-8 mt-60 bg-gradient-to-b from-pink-100 via-purple-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          Todo lo necesario para sentirte y mantenerte bien.
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-12 text-lg md:text-2xl">
          Integramos entrenamiento inteligente, nutrición sencilla y un
          seguimiento continuo para ayudarte a mantener tus hábitos a largo
          plazo.
        </p>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Tarjeta 1 */}
          <div className="bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-700 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl pt-2">📅</div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mt-3">
              Rutinas según objetivo
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm md:text-base">
              Planes de 4–12 semanas, en casa o gimnasio, según tu comodidad.
              Con video-guías y progresiones semanales.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-700 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl pt-2">🥑</div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mt-3">
              Recetas Saludables
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm md:text-base">
              Planes de comidas equilibrados, con porciones y calorías ya
              medidas. ¡Delicioso, práctico y saludable!
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-700 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl pt-2">📈</div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mt-3">
              Progreso en tiempo real
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm md:text-base">
              Registra peso, medidas, pasos y energía. Gráficas claras para
              motivarte cada semana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contenedores;
