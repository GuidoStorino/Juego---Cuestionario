export const casino = {
  casino_intro: {
    texto: "Casino",
    opciones: [
      { texto: "dinero", destino: "casino_dinero", puntos: 5 },
      { texto: "ruleta", destino: "casino_ruleta", puntos: -5 },
      { texto: "Salir del casino", destino: "calle", puntos: 10 }]
    
  },

despuesDelCasino: {
  texto: "Salís del casino y continuás tu viaje.",
  opciones: [
    { texto: "Ir al bosque", destino: "bosque" },
    { texto: "Ir a la playa", destino: "playa" }
  ]
}
}