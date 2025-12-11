(function ($) {
  $(document).ready(function ($) {
    // News Slider
    let gallery = jQuery('.gallery-carousel');
    gallery.each(function () {
      jQuery(this).owlCarousel({
        nav: true,
        navText: [
          '<svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3536 8.17676L0.353577 8.17676" stroke="#CDE0E7" stroke-width="0.5"/><path d="M8.35358 16.1768L0.353577 8.17676L8.35358 0.176757" stroke="#CDE0E7" stroke-width="0.5"/></svg>',
          '<svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.17676L25 8.17676" stroke="#CDE0E7" stroke-width="0.5"/><path d="M17 0.176758L25 8.17676L17 16.1768" stroke="#CDE0E7" stroke-width="0.5"/></svg>',
        ],
        navContainer: '.projects-nav',
        loop: true,
        dots: false,
        margin: 20,
        autoHeight: true,
        responsive: {
          0: {
            items: 1,
            autoWidth: false,
          },
          768: {
            items: 4,
            autoWidth: true,
          },
        },
      });
    });
  }); //document ready
})(jQuery);
