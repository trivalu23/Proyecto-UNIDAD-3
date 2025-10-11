import React from "react";

const planes = [
  {
    titulo: "Entrenamiento de brazos",
    video: "https://www.youtube.com/embed/dQCR1gywOmg?si=-Rwfhtsg4N32jjsz",
    descripcion:
      "✅ Para definir y tonificar bíceps y tríceps con rutinas dinámicas. Incluye ejercicios guiados y tiempos de descanso.",
  },
  {
    titulo: "Entrenamiento de piernas",
    video: "https://www.youtube.com/embed/I9nG-G4B5Bs?si=w8lb2PCv3oaH6Y4L",
    descripcion:
      "✅ Fortalece y moldea glúteos y piernas con sesiones intensas. Incluye combinaciones de fuerza y movimientos funcionales.",
  },
  {
    titulo: "Entrenamiento de abdomen",
    video: "https://www.youtube.com/embed/9AR415LybPY?si=Rvs8UPf6gUnfjOul",
    descripcion:
      "✅ Activa tu core con ejercicios de planchas y abdominales. Incluye rutinas cortas y efectivas para marcar cintura.",
  },
  {
    titulo: "Entrenamiento de espalda",
    video: "https://www.youtube.com/embed/87s4xDaIXqM?si=R6eICe7q8-G0PhdC",
    descripcion:
      "✅ Mejora tu postura y fortalece la zona lumbar y dorsal. Incluye rutinas completas para equilibrio y resistencia.",
  },
];

const Planes = () => {
  return (
    <section
      id="plan-entrenamiento"
      className="w-full flex flex-col items-center justify-center text-center pt-5 pb-20 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-pink-100 via-purple-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      {/* Título */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-14 tracking-wide">
        PLAN DE ENTRENAMIENTO
      </h2>

      {/* Contenedores */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {planes.map((item, index) => (
          <article
            key={index}
            className="shadow-lg dark:shadow-gray-800 rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white dark:bg-gray-800"
          >
            {/* Video */}
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-t-2xl"
                src={item.video}
                title={item.titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Texto */}
            <div className="p-6 flex flex-col text-left font-[Poppins] text-gray-800 dark:text-gray-100 flex-grow">
              <h3 className="text-lg md:text-2xl font-semibold mb-3">
                {item.titulo}
              </h3>

              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold px-3 py-1 rounded-full shadow">
                  HIIT & CARDIO
                </span>
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold px-3 py-1.5 rounded-full shadow">
                  FULL BODY
                </span>
              </div>

              <p className="text-base md:text-lg leading-relaxed mt-3">
                {item.descripcion}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Planes;
