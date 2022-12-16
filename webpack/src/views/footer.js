export { generateFooter };

function generateFooter() {
  let footer = document.createElement("div");
  footer.id = "footer";
  footer.classList.add("container");
  footer.innerHTML = `<div class="container my-5">
  <footer class="text-center text-lg-start text-white" style="background-color: #1c2331">          
    <section class="d-flex justify-content-between p-4" style="background-color: #6351ce">
      <div class="me-5">
        <span> </span>
      </div>
      <div>
        <a href="" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </section>
    <section class="footer">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold">Cinema</h6>
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px"/>
            <p>
              Pagina web llena de peliculas de cine con acceso a otras paginas para ver las peliculas y con seleccion de catalogo para vivir una experiencia con palomitas !ÑAM¡!ÑAM¡
            </p>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold">REDES</h6>
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <a href="#!" class="text-white">FACEBOOK</a>
            </p>
            <p>
              <a href="#!" class="text-white">TWITTER</a>
            </p>
            <p>
              <a href="#!" class="text-white">INSTAGRAM</a>
            </p>
            <p>
              <a href="#!" class="text-white">YOUTUBE</a>
            </p>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold">AYUDA</h6>
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px"/>
            <p>
              <a href="#!" class="text-white">Account</a>
            </p>
            <p>
              <a href="#!" class="text-white">Register</a>
            </p>
            <p>
              <a href="#!" class="text-white">Support Contact</a>
            </p>
            <p>
              <a href="#!" class="text-white">Help</a>
            </p>
          </div>
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px"/>
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> tusetjaume7@nogamail.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 34 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 34 234 567 89</p>
          </div>
        </div>
      </div>
    </section>
    
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2022 JAUME TUSET
    </div>
  </footer>
</div>`;
  return footer;
}
