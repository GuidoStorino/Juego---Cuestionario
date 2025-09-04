import paredon from '../assets/paredon.jpg';
import dibujo1 from '../assets/dibujo1.jpg';
import dibujo2 from '../assets/dibujo2.jpg';
import dibujo3 from '../assets/dibujo3.jpg';
import dibujo4 from '../assets/dibujo4.jpg';
import fotoparedon from '../assets/fotoparedon.jpg'

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
      {texto: "Claude Van Damme", mensaje: "Claude Van Damme \n \n Apostador de pura cepa, le gusta alardear durante las partidas. No hay nada que desee más que pasar su tiempo jugando poker y black jack, pero su oficio de cerrajero lo ha tenido bastante ocupado durante los últimos meses."},
      {texto: "Roi Richelieu", mensaje: "Roi Richelieu \n \n Jugador introvertido, inmigró hace no muchos años y todavía se percibe el acento de su lengua natal en sus palabras. Dibujante de profesión y jugador en su tiempo libre, si bien le gustaría que fuese al revés."},
      {texto: "Volver", destino: "taberna"}
    ]
  },

  tabernero: {
  texto: "Un hombre entrado en años habla del lugar como si fuera un palacio. Parece particularmente entusiasmado. Cuando entra un poco en confianza cuenta la historia de los clientes que pasaron por la taberna. Hoy se está gestando algo grande en ese juego, unas mesas más allá. Uno de los jugadores estuvo preso y salió hace días de la cárcel, y hoy busca venganza. Pero vamos del principio, dice haciendo un gesto con ambas manos. Todo comenzó con la desaparición de Charles King, o el Rey de los Ases, como le decían por acá. Estaba claro que fue un asunto de dinero que no se pudo pagar, ¿pero quién podía ser? ¡Todos le debían dinero a Charles! Y el que no, envidiaba su buena suerte, o su talento, como quieras llamarlo. Luego del hecho, apareció la pintada, la infame pintada. Y un mensaje para la policía: 'Acá está, este es el asesino'. Bueno... El asunto es que el supuesto asesino siempre juró ser inocente, si bien el dibujo parecía incriminarlo directamente. No lo sé... La cosa es que salió hace poco, como te decía, por falta de evidencia. Y acá está hoy, divirtiéndose mientras ejecuta su venganza. Curioso, ¿no? ¿Que cómo lo sé? Soy el tabernero, ¿no? Debo saberlo todo. ¿Qué? ¿Avisarle a la policía? ¡No! Por fin pasa algo entretenido en este lugar. Tranquila... Seguramente partirán alguna cabeza con una botella, no pasará de eso.",
  opciones: [
    {texto: "Volver a la taberna", destino: "taberna"},
    {texto: "Volver al callejón", destino: "calle_callejon"},
    {texto: "Volver a la pintada", destino: "espejo_callejon"},
    {texto: "Preguntarle más al tabernero", destino: "tabernero_2"}
  ]
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
  codigoCorrecto: "4336",
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
      {texto: "Volver a la taberna", destino: "taberna"},
      {texto: "Volver al callejón", destino: "calle_callejon"},
      {texto: "Volver a la pintada", destino: "espejo_callejon"}
    ]
},

casa_roi_interior: {
  texto: "Una casa de tamaño moderado. Un living, una cocina, un cuarto con atriles, lienzos y pinceles.",
  opciones: [
    {texto: "Ver dibujos", destino: "dibujos_roi"},
    {texto: "Ver anotaciones", mensaje: "JB 34AAAA \n VD \n FQ \n"},
    {texto: "Volver a la taberna", destino: "taberna"},
    {texto: "Volver al callejón", destino: "calle_callejon"},
    {texto: "Volver a la pintada", destino: "espejo_callejon"}
  ]
},

dibujos_roi: {
  opciones: [
    {imagen: dibujo1, mensaje: dibujo1},
    {imagen: dibujo2, mensaje: dibujo2},
    {imagen: dibujo3, mensaje: dibujo3},
    {imagen: dibujo4, mensaje: dibujo4},
    {texto: "Volver", destino: "casa_roi_interior"}
  ]
},

casa_queen: {
  opciones: [
    {texto: "Revisar cajón", mensaje: fotoparedon} 
  ]
},

tabernero_2: {
    id: "",
    texto: "Ja! Curiosa, ¿eh? A mí también me gusta jugar. Dime quién es el dibujante. ¡No! Dime cuál es su obsesión y te cuento más. Solo di la palabra, vamos.",
  opciones: [], 
  requiereCodigo: true,
  codigoCorrecto: ["Tetas", "tetas", "TETAS"],

  desbloquea: [
    {texto: "¡Excelente! A que quieres saber más, ¿eh? ¿O ya lo sabes?", destino: "ultima_pregunta"},
    {texto: "Volver a la taberna", destino: "taberna"},
    {texto: "Volver al callejón", destino: "calle_callejon"},
    {texto: "Volver a la pintada", destino: "espejo_callejon"}
  ]
},

ultima_pregunta: {
  texto: "Eres muy astuta. Pero, ¿has podido deducir quién hizo desaparecer a Charles King? Dime sólo su nombre, no levantemos la perdiz.",
  textoLibre: true,
  validarTexto: (input) => {
    const respuesta = input.toLowerCase().trim();

    if (respuesta === "claude") {
      return {
        destino: "correcto",
        puntos: 10,
        guardar: { clave: "cuestionario", valor: input }
      };
    } else if (respuesta === "jack") {
      return {
        destino: "nocorrecto",
        puntos: 0
      };
    } else if (respuesta === "frank") {
      return {
        destino: "nocorrecto2",
        puntos: 0
      };
     } else if (respuesta === "roi") {
        return {
          destino: "nocorrecto3"
        }
      }
     else {
      return {
        destino: "nocorrecto4",
        puntos: 0
      };
    }
  }
},

nocorrecto: {
  texto: "¿El ferretero? No mataría una mosca.",
  opciones: [{texto: "Volver", destino: "ultima_pregunta"}]
},

correcto: {
  texto: "En serio que eres astuta. Más que la policía, desde ya. Aunque eso no sea un gran halago. Cuando vieron la pintura de Roi, todos apuntaron a Frank. Claro. No contaron con que el dibujante dominaba nuestro idioma aún menos que ahora, y su baraja contiene otros nombres. Él se refería a Damme cuando dibujó esa reina. Aunque no fue del todo insensato. No olvidemos que Roi también dejó otra pista sobre la morada de Claude, lo que lo habría terminado de incriminar, pero esto la policía directamente lo pasó por alto, no como tú.",
  opciones: [{texto: "Volver a la taberna", destino: "taberna"}],
  final: true
},

nocorrecto2: {
  texto: "El mismo error que cometió la policía. Un error lógico, pobre Frank...",
  opciones: [{texto: "Volver", destino: "ultima_pregunta"}]
},

nocorrecto3: {
  texto: "Ese sería un giro espectacular, ¿no te parece? El dibujante que le avisa a la policía sobre el criminal, pero resulta ser el criminal.",
  opciones: [{texto: "Volver", destino: "ultima_pregunta"}]
}

}