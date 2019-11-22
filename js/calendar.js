var events = [
  {'Date': new Date(2019, 10, 22), 'Title': 'GRAND RE-OPENING! | 5pm', 'Link': function(){$('#reopening').slideDown();}},
  {'Date': new Date(2019, 11, 2), 'Title': 'Open Mic | 8:30pm', 'Link': function(){$('#openMic').slideDown();}},
  {'Date': new Date(2019, 11, 6), 'Title': 'The City River Band | 8:30pm-11:30pm', 'Link': function(){$('#cityRiverBand').slideDown();}},
  {'Date': new Date(2019, 11, 31), 'Title': 'New Years Eve Party with The Bittersweet Symphonies | 9pm-1am', 'Link': function(){$('#newYears').slideDown();}},
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);