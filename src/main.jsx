import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MisionVision from "./pages/MisionVision";
import Inscripcion from "./pages/Inscripcion";
import Catalog from "./pages/Catalog";
import "./index.css";

// Definimos las rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/mision-vision", element: <MisionVision /> },
      { path: "/inscripcion", element: <Inscripcion /> },
      { path: "/catalogo", element: <Catalog /> },
    ],
  },
]);

// Render principal
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
