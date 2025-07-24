export const baraccion = {
    baraccion: {
        texto:"Faltan unos momentos para que la persona armada ingrese al lugar. ¿Qué hacés?",
    opciones: [
      { texto: "Te adelantás y das aviso a la gente del bar", puntos: 3, destino: "entrada_chorro", personalidad: "Ravenclaw"},
      { texto: "Llamás inmediatamente a la policía", puntos: 1, destino: "entrada_chorro", personalidad: "Hufflepuff"},
      { texto: "Estoy preparada. Tengo la espada que conseguí en el bosque", puntos: 2, requiere: "espada", destino: "entrada_chorro", personalidad: "Gryffindor"},
      { texto: "Vas a hablarle al cómplice a la mesa y le demostrás que sabés exactamente lo que traman, tratando de sacar algún provecho de la situación.", puntos: 4, destino: "entrada_chorro", personalidad: "Slytherin"},
    ]
  },

entrada_chorro: {
  texto: "El ladrón entra dando un salto desde la escalera y entre gritos y golpes empieza a amenazar a la gente.",
  opciones: [
      { texto: "Te escondés detrás de la barra", puntos: 1, destino: "bataola_bar", personalidad: "Hufflepuff"},
      { texto: "Le tirás una mesa para ganar tiempo", puntos: 3, destino: "bataola_bar", personalidad: "Ravenclaw"},
      { texto: "Hacés de cuenta que sos parte de ellos", puntos: 4, destino: "bataola_bar", personalidad: "Slytherin"},
      { texto: "Agarrás una botella y se la das en la cabeza", puntos: 2, destino: "bataola_bar", personalidad: "Gryffindor"},
    ]
},

bataola_bar: {
  texto: "Un borracho le da un golpe al ladrón en una distracción y se le cae el arma, se arma una bataola intensa.",
  opciones: [
      { texto: "Te escondés detrás del borracho más gordo", puntos: 4, destino: "muerte_bar", personalidad: "Slytherin"},
      { texto: "Te parás sobre una mesa y gritás algo para que todo el bar se una y ganar", puntos: 2, destino: "muerte_bar", personalidad: "Gryffindor"},
      { texto: "Te colocás debajo de una mesa, tratando de meterle la traba a los ladrones cuando pasen por al lado", puntos: 1, destino: "muerte_bar", personalidad: "Hufflepuff"},
      { texto: "Escaneás a algunos rápidamente para saber cuáles serán sus próximos movimientos y lograr una ventaja", puntos: 3, destino: "muerte_bar", personalidad: "Ravenclaw"},
    ]
},

muerte_bar: {
  texto: "El bien triunfó y la muerte le ha llegado a los dos malhechores, quienes yacen en el suelo del bar. Ves cómo sobresalen varios dólares del bolsillo de uno de ellos",
  opciones: [
      { texto: "Los agarrás inmediatamente para dárselos a la policía cuando llegue.", puntos: 1, destino: "resultado_bar", personalidad: "Hufflepuff"},
      { texto: "Hacés de cuenta que estás verificando si está muerto y sin que nadie lo noto los agarrás.", puntos: 4, destino: "resultado_bar", personalidad: "Slytherin"},
      { texto: "Gritás a viva voz '¡Mirá toda la plata que tenían!', la agarrás, y tragos para todos.", puntos: 2, destino: "resultado_bar", personalidad: "Gryffindor"},
      { texto: "No es tuya. No hay nada que tengas que hacer", puntos: 3, destino: "resultado_bar", personalidad: "Ravenclaw"},
    ]
},

resultado_bar: {
  texto: (estado) => {
    const perfil = estado.perfilPersonalidad || {};
console.log("Perfil personalidad:", estado.perfilPersonalidad);

    if (Object.keys(perfil).length === 0) {
      return "🤔 No tomaste decisiones suficientes para definir tu perfil.";
      
    }

    const personalidadDominante = Object.entries(perfil).reduce(
      (a, b) => (b[1] > a[1] ? b : a),
      ["", 0]
    );

    const [personalidad] = personalidadDominante;

    const mensajes = {
      osado: "🗡️ Sos osado. Enfrentás el peligro con valentía.",
      temeroso: "😨 Sos temeroso. Evitás el conflicto.",
      calculador: "🧠 Sos calculador. Siempre pensás antes de actuar.",
      impulsivo: "🔥 Sos impulsivo. Te guiás por la emoción.",
      líder: "👑 Sos líder. Tomás la iniciativa.",
      solidario: "❤️ Sos solidario. Te importa el bienestar de los demás."
    };

    return mensajes[personalidad] || `Tu personalidad más destacada es: ${personalidad}`;
  },
  final: true
}
}