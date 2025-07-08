// src/App.jsx
import { useState, useEffect } from "react";
import { escenas } from "./data/escenas";
import Escena from "./components/escena";
import Inventario from "./components/inventario";
import Estado from "./components/estado";

const cargarEstado = () => {
  return {
    escena: localStorage.getItem("escena") || "inicio",
    inventario: JSON.parse(localStorage.getItem("inventario")) || [],
    puntos: parseInt(localStorage.getItem("puntos")) || 0
  };
};

function App() {
  const [estado, setEstado] = useState(cargarEstado());

  const { escena, inventario, puntos } = estado;

  useEffect(() => {
    localStorage.setItem("escena", escena);
    localStorage.setItem("inventario", JSON.stringify(inventario));
    localStorage.setItem("puntos", puntos.toString());
  }, [estado]);

  const avanzar = (destino, ganancia = 0) => {
    setEstado((prev) => ({
      ...prev,
      escena: destino,
      puntos: prev.puntos + ganancia
    }));
  };

  const elegirObjeto = (objeto) => {
    const siguiente = escenas[escena].siguiente;
    setEstado((prev) => ({
      ...prev,
      inventario: [...prev.inventario, objeto],
      escena: siguiente
    }));
  };

  const actualizarEscena = (nuevaEscena) => {
    setEstado((prev) => ({ ...prev, escena: nuevaEscena }));
  };

  const reiniciarJuego = () => {
    localStorage.clear();
    setEstado({ escena: "inicio", inventario: [], puntos: 0 });
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20, fontFamily: "sans-serif" }}>
      <Estado puntos={puntos} />
      <Inventario inventario={inventario} />
      <Escena
        escena={escenas[escena]}
        avanzar={avanzar}
        elegirObjeto={elegirObjeto}
        actualizarEscena={actualizarEscena}
      />
      <button onClick={reiniciarJuego} style={{ marginTop: 20 }}>Reiniciar juego</button>
    </div>
  );
}

export default App;