// src/components/Escena.jsx
import React, { useState } from "react";
import EscenaCasino from "./EscenaCasino";
import AlertaModal from "./AlertaModal";
import LagoJuego from "./LagoJuego";
import SalaEscapeBar from "./SalaEscapeBar";
import CabanaJuego from "./CabanaJuego";
import TorneoImagenes from "./TorneoImagenes";
import ZodiacoJuego from "./ZodiacoJuego";
import CuentaRegresiva from "./CuentaRegresiva";
import './escape_policia.css';
import SalaEscape from "./SalaEscape";
import { SirenasMelodia } from "./SirenasMelodia";
import SopaDePalabras from "./SopaDePalabras";
import "../data/bosque.css"

function Escena({ escena, avanzar, elegirObjeto, actualizarEscena, guardarRespuesta }) {
  const [input, setInput] = useState("");
  const [alerta, setAlerta] = useState(null);
  const [inputCodigo, setInputCodigo] = useState("");
  const [codigosValidos, setCodigosValidos] = useState({}); // Estado para códigos válidos

  const escenasMisteriosas = [
    "crimenauto",
    "codigo_celular",
    "casa_victima",
    "crimen_resuelto",
    "celular_pablo",
    "casa_fiesta",
    "almacen_don_ernesto",
    "casa_amigo",
    "guantera"
  ];

  const escenasConCuentaRegresiva = [
    "escape_policia",
    "policia_2",
    "policia_3",
    "policia_4",
    "policia_5"
  ];

  const escenasPoliciales = [
    "escape_policia",
    "policia_2",
    "policia_3",
    "policia_4",
    "policia_5",
  ];

  const duendeTesoro = [
    "duende_tesoro",
    "duende_2",
    "duende_3",
    "duende_4",
    "duende_5"
  ];

  const mostrarCuentaRegresiva = escenasConCuentaRegresiva.includes(escena.id);
  const esEscenaPolicial = escenasPoliciales.includes(escena.id);
  const esDuendeTesoro = duendeTesoro.includes(escena.id);
  const esEscenaMisteriosa = escenasMisteriosas.includes(escena.id);
  

  const emojisPorObjeto = {
    "Sal": "🧂",
    "Llave": "🔑",
    "Cuchillo": "🔪",
    "Vino": "🍷",
    "Fuego": "🔥",
    "Espada": "⚔️",
    "Botella": "🍾",
    "Cámara": "📷",
    "Libro antiguo": "📖",
    "Hongo": "🍄",
    "Flor Violeta": "🪻",
    "Flor Roja": "🌹",
    "Hierbas Azules": "🍃🔵",
    "Hierbas Doradas": "🍂",
    "Hierbas Verdes": "🌿",
    "Hierbas Rojas": "🥀",
    "Aries": "♈",
    "Tauro": "♉",
    "Géminis": "♊",
    "Cáncer": "♋",
    "Leo": "♌",
    "Virgo": "♍",
    "Libra": "♎",
    "Escorpio": "♏",
    "Sagitario": "♐",
    "Capricornio": "♑",
    "Acuario": "♒",
    "Piscis": "♓",
    "Piedra de Cuarzo rosa": "🔺",
    "Piedra Zafiro": "🔹",
    "Poción Suerte": "🧪",
    "Espejo Mágico": "🪞",
    "Agua del Bosque": "🫙",
    "Piedra Zodiacal": "🪨",
    "Incienso Aromático": "♨️",
    "Sangre de Unicornio": "🦄",
    "Linterna": "🔦",
    "Instrumento": "🎻",
    "Free Pass": "🎟️",
    "Celular": "📱",
    "Hueso animal": "🦴"

  };

  const idEscena = escena.id || escena.nombre || escena.texto; // Identificador único
  const codigoValido = codigosValidos[idEscena];

  // Función para manejar el texto libre
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

  // Escenas especiales - devolver directamente el componente correspondiente
  if (escena.tipo === "casino") {
    return <EscenaCasino escena={escena} avanzar={avanzar} elegirObjeto={elegirObjeto}
  dinero={escena.estado.dinero} />;
  }



  if (escena.tipo === "aviso") {
    return (
      <div
        style={{
          backgroundColor: "#111",
          color: "white",
          padding: 32,
          textAlign: "center",
          borderRadius: 8,
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          maxWidth: 600,
          margin: "0 auto",
          marginTop: 40
        }}
      >
        <img
          src="/advertencia_18.png"
          alt="18+"
          style={{ width: 80, marginBottom: 16 }}
        />

        <h2 style={{ marginBottom: 24 }}>{escena.texto}</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
        
  {escena.opciones.map((opcion, index) => (
    <button
      key={index}
      onClick={() => {
        if (opcion.objeto) { // si la opción implica comprar un objeto
          if (escena.estado.dinero >= (opcion.costo || 0)) {
            escena.elegirObjeto(opcion.objeto, opcion.costo || 0);
            if (opcion.destino) escena.actualizarEscena(opcion.destino);
          } else {
            alert("No tenés suficiente dinero para comprar este objeto.");
          }
        } else {
          // si no es compra, solo avanza
          if (opcion.destino) escena.actualizarEscena(opcion.destino);
        }
      }}
      disabled={opcion.costo ? escena.estado.dinero < opcion.costo : false}
      style={{
        padding: "12px 24px",
        fontSize: "1.1em",
        backgroundColor: "#d50000",
        color: "white",
        border: "none",
        borderRadius: 4,
        cursor: "pointer",
        minWidth: 120,
      }}
    >
      {opcion.texto}
    </button>
  ))}
</div>


      </div>
    );
  }

   
  if (escena.tipo === "sala_escape") {
    return <SalaEscape volverAlJuegoPrincipal={() => avanzar("bar")} />;
  }

  if (escena.tipo === "sirenas_melodia") {
    return <SirenasMelodia actualizarEscena={avanzar} />;
  }

  if (escena.id === "sala_prop_bar") {
    return (
      <SalaEscapeBar
        volverAlBar={() => avanzar("bar")}
        reiniciarJuego={() => avanzar("sala_prop_bar")}
        ganarJuego={() => avanzar("ganaste_escape")}
      />
    );
  }

  if (escena.id === "lago_juego") {
    return (
      <LagoJuego 
        cambiarEscena={() => avanzar("bosque_intro")}
        />
    );
  }

  if (escena.id === "test_vino") {
    return (
      <TorneoImagenes
        actualizarEscena={avanzar}
        volverAlBar={() => avanzar("bar")}
      />
    );
  }

  if (escena.id === "hippiebosque") {
    return (
      <ZodiacoJuego
      cambiarEscena={() => avanzar('bosque_intro')}
        elegirObjeto={elegirObjeto}
        ganarJuego={() => avanzar("ganaste_escape")}
      />
    );
  }

  if (escena.id === "cabana_juego") {
    return (
      <CabanaJuego
        volverAlBar={() => avanzar("bar")}
        reiniciarJuego={() => avanzar("sala_prop_bar")}
        ganarJuego={() => avanzar("ganaste_escape")}
      />
    );
  }

  if (escena.id === "super_sopa") {
    return (
      <SopaDePalabras
        actualizarEscena={avanzar}
      />
    );
  }


  // Opciones a mostrar según código válido o normales
  const opcionesParaMostrar = (codigoValido ? escena.desbloquea : escena.opciones) || [];

  // Detectar si alguna opción tiene imagen => usamos grid 2x2
  const tieneImagenes = opcionesParaMostrar.some(op => !!op.imagen);

  // Contenedor: si es duende tesoro mantenemos el estilo anterior (flex wrap),
  // si tiene imágenes usamos grid 2x2, si no usamos el estilo por defecto (lista)
  const contenedorStyle = esDuendeTesoro
    ? { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }
    : (tieneImagenes
      ? { display: "grid", gridTemplateColumns: "repeat(2, minmax(140px, 1fr))", gap: "12px", justifyItems: "center", alignItems: "start", width: "100%" }
      : {});
      

  return (
    <div className={`${esEscenaMisteriosa ? "escena-misterio" : ""} ${esEscenaPolicial ? "escena-policial" : ""}`}>
      <p
        style={
          escena.final
            ? { textAlign: "center", padding: 20, animation: "fadeIn 2s" }
            : escena.inicio
            ? { background: "center", padding: 20, animation: "introZoom 1.5s ease-out" }
            : {}
        }
        
      >
        {typeof escena.texto === "function" ? escena.texto(escena.estado || {}) : escena.texto}
      </p>

      {escena.requiereCodigo && !codigoValido && (
        <div>
          <p></p>
          <input
            type="text"
            value={inputCodigo}
            onChange={(e) => setInputCodigo(e.target.value)}
          />
          <button
            onClick={() => {
              const esCodigoCorrecto = Array.isArray(escena.codigoCorrecto)
                ? escena.codigoCorrecto.includes(inputCodigo)
                : inputCodigo === escena.codigoCorrecto;

              if (esCodigoCorrecto) {
                setCodigosValidos((prev) => ({ ...prev, [idEscena]: true }));
                setAlerta("✅ Código correcto. Opciones desbloqueadas.");
              } else {
                setAlerta("❌ Código incorrecto.");
              }
            }}
          >
            Verificar
          </button>
        </div>
      )}

      {opcionesParaMostrar.length > 0 && (
        <div className={esEscenaPolicial ? "botones-policiales" : ""} style={contenedorStyle}>
          {esEscenaPolicial && (
            <div className="sirena">
              <div className="rojo"></div>
              <div className="azul"></div>
            </div>
          )}

          {opcionesParaMostrar.map((op, i) => {
            const requiere = op.requiere;
            const tieneRequisito = !requiere || (escena.inventario && escena.inventario.includes(requiere));

            // Styles por opción: si hay imágenes usamos un estilo compacto para cada celda
            const botonBaseStyle = esDuendeTesoro
              ? {
                  minWidth: "120px",
                  maxWidth: "140px",
                  margin: "1px",
                  whiteSpace: "normal",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 0,
                  borderRadius: 0,
                  border: "none",
                  background: "none",
                  color: "inherit",
                  cursor: "pointer",
                }
              : {
                  display: "block",
                  margin: "8px 0",
                  border: "none",
                  background: "none",
                  padding: 0,
                  cursor: "pointer",
                };

            // Si estamos en modo grid (tieneImagenes), adaptamos el botón para centrar contenido
            const botonGridExtra = tieneImagenes
              ? {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "0px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  minHeight: "120px",
                  width: "100%",
                }
              : {};

            const botonStyleFinal = { ...botonBaseStyle, ...botonGridExtra };

            return (
              <button
                key={i}
                onClick={() => {
                  if (requiere && !tieneRequisito) {
                    const emoji = emojisPorObjeto[requiere] || "⚠️";
                    setAlerta(`${emoji} Necesitás ${requiere} para hacer esto.`);
                    return;
                  }
                  if (op.mensaje) setAlerta(op.mensaje);
                  if (op.objeto) elegirObjeto(op.objeto);
                  avanzar(op.destino, op.puntos || 0, op.dinero || 0, op.fichas || 0, op.personalidad, op.resetPerfil);
                }}
                style={botonStyleFinal}
              >

                {op.imagen ? (
                  <img
                    src={op.imagen}
                    alt={op.texto}
                    style={{
                      width: "250px",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "4px",
                      marginBottom: "2px",
                      display: "block",
                    }}
                  />
                ) : null}

                {/* Texto debajo de la imagen (si la hay) o como contenido del botón */}
                <div style={{ textAlign: "center", fontSize:  22}}>
                  {op.texto}
                </div>
              </button>
            );
          })}
        </div>
      )}

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

      {/* Entrada de texto libre */}
      {escena.textoLibre && (
        <div style={{ marginTop: 16 }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribí tu respuesta..."
            style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                manejarTextoLibre();
              }
            }}
          />
          <button onClick={manejarTextoLibre} style={{ marginTop: 8 }}>Enviar</button>
        </div>
      )}

      {escena.volver && (
        <button className="btn-secundario btn-volver" onClick={escena.volver} style={{ marginTop: "16px" }}>
          Quiero volver sobre mis pasos
        </button>
      )}

      {alerta && <AlertaModal mensaje={alerta} cerrar={() => setAlerta(null)} />}

      {mostrarCuentaRegresiva && (
        <CuentaRegresiva
          segundosInicio={30}
          onTiempoTerminado={() => avanzar("perder_juego_policia")}
        />
      )}
    </div>
  );
}

export default Escena;
