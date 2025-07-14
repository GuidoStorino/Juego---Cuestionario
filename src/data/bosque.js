// src/data/bosque.js

export const bosque = {
  bosque_intro: {
    texto: "Empezás a caminar por un bosque y te empezás a ver diferentes caminos para tomar. Un campo inmenso de flores rojas, rosas, y violetas, un sendero de tierra rodeado de árboles de hojas doradas, una feria de artesanías antiguas, y pequeñas casitas entre el paisaje boscoso. ¿Qué camino tomás?",
    opciones: [
      { texto: "Sendero", imagen:"/images/sendero_bosque.avif", destino: "sendero_tierra", puntos: 5 },
      { texto: "Campo de flores", destino: "campo_flores", puntos: -5 },
      { texto: "Feria", destino: "feria_bosque", puntos: -5 },
      { texto: "Casitas", destino: "casitas_bosque", puntos: -5 }
    ]
  },
  sendero_tierra: {
    texto: "Las hojas doradas comienzan a caer como una lluvia incesante. ¿Qué hacés?",
    opciones: [
    { texto: "Seguir por el sendero. En algún momento pararán.", destino: "bosque_secreto"}, 
    {texto: "Salirte del camino", destino: "cabana_bosque" }]
  },

  campo_flores: {
    texto: "El campo es realmente inmenso. Hay flores y más flores hacia todas partes.",
    opciones: [
      { texto: "Seguir caminando y mirando las flores", destino: "perderse" },
      { texto: "Tomar una flor y sentir el aroma", destino: "rosa_roja_violeta" }]
  },

  perderse:{
    texto: "En la inmensidad te perdiste. Todo se ve igual para cualquier lado que mires",
    opciones: [
      { texto: "Voy a ir desde donde creo que vine", destino: "cabana_bosque"},
      { texto: "No, seguro estoy desorientada. Voy a tomar el camino contrario", destino: "puente"}  
    ]
  },

  rosa_roja_violeta: {
    texto: "Algo aparece. Caminás un poco. Es un río, y hay un bote para navegarlo. También hay nuevos árboles, árboles de mandarina debajo de cielos de mermelada. Desde un lugar, alguien te llama, es una chica con ojos de caleidoscopio.",
    opciones: [
      { texto: "Río", destino: "rio", imagen:"/images/" },
      { texto: "Árboles de mandarina", destino: "arboles_mandarina", imagen:"/images/" },
      { texto: "Chica caleidoscopio", destino: "chica_ojos", imagen:"/images/"}
      ]
  },

  

  bosque_secreto: {
    texto: "Llegás a una cabaña escondida en la niebla.",
    opciones: [
      { texto: "Entrar en la cabaña", destino: "fin_cabana" },
      { texto: "Rodearla y seguir", destino: "fin_bosque" }
    ]
  },
  cabana_bosque: {
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
