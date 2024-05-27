document.addEventListener('DOMContentLoaded', function() {
    var username = localStorage.getItem('username');
    if (username) {
        document.getElementById('user-greeting').textContent = 'Bienvenido, ' + username;
    }
});

function cerrarSesion(){
    localStorage.clear();
}