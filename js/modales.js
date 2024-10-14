
// Ejecuta el código solo cuando la ventana esté completamente cargada
window.onload = function() {
    // Obtener los elementos del DOM
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("openModal");
    var span = document.getElementsByClassName("close")[0];

    // Asegurarse de que el modal esté oculto al cargar la página
    modal.style.display = "none";

    // Cuando el usuario hace clic en el botón, abre el modal
    btn.onclick = function() {
        modal.style.display = "flex"; // Mostrar el modal al hacer clic
    }

    // Cuando el usuario hace clic en la "x", cerrar el modal
    span.onclick = function() {
        modal.style.display = "none"; // Ocultar el modal al hacer clic en "x"
    }

    // Cerrar el modal si el usuario hace clic fuera del contenido del modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Ocultar el modal si se hace clic fuera del contenido
        }
    }
};