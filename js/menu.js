// Obtener todos los enlaces dentro del menú
const enlacesMenu = document.querySelectorAll('nav ul li a');

// Recorrer cada enlace y agregar un evento de clic
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        // Cerrar el menú al hacer clic en cualquier enlace
        document.getElementById('check').checked = false;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    let checkbox = document.getElementById('check-2');

    if (checkbox) {
        checkbox.addEventListener('change', function () {
            let menuListado = document.querySelector('.listado');
            let menuMobile = document.querySelector('.menuMobile');

            if (menuListado) {
                menuListado.style.display = checkbox.checked ? 'block' : 'none';
                menuMobile.style.display = checkbox.checked ? 'block' : 'none';

            }
        });
    }
});









