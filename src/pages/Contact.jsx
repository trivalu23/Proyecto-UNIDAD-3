import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    phoneNum: "",
    email: "",
    message: "",
    contact: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.username || formData.username.length < 3) {
      newErrors.username = "El nombre debe tener al menos 3 caracteres.";
    }
    if (formData.phoneNum.length !== 9 || isNaN(formData.phoneNum)) {
      newErrors.phoneNum = "El número de teléfono debe tener 9 números.";
    }
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Ingrese un correo electrónico válido.";
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    }
    if (!formData.contact) {
      newErrors.contact = "Seleccione un medio de contacto.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("✅ Formulario enviado correctamente. ¡Gracias por contactarnos!");
      setFormData({
        username: "",
        phoneNum: "",
        email: "",
        message: "",
        contact: "",
      });
    }
  };

  return (
    <div className="w-full mt-0 pt-0">

      {/* Barra de introducción */}
      <section className="w-full bg-purple-200 py-16 px-6 mt-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-500 mb-4">
            ¡Hablemos de una vida saludable!
          </h1>
          <p className="text-sm md:text-base font-medium text-gray-700">
            ¿Quieres transformar tu estilo de vida por uno mucho más sostenible y saludable?
            ¿Tienes dudas sobre FitLive? ¿O simplemente quieres conocernos más como página?
            Sea cuál sea tu duda, ¡estamos aquí para ayudarte!
          </p>
        </div>
      </section>

      {/* Medios de contacto */}
      <section className="bg-white py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-sky-500">
          Maneras de ponerte en contacto con nosotros
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 shadow-md rounded-lg bg-pink-200 transition-transform duration-300 hover:-translate-y-2">
            <span className="text-4xl mb-4">📧</span>
            <h3 className="text-xl font-semibold mb-2 text-pink-500">Correo Electrónico</h3>
            <p className="text-gray-700 mb-2">
              <strong>fitlive@gmail.com</strong>
            </p>
            <p>
              ¿Tienes dudas, sugerencias o necesitas ayuda para comenzar? Escríbenos y nuestro equipo responderá en menos de 24 horas. Queremos apoyarte en tu camino hacia una vida sana y sostenible, ofreciéndote orientación rápida y confiable en cada paso que des con FitLive. Recuerda: Vive sano, vive FitLive.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 shadow-md rounded-lg bg-pink-200 transition-transform duration-300 hover:-translate-y-2">
            <span className="text-4xl mb-4">📱</span>
            <h3 className="text-xl font-semibold mb-2 text-pink-500">Asesoría personalizada</h3>
            <p className="text-gray-700 mb-2">
              <strong>gustavogamboa@gmail.com</strong>
            </p>
            <p>
              ¿Quieres mejorar tu plan de alimentación o tus rutinas? Con nuestra asesoría recibirás acompañamiento constante, consejos prácticos y motivación. Nuestro equipo especializado estará a tu lado para ajustar tus objetivos y lograr resultados de manera segura, efectiva y con apoyo cercano.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 shadow-md rounded-lg bg-pink-200 transition-transform duration-300 hover:-translate-y-2">
            <span className="text-4xl mb-4">📍</span>
            <h3 className="text-xl font-semibold mb-2 text-pink-500">Redes sociales</h3>
            <p className="text-gray-700"><strong>Instagram:</strong></p>
            <p>@fitlife.oficial</p>
            <p className="text-gray-700"><strong>Twitter:</strong></p>
            <p>@FitLife</p>
            <p className="text-gray-700"><strong>TikTok:</strong></p>
            <p>@FitLife.18</p>
            <p className="mt-2">Síguenos para tips diarios.</p>
          </div>
        </div>
      </section>

       {/* Preguntas Frecuentes */}
      <section className="bg-purple-200 py-16 px-6">
        <h2 className="text-3xl text-sky-500 font-bold text-center mb-12">
          Preguntas Frecuentes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Tarjeta 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-lg text-purple-400 font-semibold mb-2">🌿 ¿Qué es FitLive?</h3>
            <p className="text-gray-600 text-sm">
              Es una plataforma que promueve hábitos saludables y sostenibles. Incluye rutinas de ejercicio, planes de alimentación y cálculo de IMC para mejorar tu bienestar físico y mental.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-lg text-purple-400 font-semibold mb-2">❤️ ¿Tiene algún costo?</h3>
            <p className="text-gray-600 text-sm">
              Ofrecemos acceso gratuito con funciones básicas y planes premium con más opciones de personalización y apoyo especializado de acuerdo con tus necesidades y objetivos personales.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-lg text-purple-400 font-semibold mb-2">📱 ¿Puedo usarlo desde mi celular?</h3>
            <p className="text-gray-600 text-sm">
              Sí, la plataforma es compatible con dispositivos móviles para que sigas tus planes de ejercicio y alimentación desde cualquier lugar, manteniendo el control de tu progreso.
            </p>
          </div>

          {/* Tarjeta 4 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-lg text-purple-400 font-semibold mb-2">⭐ ¿Necesito experiencia previa?</h3>
            <p className="text-gray-600 text-sm">
              No es necesario. Nuestras rutinas están diseñadas para todos los niveles: principiante, intermedio y avanzado. Además, pueden adaptarse a tu ritmo y tiempo disponible.
            </p>
          </div>

          {/* Tarjeta 5 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-lg text-purple-400 font-semibold mb-2">⏳ ¿Cuánto tiempo tomarán los resultados?</h3>
            <p className="text-gray-600 text-sm">
              Todo dependerá de tu constancia. Con disciplina y acompañamiento, notarás cambios positivos en tus hábitos fisicos, emocionales y de alimentación desde las primeras semanas.
            </p>
          </div>

          {/* Tarjeta 6 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-lg text-purple-400 font-semibold mb-2">🥗 ¿Los planes de alimentación son personalizados?</h3>
            <p className="text-gray-600 text-sm">
              Sí, se ajustan a tus objetivos y preferencias, fomentando una alimentación balanceada y sostenible, ayudándote a mantener buenos hábitos a largo plazo.
            </p>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-16 px-8">
        <h2 className="text-2xl font-bold text-center mb-7 text-sky-500">
          Formulario de contacto
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg space-y-6"
        >
          <div>
            <label className="block font-medium text-purple-400 mb-1">Nombre completo</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-sky-300"
              placeholder="Ingresa tu nombre"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>

          <div>
            <label className="block font-medium text-purple-400 mb-1">Teléfono</label>
            <input
              type="text"
              name="phoneNum"
              value={formData.phoneNum}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-sky-300"
              placeholder="Ingresa tu número"
            />
            {errors.phoneNum && <p className="text-red-500 text-sm">{errors.phoneNum}</p>}
          </div>

          <div>
            <label className="block font-medium text-purple-400 mb-1">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-sky-300"
              placeholder="Ingresa tu correo"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-medium text-purple-400 mb-1">Mensaje</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-sky-300"
              placeholder="Escribe tu mensaje"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <div>
            <label className="block font-medium text-purple-400 mb-2">
              ¿Cómo prefieres ser contactado?
            </label>
            <select
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-sky-300"
            >
              <option value="">Selecciona una opción</option>
              <option value="email">Correo electrónico</option>
              <option value="telefono">Teléfono</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
            {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-300 text-white py-2 rounded-md hover:bg-pink-400 transition"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
