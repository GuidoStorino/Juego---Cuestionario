// src/data/bosque.js

export const bosque = {
  bosque_intro: {
    texto: "Te adentras en un bosque espeso y misterioso. ¿Qué hacés?",
    opciones: [
      { texto: "Encender la linterna", destino: "bosque_luz", puntos: 5 },
      { texto: "Seguir a oscuras", destino: "bosque_oscuro", puntos: -5 }
    ]
  },
  bosque_luz: {
    texto: "La linterna ilumina un sendero oculto entre los árboles.",
    opciones: [
    { texto: "Seguir el sendero", destino: "bosque_secreto"}, 
    {texto: "Saltar", destino: "cansarte_mucho" }]
  },
  bosque_oscuro: {
    texto: "Tropezás con una raíz y caés. Te duele el tobillo.",
    opciones: [{ texto: "Volver al inicio del bosque", destino: "bosque_intro" }]
  },
  bosque_secreto: {
    texto: "Llegás a una cabaña escondida en la niebla.",
    opciones: [
      { texto: "Entrar en la cabaña", destino: "fin_cabana" },
      { texto: "Rodearla y seguir", destino: "fin_bosque" }
    ]
  },
  cansarte_mucho: {
    texto: "Te agitaste y perdiste.",
    opciones: [
      { texto: "Entrar en la cabaña", destino: "fin_cabana" },
      { texto: "Rodearla y seguir", destino: "fin_bosque" }
    ]
  },
  fin_cabana: {
    texto: "Un anciano sabio te da un mapa mágico. ¡Ganás 10 puntos!",
    opciones: [{ texto: "Volver al inicio", destino: "inicio", puntos: 10 }]
  },
  fin_bosque: {
    texto: "Descubrís un claro con un lago escondido. Paz total.",
    opciones: [{ texto: "Volver al inicio", destino: "inicio", puntos: 5 }]
  }
};
