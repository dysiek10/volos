let hamburger = document.querySelector('.hamburger');
let navigation = document.querySelector('.navigation');
let menu = document.querySelector('.menu');
// i czemu przysłania nawigację??

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    navigation.classList.toggle('menu-open');
    menu.classList.toggle('menu-open');
})

// let sections = document.querySelectorAll('.section');
// sections.forEach((item) => {
//     item.addEventListener('click', function () {
//         hamburger.classList.toggle('is-active');
//         navigation.classList.toggle('menu-open');
//         menu.classList.toggle('menu-open');
//     })
// })


// czemu nie działa by class name? - rozwiązanie
let sections2 = document.getElementsByClassName('section');
for (let i = 0; i < sections2.length; i++) {
    sections2[i].addEventListener('click', function () {
        hamburger.classList.toggle('is-active');
        navigation.classList.toggle('menu-open');
        menu.classList.toggle('menu-open');
    })
}
