document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        Click.innerText++
    }
    else if (e.keyCode == '40') {
        Click.innerText--
    }
}