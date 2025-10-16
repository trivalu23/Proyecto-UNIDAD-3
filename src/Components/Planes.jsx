import React, { useRef } from "react";

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
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="plan-entrenamiento"
      className="w-full flex flex-col items-center justify-center text-center pt-0 pb-60 -mb-40 px-4 mt-0 
      bg-gradient-to-b from-fuchsia-100 to-fuchsia-200 
      dark:from-gray-900 dark:to-gray-800 
      transition-colors duration-500"
    >
      {/* Título */}
      <h2 className="text-3xl md:text-4xl font-semibold text-fuchsia-900 dark:text-white mb-10 tracking-wide drop-shadow-md">
        PLAN DE ENTRENAMIENTO
      </h2>

      {/* Contenedor del carrusel */}
      <div className="relative w-full max-w-7xl">
        {/* Botón Izquierdo */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/70 dark:bg-gray-800 p-3 rounded-full shadow-lg 
          hover:bg-white dark:hover:bg-gray-700 transition hidden sm:flex text-gray-900 dark:text-white"
        >
          ◀
        </button>

        {/* Carrusel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 pb-4 pt-3 no-scrollbar"
        >
          {planes.map((item, index) => (
            <article
              key={index}
              className="min-w-[85%] sm:min-w-[45%] lg:min-w-[30%] snap-center shadow-lg rounded-2xl overflow-hidden flex flex-col 
              bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 
              hover:shadow-2xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] 
              transition-all duration-300 transform hover:scale-[1.03]"
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
              <div className="p-5 text-left text-fuchsia-800 dark:text-gray-100 flex-grow">
                <h3 className="text-lg md:text-2xl font-semibold mb-3">
                  {item.titulo}
                </h3>

                {/* Etiquetas con modo oscuro */}
                <div className="flex flex-wrap gap-2 mb-2">
                  <span
                    className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full shadow 
                  dark:from-purple-700 dark:to-pink-700 dark:shadow-[0_0_12px_rgba(255,255,255,0.15)] dark:hover:brightness-110 transition"
                  >
                    HIIT & CARDIO
                  </span>
                  <span
                    className="text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full shadow 
                  dark:from-pink-700 dark:to-purple-700 dark:shadow-[0_0_12px_rgba(255,255,255,0.15)] dark:hover:brightness-110 transition"
                  >
                    FULL BODY
                  </span>
                </div>

                <p className="text-base text-gray-700 dark:text-gray-300 md:text-base leading-relaxed opacity-90">
                  {item.descripcion}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Botón Derecho */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800 p-3 rounded-full shadow-lg 
          hover:bg-white dark:hover:bg-gray-700 transition hidden sm:flex text-gray-900 dark:text-white"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default Planes;
