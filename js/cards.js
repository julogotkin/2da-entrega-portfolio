document.addEventListener("DOMContentLoaded", () => {
    ScrollReveal().reveal(".work-card", {
        delay: 200,            // Retraso antes de aparecer
        distance: "50px",      // Distancia de desplazamiento
        origin: "bottom",      // Viene desde abajo
        duration: 1000,        // Duración de la animación
        easing: "ease-in-out", // Suavidad del movimiento
        interval: 200          // Hace que las cards aparezcan con un pequeño retraso entre ellas
    });
});
