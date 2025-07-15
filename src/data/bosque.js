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
    { texto: "Seguir por el sendero. En algún momento pararán.", destino: "bares_bosque"}, 
    {texto: "Salirte del camino", destino: "cabana_bosque" }]
  },

bares_bosque: {
  texto: "Un poco más lejos y a ambos lados se llegan a ver dos lugares en donde te podrías cobijar por un rato. Uno parece una pulpería de la que te olvidás el nombre ni bien le quitás la vista. El otro es una casa de té.",
  opciones: [
    {texto:"Pulpería", destino: "pulperia"},
    {texto: "Casa de té", destino: "casa_de_te"}
  ]
},

pulperia: {
  texto: "La pulpería ofrece buena comida y sus paredes están adornadas con cuadros de la época en la que fue construida y objetos antiguos. Al momento de irte, te ofrecen llevarte alguna.",
  opciones: [
    {texto: "Me llevo esa asombrosa espada que cuelga de la pared.", objeto: "espada", destino: "arturo"},
    {texto: "No, gracias. Pero me voy a llevar la botella que me quedó un poco de vino", objeto: "botella", destino:"arturo"}
  ]
},

arturo: {
  texto: "Al salir del lugar, la lluvia de hojas se ha calmado. Sin embargo, luego de caminar un poco hay otro lugar que llama tu atención. Es un local pequeño atendido por un hombre entrado en años llamado Arturo, quien te ofrece algunas de las especias que él mismo hace, no sin antes hablarte sobre el lugar y advertirte de las sorpresas que te podés encontrar por el camino.",
  opciones: [
    {texto: "Llevás un dulce de leche. Para alguna merienda", destino: "atula_estatua"},
    {texto: "Llevás una sal natural hecha con 14 especias diferentes", destino: "atula_estatua"}
  ]
},
  

  atula_estatua: {
    texto: "Una estatua oscura y de aspecto femenino se ve a unos pasos. A sus pies yace una inscripción. Preferís que la inscripción diga:",
    opciones: [
      { texto: "Has encontrado la estatua de Atula. La contemplación de su figura y la lectura de este escrito la hará cobrar vida. Tu destino está marcado.", objeto: "espada", destino: "atula_vida" },
      { texto: "Has encontrado la estatua de Atula. Bienaventurada seas. Tu fe en ella te ayudará a seguir por este bosque", destino: "pasos_bosque" }
   ]
  },
  atula_vida: {
    texto: "La inmovilidad de la estatua se convierte en una mujer enorme y de aspecto macabro. Inmediatamente te mira con ojos fijos y furiosos. De a poco, levanta una mano para atacarte con alguna magia. ¿Qué hacés en esta situación?",
    opciones: [
      {texto: "Desenvaino la espada que me llevé de La Protegida y se la clavó en el corazón. O donde pueda.", destino: "atula_espada", requiere: "espada"},
      {texto: "Desesperada, le tiro la sal de Arturo en los ojos.", destino: "atula_sal"},
      {texto: "Salgo corriendo. Y rezo porque corramos bien rápido", destino: "atula_correr"},
      {texto: "Le parto la botella de vino en la cabeza. Total ya está vacía", destino: "atula_botella"}
    ]
  },

  atula_espada: {
    texto: "ganaste"
  },

  atula_sal: {
    texto: "ganaste"
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
