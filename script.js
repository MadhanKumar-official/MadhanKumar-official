$(document).ready(function () {
  // Toggle menu/navbar
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('fa-times');
  });

  // Sticky navbar & scroll-up button
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }

    if (this.scrollY > 500) {
      $('.scroll-up-btn').fadeIn();
    } else {
      $('.scroll-up-btn').fadeOut();
    }
  });

  // Scroll-up button click
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
  });

  // Typing animation
  var typed = new Typed('.typing', {
    strings: ['Software Tester', 'Manual Tester', 'Automation Tester', 'Programmer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
});