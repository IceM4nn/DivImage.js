# ImageBox
A CSS hack to set `<div>` or other elements (such as `<figure>`) as `<img>`. Required JQuery. Check out [demo](https://icem4nn.github.io/ImageBox/)!

## Getting Started
1. Include JQuery and divimage.js to your web document.
```
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous" type="text/javascript"></script>
<script src="divimage.js" type="text/javascript"></script>
```
2. Add `img-hack` class to targeted element.
3. Set your image height to the element by parsing `data-height` attribute.
Example:
```
<div class="wrapper">
  <figure class="img-hack" data-height="200"></figure>
</div>
```
