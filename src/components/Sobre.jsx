import React, { useState } from "react";

export function Sobre() {
  const [abierto, setAbierto] = useState(false);

  return (
    <div
      onClick={() => setAbierto(true)}
      style={{
        width: "100px",
        height: "70px",
        backgroundColor: "#f4e2d8",
        border: "2px solid #aaa",
        cursor: "pointer",
        textAlign: "center",
        padding: "10px",
      }}
    >
      {abierto ? (
        <div>
          <strong>Poema:</strong>
          <p style={{ fontStyle: "italic", fontSize: "0.9em" }}>
            Donde la luz se esconde al final,  
            una nota en silencio es vital.  
            El eco responde si sabés escuchar,  
            y la puerta se deja encontrar.
          </p>
        </div>
      ) : (
        <p>📩 Sobre</p>
      )}
    </div>
  );
}
