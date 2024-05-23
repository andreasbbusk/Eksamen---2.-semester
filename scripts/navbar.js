// Definition af knapper

// Knap der skal åbne burgermenuen
const mobileBtn = document.querySelector('.burger-btn')
// Knap der skal åbne menupunktet holdtræning
const htBtn = document.getElementById('ht-btn')
// knap der skal åbne menupunktet om HOF
const omBtn = document.getElementById('om-btn')

// Knap der skal lukker burgermenuen
const closeNavigationBtn = document.querySelector('.closebtn')
// Knap der skal lukke menupunktet holdtræning
const backBtn = document.getElementById('back-btn2')
// knap der skal lukke menupunktet om HOF
const backBtn2 = document.getElementById('back-btn3')

// Navigationscontainere
const mainNav = document.getElementById('main-nav')
const htNav = document.getElementById('ht-nav')
const omNav = document.getElementById('om-nav')

// Udvidelse af menuen 
mobileBtn.onclick = function () {
    mainNav.style.width = "100%";
}

// Lukke menuen
closeNavigationBtn.onclick = function () {
    mainNav.style.width = "0%"
}


htBtn.onclick = function () {
    htNav.style.width = "100%"
}

backBtn.onclick = function () {
    htNav.style.width = "0%"
}


omBtn.onclick = function () {
    omNav.style.width = "100%"
}

backBtn2.onclick = function () {
    omNav.style.width = "0%"
}
