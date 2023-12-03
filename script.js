let btn1 = document.querySelector('.btn1'),
btn2 = document.querySelector('.btn2');

btn1.addEventListener('click', e => {
    Click.innerText++
})

btn2.addEventListener('click', e => {
    Click.innerText--
})