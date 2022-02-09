////////////////////////
/// Fenêtres modales ///
////////////////////////

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
      if (typeof modals[index].style !== 'undefined')
         modals[index].style.display = "none";
         document.body.style.overflow = "visible";
    }
 }
}

// Quand l'utilisateur clique à côté de la fenêtre modale
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined')
         modals[index].style.display = "none";
         document.body.style.overflow = "visible";

     }
    }
}



///////////////////
/// Boutons nav ///
///////////////////

// Récupérations des boutons du nav
var navbuttons = document.querySelectorAll("nav ul li:nth-of-type(n+2) a");

// Lancement de l'animation, puis reset de l'animation une fois qu'elle est terminée
for(var i =0; i < navbuttons.length; i++) {
   navbuttons[i].onclick = function(e) {
      let selection = document.getElementById(e.target.getAttribute('href').substring(6));
      selection.style.animation = "flash 1s ease-out";

      setTimeout(function(){selection.style.animation = "none"}, 1000);
   }   
}

/*
for(var i = 0; i < modals.length; i++) {
   if(modals[i].style.display == 'none') {
      for(var j = 0; j < navbuttons.length; i++) {
         navbuttons[i].setAttribute('href', 'none');
      }

   }
}
   */

