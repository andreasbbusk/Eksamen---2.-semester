// Hent alle elementer med klassen "collapsible"
const col = document.getElementsByClassName("collapsible");


// Loop alle "collapsible" elementer
for ( let i = 0; i < col.length; i++) {
    // Tilføj en eventlistener til hvert "collapsible" element
    col[i].addEventListener("click", function () {
        // Toggle class "active" på det klikkede element
        this.classList.toggle("active");
        
        // Hent det næste søskende element i DOM'en
        const content = this.nextElementSibling;
        
        // Hvis indholdets maxHeight er sat, nulstil det (skjul indholdet)
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            // Ellers sæt maxHeight til scrollHeight (vis indholdet)
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}