$(document).ready(function () {
  console.log('ready');

  setTimeout(function(){
    $("#hamburger").on("click", function(){
      $("#nav").slideToggle();
      });

 },1000);
});
