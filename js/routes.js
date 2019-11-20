$(document).ready(function () {
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

  $('.cld-title a').click(function() {
    setTimeout(function(){
      if (location.hash == "#reopening"){
        $('#reopening').animate({width:'toggle'}, 350);
      }
    }, 50);
  });
  $('#reopening-close').click(function() {
    $('#reopening').slideUp();
  });


});