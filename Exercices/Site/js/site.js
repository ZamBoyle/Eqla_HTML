document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne tous les liens de navigation
    var navLinks = document.querySelectorAll('nav ul li a');

    // Parcourt chaque lien
    navLinks.forEach(function(link) {
        // Ajoute un écouteur d'événement 'click' à chaque lien
        link.addEventListener('click', function() {
            // Retire la classe 'active' de tous les liens
            navLinks.forEach(function(innerLink) {
                innerLink.classList.remove('active');
            });

            // Ajoute la classe 'active' au lien qui a été cliqué
            link.classList.add('active');
        });
    });
});
