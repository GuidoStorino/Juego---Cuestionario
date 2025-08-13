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
baile_sw: {
  texto: "Damos algunos de nuestros mejores pasos. Alrededor hay gente bailando también. Algunos, vestidos con no tanta ropa. Además de la pista y la barra, en el lugar hay unas habitaciones en el piso en donde estamos y una escalera.",
  opciones: [
    { texto: "Explorar el piso", destino: "primer_piso" },
    { texto: "Subir las escaleras", destino: "escaleras_sw" },
    { texto: "Seguir bailando", destino: "pista_baile"}
  ]
},
trago_sw: {
  texto: "Esta caipirinha esta genial, y encima no fue muy cara. Alrededor tenemos gente bailando, algunos muy sensualmente. ¿O es la bebida? Qué importa, ¿no? También hay otras habitaciones, al parecer, para explorar en el piso donde estamos, y una escalera hacia arriba.",
  opciones: [
    { texto: "Explorar el piso", destino: "primer_piso" },
    { texto: "Subir las escaleras", destino: "escaleras_sw" },
    { texto: "Seguir bailando", destino: "pista_baile"}
  ]
}


}