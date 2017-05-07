var imgWidth = $('.img-hack').parent().width();
var imgHeight = imgWidth/ (imgWidth/($('.img-hack').data('height')));//aspectRatio;
var imgHack = (imgHeight / imgWidth * 100);
$('.img-hack').css({
  'padding-top' : imgHack +'%',
  'height' : '0',
  'max-width' : '100%'
});
