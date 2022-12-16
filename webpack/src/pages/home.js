export { home };

import "../scss/styleBody.css";
import "../scss/styleCabecera.css";

function home() {
  let mainWindowRow = document.createElement("div");
  mainWindowRow.id = "body_cine";
  mainWindowRow.classList.add("container");
  mainWindowRow.innerHTML = `

  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
  <br><br>
  <div class="wrapper">
  <div class="slider" id="slider">
    <ul class="slides">
      <li class="slide" id="slide1">
        <a href="#">
          <img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/cabecera/LOR.jpg?t=2022-12-14T18%3A52%3A07.212Z" alt="photo 1">
        </a>
      </li>
      <li class="slide" id="slide2">
        <a href="#">
          <img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/cabecera/avatar.jpg?t=2022-12-14T18%3A53%3A04.060Z" alt="photo 2">
        </a>
      </li>
      <li class="slide" id="slide3">
        <a href="#">
          <img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/cabecera/batman.jpg?t=2022-12-14T18%3A53%3A10.539Z" alt="photo 3">
        </a>
      </li>
      <li class="slide" id="slide4">
        <a href="#">
          <img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/cabecera/ice_age.jpg?t=2022-12-14T18%3A53%3A20.734Z" alt="photo 4">
        </a>
      </li>
      <li class="slide" id="slide5">
        <a href="#">
          <img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/cabecera/jurassick_park.jpg?t=2022-12-14T18%3A53%3A31.538Z" alt="photo 5">
        </a>
      </li>
      <li class="slide" id="slide6">
        <a href="#">
          <img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/cabecera/star_wars.jpg?t=2022-12-14T18%3A53%3A43.185Z" alt="photo 6">
        </a>
      <li class="slide">
        <a href="#">
          <img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/header/camera-header.jpg" alt="cabecera">
        </a>
      </li>
    </ul>
  </div>
</div>

  <article class="col-md-12">
        <header>
            <h2>NOTICIAS</h2> </header>
        <h2></h2>
        <div class="cards-1 section-gray">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card card-blog">
                            <div class="card-image">
                                <a href="#"> <img class="img" src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/noticias/anillos%20de%20poder.jpg">
                                    <div class="card-caption"> Anillos de poder </div>
                                </a>
                                <div class="ripple-cont"></div>
                            </div>
                            <div class="table">
                                <h6 class="category text-info">Temporada 2</h6>
                                <p class="card-description">El Señor de los Anillos: Los anillos de poder ya tiene en marcha el rodaje de su temporada 2, que no debería llegar hasta por lo menos 2024 en los lares de Prime Video. Tras la recepción un tanto agridulce de la primera temporada (aquí os dejamos nuestra crítica completa), los espectadores esperan con ansia reencontrarse con estos personajes de la Tierra Media para ver cuáles serán los nuevos caminos que se explorarán dentro de la ficción de Tolkien ahora que las piezas del tablero ya están posicionadas (no entraremos en spoilers). Se ha informado ahora, tras confirmar nuevos actores y para ir abriendo boca, de quiénes serán los cineastas a cargo de los nuevos episodios de Los anillos de poder: Charlotte Brändström, Sanaa Hamri y Louise Hooper han sido las elegidas para dar forma a la temporada 2.</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="table table-info">
                                <h5 class="category-social">
	    									<i class="fa fa-twitter"></i> Twitter
	    								</h5>
                                <h4 class="card-caption">
	    									<a href="https://www.formulatv.com/noticias/amazon-ignoro-peter-jackson-los-anillos-de-poder-117396/">"Amazon ignoró a Peter Jackson tras pedirle que se implicara en 'Los Anillos de Poder'"</a>
	    								</h4>
                                <div class="ftr">
                                    <div class="author">
                                    </div>
                                    <div class="stats"> <i class="fa fa-heart"></i> 365 &nbsp; <i class="fa fa-share-alt"></i> 120 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-blog">
                            <div class="card-image">
                                <a href="#"> <img class="img" src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/noticias/theBatman.jpg?t=2022-12-14T22%3A12%3A04.755Z"> </a>
                                <div class="ripple-cont"></div>
                            </div>
                            <div class="table">
                                <h6 class="category text-success"><i class="fa fa-university"></i> Critica</h6>
                                <h4 class="card-caption">
                            <a href="#"> GUION LISO Y PRESENTUOSO </a>
	    			        </h4>
                                <p class="card-description">A la hora de valorar una película podemos dividirla en diferentes aspectos: Fotografía, música, vestuario, caracterización de personajes, ambientación, tono general del film...<br><br>
                                    Si valorase a The Batman por sus diversos apartados individuales, es muy posible que la nota se acercase al sobresaliente. Robert Pattinson está muy bien caracterizado como este Batman taciturno. La fotografía y ambientación de Gotham son acertadas y transmite esa decadencia de la gran ciudad postindustrial, algunos personajes secundarios lucen en pantalla, varias escenas de acción como la inicial son puro arte... Y así podría seguir desgranando diversas virtudes en aspectos individuales.<br><br>
                                    Pero he aquí que una película es algo más que la suma individual de sus partes. Es o debe ser un conjunto redondo. Y es en ese conjunto fallido donde descarrilla The Batman. Es un problema de trama, de guion que pretende ser profundo y se queda en lioso y presuntuoso. La historia pretende contarnos algo nuevo y complejo, pero no pasa de simple y contar lo ya visto en el pasado. Se ramifica por momentos en personajes y subtramas pero a la vez no avanza y pierde interés. Y todo esto en tres largas horas desaprovechando personajes y situaciones que podían haberse resuelto de forma más valiente o menos convencional.
                                </p>
                                <div class="ftr">
                                    <div class="author">
                                    </div>
                                    <div class="stats"> <i class="fa fa-clock-o"></i> 30 min </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-blog">
                            <div class="card-image">
                                <a href="#"> <img class="img" src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/noticias/mando.jpg?t=2022-12-14T22%3A19%3A51.781Z"> </a>
                                <div class="ripple-cont"></div>
                            </div>
                            <div class="table">
                                <h6 class="category text-warning">
	    									<i class="fa fa-soundcloud"></i> Temporada 3
	    								</h6>
                                <h4 class="card-caption">
                                <a href="#"></a>
	    			            </h4>
                                    <p>
                                        Todo un secreto, ya que el final de la segunda temporada se sentía como el final de una etapa con la aparición de Luke Skywalker para acoger a Baby Yoda como su padawan. Habrá que ver en qué queda eso, que la última trilogía de Star Wars nos hace temer por el futuro de Grogu, sobre todo cuando aparezca por ahí un tal Ben Solo... <br><br>
                                        Lo que está claro es que Mando ha cambiado tras este tiempo junto a Baby Yoda, pero habrá que ver cómo decide continuar adelante tras reencontrarse sus caminos al final de 'El libro de Boba Fett'.
                                    </p>
                                <div class="ftr">
                                    <div class="author">
                                    </div>
                                    <div class="stats"> <i class="fa fa-clock-o"></i> 15 min </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="table table-danger">
                                <h5 class="category-social">
	    						    <i class="fa fa-newspaper-o"></i> NOVEDADES CANDENTES
	    						</h5>
                                <h4 class="card-caption">
	    									<a href="https://www.bbc.com/mundo/noticias-61668306">"Juicio Amber Heard vs Johnny Depp"</a>
	    								</h4>
                                <p class="card-description">El actor gana la demanda por difamación contra su exesposa (aunque el jurado también le da parte de razón a ella)</p>
                                <div class="ftr text-center"><a href="https://www.youtube.com/watch?v=h3_KjEvyB2A" class="btn btn-white btn-round">More INF</a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
     `;

  return mainWindowRow;
}
