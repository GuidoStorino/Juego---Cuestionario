export const playa = { 
     playa: {
      id: "playa",
        texto:"",
    opciones: [
      { texto: "Vamos a caminar por la arena", destino: "caminata_playa"},
      { texto: "Está para jugar unos penales", destino: "penales_juego"},
    ],
    inicio: true
  },

  caminata_playa: {
    id: "caminata",
    opciones: [
      {texto: ""},
      {texto: ""}
    ]
  },

    penales_juego: {
    id: "penales",
    opciones: [
      {texto: ""},
      {texto: ""}
    ]
  }
}