$(window).bind("load", function () {
    $(".loader-screen").hide();
}); 

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".nav-bar").addClass("sticky");
    } else {
        $(".nav-bar").removeClass("sticky");
    }
});

var btn = $('#scroll-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});




$(document).ready(function(){
    $('.home-banner-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:false,
        autoplay: 6000,
        dots: true,
        autoplayTimeout:6000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});

$(document).ready(function(){
    $('.testimonial-carousel').owlCarousel({
        loop:true,
    margin:15,
    nav:false,
    dots:true,
    autoplay:true,
    autoplay: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
    });
})

$(".menu-toggle").click(function () {
    $(".menu").toggleClass("slide-right");
    $(this).find('i').toggleClass('fa-bars fa-times')
});
