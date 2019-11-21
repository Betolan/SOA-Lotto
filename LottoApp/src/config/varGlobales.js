const variables = {
  //Datos personales
  nombre: "",
  apellidos: "",
  cedula: "",
  contraseña: "",
  carteraVirtual: 1000,

  //Constantes para tablas
  indexPremios: 18,
  indexRecargas: 18,
  indexJuegos: 18,

  //Variables jugar.js
  pais: "Costa Rica",
  puntoVenta: "",
  puntoVentaJugado: "",
  opciones: [],
  lenghtOpciones: 0,
  horaJugada: "",

  //Vaiables generales
  fechaActual: "21-11-2019",
  apuestaLimite: 10000,

  //Variables recarga
  horaRecarga: "03:00",
  puntoVentaRecarga: "Siquirres",

  //Variables ganador
  puntoVentaGanador: "Siquirres",
  numerosGanador: [],
  numerosJugados: [],
  horaGanador: "",
  premio: 0,

  //jugar.js
  titulosTablaJugar: [
    "País", "Punto de venta", "Horario"
  ],
  puntosDisponiblesJugar: [
    ["Costa Rica", "San Ramón", "San Ramón"],
    ["Costa Rica", "Siquirres", "Siquirres"]
  ],
  horarios: [
    ["12:00", "15:00", "10:00", "Cancelar"],
    ["13:00", "17:00", "Cancelar"]
  ],

  //recargas.js
  titulosTablaRecargas: [
    "# Transacción", "País", "Punto de venta", "Fecha", "Hora", "Recarga"
  ],
  widthTitulosRecargas: [85, 80, 95, 80, 60, 60],
  recargas: [
    ["1", "Costa Rica", "San Ramón", "10-01-2019", "13:00", "₡ 3000"],
    ["2", "Costa Rica", "Siquirres", "10-02-2019", "09:00", "₡ 3000"],
    ["3", "Costa Rica", "Los Chiles", "09-02-2019", "13:00", "₡ 1000"],
    ["4", "Costa Rica", "Paraíso", "02-03-2019", "15:00", "₡ 2000"],
    ["5", "Costa Rica", "San Isidro", "10-04-2019", "10:00", "₡ 3000"],
    ["6", "Costa Rica", "San Pedro", "30-05-2019", "13:00", "₡ 4000"],
    ["7", "Guatemala", "Escuintla", "26-05-2019", "06:00", "₡ 3000"],
    ["8", "Costa Rica", "Turrialba", "29-05-2019", "08:00", "₡ 3000"],
    ["9", "Costa Rica", "Golfito", "10-07-2019", "13:00", "₡ 6000"],
    ["10", "Honduras", "La Ceiba", "10-07-2019", "22:00", "₡ 4000"],
    ["11", "Costa Rica", "Perez Zeledón", "25-10-2019", "20:00", "₡ 1000"],
    ["12", "Costa Rica", "Limón", "30-10-2019", "13:00", "₡ 3000"],
    ["13", "Costa Rica", "Jaco", "20-10-2019", "21:00", "₡ 2000"],
    ["14", "Costa Rica", "Puerto Viejo", "26-11-2019", "13:00", "₡ 6000"],
    ["15", "Costa Rica", "Barva", "16-11-2019", "17:00", "₡ 5000"],
    ["16", "Nicaragua", "Managua", "19-11-2019", "16:00", " 2000"],
    ["17", "Salvador", "San Salvador", "14-11-2019", "15:00", "₡ 3000"]
  ],

  //premios.js
  titulosTablaPremios: [
    '# Premio', 'País', 'Punto de venta', 'Fecha', 'Hora', 'Premio', 'Números'
  ],
  widthTitulosPremios: [85, 80, 95, 80, 60, 60, 100],
  premios: [
    ["1", "Costa Rica", "San Ramón", "10-01-2019", "13:00", "₡ 10000", "45-34-27-88-90"],
    ["2", "Costa Rica", "Siquirres", "10-02-2019", "09:00", "₡ 20000", "07-11-22-90-45"],
    ["3", "Costa Rica", "Los Chiles", "09-02-2019", "13:00", "₡ 21000", "48-33-27-68-80"],
    ["4", "Costa Rica", "Paraíso", "02-03-2019", "15:00", "₡ 22000", "78-25-04-01-99"],
    ["5", "Costa Rica", "San Isidro", "10-04-2019", "10:00", "₡ 23000", "20-93-45-40-70"],
    ["6", "Costa Rica", "San Pedro", "30-05-2019", "13:00", "₡ 24000", "88-77-11-22-23"],
    ["7", "Guatemala", "Escuintla", "26-05-2019", "06:00", "₡ 23000", "45-34-27-88-90"],
    ["8", "Costa Rica", "Turrialba", "29-05-2019", "08:00", "₡ 13000", "02-33-85-60-40"],
    ["9", "Costa Rica", "Golfito", "10-07-2019", "13:00", "₡ 36000", "48-33-27-68-80"],
    ["10", "Honduras", "La Ceiba", "10-07-2019", "22:00", "₡ 14000", "23-94-48-45-73"],
    ["11", "Costa Rica", "Perez Zeledón", "25-10-2019", "20:00", "₡ 12000", "45-34-27-88-90"],
    ["12", "Costa Rica", "Limón", "30-10-2019", "13:00", "₡ 23000", "33-84-08-15-53"],
    ["13", "Costa Rica", "Jaco", "20-10-2019", "21:00", "₡ 12000",  "45-34-27-88-90"],
    ["14", "Costa Rica", "Puerto Viejo", "26-11-2019", "13:00", "₡ 61000", "23-94-48-45-73"],
    ["15", "Costa Rica", "Barva", "16-11-2019", "17:00", "₡ 15000", "88-77-11-22-23"],
    ["16", "Nicaragua", "Managua", "19-11-2019", "16:00", "₡ 12000", "07-11-22-90-45"],
    ["17", "Salvador", "San Salvador", "14-11-2019", "15:00", "₡ 13000", "33-74-68-85-23"]
  ],

  //juegos.js
  titulosTablaJuegos: [
    '# Juego', 'País', 'Punto de venta', 'Fecha', 'Hora', 'Apuesta', 'Números'
  ],
  widthTitulosJuegos: [85, 80, 95, 80, 60, 60, 100],
  juegos: [
    ["1", "Costa Rica", "San Ramón", "10-01-2019", "13:00", "₡ 3000", "45-34-27-88-90"],
    ["2", "Costa Rica", "Siquirres", "10-02-2019", "09:00", "₡ 3000", "07-11-22-90-45"],
    ["3", "Costa Rica", "Los Chiles", "09-02-2019", "13:00", "₡ 1000", "48-33-27-68-80"],
    ["4", "Costa Rica", "Paraíso", "02-03-2019", "15:00", "₡ 2000", "78-25-04-01-99"],
    ["5", "Costa Rica", "San Isidro", "10-04-2019", "10:00", "₡ 3000", "20-93-45-40-70"],
    ["6", "Costa Rica", "San Pedro", "30-05-2019", "13:00", "₡ 4000", "88-77-11-22-23"],
    ["7", "Guatemala", "Escuintla", "26-05-2019", "06:00", "₡ 3000", "45-34-27-88-90"],
    ["8", "Costa Rica", "Turrialba", "29-05-2019", "08:00", "₡ 3000", "02-33-85-60-40"],
    ["9", "Costa Rica", "Golfito", "10-07-2019", "13:00", "₡ 6000", "48-33-27-68-80"],
    ["10", "Honduras", "La Ceiba", "10-07-2019", "22:00", "₡ 4000", "23-94-48-45-73"],
    ["11", "Costa Rica", "Perez Zeledón", "25-10-2019", "20:00", "₡ 1000", "45-34-27-88-90"],
    ["12", "Costa Rica", "Limón", "30-10-2019", "13:00", "₡ 3000", "33-84-08-15-53"],
    ["13", "Costa Rica", "Jaco", "20-10-2019", "21:00", "₡ 2000",  "45-34-27-88-90"],
    ["14", "Costa Rica", "Puerto Viejo", "26-11-2019", "13:00", "₡ 6000", "23-94-48-45-73"],
    ["15", "Costa Rica", "Barva", "16-11-2019", "17:00", "₡ 5000", "88-77-11-22-23"],
    ["16", "Nicaragua", "Managua", "19-11-2019", "16:00", "₡ 2000", "07-11-22-90-45"],
    ["17", "Salvador", "San Salvador", "14-11-2019", "15:00", "₡ 3000", "33-74-68-85-23"]
  ],
};

export { variables };
