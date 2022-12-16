export { generateGrafica };

<script src="https://cdn.jsdelivr.net/npm/chart.js@latest/dist/Chart.min.js"></script>;

const año = [
  "1972",
  "1993",
  "1974",
  "1994",
  "1997",
  "1994",
  "1990",
  "1994",
  "2000",
  "1994",
];

const presupuesto = {
  label: " presupuesto pelicula : ",
  data: [],
  backgroundColor: "rgba(54, 162, 235, 0.2)",
  borderColor: "rgba(54, 162, 235, 1)",
  borderWidth: 1,
};

function generateGrafica() {
  const grafica = document.querySelector("#grafica");
  const peliculas = [
    "El Padrino",
    "La lista de Schindler",
    "El Padrino 2",
    "Cadena perpetua",
    "La vida es bella",
    "El Rey León",
    "Uno de los Nuestros",
    "Forrest Gump",
    "Gladiator",
    "Pulp Fiction",
  ];

  const presupuesto = {
    label: " Presupuesto pelicula : ",
    data: [
      6000000, 22000000, 13000000, 25000000, 20000000, 45000000, 25000000,
      55000000, 103000000, 8000000,
    ],
    backgroundColor: "rgba(54, 162, 235, 0.2)",
    borderColor: "rgba(54, 162, 235, 1)",
    borderWidth: 1,
  };

  const recaudacion = {
    label: " Recaudación pelicula : ",
    data: [
      136900000, 322200000, 48000000, 73300000, 230100000, 1084000000, 47100000,
      677387716, 457640427, 213900000,
    ],
    backgroundColor: "rgba(54, 162, 235, 0.2)",
    borderColor: "rgba(54, 162, 235, 1)",
    borderWidth: 1,
  };

  new Chart($grafica, {
    type: "bar",
    data: {
      labels: peliculas,
      datasets: [presupuesto, recaudacion],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}
