$( document ).ready(function() {

    // Get started!

$('.slide_down').click(function(){
  var customHref = $(this).attr('href');
  $('html, body').animate({
    scrollTop:$(customHref).offset().top
  }, 2000);
})
});
