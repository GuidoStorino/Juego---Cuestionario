import React, { useEffect, useState } from "react";

const SalaEscapeBar = ({ volverAlBar, reiniciarJuego, ganarJuego }) => {
  const [tiempo, setTiempo] = useState(1800); // 30 minutos
  const [estadoJuego, setEstadoJuego] = useState("jugando");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [inputCodigo, setInputCodigo] = useState("");
  const [cajaAbierta, setCajaAbierta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState(null);
  const [llaveTomada, setLlaveTomada] = useState(false);


  const codigoCorrectoCaja = "1213";

  useEffect(() => {
    if (estadoJuego !== "jugando") return;

    const timer = setInterval(() => {
      setTiempo((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setEstadoJuego("perdido");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [estadoJuego]);

  const formatearTiempo = (segundos) => {
    const min = Math.floor(segundos / 60);
    const sec = segundos % 60;
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  const mostrarMensaje = (mensaje) => {
    setMensajeAlerta(mensaje);
  };

  const abrirModalCaja = () => {
    setInputCodigo("");
    setMostrarModal(true);
  };

  const validarCodigoCaja = () => {
    if (inputCodigo === codigoCorrectoCaja) {
      mostrarMensaje("¡La caja se abre! Encontrás una llave oxidada 🔑.");
      setCajaAbierta(true);
      setMostrarModal(false);
    } else {
      mostrarMensaje("Código incorrecto. La caja permanece cerrada.");
      setInputCodigo("");
    }
  };

  const reiniciarJuegoInternamente = () => {
    setTiempo(1800);
    setEstadoJuego("jugando");
    setCajaAbierta(false);
    setMostrarModal(false);
    setMensajeAlerta(null);
  };

  if (estadoJuego === "ganado") {
    return (
      <div className="sala-escape">
        <h2>¡Escapaste a tiempo!</h2>
        <button onClick={volverAlBar}>Volver al bar</button>
      </div>
    );
  }

  if (estadoJuego === "perdido") {
    return (
      <div className="sala-escape">
        <h2>⏰ GAME OVER</h2>
        <p>Se acabó el tiempo.</p>
        <button onClick={reiniciarJuegoInternamente}>Reintentar</button>
        <button onClick={volverAlBar}>Volver al bar</button>
      </div>
    );
  }

  return (
    <div className="sala-escape">
      <h2>Sala de Escape</h2>
      <p>Tiempo restante: {formatearTiempo(tiempo)}</p>
      <p>El fantasma del primer dueño del bar sigue aquí. ¡Salí antes de que te atrape!</p>

      <div className="objetos">
        <button onClick={() => mostrarMensaje("Es una pintura antigua")}>
          🖼️ Pintura
        </button>

        <button onClick={() => mostrarMensaje("Se puede romper si alguien se sienta.")}>
          🪑 Silla
        </button>

        <button onClick={() => mostrarMensaje("Contenido del sobre.")}>
          ✉ Sobre
        </button>

        <button onClick={abrirModalCaja}>
          📦 Caja
        </button>

        {/* Objeto visible solo si la caja fue abierta */}
{cajaAbierta && !llaveTomada && (
  <button onClick={() => {
    setLlaveTomada(true);
    mostrarMensaje("Tomaste la llave.");
  }}>
    🔑 Llave
  </button>
)}

<button onClick={() => {
  if (llaveTomada) {
    mostrarMensaje("La puerta se abre... ¡lograste escapar!");
    setEstadoJuego("ganado");
  } else {
    mostrarMensaje("Está cerrada con llave.");
  }
}}>
  🚪 Puerta
</button>



        
      </div>

      {/* Modal de código */}
      {mostrarModal && (
        <div className="modal">
          <div className="modal-contenido">
            <h3>📦 Ingresá el código</h3>
            <input
              type="text"
              value={inputCodigo}
              onChange={(e) => setInputCodigo(e.target.value)}
              placeholder="Código"
            />
            <div>
              <button onClick={validarCodigoCaja}>Aceptar</button>
              <button onClick={() => setMostrarModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de mensaje */}
      {mensajeAlerta && (
        <div className="modal">
          <div className="modal-contenido">
            <p>{mensajeAlerta}</p>
            <button onClick={() => setMensajeAlerta(null)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalaEscapeBar;
