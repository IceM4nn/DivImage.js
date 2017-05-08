# ImageBox
A CSS hack to set `<div>` or other elements (such as `<figure>`) as `<img>`. Require JQuery. Check out [demo](https://icem4nn.github.io/ImageBox/)!

## Getting Started
1. Include JQuery and imagebox.js to your web document.
```
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous" type="text/javascript"></script>
<script src="imagebox.js" type="text/javascript"></script>
```
2. Add `imgbox` class to targeted element.
3. Set your image aspect ratio to the element by parsing `data-ratio` attribute.
Example:
```
<div class="wrapper">
  <figure class="imgbox" data-ratio="2.7"></figure>
</div>
```
4. At the time being you need to calculate the `data-ratio` manually using the formula `imageWidth / imageHeight`.

## ToDo
1. Auto calculate the image aspect ratio.
2. Convert script to pure javascript for better performance.
