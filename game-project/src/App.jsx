// src/App.jsx
import { useState, useEffect } from "react";
import { escenas } from "./data/escenas";
import Escena from "./components/escena";
import Inventario from "./components/inventario";
import Estado from "./components/estado";

const estadoInicial = () => ({
  escena: "inicio",
  inventario: [],
  puntos: 0,
  dinero: 0
});

const cargarEstado = () => {
  return {
    escena: localStorage.getItem("escena") || estadoInicial().escena,
    inventario: JSON.parse(localStorage.getItem("inventario")) || estadoInicial().inventario,
    puntos: parseInt(localStorage.getItem("puntos")) || estadoInicial().puntos,
    dinero: parseInt(localStorage.getItem("dinero")) || estadoInicial().dinero
  };
};

function App() {
  const [estado, setEstado] = useState(cargarEstado());

  const { escena, inventario, puntos, dinero } = estado;

  useEffect(() => {
    localStorage.setItem("escena", escena);
    localStorage.setItem("inventario", JSON.stringify(inventario));
    localStorage.setItem("puntos", puntos.toString());
    localStorage.setItem("dinero", dinero.toString());
  }, [estado]);

  const avanzar = (destino, ganancia = 0, dineroCambio = 0) => {
    setEstado((prev) => ({
      ...prev,
      escena: destino,
      puntos: prev.puntos + ganancia,
      dinero: prev.dinero + dineroCambio
    }));
  };

  const elegirObjeto = (objeto, costo = 0) => {
    if (estado.dinero >= costo) {
      const siguiente = escenas[escena].siguiente;
      setEstado((prev) => ({
        ...prev,
        inventario: [...prev.inventario, objeto],
        dinero: prev.dinero - costo,
        escena: siguiente
      }));
    } else {
      alert("No tenés suficiente dinero para comprar este objeto.");
    }
  };

  const actualizarEscena = (nuevaEscena) => {
    setEstado((prev) => ({ ...prev, escena: nuevaEscena }));
  };

  const reiniciarJuego = () => {
    localStorage.clear();
    setEstado(estadoInicial());
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20, fontFamily: "sans-serif" }}>
      <Estado puntos={puntos} dinero={dinero} />
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
