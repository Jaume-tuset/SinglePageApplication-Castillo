import "../scss/estilosPlataformas.css";

export { plataformas };

function plataformas() {
  let plataformas = document.createElement("div");
  plataformas.id = "plataforma";
  plataformas.classList.add("container");
  plataformas.innerHTML = `
  <br><br>
  <div class="box">
      <div class="card">
        <div class="imgBx">
          <a href="https://www.primevideo.com/"><img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/body/amazon.jpg?t=2022-12-16T18%3A23%3A10.535Z" alt="images"></a>
        </div>
        <div class="details">
            <h2>AMAZON VIDEO<br><span>THE BOYS</span></h2>
        </div>
      </div>
    
       <div class="card">
         <div class="imgBx">
          <a href="https://www.dazn.com/es-ES/welcome/"><img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/body/dazn.png?t=2022-12-16T18%3A29%3A36.807Z" alt="images"></a>
         </div>
         <div class="details">
            <h2>DAZN<br><span>DEPORTES</span></h2>
          </div>
       </div>

       <div class="card">
         <div class="imgBx">
          <a href="https://www.hbomax.com/es/es?utm_id=1011l5669&utm_source=yieldkit_ph&utm_medium=affiliate&clickref=1011lwpDAEzY/"><img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/body/hbo.png?t=2022-12-16T18%3A30%3A58.620Z" alt="images"></a>
         </div>
         <div class="details">
            <h2>HBO MAX<br><span>SERIES & PELICULAS </span></h2>
          </div>
       </div>
 
  </div>
  <br>
  <div class="box">
      <div class="card">
        <div class="imgBx">
          <a href="https://www.netflix.com/es/"><img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/body/netflix.jpg?t=2022-12-16T18%3A32%3A12.789Z" alt="images"></a>
        </div>
        <div class="details">
            <h2>NETFLIX<br><span>SERIES & PELICULAS </span></h2>
        </div>
      </div>
    
       <div class="card">
         <div class="imgBx">
          <a href="https://www.paramountplus.com/intl/"><img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/body/paramount.jpg?t=2022-12-16T18%3A33%3A15.202Z" alt="images"></a>
         </div>
         <div class="details">
            <h2>PARAMOUNT +<br><span>SERIES & PELICULAS </span></h2>
          </div>
       </div>

       <div class="card">
         <div class="imgBx">
          <a href="https://rakuten.tv/es"><img src="https://tajfzqkqohgahoamefgi.supabase.co/storage/v1/object/public/imgs/body/rakkuten.jpg?t=2022-12-16T18%3A34%3A34.299Z" alt="images"></a>
         </div>
         <div class="details">
            <h2>RAKUTEN TV<br><span>SERIES & PELICULAS </span></h2>
          </div>
       </div>
 
  </div>


`;
  return plataformas;
}
