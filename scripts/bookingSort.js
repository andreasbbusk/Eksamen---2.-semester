
// Containerer
const week22Container = document.querySelector('.booking-calendar-uge22');
const week23Container = document.querySelector('.booking-calendar-uge23');

// Knapper
const backwardBtn = document.querySelector('#back-btn');
const forwardBtn = document.getElementById('forward-btn');
const todayBtn = document.querySelector(".today-btn")

// Klik event vha. addEventListener, som eksekverer en arrow function, der ændrer HTML contentet.
forwardBtn.addEventListener("click", () => {
        week22Container.innerHTML = week23Container.innerHTML;
});

// Samme event
backwardBtn.addEventListener("click", () => {
        week23Container.innerHTML = week22Container.innerHTML;
});
