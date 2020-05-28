'use strict';
$(function () {
  //LightBox風のイメージ表示（modalimg）
  $('.modalimg').click(function () {
    $('#mask').addClass('masked');
    let src = $(this).attr('data-src');
    $('#mask').append('<div class="lightbox"></div>');
    $('.lightbox').append('<img src="" alt="images">');
    $('.lightbox').children('img').attr('src', src);
    $('.lightbox').fadeIn('slow');
    $('.masked').click(function(){
      if($('.lightbox').length){
        $('.lightbox').fadeOut('slow', function(){$(this).remove();});
        $('#mask').removeClass('masked');
      }
    });
  });
});
