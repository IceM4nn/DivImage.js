var aspectRatio = 2.80110698; // imgWidth / imgHeight.real('247.52')
var imgWidth = $('.img-hack').parent().width();
var imgHeight = imgWidth/aspectRatio;
var imgHack = (imgHeight / imgWidth * 100);
$('.img-hack').css({
  'padding-top' : imgHack +'%'
});
