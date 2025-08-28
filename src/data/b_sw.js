import './b_sw.css';

export const b_sw = {
b_sw: {
  texto: "Entramos al boliche. Al principio se ve un bar no muy concurrido. Pero subimos una escalera y se va escuchando música. Dejamos nuestros abrigos y celulares y nos vamos para donde está la música. Bienvenidos a la fiesta.",
  leche: 1,
  opciones: [
    { texto: "Continuar", destino: "bol_sw2" },
    { texto: "Un momento, quiero comprar algo antes", destino: "guardarropas"},
    { texto: "Salir del boliche", destino: "calle_inicio" }
  ]
},

guardarropas: {
  leche: 0,
  opciones: [
    { texto: "Preservativos Prime Texturado", objeto: "Forros", destino: "b_sw", costo: 5},
    { texto: "Un chocolate para la vuelta", objeto: "Chocolate", destino: "b_sw", costo: 5},
    { texto: "Seguir para el boliche", destino: "bol_sw2"}
  ]
},

bol_sw2: {
  texto: "Suena una música que siempre tiene una base electrónica de fondo. La pista es relativamente pequeña y hay gente bailando y otra comprando tragos en la barra.",
  leche: 1,
  opciones: [
    { texto: "Ir a bailar", destino: "baile_sw" },
    { texto: "Ir por un trago", destino: "trago_sw" }
  ]
},
baile_sw: {
  texto: "Damos algunos de nuestros mejores pasos. Alrededor hay gente bailando también. Algunos, vestidos con no tanta ropa. Además de la pista y la barra, en el lugar hay unas habitaciones en el piso en donde estamos y una escalera.",
  leche: 0,
  opciones: [
    { texto: "Explorar el piso", destino: "primer_piso" },
    { texto: "Subir las escaleras", destino: "escaleras_sw" },
    { texto: "Seguir bailando", destino: "pista_baile"},
    {texto: "Salir del boliche", destino: "calle_inicio"}
  ]
},
trago_sw: {
  texto: "Esta caipirinha esta genial, y encima no fue muy cara. Alrededor tenemos gente bailando, algunos muy sensualmente. ¿O es la bebida? Qué importa, ¿no? También hay otras habitaciones, al parecer, en el piso donde estamos, y una escalera hacia arriba.",
  leche: 1,
  opciones: [
    { texto: "Explorar el piso", destino: "primer_piso" },
    { texto: "Subir las escaleras", destino: "escaleras_sw" },
    { texto: "Seguir bailando", destino: "pista_baile"}
  ]
},

primer_piso: {
  texto: "Los pasillos son estrechos, oscuros, y con luces rojas. Caminando uno se encuentra con diferentes habitaciones y un baño.",
  leche: 1,
  opciones: [
    {texto: "PUERTA 1: Parejas", destino: "puerta_uno"},
    {texto: "PUERTA 2: Solos y solas", destino: "puerta_dos"},
    {texto: "Volver a la pista de baile", destino: "baile_sw"}
  ]

},

escaleras_sw: {
  texto: "Las escaleras llevan a un ambiente en donde se puede empezar a respirar un aire un poco más fresco. Llegamos a la terraza del lugar, un lugar espacioso al aire libre en donde hay gente charlando.",
  leche: 1,
  opciones: [
    {texto: "En la barra hay una chica comprando, la vemos de espaldas. Tiene una calza transparente. Vamos a hablarle", destino: "hablar_terraza"},
    {texto: "Hay una pareja bonita. Él está vestido con una camisa roja a cuadros. Ella tiene botas, un saco negro y pinta de estudiante de contaduría. Podríamos hablarles a ellos...", destino: "hablar_pareja"},
    {texto: "Tomar un poco de aire, mirar a la gente, opinar y adivinar sobre sus vidas, y volver a bajar", destino: "primer_piso"}
  ]
},

puerta_uno: {
  texto: "La habitación está oscura. Se oyen algunos gemidos y se llega a ver que hay unos sillones a los costados. Los ojos se nos van acostumbrando un poco y empezamos a ver a las personas un poco más nítidamente. Hay un chabón alto dándole a una rubia contra la pared. Del otro lado, una chica se monta una pija sin haberse quitado la ropa interior. Unos lugares más allá y en el mismo sillón, dos personas se practican sexo oral entre sí.",
  leche: 2,
  opciones: [
    {texto: "Agacharte ahí mismo y empezar a chuparme la pija", destino: "chupada_sw"},
    {texto: "Mirar a la pareja coger contra la pared", destino: "mirar_coger"},
    {texto: "Tomar el lugar que está al lado de la chica montando la pija y sentarte sobre la mía", destino: "montar_sw"},
    {texto: "Salir de la habitación", destino: "primer_piso"}
  ]
},

puerta_dos: {
  texto: "Todo parece vacío al entrar, está realmente oscuro. Pero vemos después que no es así, hay dos chicos a un costado.",
  leche: 1,
  opciones: [
    {texto: "Sentarnos en un sillón y besarnos", destino: "beso_sw"},
    {texto: "Salgamos de esta habitación, no quiero estar acá con estos pervertidos", destino: "primer_piso"}
  ]
},

chupada_sw: {
  texto: "No estaba del todo parada, pero adentro de tu boca se endurece muy rápido y empezás a hacer movimientos que la ponen todavía más gorda.",
  leche: 3,
  opciones: [
    {texto: "Mirar cómo disfruto mientras me la chupás", destino: "chupada_puerta_uno"},
    {texto: "Empezar a pajearme para que me excite mientras miro alrededor", destino: "mirar_habitacion"},
    {texto: "Mirarme, sonreírme, volver a ponerme el pantalón y llevarme de la mano a seguir explorando el lugar", destino: "primer_piso"}
  ]
},

mirar_habitacion: {
  texto: "Me mirás mientras me pajeás y me sonreís, con una sonrisa que hasta tiene malicia. Sabés bien lo que me gusta. Me seguís pajeando, mientras miro, mientras me hablás y te leo los labios, mientras... Uff...",
  leche: 4,
  opciones: [
    {texto: "Salir de la habitación", destino: "primer_piso"}
  ]
},

beso_sw: {
  texto: "Tus besos me estimulan y me la ponen dura. Empiezo a tocarte un poco por debajo de la remera y vos hacés lo mismo. Después de mucho beso y toqueteo, abrimos un poco los ojos para ver que las dos personas que estaban ahí se están tocando mientras nos miran",
  leche: 2,
  opciones: [
    {texto: "Nos seguimos besando con más ganas para que se calienten más", destino: "besos_puerta_dos"},
    {texto: "Demasiado para mí. Salgamos de acá", destino: "primer_piso"},
    {texto: "Te saco la remera, que se toquen viendo esas tetas a punto de explotarte adentro del corpiño", destino: "tetas_puerta_dos"}
  ]

},

chupada_puerta_uno: {
  texto: "La seguís chupando con los ojitos mirando para arriba. Te acaricio un poco la cabeza.",
  leche: 2,
  opciones: [
    {texto: "Meter un pongo de lengua y de velocidad", destino: "chupada_lengua"},
    {texto: "Levantarte, agarrarme de la mano y llevarme a un sillón", destino: "sillon_puerta_uno"},
    {texto: "Levantarte, dejarme caliente, agarrarme de la mano y salir de la habitación", destino: "primer_piso"}
  ]
},

chupada_lengua: {
  texto: "La pija se me pone más dura, ahora cerraste los ojos y te concentrás. Te agarro la cabeza más fuerte y disfruto.",
  leche: 3,
  opciones: [
    {texto: "Seguir", destino: "chupada_acabada"},
    {texto: "Volver a mirarme, sonreír, subirme el pantalón y salir de la habitación", destino: "primer_piso"}
  ]
},

chupada_acabada: {
  texto: "Te la di toda en la boca",
  leche: 4,
  opciones: [
    {texto: "Salir de la habitación", destino: "primer_piso"},
    {texto: "Salir del boliche", destino: "calle_inicio"}
  ]
},

mirar_coger: {
  texto: "La mina parece estar pasándola bien mientras se la dan toda desde atrás. Me tocás un poco la pija por sobre el pantalón y me decís cosas en el oído",
  leche: 2,
  opciones: [
    {texto: "Me pedís que te haga lo mismo y me llevás contra una pared", destino: "coger_pared"},
    {texto: "Te agachás y me la empezás a chupar ahí mismo", destino: "chupada_sw"},
    {texto: "Bueno, basta de mirar por acá, vamos a ver el lugar un poco más", destino: "primer_piso"}
  ]
},

coger_pared: {
  texto: "Te empiezo a dar contra la pared y empiezo a gemir de cómo me gusta. Te entra de una manera hermosa. Estamos mojados los dos, te agarro una teta desde atrás.",
  leche: 3,
  opciones: [
    {texto: "Ya fue. Te sigo dando hasta no dar más", destino: "acabar_pared"},
    {texto: "Paremos un poco. La noche no termina acá", destino: "primer_piso"}
  ]
},

acabar_pared: {
  texto: "Me habría quedado rebotando en tu cola toda la noche si hubiera podido.",
  leche: 4,
  opciones: [
    {texto: "Volvamos a la pista de baile", destino: "baile_sw"},
    {texto: "Salgamos de la habitación", destino: "primer_piso"}
  ]
},

montar_sw: {
  texto: "Te empezás a mover de una manera hermosa, no hay nada que me guste más que lo que me estás haciendo. Te miro a la cara y te beso, te toco un poco las tetas. Siento la pija bien dura adentro de tu concha que no se para de mover",
  leche: 3,
  opciones: [
    {texto: "Seguir montándome", destino: "acabada_montar"},
    {texto: "Te cansás un poco... Ahora vos vas al sillón", destino: "swing_1"},
    {texto: "Salir de la habitación", destino: "primer_piso"}
  ]
},

acabada_montar: {
  texto: "Te tuve que empezar a hacer gestos, a tocarte, apretarte, para que salieras de ahí (por más que no quisiera).",
  leche: 4,
  opciones: [
    {texto: "Ir a la pista", destino: "baile_sw"},
    {texto: "Salir del boliche", destino: "calle_inicio"}
  ]
},

swing_1: {
  texto: "Te recostás sobre el sillón, abrís las piernas y te empiezo a dar. En eso, una pareja viene y empieza a hacer lo suyo. El que está acostado es él. Ella, en cuatro, se la chupa. Él te mira y te empieza a tocar un poco las tetas",
  leche: 3,
  opciones: [
    {texto: "Me preguntás si está todo bien, y me decís que yo también puedo tocar", destino: "swing_2"},
    {texto: "No te gusta esto. Agarramos nuestra ropa y nos vamos", destino: "primer_piso"}
  ]
},

swing_2: {
  texto: "Te sigue tocando las tetas por encima de la ropa mientras busca cómo sacártela. Yo le manoseo el orto a la pareja, por encima de su tanga blanca.",
  leche: 3,
  opciones: [
    {texto: "Hasta acá llegamos. Te levantás, agarrás la ropa, le decís 'gracias' y nos vamos", destino: "primer_piso"},
    {texto: "Te levantás un poco la ropa para quedarte en corpiño mientras yo le sigo tocando el culo a la mina y un poco más abajo también", destino: "swing_3"}
  ]
},

swing_3: {
  texto: "Tenés mi pija adentro y te estimulan los pezones. Yo te doy mientras le acaricio la conchita a la que tengo al lado.",
  leche: 3,
  opciones: [
    {texto: "Seguir disfrutando, la estamos pasando bien", destino: "swing_4"},
    {texto: "Estuvo bueno, pero mejor vamos a otro lado", destino: "primer_piso"},
    ]
},

swing_4: {
  texto: "Menos mal que te levantaste la ropa porque si no te la habría manchado toda. Aunque ese corpiño rojo ahora tiene un poco de blanco",
  leche: 4,
  opciones: [
    {texto: "Salir de la habitación, no sin antes darle las gracias a la pareja, obvio", destino: "primer_piso"},
    {texto: "Salir del boliche", destino: "calle_inicio"}
  ]
},

besos_puerta_dos: {
  texto: "Nuestras bocas no dejan de tocarse y nosotros tampoco, de vez en cuando miramos de reojo. Uno de los dos tiene la pija que no da más",
  leche: 3,
  opciones: [
    {texto: "Te desabrocho el pantalón, nos paramos y te pongo contra la pared", destino: "coger_puerta_dos"},
    {texto: "Ok, ya le dimos bastante. Que terminen solos.", destino: "primer_piso"}
  ]
},

coger_puerta_dos:{
  texto: "Tenés las manos contra la pared y toda mi pija adentro. Empezás a gemir un poco. Empiezo a darte de costado para que te puedan ver mejor el orto",
  leche: 3,
  opciones: [
    {texto: "Empezás a mover el culo.", destino: "acabar_puerta_dos", puntos: 10},
    {texto: "Abrir la boca sugerentemente mientras los mirás", destino: "acabar_puerta_dos", puntos: 10}
  ]
},

acabar_puerta_dos: {
  texto: "Sos tan putita que no aguanté más, ni yo ni nadie. Hiciste acabar tres pijas y te dejé toda la cola llena de leche",
  leche: 4,
  opciones: [
    {texto: "Salir de la habitación", destino: "primer_piso"},
    {texto: "Salir del boliche", destino: "calle_inicio"}
  ]
},

tetas_puerta_dos: {
  leche: 2,
  texto: "Te toco un poco por encima del corpiño mientras nos seguimos besando, te las agarro y te las junto para que se vean mejor",
  opciones: [
    {texto: ""}
  ]
}

}