document.addEventListener('DOMContentLoaded', (event) => {
    const paises = [
        "Argentina",
        "Brasil",
        "Canadá",
        "Chile",
        "España",
        "Estados Unidos",
        "Francia",
        "Italia",
        "México",
        "Reino Unido"
    ];

    const selectPais = document.getElementById('pais');

    for (const pais of paises) {
        const option = document.createElement('option');
        option.value = pais;
        option.textContent = pais;
        selectPais.appendChild(option);
    }

});