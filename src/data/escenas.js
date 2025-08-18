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
import { hippiebosque } from "./hippiebosque";
import { escape_policia } from "./escape_policia";
import { maru } from "./escenaatajo";
import {espejo_callejon} from "./espejo_callejon";
import { barromance } from "./barromance";
import { b_sw } from "./b_sw";
import { sala_escape } from "./sala_escape";
import { cueva_bosque } from "./cueva_bosque";
import { duende_tesoro } from "./duende_tesoro";
import { sirenas_melodia } from "./sirenas_melodia";
import { super_sopa } from "./super_sopa";
import { espejo_pasado } from "./espejo_pasado";
import maruo from '../assets/maruo.jpg';

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
    ...hippiebosque,
    ...escape_policia,
    ...maru,
    ...espejo_callejon,
    ...barromance,
    ...b_sw,
    ...sala_escape,
    ...cueva_bosque,
    ...duende_tesoro,
    ...sirenas_melodia,
    ...super_sopa,
    ...espejo_pasado,
    inicio: {
    texto: "Era mi turno de hacer un juego. Desde siempre, ha habido muchos cuestionarios, vos sos muy buena para eso. \n Y las parejas están para potenciarse. Así que ideé esto, que es una especie de cuestionario-juego. \n En él vas a encontrarte con preguntas, mini-juegos, tests, entre otras sorpresas. \n Y vas a tener que hacer algo que no te gusta: tomar decisiones. Cada decisión te va ir llevando por diferentes posibilidades, \n caminos, y lugares. Si querés, podemos apretar un botón para volver a la escena anterior. También hay otro para reiniciar el juego, ¡pero ojo! Ese botón te lleva al principio pero borra todo lo que hiciste hasta el momento. \n Creo que eso es todo. Espero que lo disfrutes mucho. Lo importante, claro, es que sigamos jugando. ¿Empezamos?",
    opciones: [
      { texto: "Sí", destino: "buenosaireslaplata" },
      { texto: "No", destino: "ortiba" }
    ]
  },

      buenosaireslaplata: {
    texto: "Vamos con el auto y llegamos a un cartel que indica dos caminos posibles. ¿Cuál tomamos?",
    opciones: [
      { texto: "BUENOS AIRES", destino: "norte_objetos" },
      { texto: "LA PLATA", destino: "sur_objetos" }
    ]
  },

  ortiba: {
    texto: "Ah, sos la novia más ortiba del mundo.",
    opciones: [{imagen: maruo, destino: "inicio"}]
  },


 
    norte_objetos: {
    texto: "Aparece una caja frente a nosotros. Elegí uno:",
    opciones: [
      { texto: "Linterna", objeto: "Linterna", destino: "norte_destino" }, 
      { texto: "Pelota de fútbol", objeto: "Pelota de Fútbol", destino: "norte_destino"},
      { texto: "Cámara", objeto: "Cámara", destino: "norte_destino"},
      { texto: "Avanzar sin tomar nada", destino: "norte_destino"}
    ],   
   

    
  },
  sur_objetos: {
    texto: "Las valijas con nuestra ropa y elementos esenciales ya están en el auto. Pero también aparece un pequeño bolso del que emana una luz, adentro hay algunos objetos. Podés elegir uno.",
    opciones: [
    {texto: "Una petaca", objeto: "Petaca"},
    {texto: "Cámara", objeto: "Cámara"},
    {texto: "La guitarra", objeto: "Instrumento"},
    {texto: "Avanzar sin tomar nada", destino: "sur_destino"}
    ],
    siguiente: "sur_destino"
  },
  norte_destino: {
    texto: "Por capital hay varios lugares a los que podemos ir... Pero por ahora hay que elegir uno",
    opciones: [
      { texto: "Sala de escape", destino: "sala_escape" },
      { texto: "Bar", destino: "bar" }
    ]
  },

  sala_escape: {
    texto: "En producción. Trabajando para usted"
  },

  sur_destino: {
    texto: "Llegamos al hotel. Luego de un pequeño descanso del viaje, estamos listos para salir. ¿A dónde te gustaría ir?",
    opciones: [
      { texto: "Casino", destino: "casino_intro" },
      
      { texto: "Bosque Peralta Ramos", destino: "bosque_intro"}
    ]
  },

casino_intro: {
  texto: "Estás en el casino. ¿Querés probar suerte en la ruleta?",
  tipo: "casino",  // <<< esta línea es clave para que Escena.jsx muestre la ruleta
  siguiente: "calle",
  opciones: [
      { texto: "Salir del casino", destino: "calle", puntos: 10 }]
},

}
