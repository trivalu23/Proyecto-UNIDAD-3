import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header fijo arriba */}
      <Header />

      {/* Contenido principal: lo que cambia con las rutas */}
      <main className="flex-grow bg-white">
        <Outlet />
      </main>

      {/* Footer fijo abajo */}
      <Footer />
    </div>
  );
}

export default App;
