jQuery(function ($) {

  $('html, body').stop().animate({ "opacity": 1 },1000);

  function redirectPage(link) {
    document.location.href = link;
  }

  $(document).on('click', "a", function (event) {
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(1000, function () { redirectPage(linkLocation) });
  });

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

  $('.overlayContainer').click(function () {
    var id = $('.active').attr('id');
    $(`#${id}.overlay.overlayOn`).removeClass('overlayOn active').addClass('overlayOff inactive');
    $('.overlayContainer').fadeOut(1500);
    var src = $(this).contents().find("iframe").attr('src');
    console.log(src);
  });
});