$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: true,
            dots: false,
            items: 1,
            autoplay: true,
            autoplayHoverPause: true
        }
    );
});

$(document).ready(function(){
  $(".sp_menu_icon").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});