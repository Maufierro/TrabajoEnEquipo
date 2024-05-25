alert("COLOQUE ADMIN EN AMBOS CAMPOS PARA PODER INICIAR SESION.");

function verificarCredenciales(){
    var user = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    console.log(user);
    console.log(password);
    if(user === "ADMIN" && password === "ADMIN"){
        obtenerDatos();
    } else {
        //mostrarMensajeError("El usuario no se encuentra en la BD");
        alert("El usuario es incorrecto, porfavor ingrese ADIM en cambos campos para poder iniciar sesion.")
    }
}

function obtenerDatos() {
    // URL de la API del clima
    let url ='https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,AR&lang=es&units=metric&appid=faa982a336af8891b33d855083e9eca0';

    // Realizar la solicitud a la API utilizando fetch
    fetch(url)
        .then(response => {
            // Verificar si la respuesta es exitosa (código de estado 200)
            if (response.ok) {
                // Devolver la respuesta en formato JSON
                return response.json();
            }
            // Si la respuesta no es exitosa, lanzar un error
            throw new Error('La solicitud a la API del clima ha fallado');
        })
        .then(data => {
            // Manejar los datos de la respuesta
            const temperaturaActual = data.main.temp;
            console.log('Temperatura actual en Buenos Aires:', temperaturaActual);

            // Determinar el tipo de abrigo recomendado
            let tipoAbrigo;
            if (temperaturaActual < 10) {
                tipoAbrigo = 'Abrigo grueso';
            } else if (temperaturaActual < 20) {
                tipoAbrigo = 'Abrigo ligero';
            } else {
                tipoAbrigo = 'Sin abrigo necesario';
            }

            console.log('Recomendación de abrigo:', tipoAbrigo);
            mostrarMensaje(`La temperatura actual para la ciudad de Buenos Aires es ${temperaturaActual}°C, por lo que te recomendamos un ${tipoAbrigo}. Puedes visitar nuestra sección de productos para elegir uno que te guste!!.`);

        })
        .catch(error => {
            // Manejar errores
            console.error('Error al obtener los datos del clima:', error);
            mostrarMensajeError('Hubo un error al obtener los datos del clima. Por favor, inténtelo de nuevo más tarde.');
        });
}

function mostrarMensaje(mensaje) {
    // Mostrar el mensaje en un elemento HTML dedicado
    document.getElementById('mensaje').textContent = mensaje;
}

function mostrarMensajeError(mensaje) {
    // Mostrar el mensaje de error en un elemento HTML dedicado
    document.getElementById('mensaje').textContent = mensaje;
}
