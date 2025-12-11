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
    let timer = $('.countdown').attr('data-timer');
    function countdown(dateEnd) {
      var timer, days, hours, minutes, seconds;

      dateEnd = new Date(dateEnd);
      dateEnd = dateEnd.getTime();

      if (isNaN(dateEnd)) {
        // console.log('count-1');
        return;
      }

      timer = setInterval(calculate, 1000);

      function calculate() {
        var dateStart = new Date(
          new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
        );
        var dateStart = new Date(
          dateStart.getFullYear(),
          dateStart.getMonth(),
          dateStart.getDate(),
          dateStart.getHours(),
          dateStart.getMinutes(),
          dateStart.getSeconds()
        );
        var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000);

        if (timeRemaining >= 0) {
          days = parseInt(timeRemaining / 86400);
          timeRemaining = timeRemaining % 86400;
          hours = parseInt(timeRemaining / 3600);
          timeRemaining = timeRemaining % 3600;
          minutes = parseInt(timeRemaining / 60);
          timeRemaining = timeRemaining % 60;
          seconds = parseInt(timeRemaining);

          document.getElementById('days').innerHTML = parseInt(days, 10);
          document.getElementById('hours').innerHTML = ('0' + hours).slice(-2);
          document.getElementById('minutes').innerHTML = ('0' + minutes).slice(
            -2
          );
          document.getElementById('seconds').innerHTML = ('0' + seconds).slice(
            -2
          );
          // console.log('count-2');
        } else {
          // console.log('count-3');
          $('section.countdown-timer').addClass('countdown-finished');
          return;
        }
      }

      function display(days, hours, minutes, seconds) {}
    }
    // console.log('timer', timer);
    countdown(timer);
  }); //document ready
})(jQuery);
