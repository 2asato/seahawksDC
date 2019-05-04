console.log('hi');

// page scroll animation
$(".navbar a").click(function () {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top
    }, 1000)

})

// changes nav color on scroll
$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

$(document).ready(function() {
    $('.vidLink').magnificPopup({
      type:'inline',
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });         
  });


