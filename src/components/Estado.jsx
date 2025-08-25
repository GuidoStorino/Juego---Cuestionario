// src/components/Estado.jsx
import React from "react";
import "./inventarioPanel.css";

function Estado({ puntos = 0, dinero = 0, fichas = 0 }) {
  return (
    <div className="hud-estado">
      <span className="chip">⭐ {puntos}</span>
      <span className="chip">💰 {dinero}</span>
      <span className="chip">🧿 {fichas}</span>
    </div>
  );
}

export default Estado;
