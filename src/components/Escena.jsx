// src/components/Escena.jsx
import React, { useState } from "react";
import Ruleta from "./Ruleta"

function Escena({ escena, avanzar, elegirObjeto, actualizarEscena, guardarRespuesta }) {
  const [input, setInput] = useState("");
  const [apuesta, setApuesta] = useState("");
  const [resultadoRuleta, setResultadoRuleta] = useState(null);
  const [girando, setGirando] = useState(false);
  <div className={`escena-contenido ${escena.final ? "escena-final" : ""}`}>
  {/* contenido como antes */}
</div>


  const manejarTextoLibre = () => {
    if (escena.validarTexto && typeof escena.validarTexto === "function") {
      const resultado = escena.validarTexto(input);
      if (resultado) {
        if (resultado.guardar && guardarRespuesta) {
          guardarRespuesta(resultado.guardar.clave, resultado.guardar.valor);
        }
        if (resultado.destino) {
          avanzar(resultado.destino, resultado.puntos || 0, resultado.dinero || 0);
        }
      }
    }
  };

  const manejarApuesta = () => {
    const numeroApostado = parseInt(apuesta);
    if (isNaN(numeroApostado) || numeroApostado < 1 || numeroApostado > 5) {
      alert("Ingresá un número entre 1 y 5");
      return;
    }
    setGirando(true);
    const resultado = Math.floor(Math.random() * 5) + 1;
    setResultadoRuleta(null);
    setTimeout(() => {
      setResultadoRuleta(resultado);
      setGirando(false);
      if (resultado === numeroApostado) {
        avanzar(null, 0, 0, 2); // gana 2 fichas
      } else {
        avanzar(null, 0, 0, -1); // pierde 1 ficha
      }
    }, 3200); // duración del giro + 200ms buffer
  };

  if (escena.tipo === "casino") {
    return (
      <div>
        <p>{escena.texto}</p>

        <div style={{ marginBottom: 16 }}>
          <p>¿Querés comprar fichas por $10 cada una?</p>
          <button onClick={() => avanzar(null, 0, -10, 1)}>Comprar 1 ficha</button>
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
            disabled={girando}
          />
          <button onClick={manejarApuesta} disabled={girando}>
            Apostar
          </button>
        </div>

        <Ruleta numeroGanador={resultadoRuleta || 1} girando={girando} />

        {resultadoRuleta && !girando && (
          <p>
            {resultadoRuleta === parseInt(apuesta)
              ? "¡Ganaste 2 fichas! 🎉"
              : "Perdiste 1 ficha. Intenta de nuevo."}
          </p>
        )}

        {escena.volver && (
          <button onClick={escena.volver} style={{ marginTop: "16px" }} disabled={girando}>
            Quiero volver sobre mis pasos
          </button>
        )}
      </div>
    );
  }

  return (
    <div>
      <p>{escena.texto}</p>

      {escena.opciones && escena.opciones.map((op, i) => (
        <button
          key={i}
          onClick={() => avanzar(op.destino, op.puntos || 0, op.dinero || 0)}
          style={{ display: "block", margin: "8px 0", border: "none", background: "none", padding: 0, cursor: "pointer" }}
        >
          {op.imagen ? (
            <img
              src={op.imagen}
              alt={op.texto}
              style={{ width: "100%", maxWidth: 300, borderRadius: "8px" }}
            />
          ) : (
            op.texto
          )}
        </button>
      ))}

      {escena.objetos && escena.objetos.map((obj, i) => (
        <button
          key={i}
          onClick={() => elegirObjeto(obj.nombre)}
          style={{ display: "block", margin: "8px 0" }}
        >
          Tomar {obj.nombre}
        </button>
      ))}

      {escena.objetosComprar && escena.objetosComprar.map((obj, i) => (
        <button
          key={i}
          onClick={() => elegirObjeto(obj.nombre, obj.costo || 0)}
          style={{ display: "block", margin: "8px 0" }}
        >
          Comprar {obj.nombre} (${obj.costo || 0})
        </button>
      ))}

      {escena.textoLibre && (
        <div style={{ marginTop: 16 }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribí tu respuesta..."
            style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
          />
          <button onClick={manejarTextoLibre} style={{ marginTop: 8 }}>Enviar</button>
        </div>
      )}

      {escena.volver && (
        <button onClick={escena.volver} style={{ marginTop: "16px" }}>
          Quiero volver sobre mis pasos
        </button>
      )}
    </div>
  );

}

export default Escena;