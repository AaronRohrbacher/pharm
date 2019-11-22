function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
$(document).ready(function () {
  if (getUrlParameter('contact-success') === 'true') {
    $('#contact-success').show();
  }

  $('.content').hide();
  $('.splash-content').hide();
  if (location.hash == '#events') {
    $('.eventsContent').show();
  } else if (location.hash == '' || location.hash == '#home') {
    $('.homeContent').show();
    $('.splash-content').show();
  } else if (location.hash == '#contact') {
    $('.contactContent').show();
  } else if (location.hash == '#booking') {
    $('.bookingContent').show();
  } else if (location.hash == '#about') {
    $('.aboutContent').show();
  }


  $('#clickHome').click(function () {
    $('.content').hide();
    $('.splash-content').slideDown();
    $('.homeContent').slideDown();
  });

  $('#clickEvents').click(function () {
    $('.content').hide();
    $('.splash-content').slideUp();
    $('.eventsContent').slideDown();
  });

  $('#clickAbout').click(function () {
    $('.content').hide();
    $('.splash-content').slideUp();
    $('.aboutContent').slideDown();
  });

  $('#clickContact').click(function () {
    $('.content').hide();
    $('.splash-content').slideUp();
    $('.contactContent').slideDown();
  });

  $('#clickBooking').click(function () {
    $('.content').hide();
    $('.splash-content').slideUp();
    $('.bookingContent').slideDown();
  });
// EVENTS:
  // $('.cld-title a').click(function() {
  //   // setTimeout(function(){
  //     if (location.hash == "#reopening") {
  //       $('#reopening').slideDown()
  //     } else if (location.hash == "#openMic") {
  //       $('#openMic').slideDown();
  //     }
      // clearTimeout();
    // }, 500);
  // });
  $('.slider-close').click(function() {
    $('.slider').slideUp();
  });
});