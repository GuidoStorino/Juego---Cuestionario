import React, { useState } from "react";
import { Sobre } from "./Sobre";
import { Piano } from "./Piano";

const SalaEscape = ({ volverAlJuegoPrincipal }) => {
  const [habitacionActual, setHabitacionActual] = useState("principal");

  let contenidoHabitacion;

  switch (habitacionActual) {
    case "A":
      contenidoHabitacion = (
        <>
          <h2>Habitación A</h2>
          <div style={{ display: "flex", gap: "40px" }}>
            <Sobre />
            <Piano />
          </div>
        </>
      );
      break;

    case "B":
      contenidoHabitacion = (
        <>
          <h2>Habitación B</h2>
          <p>Objetos de la habitación B (próximamente).</p>
        </>
      );
      break;

    case "C":
      contenidoHabitacion = (
        <>
          <h2>Habitación C</h2>
          <p>Objetos de la habitación C (próximamente).</p>
        </>
      );
      break;

    case "D":
      contenidoHabitacion = (
        <>
          <h2>Habitación D</h2>
          <p>Objetos de la habitación D (próximamente).</p>
        </>
      );
      break;

    case "E":
      contenidoHabitacion = (
        <>
          <h2>Habitación E</h2>
          <p>Objetos de la habitación E (próximamente).</p>
        </>
      );
      break;

    case "principal":
    default:
      contenidoHabitacion = (
        <>
          <h2 style={{ textAlign: "center" }}>Sala Principal</h2>
          <p>Elegí una habitación para explorar:</p>
          <div style={{ width: 500, height: 500, border: "2px solid black", position: "relative", margin: "0 auto" }}>
            {["A", "B", "C", "D", "E"].map((id, index) => (
              <div
                key={id}
                onClick={() => setHabitacionActual(id)}
                style={{
                  width: "100px",
                  height: "100px",
                  background: "#eee",
                  border: "1px solid #999",
                  position: "absolute",
                  cursor: "pointer",
                  ...getPosition(index),
                }}
              >
                Hab. {id}
              </div>
            ))}
          </div>
        </>
      );
  }

  return (
    <div style={{ padding: "20px" }}>
      {contenidoHabitacion}
      {habitacionActual !== "principal" && (
        <button style={{ marginTop: "20px" }} onClick={() => setHabitacionActual("principal")}>
          Volver a la sala principal
        </button>
      )}
    </div>
  );
};

function getPosition(index) {
  const positions = [
    { top: 50, left: 50 },
    { top: 50, right: 50 },
    { bottom: 50, left: 50 },
    { bottom: 50, right: 50 },
    { top: 200, left: 200 }, // centro
  ];
  return positions[index];
}

export default SalaEscape;
