// Åbne og lukkeknapper
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.cross')
const headerBtn = document.querySelector('.profile-icon')
const mobileHeaderBtn = document.getElementById('profile-icon')
const mobileHeaderBtnInner = document.querySelector('.profile-icon2')


// Selve modalet
const loginModal = document.querySelector('.login-modal');

// Åbning af modal vha. ændring i displaytilstand fra "none" til "flex"

function openModal() {
    loginModal.style.display = "flex";
} 

function closeModal() {
    loginModal.style.display = "none";
} 

// Kalder funktionen til de forskellige knapper
headerBtn.onclick = openModal;
modalBtn.onclick = openModal;
mobileHeaderBtn.onclick = openModal;
mobileHeaderBtnInner.onclick = openModal;

closeBtn.onclick = closeModal;


// Onclick event inden for 'vinduets grænser, hvor scriptet kører'
window.onclick = function (event) {
    // if-sætning der bliver eksekveret hvis der bliver klikket uden for modalets grænser, hvor den ændrer display tilstand til none.
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    };
}