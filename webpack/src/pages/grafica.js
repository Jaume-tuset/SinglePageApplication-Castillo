export { generarGrafica };

function generarGrafica() {
  let graph = document.createElement("div");
  graph.id = "grafica";
  graph.classList.add("container");
  graph.innerHTML = `
       <div id="container">
        <img src="https://produccionaudiovisual.com/wp-content/uploads/2018/12/evolucion-espectadores.jpg" alt="">
       </div>
  `;
  return graph;
}
