export const crimenauto = {
    crimenauto: {
        texto:"El viejo empieza a hablar con mucha calma. Con la cadencia necesaria para que captar tu atención y la fuerza exacta para que solamente nosotros lo escuchemos. Y así, empieza a contar todos los años que lleva yendo a aquel bar y algunos de sus secretos...",
    opciones: [
      { texto: "Mirar el cadáver", mensaje: "La sangre está fresca"},
      { texto: "Billetera", mensaje: "No hay dinero aquí"},
      { texto: "Revisar baúl del auto", mensaje: ""},
      { texto: "Guantera", mensaje: "Un papel que dice 896. Pero antes hay algo borrado..."},
      { texto: "Celular Samsung Galaxy", mensaje: "Sin batería"},
      { texto: "Bolsillos", mensaje: ""},
      { texto: "", mensaje: "sangre fresca"},
      { texto: "Creo que tengo todo lo que necesito. Voy a ir al almacén", destino: "almacen_donernesto"}
    ]
  },

  almacen_donernesto : {
    texto: 
        "El almacén es un local que se ve pequeño y está cerrado con una persiana de chapa.",
    opciones: [
      { texto: "Mirar el cadáver", mensaje: "La sangre está fresca"},
      { texto: "Billetera", mensaje: "No hay dinero aquí"},
      { texto: "Revisar baúl del auto", mensaje: ""},
      { texto: "Guantera", mensaje: "Un papel que dice 896. Pero antes hay algo borrado..."},
      { texto: "Celular Samsung Galaxy", mensaje: "Sin batería"},
      { texto: "Bolsillos", mensaje: ""},
      { texto: "Ya no hay nada que ver acá, lo mejor será ir a la casa de la viuda", destino: "codigo_puerta"},
    ]   },
    
    // En tu archivo de escenas
codigo_puerta: {
  texto: "🔒 Te encontrás con una puerta con un teclado numérico.",
  opciones: [], // no hay opciones al principio, se habilitan si el código es correcto
  requiereCodigo: true, // marca que esta escena tiene input de código
  codigoCorrecto: "1234", // el código que desbloquea
  desbloquea: [
    { texto: "Abrir la puerta", destino: "sala_final" },
    { texto: "Volver", destino: "norte_destino" }
  ]
},

sala_final: {
    texto: "dd",
    opciones: [
        {texto: "dfs"}
    ]
}

    
  }