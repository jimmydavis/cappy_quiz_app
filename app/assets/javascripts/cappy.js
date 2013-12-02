$(document).ready(function() {
  $('#click_me').on("click", changeJS);
  $('#calc').on("click", checkIncreasing);
});

function changeJS(e) {
  $('h1').text("Jabba Jive");
  $('body').attr("class", "pink");
  // this works also to add class
  // $('body').addClass("pink");
  $('#click_me').attr("disabled", "disabled");
};

function checkIncreasing(e) {
  var increasing = true;
  var numbers = $('#user_input').val().split(',');

  for(var i = 0; i < numbers.length; i ++) {
    numbers[i] = parseInt(numbers[i]);
    if (i > 0) {
      if (numbers[i] < numbers[i - 1]) {
        increasing = false;
      }
    }
  }
  if (increasing) {
    $('body').removeClass('red');
    $('body').addClass('green');
  } else {
    $('body').removeClass('green');
    $('body').addClass('red');
  }
};
