


$(function (){


  $('.carousel').owlCarousel({
    loop: true,
    responsiveClass:true,
    nav: false,
    responsive:{
      0:{
        items:1,
        nav:false
      },
      768:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
    }
  });

});


