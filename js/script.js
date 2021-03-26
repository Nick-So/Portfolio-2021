$(document).ready(function () {
  console.log('ready');

  // /*Preloader*/
  // function fade(){
  //   $('.preloader').fadeOut(2500)
  // };
  // setTimeout(fade, 2000);

  /*Navigation Slider*/
  $("#hamburger").on('click', function () {
    $('#nav').slideToggle();
  });

  /*Card Overlay*/
  $('.card').on('click', function () {
    var id = $(this).attr('id');
    console.log(id);
    $('.overlayContainer').css('display', 'flex').hide().fadeIn(300);
    $(`#${id}.overlay`).removeClass('overlayOff inactive').addClass('overlayOn active');
  });

  $('.overlayContainer').on('click', function () {
    var id = $('.active').attr('id');
    var src = $('.gameContent').attr("src");
    console.log(id, src);
    $(`#${id}.overlay.overlayOn`).removeClass('overlayOn active').addClass('overlayOff inactive');
    $('#gameContent.videoPlayer').attr("src", src);
    $('.overlayContainer').fadeOut(1500);
  });
});