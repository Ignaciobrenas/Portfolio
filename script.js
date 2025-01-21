// Función que aplica el estilo a la opción seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(opcion => opcion.className = ""); // Limpia todas las clases
    link.className = "seleccionado"; // Aplica la clase al link seleccionado

    // Hace desaparecer el menú una vez que se ha seleccionado una opción en modo responsive
    var nav = document.getElementById("nav");
    nav.className = ""; // Reinicia la clase del menú
}

// Función que muestra el menú en modo responsive
function responsiveMenu() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("responsive"); // Alterna la clase "responsive"
}

// Funciones para abrir y cerrar modales
function abrirModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function cerrarModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Detecta el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
};

// Función que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        // Verifica si la animación ya se aplicó para evitar redundancia
        if (!skills.classList.contains("animado")) {
            document.getElementById("html").classList.add("barra-progreso1");
            document.getElementById("js").classList.add("barra-progreso2");
            document.getElementById("bd").classList.add("barra-progreso3");
            document.getElementById("ps").classList.add("barra-progreso4");
            skills.classList.add("animado"); // Marca las habilidades como animadas
        }
    }
    
}
