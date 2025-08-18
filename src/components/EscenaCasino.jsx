// src/components/EscenaCasino.jsx
import React, { useState, useEffect } from "react";
import Ruleta from "./Ruleta";

function EscenaCasino({
  escena,
  dinero = 0,
  fichas = 0,
  inventario = [],
  onChangeDinero = () => {},
  onChangeFichas = () => {},
  elegirObjeto
}) {
  const [apuesta, setApuesta] = useState("");
  const [resultadoRuleta, setResultadoRuleta] = useState(null);
  const [girando, setGirando] = useState(false);
  const [warnMissingCallbacks, setWarnMissingCallbacks] = useState(false);
  const tienePocionSuerte = inventario.includes("Poción Suerte");


  const DURACION_RUEDA = 3000;
  const GANANCIA_POR_ACIERTO = 30;
  const PRECIO_FICHA = 10;

  // Detectar si faltan callbacks
  useEffect(() => {
    const missing = (typeof onChangeDinero !== "function") || (typeof onChangeFichas !== "function");
    setWarnMissingCallbacks(missing);
  }, [onChangeDinero, onChangeFichas]);

  // Comprar ficha sin afectar inventario ni escena
  const comprarFicha = (cantidad = 1) => {
    if (dinero < PRECIO_FICHA * cantidad) {
      alert("No tenés suficiente dinero para comprar fichas.");
      return;
    }
    onChangeDinero(-PRECIO_FICHA * cantidad);
    onChangeFichas(cantidad);
  };


const manejarApuesta = () => {
  if (girando) return;
  if (fichas < 1) {
    alert("No tenés fichas para apostar.");
    return;
  }

  const numeroApostado = parseInt(apuesta, 10);
  if (isNaN(numeroApostado) || numeroApostado < 1 || numeroApostado > 5) {
    alert("Ingresá un número entre 1 y 5");
    return;
  }

  onChangeFichas(-1);

  const PROB_POCION_SUERTE = 0.9; // 90% de chance de acertar con la poción
  let resultado;

  if (tienePocionSuerte) {
    if (Math.random() < PROB_POCION_SUERTE) {
      resultado = numeroApostado; // gana
    } else {
      const otros = [1,2,3,4,5].filter(n => n !== numeroApostado);
      resultado = otros[Math.floor(Math.random() * otros.length)];
    }
  } else {
    resultado = Math.floor(Math.random() * 5) + 1;
  }

  setResultadoRuleta(resultado);
  setGirando(true);

  setTimeout(() => {
    setGirando(false);
    if (resultado === numeroApostado) {
      onChangeDinero(GANANCIA_POR_ACIERTO);
      alert(`¡Ganaste! Sumaste $${GANANCIA_POR_ACIERTO}`);
    } else {
      alert(`Perdiste. La ruleta cayó en ${resultado}`);
    }
    setApuesta("");
  }, DURACION_RUEDA + 80);
};


  return (
    <div>
      {warnMissingCallbacks && (
        <div style={{ background: "#fff4e5", padding: 8, borderRadius: 6, marginBottom: 10 }}>
          <strong>Atención:</strong> falta onChangeDinero y/o onChangeFichas en el componente padre.
        </div>
      )}

      <p>{escena?.texto}</p>

      <div style={{ marginBottom: 16 }}>
        <p>Fichas disponibles: {fichas}</p>
        <button onClick={() => comprarFicha(1)}>Comprar 1 ficha por ${PRECIO_FICHA}</button>
      </div>

      <div>
        <p>Elegí un número del 1 al 5 y apostá 1 ficha:</p>
        <input
          type="number"
          value={apuesta}
          onChange={(e) => setApuesta(e.target.value)}
          placeholder="Número del 1 al 5"
          min={1}
          max={5}
          style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
          disabled={girando}
        />
        <button onClick={manejarApuesta} style={{ marginTop: 8 }} disabled={girando}>
          {girando ? "Girando..." : "Apostar 1 ficha"}
        </button>

        {resultadoRuleta !== null && (
          <div style={{ marginTop: 16 }}>
            <Ruleta numeroGanador={resultadoRuleta} girando={girando} />
            {!girando && <p>La ruleta cayó en: {resultadoRuleta}</p>}
          </div>
        )}
      </div>

      {escena?.volver && (
        <button onClick={escena.volver} style={{ marginTop: "16px" }}>
          Quiero volver sobre mis pasos
        </button>
      )}
    </div>
  );
}

export default EscenaCasino;
