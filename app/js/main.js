$(function() {
  // setBindings();
  // setGoToTop();
  setDropNav();
});
function setDropNav() {
  $(".icon").click(function() {
    $("#dropbar").toggleClass("visible");
  });

  $("section, .main, footer").click(function() {
    $("#dropbar").removeClass("visible");
  });

  $(window).resize(function() {
    $("#dropbar").removeClass("visible");
  });
}
