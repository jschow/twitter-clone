$(document).ready(function() {
  $('#tweet-controls').hide();
  $('.tweet-compose').click(function(event) {
    $('.tweet-compose').css('height', '5em');
    $('#tweet-controls').show();
  })
  $('.tweet-compose').keyup(function() {
    var charLeft = 140 - this.value.length;
    $('#char-count').html(charLeft);
    if(charLeft <= 10) {
      $('#char-count').css('color', 'red');
    }
    else {
      $('#char-count').css('color', 'black');
    }
  })
});
