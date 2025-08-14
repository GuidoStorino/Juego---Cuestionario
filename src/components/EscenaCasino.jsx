// src/components/EscenaCasino.jsx
import React, { useState } from "react";
import Ruleta from "./Ruleta";

function EscenaCasino({ escena, avanzar, elegirObjeto, dinero }) {
  const [apuesta, setApuesta] = useState("");
  const [resultadoRuleta, setResultadoRuleta] = useState(null);
  const [girando, setGirando] = useState(false);

const manejarApuesta = () => {
  if ((escena.estado?.fichas || 0) < 1) {
    alert("No tenés fichas para apostar.");
    return;
  }

  const numeroApostado = parseInt(apuesta);
  if (isNaN(numeroApostado) || numeroApostado < 1 || numeroApostado > 5) {
    alert("Ingresá un número entre 1 y 5");
    return;
  }

  const resultado = Math.floor(Math.random() * 5) + 1;
  setGirando(true);
  setResultadoRuleta(resultado);

  setTimeout(() => {
    setGirando(false);
    if (resultado === numeroApostado) {
      avanzar(null, 0, 0, 2); // gana 2 fichas
    } else {
      avanzar(null, 0, 0, -1); // pierde 1 ficha
    }
  }, 3000);
};


  return (
    <div>
      <p>{escena.texto}</p>

      <div style={{ marginBottom: 16 }}>
        <p>¿Querés comprar fichas por $10 cada una?</p>
        <button onClick={() => elegirObjeto("", 10, 1)}>
  Comprar 1 ficha
</button>
      </div>

      <div>
        <p>Elegí un número del 1 al 5 para apostar 1 ficha:</p>
        <input
          type="number"
          value={apuesta}
          onChange={(e) => setApuesta(e.target.value)}
          placeholder="Número del 1 al 5"
          min={1}
          max={5}
          style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
        />
        <button onClick={manejarApuesta} style={{ marginTop: 8 }}>Apostar</button>

{resultadoRuleta !== null && (
  <div style={{ marginTop: 16 }}>
    <Ruleta numeroGanador={resultadoRuleta} girando={girando} />
    {!girando && <p>La ruleta cayó en: {resultadoRuleta}</p>}
  </div>
)}

      </div>



      {escena.volver && (
        <button onClick={escena.volver} style={{ marginTop: "16px" }}>
          Quiero volver sobre mis pasos
        </button>
      )}
    </div>
  );
}





export default EscenaCasino;