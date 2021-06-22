let hamburger = document.querySelector('.hamburger');
let navigation = document.querySelector('.navigation');
let menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    navigation.classList.toggle('menu-open');
    menu.classList.toggle('menu-open');
})

// let bigNum = document.querySelector('.big-num');

// // new object with screen as root element
// var observer = new IntersectionObserver(function (entries) {
//     //   callback code

//     if (entries[0]['isIntersecting'] === true) {
//         if (entries[0]['isIntersectingRation'] === 1)
// // wtedy co?
// else if (entries[0]['isIntersectingRatio'] > 0.5)


// });



observer.observe(document.querySelector('section'));