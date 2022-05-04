import './styles/all.scss'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import TweenMax from "gsap/all"
import { Power2, Elastic, CSSPlugin, Expo } from "gsap/all"
import Swiper from 'swiper/bundle'
import 'swiper/css'

gsap.registerPlugin(ScrollTrigger, TweenMax);

TweenMax.to('.overlay-logo', 1.5, {
	delay: 0,
	y: 0,
	ease: Expo.easeInOut
})

TweenMax.to('.overlay-logo', 1.5, {
	delay: 2,
	y: -100,
	ease: Expo.easeInOut
})

TweenMax.to('.firts', 1.5, {
	delay: .7,
	height: "0%",
	ease: Expo.easeInOut
})

TweenMax.to('.second', 1.5, {
	delay: .9,
	height: "0%",
	ease: Expo.easeInOut
})

TweenMax.to('.third', 1.5, {
	delay: 1.1,
	height: "0%",
	ease: Expo.easeInOut
})


TweenMax.to('.four', 1.5, {
	delay: 1.3,
	height: "0%",
	ease: Expo.easeInOut
})

TweenMax.to('.five', 1.5, {
	delay: 1.5,
	height: "0%",
	ease: Expo.easeInOut
})


TweenMax.to('.six', 1.5, {
	delay: 1.7,
	height: "0%",
	ease: Expo.easeInOut
})


// HOME
TweenMax.to('.main__image', 1.5, {
	delay: 2,
	scale: 1,
	ease: Expo.easeInOut
})

TweenMax.to('.main__block', 1.5, {
	delay: 2.5,
	width: '100%',
	ease: Expo.easeInOut
})

TweenMax.to('.main__heading', 1.8, {
	delay: 3.2,
	y: 0,
	ease: Expo.easeInOut
})

TweenMax.to('.main__text', 1.8, {
	delay: 3.2,
	y: 0,
	ease: Expo.easeInOut
})

TweenMax.to('.header__navigation li', 2, {
	delay: 4,
	x: 0,
    stagger: .1,
	ease: Expo.easeInOut
})

TweenMax.to('.header__logo', 1.5, {
	delay: 2.5,
	y: 0,
    stagger: .1,
	ease: Expo.easeInOut
})

TweenMax.to('.header__text', 1.5, {
	delay: 4,
	y: 0,
    stagger: .1,
	ease: Expo.easeInOut
})


TweenMax.to('.header__logo-dot', 2.5, {
	delay: 6,
	y: 0,
    stagger: .1,
	ease: Expo.easeInOut
})






const formAuth = document.querySelector('.auth'),
    closeAuth = document.querySelector('.auth__close'),
    closeCheck = document.querySelector('.check__close'),
    btnRegis = document.querySelector('#btnAuth'),
    btnCheck = document.querySelector('#btnCheck'),
    formCheck = document.querySelector('.check'),
    menu = document.querySelector('.menu'),
    menuBtn = document.querySelector('.header__btn'),
    menuBtnClose = document.querySelector('.menu__btn'),
    btnAuth = document.querySelector('.header__btn-auth');


menuBtn.addEventListener('click', () => {
    menu.classList.add('active')
});

menuBtnClose.addEventListener('click', () => {
    menu.classList.remove('active')
});

btnAuth.addEventListener('click', () => {
    formAuth.classList.add('active')
});

closeAuth.addEventListener('click', () => {
    formAuth.classList.remove('active')
});

btnRegis.addEventListener('click', () => {
    formAuth.classList.remove('active');
    formCheck.classList.add('active');
});

closeCheck.addEventListener('click', () => {
    formCheck.classList.remove('active')
});

btnCheck.addEventListener('click', () => {
    formAuth.classList.add('active')
    formCheck.classList.remove('active')
});

const time01 = 6000;
const step01 = 7;

const time02 = 8000;
const step02 = 5;

const time03 = 4000;
const step03 = 1;

function outNum01(num, elem) {
    let l = document.querySelector('#' + elem);
    let n = 0;
    let t = Math.round(time01 / (num / step01));
    let interval = setInterval(() => {
        n = n + step01;
        if (n == num) {
            clearInterval(interval);
        };
        l.innerHTML = n;
    }, t);
};

outNum01(1337, 'home-num01');

function outNum02(num, elem) {
    let l = document.querySelector('#' + elem);
    let n = 0;
    let t = Math.round(time02 / (num / step02));
    let interval = setInterval(() => {
        n = n + step02;
        if (n == num) {
            clearInterval(interval);
        };
        l.innerHTML = n;
    }, t);
};

outNum03(236, 'home-num02');

function outNum03(num, elem) {
    let l = document.querySelector('#' + elem);
    let n = 0;
    let t = Math.round(time03 / (num / step03));
    let interval = setInterval(() => {
        n = n + step03;
        if (n == num) {
            clearInterval(interval);
        };
        l.innerHTML = n;
    }, t);
};

outNum03(55, 'home-num03');



document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth;
    if (width < 1024){
        const mobileSlider = new Swiper('.about__content', {
            speed: 600,
            mousewheel: true,
            slidesPerView: 3,
            spaceBetween: 0,
            autoplay: {
                delay: 5000,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                680: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                    autoplay: false
                }
            }
        });
    }
  })