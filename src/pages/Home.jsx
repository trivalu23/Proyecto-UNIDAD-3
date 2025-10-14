import React from "react";
import Calculadora from "../Components/Calculadora.jsx";
import Contenedores from "../Components/Contenedores.jsx";
import Planes from "../Components/Planes.jsx";
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
