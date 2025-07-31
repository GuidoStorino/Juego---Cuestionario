import React, { useEffect, useState } from "react";

const SalaEscapeBar = ({ volverAlBar, reiniciarJuego, ganarJuego }) => {
  const [tiempo, setTiempo] = useState(1500); // 30 minutos
  const [estadoJuego, setEstadoJuego] = useState("jugando");
  const [mostrarModalCaja, setMostrarModalCaja] = useState(false);
  const [mostrarModalLuz, setMostrarModalLuz] = useState(false);
  const [inputCodigo, setInputCodigo] = useState("");
  const [cajaAbierta, setCajaAbierta] = useState(false);
  const [luzPrendida, setLuzPrendida] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState(null);
  const [llaveTomada, setLlaveTomada] = useState(false);


  const codigoCorrectoCaja = "1234";
  const codigoCorrectoLuz = "4321";

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
    setMostrarModalCaja(true);
  };

    const abrirModalLuz = () => {
    setInputCodigo("");
    setMostrarModalLuz(true);
  };

  const validarCodigoCaja = () => {
    if (inputCodigo === codigoCorrectoCaja) {
      mostrarMensaje("¡La caja se abre! Encontrás una llave oxidada 🔑.");
      setCajaAbierta(true);
      setMostrarModalCaja(false);
    } else {
      mostrarMensaje("Código incorrecto. La caja permanece cerrada.");
      setInputCodigo("");
    }
  };

    const validarCodigoLuz = () => {
    if (inputCodigo === codigoCorrectoLuz) {
      mostrarMensaje("¡Se prendió la luz!");
      setLuzPrendida(true);
      setMostrarModalLuz(false);
    } else {
      mostrarMensaje("Código incorrecto. La luz permanece apagada.");
      setInputCodigo("");
    }
  };

  const reiniciarJuegoInternamente = () => {
    setTiempo(1800);
    setEstadoJuego("jugando");
    setCajaAbierta(false);
    setLuzPrendida(false);
    setMostrarModalCaja(false);
    setMostrarModalLuz(false);
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
        <button onClick={() => mostrarMensaje(<p style={{ whiteSpace: "pre-line" }}>
  {"imagen"}
</p>
)}>
          Pintura
        </button>

        <button onClick={() => mostrarMensaje(
  <img
    src="/images/pinturaSalaBar.png"
    alt="Pintura misteriosa"
    style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }}
  />
)}>
  🖼️ Pintura
</button>

        <button onClick={() => mostrarMensaje(<p  style={{ whiteSpace: "pre-line" }}> {"Cerveza: $0,90 \n Vino: $1,60 \n Hidromiel: $1,40 \n Whisky: $4,35 \n Ginebra: $6 \n Vermut: $2,50 \n Agua: $0,50 \n Gaseosa: $1"} </p>)}>
          🗒️ Libreta de precios
        </button>

        <button onClick={() => mostrarMensaje(<p className="texto-manuscrito" style={{ whiteSpace: "pre-line" }}> {"Mucha suerte, Esteban, todo va a salir espectacular. Tan espectacular como todo lo que tomé esta noche. ¡Un fiestón! Lo mejor de todo, el whisky y la ginebra. ¡Eso sí te va a traer mucha luz! \n Rober \n \n Felicitaciones, mi querido Esteban, por abrir tu segundo bar. \n ¡Esta vez escribo sin códigos! Sólo un pequeño texto, línea tras línea, para celebrar el gran logro de un amigo. Dolores."} </p>)}>
          📓 Cuaderno
        </button>

        

        

        <button onClick={abrirModalLuz}>
          💡 Tablero de luz
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

{luzPrendida && !llaveTomada && (
  <>
  <button onClick={abrirModalCaja}>
          🔒 Armario
        </button>

        <button onClick={() => mostrarMensaje(<p className="texto-manuscrito" style={{ whiteSpace: "pre-line", textAlign: "right" }}>
  {"Querido Esteban:\n  Esta pintura ha sido de mis favoritas des- \n de que era una niña y sobre todo lo fue des-\n pués de encontrar una fascinación absoluta- \n por su pintor, su mirada sobre los paisajes y su \n  mente adictiva por los trazos claros y los enig- \n  máticos movimientos del pincel sobre las al- \n mas, que si mirás aparecen por todo el cuadro. \n  No se necesita más que observar el árbol. \n Te digo, si bien hoy me encuentro atraída por \n tu próxima inauguración del bar y en ver \n cómo se forman a través de colores y ho- \n menajes a los que aprecio más que todas mis alha\n jas, el primero en llamar mi atención fue el pa-\n sado, donde acabé pasando un tan hermoso ra- \n to sobre el lago. Y debo admitir que me costó des- \n pertarme al día siguiente, no sé qué harás para \n cubrir el tercero. Pero eso te lo dejo a vos. \n\n Te quiere, \n Dolores"}
</p>)}>
          ✉ Sobre
        </button> 

        </>
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
      {mostrarModalCaja && (
        <div className="modal">
          <div className="modal-contenido">
            <h3>🔒 Ingresá el código</h3>
            <input
              type="text"
              value={inputCodigo}
              onChange={(e) => setInputCodigo(e.target.value)}
              placeholder="Código"
            />
            <div>
              <button onClick={validarCodigoCaja}>Aceptar</button>
              <button onClick={() => setMostrarModalCaja(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

       {mostrarModalLuz && (
        <div className="modal">
          <div className="modal-contenido">
            <h3>💡 Ingresá el código</h3>
            <input
              type="text"
              value={inputCodigo}
              onChange={(e) => setInputCodigo(e.target.value)}
              placeholder="Código"
            />
            <div>
              <button onClick={validarCodigoLuz}>Aceptar</button>
              <button onClick={() => setMostrarModalLuz(false)}>Cancelar</button>
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
