import colaboradoras from "../data/colaboradoras.json";
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
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título principal */}
        <h2 className="text-4xl font-bold text-purple-600 mb-4">
          Sobre Nosotras
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 transition-colors duration-500">
          En <span className="font-semibold text-purple-500">FitLife</span>,
          somos un equipo de mujeres apasionadas por el bienestar, la tecnología
          y la superación personal. Buscamos inspirarte a cuidar tu cuerpo y tu
          mente con hábitos saludables, accesibles y sostenibles.
        </p>

        {/* NUESTRA HISTORIA */}
        <div className="bg-purple-100 dark:bg-gray-800 p-8 rounded-2xl shadow-md mb-16 transition-colors duration-500">
          <h3 className="text-3xl font-semibold text-purple-700 dark:text-purple-300 mb-4">
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
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
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
      </div>
    </section>
  );
}

export default AboutUs;
