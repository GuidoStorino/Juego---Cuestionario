import retrato from '../assets/retrato.png';

export const crimenauto = { 
     crimenauto: {
      id: "crimenauto",
        texto:"",
    opciones: [
      { texto: "Mirar el cadáver", mensaje: "La sangre está fresca. La herida es de un cuchillo muy filoso."},
      { texto: "Billetera", mensaje: "DNI \n Pablo Carmanzio \n 40.845.342 \n Domicilio: Monjitas 321"},
      { texto: "Revisar baúl del auto", mensaje: "Huele a fiambre. Qué conveniente..."},
      { texto: "Guantera", destino: "guantera"},
      { texto: "Celular", destino: "codigo_celular"},
      { texto: "Creo que acá no hay más nada. Voy a ir a la casa de la víctima", destino: "casa_victima"},
      { texto: "Ya resolví todo", destino: "crimen_resuelto"}
    ],
    inicio: true
  },

  guantera: {
    id: "guantera",
    opciones: [
      {texto: "Licencia de conducir", mensaje: "Pablo Carmanzio \n Licencia Nacional de conducir N°4548 \n "},
      {texto: "Cédula verde", mensaje: "TITULAR: Mariano Gutierrez \n DOMINIO: PRT376 \n MARCA: TOYOTA \n MODELO: YARIS XLS 1.5 \n CHASIS: BRKR9262 "}
    ]
  },

  codigo_celular:{
    id: "codigo_celular",
    texto: "🔒 Ingrese el código para desbloquear.",
  opciones: [], 
  requiereCodigo: true,
  codigoCorrecto: "462825",
  desbloquea: [
    { texto: "Información del celular", mensaje: "Samsung G950F \n Designed & Engineered by Samsung \n Manufactured in Vietnam" },
    { texto: "Mensajes", mensaje: "No hay mensajes para mostrar" },
    { texto: "Volver a mirar el auto", destino: "crimenauto"},
  ]
},

celular_pablo: {
  id: "celular_pablo",
  opciones: [
    {texto: "📨Nano", mensaje: "'El camión con la mercadería llega tipo 8 y cuarto de la mañana. Después el local cierra al mediodía y abre a las 17.00' \n 'Ok listo' \n '¿Lo tenés?\nSí, y media estoy ahí'\nLlamada perdida 00:13 \n Llamada perdida 00:18 \nLlamada perdida 00:21"},
    {texto: "📨Profe tenis", mensaje: "'Nos vemos acá, bombón? \n Venís??'"},
    {texto: "📩Mamá", mensaje: "Ok."},
    {texto: "📩Amor", mensaje: "'¿Hoy venís a casa?' \n 'No, Caro. Voy a la fiesta. Vuelvo tarde seguro.'"}
  ]
},

casa_victima: {
  id: "casa_victima",
    texto: "La casa está cerrada.",
    opciones: [
        {texto: "Mirar por la ventana", mensaje: retrato},
        {texto: "Ir unas casas más allá. Se oyen ruidos", destino: "casa_fiesta"},
        { texto: "Ya resolví todo", destino: "crimen_resuelto"}
    ]
},

casa_fiesta: {
  id: "casa_fiesta",
    texto: "Aparentemente es una casa en donde está habiendo una fiesta. Te dejan pasar. Aceptás la invitación, quizás puedas hablar con la gente y seguir investigando.",
    opciones: [
        {texto: "Una chica bailando borracha", mensaje: "'¿Pablo? Mmm... No, no no lo conozco'"},
        {texto: "Dos chicos tomando cerveza apoyados contra una pared", mensaje: "'No vino, parece. ¿Por qué no te quedás con nosotros?'"},
        {texto: "Una chica morena de pelo lacio", mensaje: "'Lo estoy esperando... Ya lo extraño. Pará, ¿vos sos la novia?'"},
        {texto: "Mirar la mesa", mensaje: "Gaseosas. Papas fritas. Bolsa de almacén que dice 'El Fiambrecito - Iberia 932'"},
        {texto: "Un chico con gesto preocupado y el celular en la mano", mensaje: "'Es mi amigo, lo llamé pero no atiende. ¿Lo conocés?'"},
        {texto: "Ir a la casa del amigo", destino: "casa_amigo"},
        {texto: "Ir al almacén", destino: "almacen_don_ernesto"},
        { texto: "Ya resolví todo", destino: "crimen_resuelto"}
    ]
},

casa_amigo: {
  id: "casa_amigo",
  texto: "🔒 Te encontrás con una puerta con un teclado numérico.",
  opciones: [{texto: "Ir al almacén", destino: "almacen_don_ernesto"}, {texto: "Ir a la casa de la víctima", destino: "casa_victima"}], // no hay opciones al principio, se habilitan si el código es correcto
  requiereCodigo: true, // marca que esta escena tiene input de código
  codigoCorrecto: "9262", // el código que desbloquea
  desbloquea: [
    { texto: "Hay una libreta", mensaje: `STD 8926 \n MP 9499 \n BAPRO 3564 \n EF 7244` },
    { texto: "Cargar celular", requiere: "celular", destino: "celular_pablo"},
    { texto: "Ir al almacén", destino: "almacen_don_ernesto" },
    { texto: "Ya resolví todo", destino: "crimen_resuelto"}
  ]
},


  almacen_don_ernesto : {
    id: "almacen_don_ernesto",
    texto: 
        "El almacén es un local que se ve pequeño y está cerrado, pero tiene una cerradura con código.",
        opciones: [{texto: "Ir a la casa del amigo", destino: "casa_amigo"}, {texto: "Volver a la escena del crimen", destino: "crimenauto"}],
        requiereCodigo:  true,
        codigoCorrecto: "7244",
        desbloquea: [
      { texto: "Caminar el local", mensaje: "Cuánta comida. Sería feliz acá"},
      { texto: "Revisar el mostrador", mensaje: "Hay un celular y unos papeles"},
      { texto: "Ver celular", mensaje: "Sin batería"},
      { texto: "Mirar los papeles", mensaje: "CONSTANCIA POLICIAL POR DENUNCIA \n El funcionario policial que suscribe a los efectos legales hace constar que el denunciante Ernesto Eustaquio Gandolfo se apersonó en esta unidad y manifestó el hurto de seis patas de jamón, robadas de su local 'El fiambrecito', ubicado en Iberia 932 entre Serrano y Cerdín. El hecho ocurrió entre las 12:30 y las 16:45 del día sábado 26 de julio de 2025. A solicitud de la parte interesada, se expide la presente constancia, registrada bajo el expediente N° 4628/25"},
      { texto: "Robar celular", mensaje: "Celular robado", objeto: "celular", destino: "almacen_don_ernesto"},
      { texto: "Volver a la escena del crimen", destino: "crimenauto"},
      { texto: "Ir a la casa del amigo", destino: "casa_amigo"},
      { texto: "Ya resolví todo", destino: "crimen_resuelto"}
     ]
      },

      crimen_resuelto: {
        id: "crimen_resuelto",
        texto: "Excelente. ¿Quién fue el asesino? Me muero de intriga.",
        opciones: [{texto: "Volver a la escena del crimen", destino: "crimenauto"}, {texto: "Ir a la casa de la víctima", destino: "casa_victima"}, {texto: "Ir a la casa del amigo", destino: "casa_amigo"}, {texto: "Ir al almacén", destino: "almacen_don_ernesto"}],
        requiereCodigo: true,
        codigoCorrecto: ["Ernesto", "ernesto", "ERNESTO", "Ernesto Eustaquio Gandolfo", "Don Ernesto", "don ernesto", "Ernesto Eustaquio", "ernesto eustaquio"],
        desbloquea: [
          {texto: "Efectivamente. Pablo le robó seis patas de jamón al almacenero para llevar a la fiesta a la que nunca llegó, ya que Ernesto, furioso luego de hacer la denuncia ante una policía que largó alguna que otra risotada al escuchar la frase 'robo de patas de jamón', decidió hacer justicia por mano propia. Y así fue, interceptó a Pablo en su auto y lo asesinó con su cuchillo para cortar fiambre. Tuvo la precaución de quitarle su celular por si había algo ahí que lo vinculara con él, para luego implantarle otro."},
          {texto: "Volver al bar", destino: "bar"},
          {texto: "Salir a la calle", destino: "calle_inicio"}
        ],
        final:true
      }

    
  }