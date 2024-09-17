// le load
document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById("loader");
    var content = document.getElementById("slpp");

    // Simule un délai de chargement
    setTimeout(function() {
        loader.style.display = "none";
        content.style.display = "block";
    }, 3000); // 3 secondes
});

//pour assurer que le dom soit chargé 
window.onload = function() {

    var loader = document.getElementById("loader");

    var content = document.getElementById("slpp");

    // Cache le loader et affiche le contenu une fois la page complètement chargée
    loader.style.display = "none";
    content.style.display = "block";
}
;
