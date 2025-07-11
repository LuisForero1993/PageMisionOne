import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Inicio } from "./pages/Inicio";
import { NewOrder } from "./pages/NewOrder";
import { Orders } from "./pages/Orders";
import { Seleccion } from "./components/Seleccion"
import { useState, useEffect } from "react";


//  const obtenerDataLocalStorage=()=>{
//    const data = localStorage.getItem("historialPedidos");
//  return data ? data:([]);
//  }

function App() {
  const menu = [
    {
      name: "Hamburguesa sencilla",
      price: 15000.0,
      image: "https://i.pravatar.cc/100",
      description: "Pan brioche con ajonjoli, carne de res, queso mozarella, papas fosforo y salsas en envoltura de papel antigraso.",
    },
    {
      name: "Hamburguesa doble carne",
      price: 20000.0,
      image: "https://i.pravatar.cc/100",
      description: "Pan brioche con ajonjoli, doble carne de res, queso mozarella, tocineta y salsas en envoltura de papel antigraso.",
    },
    {
      name: "Papas fritas",
      price: 7000.0,
      image: "https://i.pravatar.cc/100",
      description: "Preparadas con la receta tradicional, para una experiencia auténtica.",
    },
    {
      name: "Aros de cebolla",
      price: 7000.0,
      image: "https://i.pravatar.cc/100",
      description: "Estos Aros de Cebolla son redondos, están sabrosos, crujientes y dorados, solos o acompañados de una de tus salsas favoritas.",
    },
    {
      name: "Agua 500 mL",
      price: 5000.0,
      image: "https://i.pravatar.cc/100",
      description: "Botella de agua de 500 mL",
    },
    {
      name: "Gaseosa 500 mL",
      price: 10000.0,
      image: "https://i.pravatar.cc/100",
      description: "Botella de gaseosa de 500 mL",
    },
  ];

  const [historial, setHistorial] = useState([]);
  const [cargandoHistorial, setCargandoHistorial] = useState(true); 

// Cargar historial desde localStorage al iniciar
  useEffect(() => {
    const guardado = localStorage.getItem("historialPedidos");
    if (guardado) {
      try {
        const parsed = JSON.parse(guardado);
        if (Array.isArray(parsed)) setHistorial(parsed);
      } catch (error) {
        console.error("Error al cargar historial:", error);
      }
    }
    setCargandoHistorial(false); // ← Solo después de cargar
  }, []);

  // Guardar historial en localStorage solo si ya se cargó
  useEffect(() => {
    if (!cargandoHistorial) {
      localStorage.setItem("historialPedidos", JSON.stringify(historial));
    }
  }, [historial, cargandoHistorial]);




  return (
    <>
    <NavBar />       
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nuevo-pedido" element={<NewOrder menu={menu} historial={historial} setHistorial={setHistorial}/>} />
        <Route path="/pedidos" element={<Orders historial={historial} setHistorial={setHistorial}/>} />
        <Route path="/seleccion/:name" element={<Seleccion />} />
        <Route path="*" element={<Inicio />} />
      </Routes>
    </>
  );
}

export default App
