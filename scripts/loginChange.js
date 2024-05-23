
// Content containers som ændrer HTML
const currentLoginContainer = document.querySelector('.current-container');

const loginContainer = document.querySelector('.login-content')
const registerContainer = document.querySelector('.signup-content')

// Knapper der eksekverer nedenstående funktioner
const registerBtn = document.getElementById('tilmeld-dig');
const loginBtn = document.getElementById('login');


function skiftLogind(skift) {
    currentLoginContainer.innerHTML = skift.innerHTML;
}

registerBtn.onclick = function () {
    skiftLogind(registerContainer);
}

loginBtn.onclick = function () {
    skiftLogind(loginContainer);
}





