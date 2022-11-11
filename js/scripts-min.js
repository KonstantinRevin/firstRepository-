document.querySelector('.faq-accordion').addEventListener('click', (event) => {
    if (event.target.closest('.faq-accordion__item')) {
       event.target.closest('.faq-accordion__item')
           .classList.toggle('faq-accordion__item--active');
    }
});

document.querySelector('.btn-burger').addEventListener('click', (event) => {
    document.querySelector('.section-header').classList.toggle('section-header--active-nav');
});

////////////////////////////////////////////////////////////

swiper = new Swiper('.section-hero-image', {
    // // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      
      
    },

    loop: true ,
    // clicable: true
   
  });

 swiper = new Swiper('.slider-blog-container', {
    // // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clicable: true,
    // },

    pagination: {
      el: '.swiper-pagination-blog',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.btn-blog--next',
      prevEl: '.btn-blog--prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    loop: true
  });

  swiper = new Swiper('.slider-quotes-container', {
    // // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',     
    // },

    // loop: true ,
    // clicable: true
   
  });