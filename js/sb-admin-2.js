(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
    
    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });
  
  $('#typewriteText')
      .on('typewriteStarted', function() {
          console.log('typewrite has started');
      })
      .on('typewriteComplete', function() {
          console.log('typewrite has complete');
      })
      .on('typewriteTyped', function(event, data) {
          console.log('typewrite has typed', data);
      })
      .on('typewriteRemoved', function(event, data) {
          console.log('typewrite has removed', data);
      })
      .on('typewriteNewLine', function() {
          console.log('typewrite has added a new line');
      })
      .on('typewriteSelected', function(event, data) {
          console.log('typewrite has selected text', data);
      })
      .on('typewriteDelayEnded', function() {
          console.log('typewrite delay has ended');
      })
      .typewrite({
          actions: [
              {type: 'Hello. '},
              {type: '<br>'},
              {type: 'Weclome '},
              {delay: 1500},
              {remove: {num: 1, type: 'stepped'}},
              {select: {from: 11, to: 16}},
              {delay: 2000},
              {remove: {num: 5, type: 'whole'}},
              {delay: 300},
              {type: 'lcome to typewrite. '},
              {type: '<br>'},
              {type: 'It\'s just so easy to setup and use.'}
          ]
      });

})(jQuery); // End of use strict
