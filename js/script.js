// set global variables

// start of document
$(document).ready(function() {
  var currentDay =  moment().format('dddd, MMMM Do');
  $('#currentDay').html(currentDay);
  loadEvents();
});

function loadEvents() {
  var now = new Date();
  var hour = now.getHours();
  // hour = 10;

  for(var i = 9; i <= 17; i++) {
    // var num = i;
    // if (num > 12) {
    //   num = num - 12; 
    // }
    var text = localStorage.getItem(i);
    if (text) {
      $(`#textarea-${i}`).val(text);
    }
    $(`#textarea-${i}`).removeClass('past present future');
    if (i < hour) {
      // in the past
      $(`#textarea-${i}`).addClass('past');
    }
    if (i == hour) {
      $(`#textarea-${i}`).addClass('present');
    }
    if (i > hour) {
      $(`#textarea-${i}`).addClass('future');
    }
  }
}

function onClick(hour) {
  var text = $(`#textarea-${hour}`).val();
  localStorage.setItem(hour, text);
}