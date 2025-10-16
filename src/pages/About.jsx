import { useState, useEffect } from "react";
import colaboradoras from "../data/colaboradoras.json";
import testimonios from "../data/testimonios.json";
import integrante1 from "../assets/integrante1.jpg";
import integrante2 from "../assets/integrante2.png";
import integrante3 from "../assets/integrante3.png";
import integrante4 from "../assets/integrante4.png";

const imagenes = {
  integrante1,
  integrante2,
  integrante3,
  integrante4,
};

function AboutUs() {
  const [index, setIndex] = useState(0);

  // Avanza automáticamente cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonios.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const siguiente = () => setIndex((prev) => (prev + 1) % testimonios.length);
  const anterior = () =>
    setIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length);

  return (
    <section className="bg-fuchsia-200 dark:bg-gray-900 pt-16 pb-60 px-6 transition-colors duration-500 -mb-40">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título principal */}
        <h2 className="text-4xl font-bold text-fuchsia-900 dark:text-fuchsia-700 mb-4">
          Sobre Nosotras
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 transition-colors duration-500">
          En{" "}
          <span className="font-semibold text-fuchsia-800 dark:text-gray-500">
            FitLife
          </span>
          , somos un equipo de mujeres apasionadas por el bienestar, la
          tecnología y la superación personal. Buscamos inspirarte a cuidar tu
          cuerpo y tu mente con hábitos saludables, accesibles y sostenibles.
        </p>

        {/* NUESTRA HISTORIA */}
        <div className="bg-purple-100 dark:bg-gray-800 p-8 rounded-2xl shadow-md mb-16 transition-colors duration-500">
          <h3 className="text-3xl font-semibold text-fuchsia-900 dark:text-fuchsia-700 mb-4">
            Nuestra Historia
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            FitLife nació del deseo de crear un espacio donde las chicas puedan
            sentirse acompañadas en su camino hacia una vida más saludable. Todo
            comenzó como un pequeño proyecto universitario enfocado en el
            bienestar físico, pero con el tiempo evolucionó hacia una comunidad
            que integra tecnología, mente y cuerpo.
          </p>
          <p className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mt-4 leading-relaxed">
            Hoy, combinamos nuestras pasiones —la mecatrónica, el diseño, el
            entrenamiento y la nutrición— para ofrecer contenido auténtico y
            accesible. Creemos que el bienestar no es una meta, sino un viaje
            que se disfruta mejor en compañía.
          </p>
        </div>

        {/* Colaboradoras */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {colaboradoras.map((colab, i) => (
            <div
              key={i}
              className="bg-purple-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-colors duration-500"
            >
              <img
                src={imagenes[colab.img]}
                alt={colab.name}
                className="w-48 h-48 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-fuchsia-800 dark:text-white">
                {colab.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {colab.role}
              </p>
              <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                {colab.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonios - Carrusel */}
        <div className="mt-24 relative">
          <h3 className="text-3xl font-semibold text-fuchsia-900 dark:text-fuchsia-700 mb-8">
            Testimonios de Nuestros Clientes
          </h3>

          <div className="overflow-hidden relative max-w-4xl mx-auto">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {testimonios.map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-full p-8 bg-purple-50 dark:bg-gray-800 rounded-3xl shadow-md flex flex-col items-center text-center"
                >
                  <img
                    src={t.imagen}
                    alt={t.nombre}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <p className="text-gray-700 dark:text-gray-300 italic mb-3">
                    “{t.texto}”
                  </p>
                  <h4 className="text-fuchsia-800 dark:text-gray-200 font-semibold">
                    {t.nombre}
                  </h4>
                </div>
              ))}
            </div>

            {/* Botones del carrusel */}
            <button
              onClick={anterior}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-fuchsia-900 hover:bg-fuchsia-800 text-white p-2 rounded-full shadow-md"
            >
              ‹
            </button>
            <button
              onClick={siguiente}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-fuchsia-900 hover:bg-fuchsia-800 text-white p-2 rounded-full shadow-md"
            >
              ›
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonios.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === i
                    ? "bg-fuchsia-900"
                    : "bg-gray-400 dark:bg-gray-600"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
