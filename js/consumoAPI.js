
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

obtenerDatos();
mostrarMensaje();
mostrarMensajeError();