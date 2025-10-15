import React, { useState } from "react";

const Inscripcion = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    edad: "",
    objetivo: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, correo, edad } = formData;

    // Verificar campos vacíos
    if (!nombre || !correo || !edad) {
      setMensaje("Por favor completa todos los campos 🌿");
      return;
    }

    // Verificar edad válida
    const edadNum = parseInt(edad, 10);
    if (isNaN(edadNum) || edadNum < 0) {
      setMensaje("Por favor ingresa una edad válida 🌸");
      return;
    }

    // Verificar si es mayor de edad
    if (edadNum <= 18) {
      setMensaje(
        "Lo sentimos 😔, debes ser mayor de 18 años para inscribirte."
      );
      return;
    }

    // Si todo está bien
    setMensaje(
      "¡Gracias por inscribirte! 💚 Nos pondremos en contacto pronto."
    );
    setFormData({ nombre: "", correo: "", edad: "", objetivo: "" });
  };

  const planes = [
    {
      nombre: "Plan Básico",
      descripcion:
        "Rutinas ligeras, consejos de alimentación y bienestar general.",
      
      color: "bg-pink-100",
    },
    {
      nombre: "Plan Balanceado",
      descripcion:
        "Incluye guías de comidas saludables y seguimiento semanal personalizado.",

      
      color: "bg-pink-200",

    },
    {
      nombre: "Plan Premium",
      descripcion:
        "Acceso a asesorías, planes avanzados y comunidad exclusiva de bienestar.",
 
      
      color: "bg-pink-300",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-50 dark:bg-gray-900 px-6 py-16 gap-10 transition-colors duration-500">
      {/* Formulario */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-500">
        <h2 className="text-3xl font-bold text-violet-600 dark:text-violet-300 mb-6 text-center">
          Formulario de Inscripción
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-800 dark:text-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Ej. Juan Perez"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-800 dark:text-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Ej. correo@ejemplo.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              Edad
            </label>
            <input
              type="number"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              min="0"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-800 dark:text-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Ej. 22"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-medium shadow-md transition"
          >
            Enviar inscripción
          </button>
        </form>

        {mensaje && (
          <p
            className={`text-center mt-4 font-semibold ${
              mensaje.includes("Gracias")
                ? "text-green-600 dark:text-green-400"
                : "text-red-500 dark:text-red-400"
            }`}
          >
            {mensaje}
          </p>
        )}
      </div>

      {/* Planes */}
      <div className="w-full max-w-md">
        <h3 className="text-2xl font-bold text-violet-700 dark:text-violet-300 mb-4 text-center">
          Nuestros Planes 🌱
        </h3>

        <div className="space-y-4">
          {planes.map((plan, i) => (
            <div
              key={i}

              className={`${plan.color} rounded-xl shadow-md p-5 border border-pink-200 hover:shadow-lg transition`}

            >
              <h4 className="text-xl font-semibold text-violet-700 dark:text-violet-300">
                {plan.nombre}
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mt-1">
                {plan.descripcion}
              </p>
              <p className="text-violet-800 dark:text-violet-400 font-bold mt-2">
                {plan.precio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inscripcion;
