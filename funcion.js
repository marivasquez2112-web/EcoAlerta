function mostrarSeccion(nombre) {
    var secciones = document.querySelectorAll(".seccion");
    secciones.forEach(function(seccion) {
        seccion.classList.remove("activa");
    });
    document.getElementById(nombre).classList.add("activa");
}
function clasificarResiduo() {
    var residuo = document.getElementById("residuo").value;
    var resultado = document.getElementById("resultado-residuo");
    var mensaje = "";
    if (residuo === "botella") {
        mensaje = "Deposítala limpia y seca en la caneca blanca para residuos aprovechables.";
    } else if (residuo === "papel") {
        mensaje = "El papel y cartón limpios y secos van en la caneca blanca.";
    } else if (residuo === "vidrio") {
        mensaje = "Separa el vidrio con cuidado y consulta el sistema de recolección de tu localidad.";
    } else if (residuo === "organico") {
        mensaje = "Los restos de comida son residuos orgánicos. Sepáralos según las indicaciones locales.";
    } else if (residuo === "ordinario") {
        mensaje = "Este residuo va en la caneca negra para residuos no aprovechables.";
    } else if (residuo === "pila") {
        mensaje = "No tires las pilas a la basura común. Llévalas a un punto de recolección especial.";
    } else {
        mensaje = "Primero selecciona un residuo de la lista.";
    }
    resultado.textContent = mensaje;
}
function calcularAgua() {
    var entrada = document.getElementById("minutos-ducha");
    var minutos = Number(entrada.value);
    var resultado = document.getElementById("resultado-agua");
    if (entrada.value === "" || minutos < 0) {
        resultado.textContent = "Escribe una cantidad válida de minutos.";
    } else {
        var litros = minutos * 10;
        resultado.textContent = "Tu ducha usaría aproximadamente " + litros +
            " litros de agua. El consumo real puede variar.";
    }
}
var retosCompletados = [];
var puntos = 0;
function completarReto(numero) {
    if (!retosCompletados.includes(numero)) {
        retosCompletados.push(numero);
        puntos = puntos + 10;
        var boton = document.getElementById("reto-" + numero);
        boton.textContent = "Completado";
        boton.disabled = true;
        actualizarEstadisticas();
    }
}
function actualizarEstadisticas() {
    document.getElementById("total-puntos").textContent = puntos;

    document.getElementById("total-retos").textContent =
        retosCompletados.length + " de 4";
    var mensaje = "¡Empieza con un pequeño reto!";
    if (retosCompletados.length > 0 && retosCompletados.length < 4) {
        mensaje = "¡Vas muy bien! Sigue cuidando el planeta.";
    } else if (retosCompletados.length === 4) {
        mensaje = "¡Excelente! Completaste todos los retos.";
    }
    document.getElementById("mensaje-estadistica").textContent = mensaje;
}
function reiniciarProgreso() {
    retosCompletados = [];
    puntos = 0;
    for (var numero = 1; numero <= 4; numero++) {
        var boton = document.getElementById("reto-" + numero);

        boton.textContent = "Completar +10";
        boton.disabled = false;
    }
    actualizarEstadisticas();
}
