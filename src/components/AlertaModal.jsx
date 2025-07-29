// src/components/AlertaModal.jsx
import React from "react";

function AlertaModal({ mensaje, cerrar }) {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000
    }}>
      <div style={{
        background: "#1e1e2f",
        color: "#fff",
        padding: "24px 32px",
        borderRadius: "12px",
        boxShadow: "0 0 20px rgba(0,0,0,0.4)",
        maxWidth: 400,
        textAlign: "center",
        fontFamily: "serif"
      }}>
        <p style={{ fontSize: "18px", marginBottom: "20px", whiteSpace: 'pre-line' }}>{mensaje}</p>
        <button onClick={cerrar} style={{
          background: "#ff4444",
          border: "none",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          OK
        </button>
      </div>
    </div>
  );
}

export default AlertaModal;
