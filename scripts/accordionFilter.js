// Definition af variabler

// De forskellige knapper der skal filtere mellem content
const training = document.getElementById('training-btn')
const booking = document.getElementById('booking-btn')
const events = document.getElementById('events-btn')
const about = document.getElementById('about-btn')

// Sektioner hvor der skal ændres content i HTML'en
let faqTraining = document.querySelector('.faq-q')
let faqBooking = document.querySelector('.faq-q-booking')
let faqEvent = document.querySelector('.faq-q-events')
let faqOm = document.querySelector('.faq-q-om')

let currentContainer = document.querySelector('.current-active')

function changeAccContent(newInner) {
    imgContainer.classList.add("acc-fade-out")

    // Vent til fade-out er færdig før ændring af source
    setTimeout(() => {
        currentContainer.innerHTML = newInner.innerHTML
        currentContainer.classList.remove("acc-fade-out")
        currentContainer.classList.add("acc-fade-in")

        // Fjern fade-in klassen efter animationen er færdig
        setTimeout(() => {
            currentContainer.classList.remove("acc-fade-in")
        }, 200) 
    }, 200)
}

training.onclick = function () {
    changeAccContent(faqTraining)
}

booking.onclick = function () {
    changeAccContent(faqBooking)
}

events.onclick = function () {
    changeAccContent(faqEvent)
}

about.onclick = function () {
    changeAccContent(faqOm)
}
