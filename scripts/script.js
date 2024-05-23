// Definition af knapper til de forskellige kropsdele der skal ændres ved klik
const headBtn = document.getElementById("hoved")
const heartBtn = document.getElementById("hjerte")
const lungBtn = document.getElementById("lunge")
const handBtn = document.getElementById("haand")
const muscleBtn = document.getElementById("laar")
const footBtn = document.getElementById("fod")

// Den container hvori der skal ændres indhold
let imgContainer = document.querySelector(".info-skift")

// Funktion til at ændre billede med effekt
function changeImage(newSrc) {
    imgContainer.classList.add("fade-out")

    // Vent til fade-out er færdig før ændring af source
    setTimeout(() => {
        imgContainer.src = newSrc
        imgContainer.classList.remove("fade-out")
        imgContainer.classList.add("fade-in")

        // Fjern fade-in klassen efter animationen er færdig
        setTimeout(() => {
            imgContainer.classList.remove("fade-in")
        }, 500) 
    }, 500)
}

// Onclick events til knapperne
headBtn.onclick = function () {
    changeImage("img/hovedinfo.png");
}

heartBtn.onclick = function () {
    changeImage("img/hjerteinfo.png")
}

lungBtn.onclick = function () {
    changeImage("img/lungeinfo.png")
}

handBtn.onclick = function () {
    changeImage("img/handinfo.png")
}

muscleBtn.onclick = function () {
    changeImage("img/muskelinfo.png")
}

footBtn.onclick = function () {
    changeImage("img/fodinfo.png")
}


