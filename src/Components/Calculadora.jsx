import { useState } from "react";

function Calculadora() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [categoria, setCategoria] = useState("");
  const [errores, setErrores] = useState({ peso: false, altura: false });

  const calcularIMC = (e) => {
    e.preventDefault();

    let erroresTemp = { peso: false, altura: false };
    let hayError = false;

    if (!peso) {
      erroresTemp.peso = true;
      hayError = true;
    }
    if (!altura) {
      erroresTemp.altura = true;
      hayError = true;
    }

    setErrores(erroresTemp);

    if (hayError) {
      setMensaje("Por favor completa los campos obligatorios.");
      setImc(null);
      setCategoria("");
      return;
    }

    const imcValor = peso / (altura * altura);

    if (isNaN(imcValor)) {
      setMensaje("Por favor, ingresa valores válidos.");
      setImc(null);
      return;
    }

    setImc(imcValor.toFixed(2));

    if (imcValor < 18.5) {
      setCategoria("Bajo peso");
      setMensaje(
        "Tu IMC indica bajo peso. Mantén una alimentación equilibrada 💪 y adquiere alguno de nuestros planes personalizados para ti."
      );
    } else if (imcValor < 24.9) {
      setCategoria("Peso normal");
      setMensaje(
        "¡Excelente! Estás en tu peso ideal 🥗. Adquiere alguno de nuestros planes personalizados que tenemos para ti."
      );
    } else if (imcValor < 29.9) {
      setCategoria("Sobrepeso");
      setMensaje(
        "Tienes sobrepeso. Realiza actividad física regular 🏃🏼 y adquiere nuestros planes personalizados."
      );
    } else {
      setCategoria("Obesidad");
      setMensaje(
        "Tu IMC indica obesidad. Consulta con un especialista ❤️‍🩹 y adquiere uno de nuestros planes. ¡No esperes más!"
      );
    }
  };

  const reiniciarFormulario = () => {
    setPeso("");
    setAltura("");
    setImc(null);
    setMensaje("");
    setCategoria("");
    setErrores({ peso: false, altura: false });
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 p-6">
      <div className="bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-700 rounded-2xl p-8 max-w-xl w-full text-center transition-all duration-500">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Calculadora de IMC
        </h1>

        <form onSubmit={calcularIMC} className="space-y-4">
          {/* Peso */}
          <div className="text-left">
            <label className="block text-gray-800 dark:text-gray-200 font-medium mb-1">
              Peso (kg)
            </label>
            <input
              type="number"
              value={peso}
              onChange={(e) => {
                setPeso(e.target.value);
                setErrores({ ...errores, peso: false });
              }}
              className={`w-full border rounded-xl p-2 text-center focus:outline-none focus:ring-2 ${
                errores.peso
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-pink-400 dark:focus:ring-pink-500"
              } dark:bg-gray-700 dark:text-white dark:border-gray-600`}
              placeholder="Ej: 70"
              step="any"
            />
            {errores.peso && (
              <p className="text-red-500 text-xs mt-1">Campo obligatorio</p>
            )}
          </div>

          {/* Altura */}
          <div className="text-left">
            <label className="block text-gray-800 dark:text-gray-200 font-medium mb-1">
              Altura (m)
            </label>
            <input
              type="number"
              value={altura}
              onChange={(e) => {
                setAltura(e.target.value);
                setErrores({ ...errores, altura: false });
              }}
              className={`w-full border rounded-xl p-2 text-center focus:outline-none focus:ring-2 ${
                errores.altura
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-pink-400 dark:focus:ring-pink-500"
              } dark:bg-gray-700 dark:text-white dark:border-gray-600`}
              placeholder="Ej: 1.75"
              step="any"
            />
            {errores.altura && (
              <p className="text-red-500 text-xs mt-1">Campo obligatorio</p>
            )}
          </div>

          {/* Botones */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button
              type="button"
              onClick={reiniciarFormulario}
              className="bg-gradient-to-r from-pink-400 to-purple-400 text-white py-2 px-5 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              REINICIAR
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-sky-400 to-blue-400 text-white py-2 px-5 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              CALCULAR
            </button>
          </div>
        </form>

        {/* Resultado */}
        <div className="mt-6">
          {imc ? (
            <>
              <h2
                className={`text-4xl font-bold ${
                  categoria === "Obesidad"
                    ? "text-red-500"
                    : categoria === "Sobrepeso"
                    ? "text-yellow-400"
                    : categoria === "Peso normal"
                    ? "text-green-500"
                    : "text-blue-500"
                }`}
              >
                {imc}
              </h2>
              <p className="text-gray-800 dark:text-gray-200 font-medium mt-2">
                {categoria}
              </p>
              <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
                {mensaje}
              </p>
            </>
          ) : (
            <p className="text-gray-400 text-sm">
              Introduce tus datos para calcular tu IMC
            </p>
          )}
        </div>

        {/* Barra IMC */}
        <div className="mt-6 w-full">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 font-medium mb-1">
            <span>Bajo peso</span>
            <span>Peso normal</span>
            <span>Sobrepeso</span>
            <span>Obesidad</span>
          </div>

          <div className="flex h-3 rounded-full overflow-hidden">
            <div className="bg-blue-400 w-[18.5%]" />
            <div className="bg-green-500 w-[33%]" />
            <div className="bg-yellow-400 w-[17%]" />
            <div className="bg-red-500 w-[31.5%]" />
          </div>

          <div className="flex justify-between text-[11px] text-gray-500 dark:text-gray-400 mt-1">
            <span>&lt;18.5</span>
            <span>18.5–24.9</span>
            <span>25–29.9</span>
            <span>≥30</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
