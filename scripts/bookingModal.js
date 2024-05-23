// Definition af variabler

// Knap der åbner for modalet
const bookingBtn = document.getElementById('kvindepower-booking');
// Knap der lukker for modalet
const bookClose = document.getElementById('booking-close');
// Confirmation knap der skal ændre content i HTML'en, så man har en bekræftelse af bookingen
const bookConfirm = document.getElementById('booking-confirm');

// Selve modalet
const bookModal = document.querySelector('.booking-modal');

// Nuværende modalcontent der skal udskifte vha. innerHTML
const modalContent = document.querySelector('.tilmelding');
// Nyt content
const modalContentChange = document.querySelector('.tilmelding-check');
// Knappen oncklick eventet eksekveres gennem
// Endnu en lukkeknap

// Åbning af modal vha. ændring i displaytilstand fra "none" til "flex"
function openBooking () {
    bookModal.style.display = "flex";
}

function closeBooking () {
    bookModal.style.display = "none";
}

bookingBtn.onclick = openBooking;
bookClose.onclick = closeBooking;

// Contentændring i HTML content
function contentChange() {
    // Timeout metode, som giver et delay inden eksekvering af innerHTML (200ms)
    setTimeout(function () {
        // Ændring af HTML på to hændelser: 
        modalContent.innerHTML = modalContentChange.innerHTML;
    }, 300);
}

bookConfirm.onclick = contentChange;
