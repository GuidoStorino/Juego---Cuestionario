import React, { useState, useEffect, useRef } from "react";
import './SopaDePalabras.css/'

export default function SopaDePalabras({actualizarEscena}) {
  const setsGuiones = ["_____ ____", "_____", "___"];
  const opciones = ["súpersopa", "súper", "sup"];
  const correctas = ["súpersopa", "súper", "sup"];

  const [indiceSet, setIndiceSet] = useState(() => Math.floor(Math.random() * setsGuiones.length));
  const [posX, setPosX] = useState(-200);
  const [jugando, setJugando] = useState(false);
  const [velocidad, setVelocidad] = useState(2);
  const [puntosAnimacion, setPuntosAnimacion] = useState(null);
  const audioRef = useRef(null);
  const animacionRef = useRef();

 const comenzarJuego = () => {
    setJugando(true);
    setVelocidad(2); // reiniciar velocidad al comenzar
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        alert("Por favor, haz click para activar el sonido.");
      });
    }
  };
  // Elegir índice aleatorio diferente del actual
  const nuevoIndiceAleatorio = (actual) => {
    let nuevo;
    do {
      nuevo = Math.floor(Math.random() * setsGuiones.length);
    } while (nuevo === actual);
    return nuevo;
  };

  // Mueve el set de guiones de izquierda a derecha
  useEffect(() => {
    if (!jugando) return;

    const mover = () => {
      setPosX((pos) => {
        if (pos > window.innerWidth + 200) {
          setIndiceSet((actual) => {
            // Al cambiar el set, aumento la velocidad
            setVelocidad((v) => Math.min(v + 1, 5.5)); // límite máximo de velocidad 20
            return nuevoIndiceAleatorio(actual);
          });
          return -300;
        }
        return pos + velocidad;
      });
      animacionRef.current = requestAnimationFrame(mover);
    };

    animacionRef.current = requestAnimationFrame(mover);

    return () => cancelAnimationFrame(animacionRef.current);
  }, [jugando, velocidad]);

  // Controla la duración del juego con la canción
  useEffect(() => {
    if (!jugando) return;

    const duracion = 60 * 1000; // 60 segundos para más sets
    const timeout = setTimeout(() => {
      setJugando(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }, duracion);

    return () => clearTimeout(timeout);
  }, [jugando]);

  // Maneja el click en las opciones
  const handleClick = (opcion) => {
    if (!jugando) return;

    if (opcion === correctas[indiceSet % correctas.length]) {
      setPuntosAnimacion({ texto: "+10 puntos", tipo: "positivo" });
    } else {
      setPuntosAnimacion({ texto: "-5 puntos", tipo: "negativo" });
    }

    setTimeout(() => {
      setPuntosAnimacion(null);
    }, 1500);
  };

  return (
    <div
      style={{
        position: "relative",
        height: 150,
        overflow: "hidden",
        border: "1px solid #ccc",
        padding: 20,
        fontFamily: "monospace",
        userSelect: "none",
        backgroundColor: "#fafafa",
      }}
    >
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/audio/2022/03/24/chillstep-ambient-6977.mp3"
        preload="auto"
      />

      {!jugando ? (
       <div style={{
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  gap: "12px", // espacio entre botones
  flexWrap: "wrap", // que bajen a la siguiente línea si no entran
  marginTop: 20,
}}>
  <button
    onClick={comenzarJuego}
    style={{
      fontSize: "1.1em",
      padding: "8px 16px",
      cursor: "pointer",
      borderRadius: 6,
      border: "none",
      backgroundColor: "#8854dbff",
      color: "white",
      boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
      minWidth: 140,
      flexGrow: 1,
      maxWidth: 200,
    }}
  >
    Comenzar Juego
  </button>

  <button
    onClick={() => actualizarEscena("bosque_intro")}
    style={{
      fontSize: "1.1em",
      padding: "8px 16px",
      cursor: "pointer",
      borderRadius: 6,
      border: "none",
      backgroundColor: "#145a23ff",
      color: "white",
      boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
      minWidth: 140,
      flexGrow: 1,
      maxWidth: 200,
    }}
  >
    Volver al Bosque
  </button>

  <button
    onClick={() => actualizarEscena("oler_flor")}
    style={{
      fontSize: "1.1em",
      padding: "8px 16px",
      cursor: "pointer",
      borderRadius: 6,
      border: "none",
      backgroundColor: "#a50707ff",
      color: "white",
      boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
      minWidth: 140,
      flexGrow: 1,
      maxWidth: 200,
    }}
  >
    Probar otra flor
  </button>
</div>
      ) : (
        <>
          <div
            style={{
              position: "absolute",
              left: posX,
              top: 50,
              fontSize: "2em",
              whiteSpace: "nowrap",
              userSelect: "none",
            }}
          >
            {setsGuiones[indiceSet]}
          </div>

          <div
            style={{
              marginTop: 80,
              display: "flex",
              justifyContent: "center",
              gap: 20,
              userSelect: "none",
            }}
          >
            {opciones.map((op, i) => (
              <button
                key={i}
                onClick={() => handleClick(op)}
                style={{
                  fontSize: "1.2em",
                  padding: "8px 16px",
                  cursor: "pointer",
                  borderRadius: 6,
                  border: "1px solid #333",
                  backgroundColor: "#fff",
                  userSelect: "none",
                }}
              >
                {op}
              </button>
            ))}
          </div>

          {puntosAnimacion && (
            <div
              className={`animacion-puntos ${puntosAnimacion.tipo}`}
              style={{
                position: "absolute",
                top: 30,
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "1.8em",
                fontWeight: "bold",
                pointerEvents: "none",
                animation: "subirYDesvanecer 1.5s forwards",
                color: puntosAnimacion.tipo === "positivo" ? "purple" : "red",
                textShadow: "0 0 5px black",
              }}
            >
              {puntosAnimacion.texto}
            </div>
          )}
        </>
      )}

      {!jugando && (
        <div
          style={{
            textAlign: "center",
            fontSize: "1.5em",
            color: "purple",
            marginTop: 20,
          }}
        >
          Súpersopa súpersopa. Sup... Sup...
        </div>
      )}
    </div>
  );
}
