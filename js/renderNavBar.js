const renderNavBar = () => {
    const currentPath = window.location.pathname;
    const isInIndex = currentPath.includes("index.html") || currentPath === "/";
    const isInDeploy = currentPath.includes("TrabajoEnEquipo");

    const generateHref = (isInIndex, path) => {
        let href = `./${path}`;

        if (isInIndex) {
            href = `./html/${path}`;
        }

        if (isInDeploy) {
            href = `./TrabajoEnEquipo/html/${path}`;
        }
        return href
    }
    const navBar = document.getElementById("headerContainer");
    const renderLogoPath = isInIndex?"./imagenes/Logo Tuki.jpg":"../imagenes/Logo Tuki.jpg";
    const existAuthUser = localStorage.getItem("username");
    navBar.innerHTML = `
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="../index.html"><img src= "${renderLogoPath}" alt="#"></a>
          <span id="user-greeting" style="color: aliceblue; text-decoration: underline; font-weight: 600;"></span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="${generateHref(isInIndex, "productos.html")}">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="${generateHref(isInIndex, "acercade.html")}">Acerca de</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="${generateHref(isInIndex, "contacto.html")}">Contacto</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="${generateHref(isInIndex, "consumoAPI.html")}">Recomendados</a>
              </li>

            ${
              existAuthUser? 
              `<li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="./index.html" onclick="cerrarSesion()">Cerrar Sesion</a>
              </li>` : 
              `<li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="${generateHref(isInIndex, "Registro.html" )}">Registrarse</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="${generateHref(isInIndex, "iniciar-sesion.html")}">Iniciar Sesion</a>
               </li>`
            } 
            </ul>
          </div>
        </div>
      </nav>
    `;
}

renderNavBar()