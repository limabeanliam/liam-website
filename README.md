# liamrowley.net

Static site, hosted on GitHub Pages. Pages: `index.html` (home), `director.html`, `editor.html`, `creative.html` (square grids), `project.html` (one template for every project).

## Where the content lives
Everything about the work is in `projects.js` — one block per project. Edit the text, save, commit, push. The homepage grid, the category pages and the project pages all read from it.

- `home: 1` … `home: 6` picks the six homepage tiles and their order.
- `category` decides which page a project sits on: `"dp"`, `"editor"` or `"creative"`.
- `vimeo` is the number from the Vimeo URL.
- The homepage reel is `window.REEL` at the top: `loop` is a short muted MP4 (20–30 s of your best cuts, 1280x720, H.264, no audio track, under ~8 MB) that autoplays in the block; `poster` is a frame grab shown until it loads; `vimeo` is the full reel, which opens full-screen on click.
- Each project has its own folder, `img/<slug>/`, holding `thumb.jpg` (square, 500px+), `poster.jpg` (16:9 frame), `loop.mp4` (short muted clip: plays in the tile on hover and at the top of the project page), and `still-1.jpg` … `still-8.jpg` (16:9, four per row). The homepage reel lives in `img/reel/`. To swap media, replace the file under the same name. Full-size originals go in `img/source/`, which git ignores.
- `window.TILE_AUTOPLAY` (top of `projects.js`) switches the tiles from hover-to-play to always-looping.

## Share image
Save a 1200x630 JPEG of your best frame as `share.jpg` next to `index.html`.

## Look
Grid colour, shadow strength and offset are the first lines of `site.css` (`--grid`, `--shadow-op`, `--shadow-off`).

## After editing site.css, site.js or projects.js
Run `sh bump.sh` (in Terminal, inside this folder) before committing. It stamps the pages so browsers stop using a cached copy.
