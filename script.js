// Présentation de l'activité
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".example");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("test");
    document.body.classList.toggle("scroll")
}

function windowOnClick(event) {
    if (event.target == modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal)
window.addEventListener("click", windowOnClick); 
// Nos services

// Nos valeurs

// Nos engagements pour le climat

// Nos clients

// Financement

// FAQ
