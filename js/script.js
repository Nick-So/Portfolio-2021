jQuery(function ($) {

  //Fade Out when click link
  function redirectPage(link) {
    document.location.href = link;
  }

  $(document).on('click', "a:not('.external')", function (event) {
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(1000, function () { redirectPage(linkLocation) });
  });

  //Navigation Slider
  $('#navList').css('display', 'flex').hide()

  $("#hamburger").on('click', function () {
    $('#navList').slideToggle();
  });

  //Card Overlay
  $('.card').on('click', function () {
    var id = $(this).attr('id');
    console.log(id);
    $('.overlayContainer').css('display', 'flex').hide().fadeIn(300);
    $(`#${id}.overlay`).removeClass('inactive').addClass('active');
  });

  $('.overlayContainer').click(function () {
    var id = $('.active').attr('id');
    $(`#${id}.overlay`).removeClass('active').addClass('closed');
    $('.overlayContainer').fadeOut(1000);
    setTimeout(function () { $(`#${id}.overlay`).removeClass('closed').addClass('inactive'); }, 800);
    setTimeout(function () {$(`#${id} iframe`).attr('src', $(`#${id} iframe`).attr('src'));}, 800);
  });







});