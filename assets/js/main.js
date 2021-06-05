/* menu show y hidden */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// 토글 메뉴 show/hide
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// menu 클릭시 list 숨기기
const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// 아코디언 스킬
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close';
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach(element => {
    element.addEventListener('click', toggleSkills)
});

// qualification tabs
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(function(tabContents){
            tabContents.classList.remove('qualification__active');
        })
        target.classList.add('qualification__active');
        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        this.classList.add('qualification__active')
    })
})

// active modal
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}
modalBtns.forEach(function(modalBtn, i){
    modalBtn.addEventListener('click', function(){
        modal(i);
    })
})
modalCloses.forEach(function(closeBtn, i){
    closeBtn.addEventListener('click', function(){
        modalViews[i].classList.remove('active-modal');
    })
})

// swiper
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // mousewheel: true,
    // keyboard: true,
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL UP ====================*/
const scrollup = document.getElementById('scroll-up');
function scrollUp(){
    if(window.scrollY > 200){
        scrollup.classList.add('scrollup-visible');
    }else{
        scrollup.classList.remove('scrollup-visible');
    }
}
window.addEventListener('scroll', scrollUp)

/*==================== Dark mode ====================*/
var changeTheme = document.querySelectorAll('.change-theme');
const buttonDark = document.getElementById('button-dark')
const buttonLight = document.getElementById('button-light')

buttonDark.addEventListener('click', function(){
    this.classList.remove('visible');
    document.body.classList.remove('dark-theme');
    buttonLight.classList.toggle('visible');
})
buttonLight.addEventListener('click', function(){
    this.classList.remove('visible');
    document.body.classList.add('dark-theme');
    buttonDark.classList.toggle('visible');
})

