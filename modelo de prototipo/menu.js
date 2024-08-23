document.querySelector('.btn-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('show');
});

// Redirigir a la página de inicio de sesión si no está autenticado
if (!sessionStorage.getItem('authenticated')) {
    window.location.href = 'login.html';
}