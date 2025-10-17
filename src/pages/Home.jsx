import React from "react";
import Calculadora from "../components/Calculadora.jsx";
import Contenedores from "../components/Contenedores.jsx";
import Planes from "../components/Planes.jsx";
import Portada from "../components/Portada.jsx";

function Home() {
  return (
    <div>
      <Portada />
      <div>
        <Contenedores />
      </div>
      <div>
        <Calculadora />
      </div>
      <div>
        <Planes />
      </div>
    </div>
  );
}

export default Home;
