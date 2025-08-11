export const cueva_bosque = { 
     cueva_bosque: {
      id: "cuevabosque",
        texto: "Estás dentro de una cueva que no parece ser muy grande. La luz del sol te ayuda a ver un poco. Hay algunas cosas sobre el suelo y paredes que parecen tener escritos.",
    opciones: [
      { texto: "Ver cueva", mensaje: {imagen: "/Juego---Cuestionario/game-project/public/images/cueva_bosque.jpg"} },
      { texto: "Tomar un hueso", objeto: "Hueso animal", mensaje: "Tomaste un hueso animal", destino: "cueva_bosque"},
      { texto: "Salir de la cueva", destino: "cueva_bosque2"}
    ],
    inicio: true
  },

  cueva_bosque2:{
    id: "",
    texto: "🔒 Salís de la cueva y llegás a una pared. Tiene un símbolo ",
  opciones: [ {texto: "Ver símbolo", mensaje: {imagen: "/Juego---Cuestionario/game-project/public/images/simbolo_cueva.jpg"}},
    {texto: "Volver a la cueva", destino: "cueva_bosque"},

  ], 
  requiereCodigo: true,
  codigoCorrecto: "96",
  desbloquea: [
    { texto: "La pared empieza a resquebrajarse, y poco a poco se desmorona. Hay algo detrás de ella. Parece ser un libro." },
    { texto: "Tomar libro", mensaje: "Encontraste el Libro Antiguo de los hechizos", objeto: "Libro Antiguo", destino: "cueva_bosque2" },
    { texto: "Volver al bosque", destino: "bosque_intro"},
  ],
  final: true
}}