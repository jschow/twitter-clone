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
    if(charLeft > 10) {
      $('#char-count').css('color', 'black');
    }
    if(charLeft < 0) {
      $('#tweet-submit').prop('disabled', true);
    }
    if(charLeft >= 0) {
      $('#tweet-submit').prop('disabled', false);
    }
  });
});
