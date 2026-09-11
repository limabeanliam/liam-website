# liamrowley.net

Static site, hosted on GitHub Pages. Pages: `index.html` (home), `director.html`, `editor.html`, `creative.html` (square grids), `project.html` (one template for every project).

## Where the content lives
Everything about the work is in `projects.js` — one block per project. Edit the text, save, commit, push. The homepage grid, the category pages and the project pages all read from it.

- `home: 1` … `home: 6` picks the six homepage tiles and their order.
- `category` decides which page a project sits on: `"dp"`, `"editor"` or `"creative"`.
- `vimeo` is the number from the Vimeo URL. The homepage reel's number goes in `window.REEL` at the top.
- Images go in an `img/` folder: `thumb` (square, 500px+), `poster` (16:9), and up to three `stills` (first is wide, second is tall, the rest square).

## Share image
Save a 1200x630 JPEG of your best frame as `share.jpg` next to `index.html`.

## Look
Grid colour, shadow strength and offset are the first lines of `site.css` (`--grid`, `--shadow-op`, `--shadow-off`).
