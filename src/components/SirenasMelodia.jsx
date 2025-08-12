import React, { useState, useRef, useEffect } from "react";
import { Piano } from "./Piano";
import "./SirenasMelodia.css";

export function SirenasMelodia({ actualizarEscena }) {
  const [mensaje, setMensaje] = useState("");
  const [esCorrecta, setEsCorrecta] = useState(false);
  const [fase, setFase] = useState("juego"); // 🔹 Nueva variable de fase
  const [animando, setAnimando] = useState(false); // 🔹 Para el fade
  const pianoRef = useRef(null);
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const correctSequence = ["C", "D", "F", "E", "G", "A", "B"];

  const verificarMelodia = (melodiaUsuario) => {
    if (JSON.stringify(melodiaUsuario) === JSON.stringify(correctSequence)) {
      setEsCorrecta(true);
      setMensaje("");
      setAnimando(true); // empieza fade out
      setTimeout(() => {
        setFase("final"); // pasamos a pantalla final
        setAnimando(false); // fade in
      }, 500); // duración del fade
    } else {
      setEsCorrecta(false);
      setMensaje("Esa no es la melodía correcta...");
    }
  };

  // Drag logic
  const onMouseDown = (e) => {
    dragging.current = true;
    const rect = pianoRef.current.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!dragging.current) return;
    let newX = e.clientX - offset.current.x;
    let newY = e.clientY - offset.current.y;

    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    const elem = pianoRef.current;
    const elemWidth = elem.offsetWidth;
    const elemHeight = elem.offsetHeight;

    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX + elemWidth > winWidth) newX = winWidth - elemWidth;
    if (newY + elemHeight > winHeight) newY = winHeight - elemHeight;

    setPos({ x: newX, y: newY });
  };

  const onMouseUp = () => {
    dragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className={`sirenas-melodia-container ${animando ? "fade-out" : "fade-in"}`}
    >
      <div className="sirenas-background" />
      <div className="sirenas-content">
        {fase === "juego" ? (
          <>
            <div
              ref={pianoRef}
              className="movible-piano"
              onMouseDown={onMouseDown}
              style={{
                left: pos.x,
                top: pos.y,
                position: "absolute",
                cursor: dragging.current ? "grabbing" : "grab",
              }}
            >
              <Piano
                correctSequence={correctSequence}
                onMelodyComplete={verificarMelodia}
              />
            </div>
            {!esCorrecta && mensaje && <p className="mensaje">{mensaje}</p>}
          </>
        ) : (
          <div className="pantalla-final">
            <h2>Encontraste la melodía. Las sirenas están agradecidas y te regalan una piedra zafiro. 🧜‍♀️</h2>
            <button onClick={() => setFase("juego")}>Volver a jugar</button>
            <button onClick={() => actualizarEscena("sirenas_ganar")}>Avanzar</button>
          </div>
        )}
      </div>
    </div>
  );
}
