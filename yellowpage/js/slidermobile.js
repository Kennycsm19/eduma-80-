let barra = document.querySelector('.barra');
let barrabox = document.querySelector('.barra-box');
let divmobile = document.querySelectorAll('.divmobile');
let mobileButtons = document.querySelectorAll('.buttmobile button');
let mobileboxwidth = divmobile[0].offsetWidth;

barra.addEventListener('scroll', function() {
    let scrollLeft = barra.scrollLeft;
    let index = Math.round(scrollLeft / mobileboxwidth);
    updateButtons(index);
});

function showDiv(buttonId) {
    let index = parseInt(buttonId.replace('button', '')) - 1;
    barra.scrollLeft = index * mobileboxwidth;
    updateButtons(index);
}

function updateButtons(index) {
    mobileButtons.forEach((button, i) => {
        if (i === index) {
            button.classList.add('on');
        } else {
            button.classList.remove('on');
        }
    });
}
