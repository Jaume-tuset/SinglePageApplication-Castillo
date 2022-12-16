export { loginForm };
import { loginUser, logout, forgotPassword } from "../services/users.js";

function loginForm() {
  let divLogin = document.createElement("div");
  divLogin.classList.add("formulari_centrat");
  divLogin.innerHTML = `
  <form action="action_page.php" method="post">
  <section class="vh-100" style="background-color: #508bfc;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Sign in</h3>

            <div class="form-outline mb-4">
              <input type="text" id="loginemail" class="form-control form-control-lg" name="uname" required />
              <label class="form-label" for="uname">Email</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="loginpassword" class="form-control form-control-lg" name="psw" required />
              <label class="form-label" for="psw">Password</label>
            </div>

            <button id="loginbutton" class="login" class="btn btn-primary btn-lg btn-block" type="button">Login</button>
            <label>
                <input type="checkbox" checked="checked" name="remember" /> Remember me
            </label>
            
            <hr class="my-4">

            <button class="btn btn-lg btn-block btn-primary" style="background-color: #dd4b39;"
              type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
            <button class="btn btn-lg btn-block btn-primary mb-2" style="background-color: #3b5998;"
              type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>`;

  divLogin.querySelector("#loginbutton").addEventListener("click", async () => {
    let email = divLogin.querySelector("#loginemail").value;
    let password = divLogin.querySelector("#loginpassword").value;
    loginUser(email, password).then((status) => {
      if (status.success) window.location.hash = "#/";
      else {
        divLogin.querySelector("#errors").innerHTML = status.errorText;
      }
    });
  });

  divLogin.querySelector("#logoutbtn").addEventListener("click", () => {
    logout();
  });

  divLogin.querySelector("#forgot").addEventListener("click", (event) => {
    event.preventDefault();
    let email = divLogin.querySelector("#loginemail").value;
    forgotPassword(email);
    event.target.parentElement.append(" Has rebut un correu");
  });

  return divLogin;
}
