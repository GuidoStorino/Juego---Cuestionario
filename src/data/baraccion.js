export const baraccion = {
    baraccion: {
        texto:"Faltan unos momentos para que la persona armada ingrese al lugar. ¿Qué hacés?",
    opciones: [
      { texto: "Te adelantás y das aviso a la gente del bar", destino: "entrada_chorro", personalidad: "Ravenclaw"},
      { texto: "Llamás inmediatamente a la policía", destino: "entrada_chorro", personalidad: "Hufflepuff"},
      { texto: "Estoy preparada. Tengo la espada que conseguí en el bosque", requiere: "espada", destino: "entrada_chorro", personalidad: "Gryffindor"},
      { texto: "Vas a hablarle al cómplice a la mesa y le demostrás que sabés exactamente lo que traman, tratando de sacar algún provecho de la situación.", destino: "entrada_chorro", personalidad: "Slytherin"},
    ]
  },

entrada_chorro: {
  texto: "El ladrón entra dando un salto desde la escalera y entre gritos y golpes empieza a amenazar a la gente.",
  opciones: [
      { texto: "Te escondés detrás de la barra", destino: "bataola_bar", personalidad: "Hufflepuff"},
      { texto: "Le tirás una mesa para ganar tiempo",  destino: "bataola_bar", personalidad: "Ravenclaw"},
      { texto: "Hacés de cuenta que sos parte de ellos", destino: "bataola_bar", personalidad: "Slytherin"},
      { texto: "Agarrás una botella y se la das en la cabeza", destino: "bataola_bar", personalidad: "Gryffindor"},
    ]
},

bataola_bar: {
  texto: "Un borracho le da un golpe al ladrón en una distracción y se le cae el arma, se arma una bataola intensa.",
  opciones: [
      { texto: "Te escondés detrás del borracho más gordo", destino: "muerte_bar", personalidad: "Slytherin"},
      { texto: "Te parás sobre una mesa y gritás algo para que todo el bar se una y ganar", destino: "muerte_bar", personalidad: "Gryffindor"},
      { texto: "Te colocás debajo de una mesa, tratando de meterle la traba a los ladrones cuando pasen por al lado", destino: "muerte_bar", personalidad: "Hufflepuff"},
      { texto: "Escaneás a algunos rápidamente para saber cuáles serán sus próximos movimientos y lograr una ventaja",  destino: "muerte_bar", personalidad: "Ravenclaw"},
    ]
},

muerte_bar: {
  texto: "El bien triunfó y la muerte le ha llegado a los dos malhechores, quienes yacen en el suelo del bar. Ves cómo sobresalen varios dólares del bolsillo de uno de ellos",
  opciones: [
      { texto: "Los agarrás inmediatamente para dárselos a la policía cuando llegue.", destino: "resultado_bar", personalidad: "Hufflepuff"},
      { texto: "Hacés de cuenta que estás verificando si está muerto y sin que nadie lo noto los agarrás.", destino: "resultado_bar", personalidad: "Slytherin"},
      { texto: "Gritás a viva voz '¡Mirá toda la plata que tenían!', la agarrás, y tragos para todos.", destino: "resultado_bar", personalidad: "Gryffindor"},
      { texto: "No es tuya. No hay nada que tengas que hacer",  destino: "resultado_bar", personalidad: "Ravenclaw"},
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
      Gryffindor: "🗡️ Te comportaste con valentía. Asumiste la situación y la tomaste como propia, ayudando y en ocasiones sacrificándote por el resto. Sos una Hufflepuff con corazón de Gryffindor.",
      Hufflepuff: "😨 Sos un poco temerosa. Evitaste el conflicto todo lo pudiste y lo miraste desde afuera. Es lo natural en vos, ¡sos una Hufflepuff de pura cepa!",
      Slytherin: " Cuánta astucia y... ¿un poco de maldad? Te manejaste de la mejor manera para salir airosa y triunfante de la situación. Sos una Hufflepuff con aires de Slytherin.",
      Ravenclaw: "🧠 Te destacaste por tu inteligencia. Estuviste delante de todos en cada movimiento. Una Hufflepuff que se puede sentar en una mesa de Ravenclaw de vez en cuando.",
      };

    return mensajes[personalidad] || `Tu personalidad más destacada es: ${personalidad}`;
  },
  opciones: [ 
    {texto: "Volver al bar", destino: "bar" },
    { texto: "Retomar el test", destino: "baraccion", resetPerfil: true}
  ],
  final: true
}
}