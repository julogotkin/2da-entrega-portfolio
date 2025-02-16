document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".animated-image");
    let index = 0;

    function setRandomScale(image) {
        let randomScale = Math.random() * (0.7 - 0.5) + 0.5;
        image.style.transform = `scale(${randomScale})`;
    }

    function showNextImage() {
        // Remover la clase 'active' de la imagen actual
        images[index].classList.remove("active");

        // Pasar a la siguiente imagen
        index = (index + 1) % images.length;

        // Aplicar tamaño aleatorio antes de activarla
        setRandomScale(images[index]);

        // Agregar la clase 'active' a la nueva imagen
        images[index].classList.add("active");
    }

    // Aplicar tamaño aleatorio a la primera imagen antes de que aparezca
    setRandomScale(images[0]);

    setInterval(showNextImage, 1000); 
    
});

