// src/components/EscenaCasino.jsx
import React, { useState } from "react";
import Ruleta from "./Ruleta";

function EscenaCasino({
  escena,
  avanzar,
  elegirObjeto,
  dinero,            // dinero actual
  onChangeDinero,    // función (delta) => void
  fichas,            // cantidad de fichas disponibles
  onChangeFichas     // función (delta) => void
}) {
  const [apuesta, setApuesta] = useState("");
  const [resultadoRuleta, setResultadoRuleta] = useState(null);
  const [girando, setGirando] = useState(false);

  const DURACION_RUEDA = 3000;       // duración animación ruleta
  const GANANCIA_POR_ACIERTO = 30;   // cuánto se suma al dinero si acierta

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

    // descontamos una ficha por la apuesta
    if (typeof onChangeFichas === "function") {
      onChangeFichas(-1);
    }

    // generamos el número ganador
    const resultado = Math.floor(Math.random() * 5) + 1;
    setResultadoRuleta(resultado);
    setGirando(true);

    setTimeout(() => {
      setGirando(false);

      if (resultado === numeroApostado) {
        if (typeof onChangeDinero === "function") {
          onChangeDinero(GANANCIA_POR_ACIERTO);
          alert(`¡Ganaste! Sumaste $${GANANCIA_POR_ACIERTO}`);
        }
      } else {
        alert(`Perdiste. La ruleta cayó en ${resultado}`);
      }
    }, DURACION_RUEDA + 80);
  };

  return (
    <div>
      <p>{escena?.texto}</p>

      <div style={{ marginBottom: 16 }}>
        <p>Fichas disponibles: {fichas}</p>
        <button
          onClick={() => {
            if (typeof elegirObjeto === "function") {
              elegirObjeto("Ficha", 10, 1); // compra de fichas
            }
          }}
        >
          Comprar 1 ficha por $10
        </button>
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
