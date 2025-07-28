export const crimenauto = {
    crimenauto: {
        texto:"",
    opciones: [
      { texto: "Mirar el cadáver", mensaje: "La sangre está fresca"},
      { texto: "Billetera", mensaje: "DNI Pablo Carmanzio 40.845.342 Domicilio: Monjitas 321"},
      { texto: "Revisar baúl del auto", mensaje: "Huele a fiambre. Qué conveniente..."},
      { texto: "Guantera", mensaje: "Un papel que dice 6."},
      { texto: "Celular", destino: "codigo_celular"},
      { texto: "Bolsillos", mensaje: ""},
      { texto: "Creo que tengo todo lo que necesito. Voy a ir a la casa de la víctima", destino: "casa_victima"}
    ]
  },

  codigo_celular:{
    texto: "🔒 Ingrese el código para desbloquear.",
  opciones: [], 
  requiereCodigo: true,
  codigoCorrecto: "462825",
  desbloquea: [
    { texto: "Información del celular", mensaje: "Samsung G950F- Designed & Engineered by Samsung Manufactured in Vietnam" },
    { texto: "Mensajes", mensaje: "No hay mensajes para mostrar" },
    { texto: "Volver a mirar el auto", destino: "crimenauto"}
  ]
},

celular_pablo: {
  opciones: [
    {texto: "Ver whatsapp", destino: "" }
  ]
},

casa_victima: {
    texto: "La casa está cerrada.",
    opciones: [
        {texto: "Mirar por la ventana", mensaje: "img.retrato"},
        {texto: "Ir unas casas más allá. Se oyen ruidos", destino: "casa_fiesta"}
    ]
},

casa_fiesta: {
    texto: "Aparentemente es una casa en donde está habiendo una fiesta. Te dejan pasar. Aceptás la invitación, quizás puedas hablar con la gente y seguir investigando.",
    opciones: [
        {texto: "Una chica bailando borracha", mensaje: "'¿Pablo? Mmm... No, no no lo conozco'"},
        {texto: "Dos chicos tomando cerveza apoyados contra una pared", mensaje: "'No vino, parece. ¿Por qué no te quedás con nosotros?'"},
        {texto: "Una chica morena de pelo lacio", mensaje: "'Lo estoy esperando... Ya lo extraño'"},
        {texto: "Mirar la mesa", mensaje: "Gaseosas. Papas fritas. Residuo de papel de nylon con una etiqueta que dice 'El Fiambrecito'"},
        {texto: "Un chico con gesto preocupado y el celular en la mano", mensaje: "'Es mi amigo, lo llamé pero no atiende. ¿Lo conocés?'"},
        {texto: "Ir a la casa del amigo", destino: "casa_amigo"},
        {texto: "Ir al almacén", destino: "almacen_don_ernesto"}
    ]
},

casa_amigo: {
  texto: "🔒 Te encontrás con una puerta con un teclado numérico.",
  opciones: [], // no hay opciones al principio, se habilitan si el código es correcto
  requiereCodigo: true, // marca que esta escena tiene input de código
  codigoCorrecto: "1234", // el código que desbloquea
  desbloquea: [
    { texto: "Hay una libreta", mensaje: `STD 8926 MP 9499 BAPRO 3564 E 1234` },
    { texto: "Cargar celular", requiere: "celular", destino: "celular_pablo"},
    { texto: "Ir al almacén", destino: "almacen_don_ernesto" },
    {texto: "Volver a la escena del crimen", destino: "crimenauto"}
  ]
},

  almacen_don_ernesto : {
    texto: 
        "El almacén es un local que se ve pequeño y está cerrado, pero tiene un acceso con código.",
        opciones: [],
        requiereCodigo:  true,
        codigoCorrecto: "1234",
        desbloquea: [
      { texto: "Caminar el local", mensaje: "Cuánta comida. Sería feliz acá"},
      { texto: "Revisar el mostrador", mensaje: "Hay un celular y unos papeles"},
      { texto: "Ver celular", mensaje: "Sin batería"},
      { texto: "Mirar los papeles", mensaje: "CONSTANCIA POLICIAL POR DENUNCIA El funcionario policial que suscribe a los efectos legales hace constar que el denunciante Ernesto Eustaquio Gandolfo se apersonó en esta unidad para realizar la denuncia de seis patas de jamón, robadas de su local 'El fiambrecito', ubicado en Iberia 932 entre Serrano y Cerdín. A solicitud de la parte interesada, se expide la presente constancia, registrada bajo el expediente N° 4628/25"},
      { texto: "Robar celular", objeto: "celular", mensaje: "Celular robado"}
     ]
      }

    
  }