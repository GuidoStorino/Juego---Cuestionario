// src/components/Escena.jsx
import React, { useState } from "react";
import EscenaCasino from "./EscenaCasino";
import AlertaModal from "./AlertaModal";
import LagoJuego from "./LagoJuego";
import SalaEscapeBar from "./SalaEscapeBar";
import CabanaJuego from "./CabanaJuego";
import TorneoImagenes from "./TorneoImagenes";
import ZodiacoJuego from "./ZodiacoJuego";


function Escena({ escena, avanzar, elegirObjeto, actualizarEscena, guardarRespuesta }) {
  const [input, setInput] = useState("");
  const [alerta, setAlerta] = useState(null);
  const [inputCodigo, setInputCodigo] = useState("");
  const [codigosValidos, setCodigosValidos] = useState({}); // ✅ estado por escena
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

  // agregá todos los IDs que pertenezcan al archivo crimenauto.js
];

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
  "Piscis": "♓"
};



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

  if (escena.tipo === "casino") {
    return <EscenaCasino escena={escena} avanzar={avanzar} />;

}

  

  const idEscena = escena.id || escena.nombre || escena.texto; // Usamos algún identificador único de la escena
  const codigoValido = codigosValidos[idEscena]; // ✅ específico para esta escena


  
  if (escena.id === "sala_prop_bar") {
  return (
    <SalaEscapeBar
      volverAlBar={() => avanzar("bar")}
      reiniciarJuego={() => avanzar("sala_prop_bar")}
      ganarJuego={() => avanzar("ganaste_escape")}
      
    />
  );
};

  if (escena.id === "lago_juego") {
  return (
    <LagoJuego
      volverAlBar={() => avanzar("bar")}
      reiniciarJuego={() => avanzar("sala_prop_bar")}
      ganarJuego={() => avanzar("ganaste_escape")}
      
    />
  );
};

  if (escena.id === "test_vino") {
  return (
    <TorneoImagenes
      volver={() => volver ("calle_inicio")}
      volverAlBar={() => avanzar("bar")}
      reiniciarJuego={() => avanzar("sala_prop_bar")}
      ganarJuego={() => avanzar("ganaste_escape")}
      
    />
  );
};

  
  
  console.log("Escena actual:", escena);


  if (escena.id === "hippiebosque") {
  return (
    <ZodiacoJuego 
    
      elegirObjeto={elegirObjeto}
      ganarJuego={() => avanzar("ganaste_escape")}
      
    />
  );
};

  if (escena.id === "cabana_juego") {
  return (
    <CabanaJuego
      volverAlBar={() => avanzar("bar")}
      reiniciarJuego={() => avanzar("sala_prop_bar")}
      ganarJuego={() => avanzar("ganaste_escape")}
      
    />
  );
};



  const opcionesParaMostrar = (
    (codigoValido ? escena.desbloquea : escena.opciones) || []
  );

  return (
     <div className={esEscenaMisteriosa ? "escena-misterio" : ""}>
      
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

{escena.requiereCodigo && !codigosValidos?.[idEscena] && (
  <div>
    <p>Ingresá el código para continuar:</p>
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

      {opcionesParaMostrar.map((op, i) => {
        const requiere = op.requiere;
        const tieneRequisito = !requiere || (escena.inventario && escena.inventario.includes(requiere));

        return (
          <button
            key={i}
            onClick={() => {
              if (requiere && !tieneRequisito) {
                const emoji = emojisPorObjeto[requiere] || "⚠️";
                setAlerta(`${emoji} Necesitás ${requiere} para hacer esto.`);

                return;
              }
              if (op.mensaje) {
                setAlerta(op.mensaje);
              }
              if (op.objeto) {
                elegirObjeto(op.objeto);
              }
              avanzar(op.destino, op.puntos || 0, op.dinero || 0, op.fichas || 0, op.personalidad, op.resetPerfil);
            }}
            style={{
              display: "block",
              margin: "8px 0",
              border: "none",
              background: "none",
              padding: 0,
              cursor: "pointer"
            }}
          >
            {op.imagen ? (
              <img
                src={op.imagen}
                alt={op.texto}
                style={{ width: "100%", maxWidth: 300, borderRadius: "8px" }}
              />
            ) : (
              op.texto
            )}
          </button>
        );
      })}

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

      {escena.textoLibre && (
        <div style={{ marginTop: 16 }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribí tu respuesta..."
            style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
          />
          <button onClick={manejarTextoLibre} style={{ marginTop: 8 }}>Enviar</button>
        </div>
      )}

      

      {escena.volver && (
        <button onClick={escena.volver} style={{ marginTop: "16px" }}>
          Quiero volver sobre mis pasos
        </button>
      )}

      {alerta && <AlertaModal mensaje={alerta} cerrar={() => setAlerta(null)} />}

        
    </div>
  );
}

export default Escena;