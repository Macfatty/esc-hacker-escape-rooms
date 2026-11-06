const menuButton = document.querySelector('.header__menu');
const navigation = document.querySelector('.header__nav');
const closeButton = document.querySelector('.header__nav-close');

menuButton.addEventListener('click', function () {
    navigation.classList.add('header__nav--open');
});

closeButton.addEventListener('click', function () {
    navigation.classList.add('header__nav--closing');
});

navigation.addEventListener('animationend', function (event) {
    if (event.animationName === 'menuFadeOut') {
        navigation.classList.remove('header__nav--open');
        navigation.classList.remove('header__nav--closing');
    }
});