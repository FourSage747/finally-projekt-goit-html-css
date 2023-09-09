// -- menu --
const button2 = document.querySelector('.button2');
const button4 = document.querySelector('.button4');
const modalmenu = document.querySelector('.modal_menu');
const modalmn = document.querySelector('.modal_mn');

button2.addEventListener('click', menu);
button4.addEventListener('click', menu);

function menu () {
    modalmenu.classList.toggle("open");
}

modalmn.addEventListener('click', link);

function link (evt) {
    if (evt.target.nodeName !== "A") {
        return;
    }
    modalmenu.classList.remove("open");
}

// -- buy now --
const buy = document.querySelectorAll('.buyNow');
const buycl = document.querySelector('.button6');
const BN = document.querySelector('.BuyNOW');
const buyNow = document.querySelector('.modal_buyNow');

buy.forEach(button => {
    button.addEventListener('click', buyN);
});

buycl.addEventListener('click', buyN);

function buyN () {
    buyNow.classList.toggle("open");
    BN.classList.toggle("open");
}