$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});

$(document).ready(function(){
$(".menu-button").click(function(){
$(this).toggleClass("is-active");
$(".menu").toggleClass("active");
});

$(document).click(function(event) {
if (!$(event.target).closest('.menu, .menu-button').length) {
  if ($(".menu").hasClass("active")) {
      $(".menu").removeClass("active");
      $(".menu-button").removeClass("is-active");
  }
}
});
});
