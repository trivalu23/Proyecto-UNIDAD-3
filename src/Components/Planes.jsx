
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
      className=" w-full flex flex-col items-center justify-center text-center pt-5 pb-155 -mt-89" >
      {/* Título */}
      <h2 className="text-3xl md:text-4xl font-semibold text-black-800 mb-14 tracking-wide">
        PLAN DE ENTRENAMIENTO
      </h2>

      {/* Contenedores */}
      <div className="w-[65%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {planes.map((item, index) => (
          <article
            key={index}
            className=" shadow-lg rounded-2xl overflow-hidden flex flex-col h-[540px] w-[320px] sm:w-[360px] md:w-[380px] hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
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
            <div className= "p-6 flex flex-col text-2x1 flex-grow text-left font-[Poppins] text-black ">
              <h3 className="text-lg md:text-2xl font-semibold text-black mb-3">
                {item.titulo}
              </h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-gradient-to-r from-purple-300 to-red-300 text-white text-2x1 font-bold px-3 py-1 rounded-full shadow">
                  HIIT & CARDIO
                </span>
                <span className="bg-gradient-to-r from-purple-300 to-red-300 text-white text-2x1 font-bold px-3 py-1.5 rounded-full shadow">
                  FULL BODY
                </span>
              </div>
              <p className="  text-base md:text-lg text-black-800 leading-relaxed  mt-3  "  >{item.descripcion}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};


export default Planes;