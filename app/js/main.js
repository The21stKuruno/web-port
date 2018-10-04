$(function() {
  setGoToTop();
  setDropNav();
});

function setDropNav() {
  $(".icon").click(function() {
    $(".icon").toggleClass("active");
    $("#dropbar").toggleClass("visible");
  });

  $("section, footer, .main").click(function() {
    $(".icon").removeClass("active");
    $("#dropbar").removeClass("visible");
  });

  $(window).resize(function() {
    $(".icon").removeClass("active");
    $("#dropbar").removeClass("visible");
  });
}

// Got to top Button
function setGoToTop() {
  var offset = 320;
  var duration = 800;

  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $("#go-top").fadeIn(duration);
      $(".fade-me").fadeIn(duration);
    } else {
      $("#go-top").fadeOut(duration);
    }
  });

  // Click event to scroll to top
  $("#go-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
}
