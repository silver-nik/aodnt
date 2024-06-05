

new Swiper(".posters__list-wrapper", {
    // direction: 'horizontal',
    // slidesPerView: "auto",
    // cssMode: true,
    // mousewheel: {
    //   forceToAxis: true,
    // },
    // freeMode: true,
    // scrollbar: {
    //   el: '.posters__list-wrapper .scroll__container',
    //   dargSize: 20,
    //   width: 20,
    //   draggable: true,
    //   hide: false,
    //   snapOnRelease: true
    // }
    slidesPerView: 'auto',
    resistanceRatio: 0.5,
    freeMode: true,
    mousewheel: {
        forceToAxis: true,
    },
    scrollbar: {
        el: '.posters__list-wrapper .scroll__container',
        snapOnRelease: false,
        dragSize: '40px',
        draggable: true,
    },
    progress: {
        watchSlidesProgress: true
    },

});

new Swiper(".updates__list-wrapper", {
    slidesPerView: 'auto',
    resistanceRatio: 0.5,
    freeMode: true,
    mousewheel: {
        forceToAxis: true,
    },
    scrollbar: {
        el: '.updates__list-wrapper .scroll__container',
        snapOnRelease: false,
        dragSize: '40px',
        draggable: true,
    },
    progress: {
        watchSlidesProgress: true
    }

});

new Swiper(".gallery__list-wrapper", {
    slidesPerView: 'auto',
    resistanceRatio: 0.5,
    freeMode: true,
    mousewheel: {
        forceToAxis: true,
    },
    scrollbar: {
        el: '.gallery__list-wrapper .scroll__container',
        snapOnRelease: false,
        dragSize: '40px',
        draggable: true,
    },
    progress: {
        watchSlidesProgress: true
    },
    breakpoints: {
        320: {
            grid: {
                rows: 2,
            }
        },
        577: {
            grid: {
                rows: 1,
            }
        }
    }

});

new Swiper(".funders__list-wrapper", {
    direction: 'horizontal',
    slidesPerView: "auto",
    cssMode: true,
    mousewheel: {
      forceToAxis: true,
    },
    freeMode: true,
    navigation: {
        nextEl: ".funders .navigation__arrow-next",
        prevEl: ".funders .navigation__arrow-prev",
    }

});
