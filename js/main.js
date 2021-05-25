jQuery(document).ready(function($) {  

    $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });
    
});

// ------------------------------------------------------------------------

var sections = $('section')
  , nav = $('header')
  , nav_height = nav.outerHeight();
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});
nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
 
  $('html, body').animate({
    scrollTop: $(id).offset().top}, 1500);
 
  return false;
});

//-------------------------------------------------------------

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fal fa-angle-left'></i>",
    "<i class='fal fa-angle-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})

//-----------------------------------------------------------

$(function() {
  
  var $list, $newItemForm;
  $list = $('.comment-info');
  $newItemForm = $('#newItemForm');

  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var title = $('#title').val();
    var msg = $('#msg').val();

    $list.append(
      '<div class="box">'+
        
        '<div class="img">'+
          '<img src="./img/user.png" alt="" class="img-fluid">'+
        '</div>'+
        '<div class="close">' +
          '<i class="far fa-times"></i>'+
        '</div>' +
        '<div class="header">'+
          '<h2>'+ name +'</h2>'+
        '</div>'+
        '<div class="title">'+
          '<h6>'+ title +'</h6>'+
        '</div>'+
        '<div class="explanation">'+
          '<p>'+
            msg +
          '</p>'+
        '</div>'+
      '</div>'
    );
  });


  function cuteHide(el) {
    el.animate({opacity: '0'}, 150, function(){
      el.animate({height: '0px'}, 150, function(){
        el.remove();
      });
    });
   
  }

  $list.on('click','i', function(){
    var el = $(this).closest('.box');
    cuteHide(el);
  });


});

//------------------------------------------------------

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});