import paredon from '../assets/paredon.jpg';

export const espejo_callejon = {
    espejo_callejon: {
        texto:"La calle es larga y oscura, la pared de gran tamaño.",
    opciones: [
      { texto: "Mirar el paredón", mensaje: paredon, requiere: "Linterna"},
      { texto: "Caminar el callejón", destino: "calle_callejon"},
    ]
  },

  calle_callejon: {
    texto: "Poco se ve más que alguna hoja que trajo el viento y un gato pardo durmiendo sobre una vereda. Algunas casas que se extienden más allá, y los escasos ruidos que se oyen provienen de lo que parece ser una vieja taberna.",
    opciones: [
      {texto: "Taberna", destino: "taberna"},
      {texto: "Casa 1", destino: "casa_jack"},
      {texto: "Casa 2", destino: "casa_damme"},
      {texto: "Casa 3", destino: "casa_roi"},
      {texto: "Casa 4", destino: "casa_queen"}

    ]
  },

  taberna: {
    texto: "Un tugurio de hace años, un hombre apoyado en la barra sin mucho trabajo que hacer, varias mesas de madera vacías, excepto por una en donde cuatro personas juegan a las cartas.",
    opciones: [
      {texto: "Ver la mesa de jugadores", destino: "mesa_poker"},
      {texto: "Tomar un trago en la barra", destino: "borracha"},
      {texto: "Hablar con el tabernero", destino: "tabernero"}
    ]
  },

  taberna_2: {
    texto: "Bien, así me gusta. Enfocada.",
    opciones: [
      {texto: "Ver la mesa de jugadores", destino: "mesa_poker"},
      {texto: "Tomar un trago en la barra", destino: "borracha2"},
      {texto: "Hablar con el tabernero", destino: "tabernero"}
    ]
  },

  borracha: {
    texto: "No seas borracha, volvé a resolver el caso",
    opciones: [
      {texto: "Volver", destino: "taberna_2"}
    ]
  },

    borracha2: {
    texto: "Bue, ¿en serio?",
    opciones: [
      {texto: "Volver", destino: "taberna_2"}
    ]
  },

  mesa_poker: {
    texto: "",
    opciones: [
      {imagen: paredon},
      {texto: "Jack Brown", mensaje: "Jack Brown \n \n Ferretero, padre de dos hijos y divorciado. Juega al poker desde que tiene memoria. Tres veces campeón del Torneo 'Los 4 Ases'. Lo comenta cada vez que tiene ocasión."},
      {texto: "Frank Queen", mensaje: "Frank Queen \n \n Desempleado y de pocas pulgas. Nunca dejó de jugar a las cartas, pero no apuesta desde hace un tiempo."},
      {texto: "Claude Van Damme", mensaje: "Claude Van Damme \n \n Apostador de pura cepa, le gusta alardear durante las partidas. Pasa su tiempo entre poker y blackjack cuando no está en su trabajo de cerrajero. "},
      {texto: "Roi Richelieu", mensaje: "Roi Richelieu \n \n Jugador introvertido, inmigró hace no muchos años y todavía se percibe el acento de su lengua natal en sus palabras. Dibujante de profesión y jugador en su tiempo libre, si bien le gustaría que fuese al revés."},
      {texto: "Volver", destino: "taberna"}
    ]
  },

  tabernero: {
  texto: "Un hombre entrado en años habla del lugar como si fuera un palacio. Parece particularmente entusiasmado. Cuando entra un poco en confianza cuenta la historia de los clientes que pasaron por la taberna. Hoy se está gestando algo grande en ese juego, unas mesas más allá. Uno de los jugadores estuvo preso y salió hace días de la cárcel, y hoy busca venganza. Pero vamos del principio, dice haciendo un gesto con ambas manos. Todo comenzó con la desaparición de Charles King, o el Rey de los Ases, como le decían por acá. Estaba claro que fue un asunto de dinero que no se pudo pagar, ¿pero quién podía ser? ¡Todos le debían dinero a Charles! Y el que no, envidiaba su buena suerte, o su talento, como quieras llamarlo. Luego del hecho, apareció la pintada, la infame pintada. Y un mensaje para la policía: 'Acá está, este es el asesino'. Bueno... El asunto es que el supuesto asesino siempre juró ser inocente, si bien el dibujo parecía incriminarlo directamente. No lo sé... La cosa es que salió hace poco, como te decía, por falta de evidencia. Y acá está hoy, divirtiéndose mientras ejecuta su venganza. Curioso, ¿no? ¿Que cómo lo sé? Soy el tabernero, ¿no? Debo saberlo todo. ¿Qué? ¿Avisarle a la policía? ¡No! Por fin pasa algo entretenido en este lugar. Tranquila... Seguramente partirán alguna cabeza con una botella, no pasará de eso.",
  opciones: [
    {texto: "Volver a la taberna", destino: "taberna"},
    {texto: "Volver al callejón", destino: "calle_callejon"},
    {texto: "Volver a la pintada", destino: "espejo_callejon"}]
  },

  casa_jack:{
    id: "",
    texto: "🔒 Código alfanumérico:",
  opciones: [], 
  requiereCodigo: true,
  codigoCorrecto: "34AAAA",
  desbloquea: [
    {texto: "Revisar cajones", mensaje: "Hay varias cosas. Muchos disyuntores, blisters de pilas, un taladro, martillos"},
    {texto: "Abrir armario", mensaje: "Encontraste una linterna", objeto: "Linterna"},
    {texto: "Volver a la taberna", destino: "taberna"},
    {texto: "Volver al callejón", destino: "calle_callejon"},
    {texto: "Volver a la pintada", destino: "espejo_callejon"}
    
  ]
},

casa_damme: {
    id: "",
    texto: "🔒 Ingrese el código para desbloquear.",
  opciones: [], 
  requiereCodigo: true,
  codigoCorrecto: "1234",
  desbloquea: [
    {texto: "Tomar llave", objeto: "Llave"},
    {texto: "Volver a la taberna", destino: "taberna"},
    {texto: "Volver al callejón", destino: "calle_callejon"},
    {texto: "Volver a la pintada", destino: "espejo_callejon"}
  ]
},

casa_roi: {
    opciones: [
      {texto: "Entrar a la casa", requiere: "Llave", destino: "casa_roi_interior"},
    ]
},

casa_roi_interior: {
  texto: "Una casa de tamaño moderado. Un living, una cocina, un cuarto con atriles, lienzos y pinceles.",
  opciones: [
    {texto: "Ver dibujos", mensaje: ""},
    {texto: "Ver anotaciones", mensaje: "JB 34AAAA \n VD \n FQ \n"},
    {texto: "Volver a la taberna", destino: "taberna"},
    {texto: "Volver al callejón", destino: "calle_callejon"},
    {texto: "Volver a la pintada", destino: "espejo_callejon"}
  ]
},


}