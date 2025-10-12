import React from "react";

function MisionVision() {
  return (
    <section className="bg-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            Nuestra Misión y Visión
          </h1>
          <p className="text-lg text-gray-600">
            FitLife, tu aliado para el comienzo de una vida saludable y
            equilibrada.
          </p>
        </div>

        {/* Misión */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-600 mb-3">
            Nuestra Misión
          </h2>
          <p className="text-gray-700 mb-4">
            Promover un estilo de vida saludable, brindando a las personas
            herramientas prácticas y personalizadas para mejorar su bienestar
            físico, mental y emocional. A través de recursos como el cálculo del
            IMC, planes de alimentación equilibrada y rutinas de ejercicio
            adaptadas a su nivel de actividad física, buscamos empoderar a
            nuestros usuarios para que tomen el control de su salud y alcancen
            su mejor versión.
          </p>
          <div>
            <h3 className="font-medium text-lg mb-2">
              Para lograrlo nos enfocamos en:
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>
                Personalización de su plan de alimentación y entrenamiento
              </li>
              <li>
                Gestionar eficientemente su tiempo con rutinas adaptadas a su
                estilo de vida
              </li>
              <li>
                Desarrollar hábitos saludables y sostenibles a largo plazo
              </li>
            </ul>
          </div>
        </div>

        {/* Visión */}
        <div>
          <h2 className="text-2xl font-semibold text-purple-600 mb-3">
            Nuestra Visión
          </h2>
          <p className="text-gray-700 mb-4">
            Ser la plataforma líder en bienestar integral, reconocida por su
            innovación y efectividad, convirtiéndonos en tu aliado a la hora de
            iniciar una vida saludable y equilibrada. Asimismo, aspiramos a
            construir una comunidad global que comparta conocimientos,
            experiencias y motivaciones.
          </p>
          <div>
            <h3 className="font-medium text-lg mb-2">Hacia 2040 queremos:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>
                Ser la plataforma de bienestar integral más confiable y
                utilizada del mundo
              </li>
              <li>
                Innovar constantemente en tecnología y contenido para ofrecer la
                mejor experiencia
              </li>
              <li>Ofrecer soluciones personalizadas y accesibles para todos</li>
              <li>
                Fomentar una comunidad global activa y comprometida con el
                bienestar
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MisionVision;
