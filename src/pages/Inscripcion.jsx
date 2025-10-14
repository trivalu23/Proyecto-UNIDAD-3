import React, { useState } from "react";

const Inscripcion = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    objetivo: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.correo || !formData.objetivo) {
      setMensaje("Por favor completa todos los campos 🌿");
      return;
    }

    setMensaje(
      "¡Gracias por inscribirte! 💚 Nos pondremos en contacto pronto."
    );
    setFormData({ nombre: "", correo: "", objetivo: "" });
  };

  const planes = [
    {
      nombre: "Plan Básico",
      descripcion:
        "Rutinas ligeras, consejos de alimentación y bienestar general.",
      precio: "Gratis",
      color: "bg-pink-100",
    },
    {
      nombre: "Plan Balanceado",
      descripcion:
        "Incluye guías de comidas saludables y seguimiento semanal personalizado.",
      precio: "S/29 / mes",
      color: "bg-pink-200",
    },
    {
      nombre: "Plan Premium",
      descripcion:
        "Acceso a asesorías, planes avanzados y comunidad exclusiva de bienestar.",
      precio: "S/59 / mes",
      color: "bg-pink-300",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-50 px-6 py-16 gap-10">
      {/* Formulario */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-violet-600 mb-6 text-center">
          Formulario de Inscripción
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Ej. Juan Perez"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Ej. correo@ejemplo.com"
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
          <p className="text-center mt-4 text-violet-600 font-semibold">
            {mensaje}
          </p>
        )}
      </div>

      {/* Planes */}
      <div className="w-full max-w-md">
        <h3 className="text-2xl font-bold text-violet-700 mb-4 text-center">
          Nuestros Planes 🌱
        </h3>

        <div className="space-y-4">
          {planes.map((plan, i) => (
            <div
              key={i}
              className={`${plan.color} rounded-xl shadow-md p-5 border border-green-200 hover:shadow-lg transition`}
            >
              <h4 className="text-xl font-semibold text-violet-700">
                {plan.nombre}
              </h4>
              <p className="text-gray-700 mt-1">{plan.descripcion}</p>
              <p className="text-violet-800 font-bold mt-2">{plan.precio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inscripcion;
