alert("COLOQUE ADMIN EN AMBOS CAMPOS PARA PODER INICIAR SESION.");

function verificarCredenciales() {
    var user = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    console.log(user);
    console.log(password);
    if (user === "ADMIN" && password === "ADMIN") {
        console.log("Usuario iniciado correctamente");
        localStorage.setItem('username', user); // Guardar el nombre del usuario en Local Storage
        window.location.href = '/index.html'; // Redirigir a la página principal
    } else {
        alert("El usuario es incorrecto, por favor ingrese ADMIN en ambos campos para poder iniciar sesión.");
    }
}
