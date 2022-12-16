import "../scss/styleCatalogo.css";
import { catalogo } from "../utils/peliculas_catalogo.js";

export { generateCatalogo };

function generateCatalogo() {
  let catalogo = document.createElement("div");
  catalogo.id = "catalogo_peliculas";
  catalogo.classList.add("container");
  catalogo.innerHTML = `
<div class="accordion">
  <ul>
    <li>
      <div class="image_title">
        <a href="#">Transformers: The Last Knight</a>
      </div>
      <img src="https://image.ibb.co/k7P0kS/transformers4_640x320.jpg" alt="transformers4_640x320" border="0"></a>
    </li>
    <li>
      <div class="image_title">
        <a href="#">Guardians of the Galaxy: Vol. 2</a>
      </div>
      <a href="https://ibb.co/b4nLkS"><img src="https://image.ibb.co/jAu0kS/GOG2_640x320.jpg" alt="GOG2_640x320" border="0"></a>
    </li>
    <li>
      <div class="image_title">
        <a href="#">Spiderman: Homecoming</a>
      </div>
      <a href="https://ibb.co/mC5Uen"><img src="https://image.ibb.co/da7xX7/spiderman_homecoming_640x320.jpg" alt="spiderman_homecoming_640x320" border="0"></a>
    </li>
    <li>
      <div class="image_title">
        <a href="#">Wonder Woman</a>
      </div>
      <a href="https://ibb.co/enV1s7"><img src="https://image.ibb.co/dHdAkS/Wonder_Woman_640x320.jpg" alt="Wonder_Woman_640x320" border="0"></a>
    </li>
  </ul>
  </div>
  <h3>ACTORES MEJOR PAGADOS</h3>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="wsk-cp-product">
          <div class="wsk-cp-img">
            <img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/actores/05.webp?t=2022-12-16T19%3A53%3A59.485Z" alt="Product" class="img-responsive" />
          </div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>BARBIE</span>
            </div>
            <div class="title-product">
              <h3>Margot Robbie</h3>
            </div>
            <div class="card-footer">
              <div class="wcf-left"><span class="price">500.000 USD</span></div>
              <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="wsk-cp-product">
          <div class="wsk-cp-img"><img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/actores/02.jpg?t=2022-12-16T19%3A52%3A36.872Z" alt="Product" class="img-responsive" /></div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>Hangover</span>
            </div>
            <div class="title-product">
              <h3>Bradley Cooper</h3>
            </div>
            <div class="card-footer">
              <div class="wcf-left"><span class="price">320.000 USD</span></div>
              <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="wsk-cp-product">
          <div class="wsk-cp-img"><img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/actores/03.jpg?t=2022-12-16T19%3A52%3A47.370Z" alt="Product" class="img-responsive" /></div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>DR.Strange</span>
            </div>
            <div class="title-product">
              <h3>Benedict Cumberbatch</h3>
            </div>
            <div class="card-footer">
              <div class="wcf-left"><span class="price">700.000 USD</span></div>
              <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="wsk-cp-product">
          <div class="wsk-cp-img"><img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/actores/04.jpg?t=2022-12-16T19%3A53%3A05.029Z" alt="Product" class="img-responsive" /></div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>Legend</span>
            </div>
            <div class="title-product">
              <h3>Robin Williams</h3>
            </div>
            <div class="card-footer">
              <div class="wcf-left"><span class="price">250.000 USD</span></div>
              <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="wsk-cp-product">
          <div class="wsk-cp-img">
            <img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/actores/08.jpg?t=2022-12-16T19%3A54%3A36.437Z" alt="Product" class="img-responsive" />
          </div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>TED 2</span>
            </div>
            <div class="title-product">
              <h3>Amanda Seyfried</h3>
            </div>
            <div class="card-footer">
              <div class="wcf-left"><span class="price">70.000 USD</span></div>
              <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="wsk-cp-product">
          <div class="wsk-cp-img"><img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/actores/09.jpg?t=2022-12-16T19%3A54%3A42.749Z" alt="Product" class="img-responsive" /></div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>Cruella</span>
            </div>
            <div class="title-product">
              <h3>Emma Stone</h3>
            </div>
            <div class="card-footer">
              <div class="wcf-left"><span class="price">25.000 USD</span></div>
              <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="wsk-cp-product">
          <div class="wsk-cp-img"><img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/actores/10.jpg?t=2022-12-16T19%3A54%3A53.766Z" alt="Product" class="img-responsive" /></div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>Malefica</span>
            </div>
            <div class="title-product">
              <h3> Angelina Jolie </h3>
            </div>
            <div class="card-footer">
              <div class="wcf-left"><span class="price">750.000 USD</span></div>
              <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="wsk-cp-product">
          <div class="wsk-cp-img"><img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/actores/11.jpg?t=2022-12-16T19%3A55%3A46.865Z" alt="Product" class="img-responsive" /></div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>Baywatch</span>
            </div>
            <div class="title-product">
              <h3>Alexandra Daddario</h3>
            </div>
            <div class="card-footer">
              <div class="wcf-left"><span class="price">125.000 USD</span></div>
              <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      `;
  return catalogo;
}
