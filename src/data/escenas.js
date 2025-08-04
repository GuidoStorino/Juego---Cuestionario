import { bosque } from "./bosque";
import { casino } from "./casino";
import { bar } from "./bar";
import { baraccion } from "./baraccion";
import { barhistorias } from "./barhistorias";
import { crimenauto } from "./crimenauto";
import { sala_prop_bar } from "./sala_prop_bar";
import { lago_juego } from "./lago_juego";
import { test_vino } from "./test_vino";
import { cabana_juego } from "./cabana_juego";
import { casadete } from "./casadete";

export const escenas = {
    ...bosque,
    ...casino,
    ...bar,
    ...baraccion,
    ...barhistorias,
    ...crimenauto,
    ...sala_prop_bar,
    ...lago_juego,
    ...cabana_juego,
    ...test_vino,
    ...casadete,
    inicio: {
    texto: "Vamos con el auto y llegamos a un cartel que indica dos caminos posibles. ¿Cuál tomamos?",
    opciones: [
      { texto: "BUENOS AIRES", destino: "norte_objetos" },
      { texto: "LA PLATA", destino: "sur_objetos" }
    ]
  },

    norte_objetos: {
    texto: "Aparece una caja frente a nosotros. Elegí uno:",
    opciones: [
      { texto: "Linterna", objeto: "Linterna", destino: "norte_destino" }, 
      { texto: "Mapa", objeto: "Mapa", destino: "norte_destino"},
      { texto: "Cámara", objeto: "Cámara", destino: "norte_destino"},
      { texto: "Avanzar sin tomar nada", destino: "norte_destino"}
    ],   
   

    
  },
  sur_objetos: {
    texto: "Las valijas con nuestra ropa y cosas esenciales ya están en el auto. Pero también aparece un pequeño bolsa del que emana una luz, adentro hay algunos objetos. Podés elegir uno.",
    opciones: [
    {texto: "Mapa", objeto: "Mapa"},
    {texto: "Cámara", objeto: "Cámara"},
    {texto: "Libro antiguo", objeto: "Libro antiguo"},
    {texto: "Avanzar sin tomar nada", destino: "sur_destino"}
    ],
    siguiente: "sur_destino"
  },
  norte_destino: {
    texto: "¿A dónde querés ir?",
    opciones: [
      { texto: "Sala de escape", destino: "sala_escape" },
      { texto: "Bar", destino: "bar" },
      { texto: "Librería", destino: "fin_libreria" },
    ]
  },
  sur_destino: {
    texto: "Llegamos al hotel. Luego de un pequeño descanso del viaje, estamos listos para salir. ¿A dónde te gustaría ir?",
    opciones: [
      { texto: "Playa", destino: "fin_playa", puntos: 10 },
      { texto: "Casino", destino: "casino_intro", puntos: -10 },
      { texto: "Bowling", destino: "fin_bowling", puntos: 5 },
      { texto: "Bosque Peralta Ramos", destino: "bosque_intro", puntos: 5 }
    ]
  },

casino_intro: {
  texto: "Estás en el casino. ¿Querés probar suerte en la ruleta?",
  tipo: "casino",  // <<< esta línea es clave para que Escena.jsx muestre la ruleta
  siguiente: "calle",
  opciones: [
      { texto: "Salir del casino", destino: "calle", puntos: 10 }]
},

  sur_destino: {
    texto: "Caminando por la calle, ¿a dónde irías?",
    opciones: [
      { texto: "Playa", destino: "fin_playa", puntos: 10 },
      { texto: "Casino", destino: "casino_intro", puntos: -10 },
      { texto: "Bowling", destino: "fin_bowling", puntos: 5 },
      { texto: "Bosque Peralta Ramos", destino: "bosque_intro", puntos: 5 }
    ]
  },

  calle: {
    texto: "Caminando por la calle, ¿a dónde irías?",
    opciones: [
      { texto: "Playa", destino: "playa" },
      { texto: "Casino", destino: "casino_intro", puntos: -10 },
      { texto: "Bowling", destino: "fin_bowling", puntos: 5 },
      { texto: "Bosque Peralta Ramos", destino: "bosque_intro", puntos: 5 }
    ]
  },

  fin_boliche: { texto: "¡Noche agitada en el boliche!", opciones: [], final: true },
  fin_bar: { texto: "Tranquilo momento en el bar.", opciones: [], final: true },
  fin_libreria: { texto: "Te perdés entre libros maravillosos.", opciones: [], final: true },
  fin_teatro: { texto: "Una obra te emociona hasta las lágrimas.", opciones: [] },
  fin_playa: { texto: "Tomás sol y descansás en la arena.", opciones: [] },
  fin_casino: { texto: "Perdés todo en la ruleta... Ups.", opciones: [] },
  fin_bowling: { texto: "¡Pleno strike y diversión asegurada!", opciones: [] },
  fin_bosque: { texto: "Te perdés, pero descubrís un lago secreto.", opciones: [] }
};
