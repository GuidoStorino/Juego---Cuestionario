export const b_sw = {
b_sw: {
  texto: "Entramos al boliche. Al principio se ve un bar no muy concurrido. Pero subimos una escalera y se va escuchando música. Dejamos nuestros abrigos y celulares y nos vamos para donde está la música. Bienvenidos a la fiesta.",
  opciones: [
    { texto: "Continuar", destino: "bol_sw2" },
    { texto: "Salir del boliche", destino: "calle_inicio" }
  ]
},
bol_sw2: {
  texto: "Suena una música que siempre tiene una base electrónica de fondo. La pista es relativamente pequeña y hay gente bailando y otra comprando tragos en la barra.",
  opciones: [
    { texto: "Ir a bailar", destino: "baile_sw" },
    { texto: "Ir por un trago", destino: "trago_sw" }
  ]
},

}