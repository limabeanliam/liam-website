# liamrowley.net

Static site. Everything lives in `index.html`.

## Update the reel
Open `index.html`, find `var VIMEO_ID = '';` and put the number from your Vimeo URL between the quotes.

## Add stills to the six tiles
Drop images in an `img/` folder, then inside each `<a class="blk tile ...">` add
`<img src="img/wnba.jpg" alt="">` before the `<span class="lbl">`.
Square crops, 500x500 or larger. Same for the reel poster: `<img src="img/reel.jpg" alt="">` inside `<a class="blk reel">`.

## Share image
Export a 1200x630 JPEG of your best frame and save it as `share.jpg` next to `index.html`.

## Publish
Commit and push to the branch GitHub Pages serves. Changes are live within a minute.
