
import React from "react";

const Contenedores = () => {
  
 return (
     
    <section
      id="bloque-beneficios"
      className="w-full flex flex-col items-center justify-center text-center py-20 bg-transparent mt-60 "
    >
      <div className="max-w-6xl px-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-black-800 mb-4">
          Todo lo necesario para sentirte y mantenerte bien.
        </h1>
        <p className="text-black-600 mb-12 text-2xl">
          Integramos entrenamiento inteligente, nutrición sencilla y un
          seguimiento continuo para ayudarte a mantener tus hábitos a largo
          plazo.
        </p>

        <div className="    grid grid-cols-1 md:grid-cols-3 gap-8 mt-16  ">
          {/* Tarjeta 1 */}
          <div className="bg-white shadow-xl rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl pt-2">📅</div>
            <h3 className="text-lg md:text-xl font-semibold text-black-800 mt-3">
              Rutinas según objetivo
            </h3>
            <p className="text-black-600 mt-2 text-sm md:text-base">
              Planes de 4–12 semanas, en casa o gimnasio, según tu comodidad.
              Con video-guías y progresiones semanales.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white shadow-xl rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl pt-2">🥑</div>
            <h3 className="text-lg md:text-xl font-semibold text-black-800 mt-3">
              Recetas Saludables
            </h3>
            <p className="text-black-600 mt-2 text-sm md:text-base">
              Planes de comidas equilibrados, con porciones y calorías ya
              medidas. ¡Delicioso, práctico y saludable!
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white shadow-xl rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl pt-2">📈</div>
            <h3 className="text-lg md:text-xl font-semibold text-black-800 mt-3">
              Progreso en tiempo real
            </h3>
            <p className="text-black-600 mt-2 text-sm md:text-base">
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