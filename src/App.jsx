// src/App.jsx
import "./App.css"
import { useState, useEffect } from "react";
import { escenas } from "./data/escenas";
import Escena from "./components/Escena";
import Inventario from "./components/Inventario";
import Estado from "./components/Estado";



const estadoInicial = () => ({
  escena: "inicio",
  inventario: [],
  puntos: 0,
  dinero: 0,
  fichas: 0,
  historial: []
});

const cargarEstado = () => {
  return {
    escena: localStorage.getItem("escena") || estadoInicial().escena,
    inventario: JSON.parse(localStorage.getItem("inventario")) || estadoInicial().inventario,
    puntos: parseInt(localStorage.getItem("puntos")) || estadoInicial().puntos,
    fichas: parseInt(localStorage.getItem("fichas")) || estadoInicial().fichas,
    dinero: parseInt(localStorage.getItem("dinero")) || estadoInicial().dinero,
    historial: JSON.parse(localStorage.getItem("historial")) || estadoInicial().historial,
    respuestasTexto: JSON.parse(localStorage.getItem("respuestasTexto"))
  };
};

function App() {
  const [estado, setEstado] = useState(cargarEstado());

  const { escena, inventario, puntos, fichas, dinero, historial } = estado;

  useEffect(() => {
    localStorage.setItem("escena", escena);
    localStorage.setItem("inventario", JSON.stringify(inventario));
    localStorage.setItem("puntos", puntos.toString());
    localStorage.setItem("dinero", dinero.toString());
    localStorage.setItem("fichas", fichas.toString());
    localStorage.setItem("historial", JSON.stringify(historial));
  }, [estado]);

const avanzar = (destino = null, puntos = 0, dinero = 0, fichas = 0) => {
  setEstado((prev) => {
    const nuevoHistorial = [...prev.historial, prev.escena];
    const nuevoEstado = {
      ...prev,
      escena: destino || prev.escena,
      puntos: prev.puntos + puntos,
      dinero: prev.dinero + dinero,
      fichas: Math.max((prev.fichas || 0) + fichas, 0),
      historial: nuevoHistorial
    };

    // Guardar los cambios por separado en localStorage
    localStorage.setItem("escena", nuevoEstado.escena);
    localStorage.setItem("puntos", nuevoEstado.puntos.toString());
    localStorage.setItem("dinero", nuevoEstado.dinero.toString());
    localStorage.setItem("fichas", nuevoEstado.fichas.toString());
    localStorage.setItem("historial", JSON.stringify(nuevoEstado.historial));

    return nuevoEstado;
  });
};



  const volver = () => {
    setEstado((prev) => {
      const nuevoHistorial = [...prev.historial];
      const ultimaEscena = nuevoHistorial.pop();
      return {
        ...prev,
        escena: ultimaEscena || "inicio",
        historial: nuevoHistorial
      };
    });
  };

const elegirObjeto = (objeto, costo = 0) => {
  if (estado.dinero < costo) {
    alert("No tenés suficiente dinero para comprar este objeto.");
    return;
  }
  if (estado.inventario.includes(objeto)) {
    // Ya tenés este objeto, no lo agregues de nuevo
    return;
  }
  const siguiente = escenas[estado.escena].siguiente;
  setEstado(prev => ({
    ...prev,
    inventario: [...prev.inventario, objeto],
    dinero: prev.dinero - costo,
    escena: siguiente,
    historial: [...prev.historial, prev.escena]
  }));
};

  const actualizarEscena = (nuevaEscena) => {
    setEstado((prev) => ({ ...prev, escena: nuevaEscena }));
  };

  const guardarRespuestaTexto = (clave, texto) => {
  const nuevasRespuestas = { ...estado.respuestasTexto, [clave]: texto };
  setEstado((prev) => ({ ...prev, respuestasTexto: nuevasRespuestas }));
  localStorage.setItem("respuestasTexto", JSON.stringify(nuevasRespuestas));
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
  escena={{
    ...escenas[estado.escena],
    volver: estado.historial.length > 0 ? volver : null,
    inventario: estado.inventario
  }}
  avanzar={avanzar}
  elegirObjeto={elegirObjeto}
  actualizarEscena={actualizarEscena}
  guardarRespuesta={guardarRespuestaTexto}
/>


      <button onClick={reiniciarJuego} style={{ marginTop: 20 }}>Reiniciar juego</button>
    </div>
  );
}

export default App;
