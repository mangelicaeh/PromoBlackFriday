window.addEventListener("scroll", function() {
    var banner = document.getElementById("blackFridayBanner");
    var bannerSection = document.getElementById("services");
    var sectionOffset = bannerSection.offsetTop; // Posición superior de la sección
    var scrollY = window.scrollY; // Distancia que se ha desplazado la página hacia abajo

    // Solo cambiar el tamaño de la fuente si el scroll está dentro de la sección del banner
    if (scrollY >= sectionOffset && scrollY < sectionOffset + bannerSection.offsetHeight) {
        // Define el tamaño máximo y mínimo de la fuente
        var minFontSize = 24; // Tamaño mínimo del texto
        var maxFontSize = 60; // Tamaño máximo del texto
        var fontSize = minFontSize + (scrollY - sectionOffset) / 10; // Ajusta el tamaño con respecto al scroll

        // Limita el tamaño de la fuente para que no crezca indefinidamente
        if (fontSize > maxFontSize) {
            fontSize = maxFontSize;
        }

        // Aplica el tamaño de la fuente al banner
        banner.style.fontSize = fontSize + "px";
    }
});

