const swiper = new Swiper('.spec__slider', {
  // Optional parameters
  loop: true,
  speed: 1000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

const swiperMenu = new Swiper('.menu__slider', {
  // Optional parameters
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  speed: 1000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

// переключаем слайдеры по клику на табы
let tabs = document.querySelector('.tabs');
let menuSliders = document.querySelectorAll('.menu__slider-block');

tabs.addEventListener('click', function (e) {
    if(e.target.classList.contains('tabs__item')) {
        this.querySelectorAll('.tabs__item').forEach(item => item.classList.remove('tabs__item--active'));
        e.target.classList.add('tabs__item--active')
    }

    menuSliders.forEach(slider => slider.classList.remove('show'))
    let tabIndex = e.target.dataset.tab;
    let thisSwiper = document.querySelector("#" + tabIndex);
    console.log(tabIndex);
    console.log(thisSwiper);
    thisSwiper.classList.add('show')
});


// переключаем табы
window.addEventListener('load', overflowTabs);
window.addEventListener('resize', overflowTabs);

function overflowTabs() {
    let outherTabs = document.querySelector('.tabs__container');
    let innerTabs = document.querySelector('.tabs');
    if(innerTabs.offsetWidth > outherTabs.offsetWidth) {
        innerTabs.classList.add('overflow');
    } else {
        innerTabs.classList.remove('overflow');
    }
}
