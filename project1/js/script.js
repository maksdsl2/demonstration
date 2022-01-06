new Swiper('.swiper', {

    // стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',

        clickable: true,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    loop: true,


});