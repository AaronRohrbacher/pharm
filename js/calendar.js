var events = [
  {'Date': new Date(2019, 11, 16), 'Title': 'Open Mic with Curtis Reynolds | 8:30pm', 'Link': function(){$('#openMic').slideDown();}},
  {'Date': new Date(2019, 11, 30), 'Title': 'Open Mic with Curtis Reynolds | 8:30pm', 'Link': function(){$('#openMic').slideDown();}},
  {'Date': new Date(2019, 11, 31), 'Title': 'New Years Eve Party with The Bittersweet Symphonies | 9pm-1am', 'Link': function(){$('#newYears').slideDown();}},
  {'Date': new Date(2020, 00, 13), 'Title': 'Open Mic with Curtis Reynolds | 8:30pm', 'Link': function(){$('#openMic').slideDown();}},
  {'Date': new Date(2020, 00, 17), 'Title': 'Tate AK | 8pm', 'Link': function(){$('#tateAk').slideDown();}},

];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);