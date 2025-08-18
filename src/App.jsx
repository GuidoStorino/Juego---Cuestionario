// src/App.jsx
import "./App.css";
import { useState, useEffect } from "react";
import { escenas } from "./data/escenas";
import Escena from "./components/Escena";
import Inventario from "./components/Inventario";
import Estado from "./components/Estado";

  const emojisPorObjeto = {
    "Sal": "🧂",
    "Llave": "🔑",
    "Cuchillo": "🔪",
    "Vino": "🍷",
    "Fuego": "🔥",
    "Espada": "⚔️",
    "Botella": "🍾",
    "Cámara": "📷",
    "Libro antiguo": "📖",
    "Hongo": "🍄",
    "Hierbas Azules": "🍃🔵",
    "Hierbas Doradas": "🍂",
    "Hierbas Verdes": "🌿",
    "Hierbas Rojas": "🥀",
    "Aries": "♈",
    "Tauro": "♉",
    "Géminis": "♊",
    "Cáncer": "♋",
    "Leo": "♌",
    "Virgo": "♍",
    "Libra": "♎",
    "Escorpio": "♏",
    "Sagitario": "♐",
    "Capricornio": "♑",
    "Acuario": "♒",
    "Piscis": "♓",
    "Piedra de Cuarzo rosa": "🔺"
  };

const estadoInicial = () => ({
  escena: "inicio",
  inventario: [],
  puntos: 0,
  dinero: 50,
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

  const avanzar = (destino = null, puntos = 0, dinero = 0, fichas = 0, personalidad = null, resetPerfil = false) => {
    setEstado((prev) => {
      const nuevoHistorial = [...prev.historial, prev.escena];
      const nuevoPerfil = resetPerfil ? {} : { ...(prev.perfilPersonalidad || {}) };
      if (personalidad) {
        nuevoPerfil[personalidad] = (nuevoPerfil[personalidad] || 0) + 1;
      }
      const nuevoEstado = {
        ...prev,
        escena: destino || prev.escena,
        puntos: prev.puntos + puntos,
        dinero: prev.dinero + dinero,
        fichas: Math.max((prev.fichas || 0) + fichas, 0),
        historial: nuevoHistorial,
        perfilPersonalidad: nuevoPerfil
      };
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

const elegirObjeto = (objeto, costo = 0, cantidadFichas = 0) => {
  setEstado((prev) => {
    // Validar dinero
    if (prev.dinero < costo) {
      alert("No tenés suficiente dinero para comprar este objeto.");
      return prev; // retorna el estado sin cambios
    }

    // Evitar duplicar el objeto en inventario si no es fichas
    const nuevoInventario =
      cantidadFichas === 0 && prev.inventario.includes(objeto)
        ? prev.inventario
        : cantidadFichas === 0
        ? [...prev.inventario, objeto]
        : prev.inventario;

    return {
      ...prev,
      inventario: nuevoInventario,
      dinero: prev.dinero - costo,
      fichas: prev.fichas + cantidadFichas,
    };
  });
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "m") {
        e.preventDefault();
        const destino = prompt("¿Clave?");
        if (destino && escenas[destino]) {
          setEstado((prev) => ({
            ...prev,
            escena: destino,
            historial: [...prev.historial, prev.escena],
          }));
        } else {
          alert("Esa escena no existe.");
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: 20 }}>
      {/* HUD compacto */}
      <Estado puntos={puntos} dinero={dinero} fichas={fichas} />
      <Inventario inventario={inventario} />

<Escena
  escena={{
    ...escenas[estado.escena],
    volver: estado.historial.length > 0 ? volver : null,
    inventario: estado.inventario,
    estado: estado,
  }}
  avanzar={avanzar}
  elegirObjeto={(objeto, costo = 0, cantidadFichas = 0) => {
    setEstado((prev) => {
      if (prev.dinero < costo) {
        alert("No tenés suficiente dinero para comprar este objeto.");
        return prev;
      }

      const nuevoInventario = prev.inventario.includes(objeto)
        ? prev.inventario
        : [...prev.inventario, objeto];

      const siguiente = escenas[prev.escena]?.siguiente || prev.escena;

      return {
        ...prev,
        inventario: cantidadFichas === 0 ? nuevoInventario : prev.inventario,
        dinero: prev.dinero - costo,
        fichas: prev.fichas + cantidadFichas,
        escena: siguiente,
        historial: [...prev.historial, prev.escena],
      };
    });
  }}
  actualizarEscena={actualizarEscena}
  guardarRespuesta={guardarRespuestaTexto}
  dinero={estado.dinero}                      // 🔹 pasar dinero
  onChangeDinero={(delta) =>
    setEstado((prev) => ({ ...prev, dinero: Math.max(0, prev.dinero + delta) }))
  }
  fichas={estado.fichas}                      // 🔹 pasar fichas
  onChangeFichas={(delta) =>
    setEstado((prev) => ({ ...prev, fichas: Math.max(0, prev.fichas + delta) }))
  }
/>




      <button className="btn-reiniciar" onClick={reiniciarJuego} style={{ marginTop: 24 }}>
        Reiniciar juego
      </button>
    </div>
  );
}

export default App;
