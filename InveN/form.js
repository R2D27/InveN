function mostrar() {
    var c = document.getElementById("cta");
    c.setAttribute('type', 'text');
}

function ocultar() {
    var c = document.getElementById("cta");
    c.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("ver").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        mostrar();
    } else {
        pwShown = 0;
        ocultar();
    }
}, false);