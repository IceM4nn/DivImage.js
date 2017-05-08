var imgWidth = $('.imgbox').parent().width();
var aspectRatio = $('.imgbox').data('ratio');
// ToDo: auto calculation of img aspectRatio using formula(imgWidth / imgHeight)
var imgHeight = imgWidth / aspectRatio;
var imgHack = (imgHeight / imgWidth * 100);
$('.imgbox').css({
  'padding-top' : imgHack +'%',
  'height' : '0'
});
