// Récupération des boutons qui ouvrent les fenêtres modales
var obuttons = document.querySelectorAll(".obutton");

// Récupération des fenêtres modales
var modals = document.querySelectorAll('.modal');

// Récupération des boutons qui ferment les fenêtres modales
var cbuttons = document.querySelectorAll(".cbutton");

// Quand l'utilisateur clique sur le bouton qui ouvre la fenêtre modale
for (var i = 0; i < obuttons.length; i++) {
 obuttons[i].onclick = function(e) {
    e.preventDefault();
    var modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

 }
}

// Quand l'utilisateur clique sur le bouton qui ferme la fenêtre modale
for (var i = 0; i < cbuttons.length; i++) {
 cbuttons[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        document.body.style.overflow = "visible";
    }
 }
}

// Quand l'utilisateur clique à côté de la fenêtre modale
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        document.body.style.overflow = "visible";

     }
    }
}