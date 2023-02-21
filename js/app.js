let nav = document.getElementById('side_nav').classList
document.getElementById('nav_btn').addEventListener('click',function(){
    nav.add('active');
 });
document.getElementById('cancel_btn').addEventListener('click',function(){
   nav.remove('active');
});
let Search = document.getElementById('Search').classList
document.getElementById('search_btn').addEventListener('click',function(){
   Search.add('active');
});
document.getElementById('search_cancel_btn').addEventListener('click',function(){
   Search.remove('active');
});
$(function(){
   $(window).on("scroll", function(){
      let scrollSize = $(window).scrollTop();
      if (scrollSize > 80) {
         $("#nav").addClass("nav_active");
       } else {
         $("#nav").removeClass("nav_active");
       }
   });
   $("#back_to_top").on("click", function () {
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });
    $('.card_container').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:
        '<i class="fa-solid fa-chevron-left card_img_arrow"></i>',
      nextArrow:
        '<i class="fa-solid fa-chevron-right card_img_arrow"></i>',
    });
   $('.inspiration_slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow:
        '<i class="fa-solid fa-chevron-left blog_img_arrow"></i>',
      nextArrow:
        '<i class="fa-solid fa-chevron-right blog_img_arrow"></i>',
    });
});
let btns = document.getElementById('sidebtn').classList
let btn = document.getElementById('side_btn').classList
document.getElementById('sidebtn').addEventListener('click',function(){
   btns.add('active');
   btn.remove('active');
});
document.getElementById('side_btn').addEventListener('click',function(){
   btn.add('active');
   btns.remove('active');
});