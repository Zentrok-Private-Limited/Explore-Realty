const mobileScreen = window.matchMedia("(max-width: 990px )");
$(document).ready(function () {
    $(".dashboard-nav-dropdown-toggle").click(function () {
        $(this).closest(".dashboard-nav-dropdown")
            .toggleClass("show")
            .find(".dashboard-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
        }
    });
});


// ======================================carousel js ==================================

const multipleItemCarousel = document.querySelector("#testimonialCarousel");

if (window.matchMedia("(min-width:576px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, { interval: false });

  let carouselWidth = $(".carousel-inner")[0].scrollWidth;
  let cardWidth = $(".carousel-item").width();
  let scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 2) {
      scrollPosition += cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });

  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });
} else {
  $(multipleItemCarousel).addClass("slide");
}

// gallery js 
