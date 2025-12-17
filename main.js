(function ($) {
  $(document).ready(function ($) {
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

    // Trigger Internal Section scroll event
    $('a[href^="#"]').on('click', function (e) {
      // prevent default anchor click behavior
      e.preventDefault();

      // store hash
      var hash = this.hash;

      if ($(hash).length) {
        $('html, body').animate({ scrollTop: $(hash).offset().top - 100 }, 300);
      }
    });
  }); //document ready
})(jQuery);
