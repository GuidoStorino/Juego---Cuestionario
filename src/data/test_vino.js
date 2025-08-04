export const test_vino = {
    test_vino: {
        texto:"Un plan con tu pareja",
    opciones: [
      { texto: "Juegos y mucho alcohol", destino: "vino2", personalidad: "Fond de Cave"},
      { texto: "Drogarnos para reírnos sin parar", destino: "vino2", personalidad: "Nieto Senetiner"},
      { texto: "Una buena comida en la cama", destino: "vino2", personalidad: "Cuesta del Madero"},
      { texto: "Intentar algo que nunca hicimos, como enseñarle a bailar algún estilo", destino: "vino2", personalidad: "Talismán"},
    ]
  },

vino2: {
  texto: "Están calientes los dos, ¿cuál de estas preferís?",
  opciones: [
      { texto: "Tres polvazos. El último por atrás", destino: "vino3", personalidad: "Talismán"},
      { texto: "Quedarnos en la cama y coger unas cuantas veces",  destino: "vino3", personalidad: "Cuesta del Madero"},
      { texto: "Una buena cogida por el culo", destino: "vino3", personalidad: "Nieto Senetiner"},
      { texto: "Jugar juegos y terminar cogiendo", destino: "vino3", personalidad: "Fond de Cave"},
    ]
},

vino3: {
  texto: "Algo para explorar",
  opciones: [
      { texto: "Me gustaría relajarnos con un buen baño de espuma", destino: "resultado_vino", personalidad: "Cuesta del Madero"},
      { texto: "Hablar sobre nuestras inseguridades, entendernos", destino: "resultado_vino", personalidad: "Talismán"},
      { texto: "Encontrarnos con un amigo íntimo y conocer cosas que le gusten a esa persona", destino: "resultado_vino", personalidad: "Fond de Cave"},
      { texto: "Tomar drogas que nos transporten y a la vez nos conecten con el otro, entre viajes y tonterías",  destino: "resultado_vino", personalidad: "Nieto Senetiner"},
    ]
},



resultado_vino: {
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
      "Fond de Cave": "Fond de Cave -  \n  Te gustan los juegos y divertirte, incluso en la sexualidad, en donde combinás las dos cosas. Valorás la compañía de amigos y que te muestren sus intereses.",
      "Nieto Senetiner": "Nieto Senetiner - Te gusta reírte y usar las drogas no sólo para pasarla bien sino también para viajar un poco. También disfrutás del sexo no tradicional.",
      "Cuesta del Madero": "Cuesta del Madero - Vas a los placeres como la lluvia al suelo. Una cama, comer, coger, comer, coger, y on repeat.",
      "Talismán": "Talismán - Te encanta el disfrute y a pleno, pero no descuidás las partes más emocionales de una relación.",
      };

    return mensajes[personalidad] || `Tu personalidad más destacada es: ${personalidad}`;
  },
  opciones: [ 
    {texto: "Volver al bar", destino: "bar" },
    { texto: "Retomar el test", destino: "test_vino", resetPerfil: true}
  ],
  final: true
}
}