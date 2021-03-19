$(document).ready(function() {
  console.log('ready');

  $("#hamburger").on('click', function() {
    $('#nav').slideToggle();
  });

  $('.card').on('click', function() {
      var id = $(this).attr('id');
      console.log(id);
      $('.overlayContainer').css('display', 'flex').hide().fadeIn(500);
      $(`#${id}.overlay`).removeClass('inactive').addClass('active');
  });

});