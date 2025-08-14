// src/components/Inventario.jsx
import React, { useState } from "react";
import "./inventarioPanel.css";

function Inventario({ inventario }) {
  const [abierto, setAbierto] = useState(false);

  if (!inventario || inventario.length === 0) {
    // Igual mostramos la pestaña "Objetos" (vacío), para consistencia
  }

  return (
    <div className={`inv-wrapper ${abierto ? "abierto" : ""}`}>
      <button
        className="inv-tab"
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        aria-controls="inv-panel"
        title="Abrir inventario"
      >
        Objetos
      </button>

      <div id="inv-panel" className="inv-panel">
        {(!inventario || inventario.length === 0) ? (
          <div className="inv-empty">Sin objetos</div>
        ) : (
          <ul className="inv-lista">
            {inventario.map((item, i) => (
              <li key={i} className="inv-item">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Inventario;
