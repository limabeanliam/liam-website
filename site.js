/* liamrowley.net — shared behaviour: builds the grids from projects.js, reel lightbox, copy-email. */
(function () {
  var P = window.PROJECTS || [];
  var byCat = function (c) { return P.filter(function (p) { return p.category === c; }); };
  var esc = function (s) { return String(s || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var img = function (src, alt) { return src ? '<img src="' + esc(src) + '" alt="' + esc(alt || '') + '" loading="lazy">' : ''; };
  var CAT = { dp: 'Director/DP', editor: 'Editor', creative: 'Creative' };
  var PAGE = { dp: 'director.html', editor: 'editor.html', creative: 'creative.html' };

  /* ---------- homepage: six tiles ---------- */
  var home = document.getElementById('homeTiles');
  if (home) {
    var six = P.filter(function (p) { return p.home; }).sort(function (a, b) { return a.home - b.home; }).slice(0, 6);
    home.outerHTML = six.map(function (p, i) {
      return '<a class="blk tile t' + (i + 1) + ' in d' + (i + 3) + '" href="project.html?p=' + esc(p.slug) + '">' + img(p.thumb, p.title) + '<span class="lbl">' + esc(p.title) + '</span></a>';
    }).join('');
    var reelPoster = document.getElementById('reelPoster');
    if (reelPoster && window.REEL && window.REEL.poster) reelPoster.outerHTML = img(window.REEL.poster, '');
  }

  /* ---------- category page: square grid ---------- */
  var grid = document.getElementById('catGrid');
  if (grid) {
    var cat = grid.getAttribute('data-category');
    var items = byCat(cat);
    grid.innerHTML = items.map(function (p, i) {
      return '<a class="blk tile sq in d' + Math.min(i + 2, 8) + '" href="project.html?p=' + esc(p.slug) + '">' + img(p.thumb, p.title) + '<span class="lbl">' + esc(p.title) + (p.year ? ' · ' + esc(p.year) : '') + '</span></a>';
    }).join('') || '<p class="cap" style="grid-column: 1 / -1;">Work coming soon.</p>';
    var count = document.getElementById('catCount');
    if (count) count.textContent = (items.length < 10 ? '0' : '') + items.length + (items.length === 1 ? ' project' : ' projects');
  }

  /* ---------- project page ---------- */
  var proj = document.getElementById('project');
  if (proj) {
    var slug = new URLSearchParams(location.search).get('p');
    var idx = P.findIndex(function (p) { return p.slug === slug; });
    var p = P[idx] || P[0];
    if (p) {
      document.title = p.title + ' — Liam Rowley';
      var set = function (id, v) { var el = document.getElementById(id); if (el) el.textContent = v; };
      set('pTitle', p.title);
      set('pBlurb', p.blurb || '');
      var creds = [['Client', p.client], ['Agency', p.agency], ['Director', p.director], ['Role', p.role], ['Camera', p.camera], ['Year', p.year]];
      document.getElementById('pCredits').innerHTML = creds.filter(function (c) { return c[1]; }).map(function (c) {
        return '<div><span class="k">' + c[0] + '</span><span class="v">' + esc(c[1]) + '</span></div>';
      }).join('');
      var back = document.getElementById('pBack');
      if (back) { back.textContent = '← ' + (CAT[p.category] || 'Work'); back.href = PAGE[p.category] || 'director.html'; }
      var film = document.getElementById('pFilm');
      if (p.poster) film.insertAdjacentHTML('afterbegin', img(p.poster, ''));
      film.setAttribute('data-vimeo', p.vimeo || '');
      var st = p.stills || [];
      var stillsEl = document.getElementById('pStills');
      stillsEl.innerHTML = ['wide', 'tall', 'sq', 'sq', 'sq'].map(function (shape, i) {
        return '<div class="blk still ' + shape + '">' + img(st[i], '') + (st[i] ? '' : '<span class="lbl">[still ' + (i + 1) + ']</span>') + '</div>';
      }).join('');
      var same = byCat(p.category);
      var n = same[(same.indexOf(p) + 1) % same.length];
      var next = document.getElementById('pNext');
      if (next && n && n !== p) { next.textContent = n.title + ' →'; next.href = 'project.html?p=' + n.slug; }
      else if (next) { next.parentElement.style.visibility = 'hidden'; }
    }
  }

  /* ---------- reel / film lightbox ---------- */
  var lb = document.getElementById('lb'), frame = document.getElementById('lbFrame'), lbClose = document.getElementById('lbClose'), last;
  function openLb(vimeo) {
    last = document.activeElement;
    frame.innerHTML = '';
    if (vimeo) {
      var f = document.createElement('iframe');
      f.src = 'https://player.vimeo.com/video/' + encodeURIComponent(vimeo) + '?autoplay=1&title=0&byline=0&portrait=0';
      f.allow = 'autoplay; fullscreen; picture-in-picture'; f.setAttribute('allowfullscreen', '');
      frame.appendChild(f);
    } else {
      frame.textContent = 'Video coming soon';
    }
    lb.classList.add('open'); document.body.style.overflow = 'hidden'; lbClose.focus();
  }
  function closeLb() { lb.classList.remove('open'); document.body.style.overflow = ''; frame.innerHTML = ''; if (last) last.focus(); }
  if (lb) {
    document.querySelectorAll('[data-vimeo]').forEach(function (el) {
      el.addEventListener('click', function (e) { e.preventDefault(); openLb(el.getAttribute('data-vimeo') || (window.REEL && el.id === 'reel' ? window.REEL.vimeo : '')); });
    });
    lbClose.addEventListener('click', closeLb);
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && lb.classList.contains('open')) closeLb(); });
  }

  /* ---------- contact: copy email ---------- */
  var toast = document.getElementById('toast'), tt;
  document.querySelectorAll('[data-email]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      var email = el.getAttribute('data-email');
      var done = function () {
        if (!toast) return;
        toast.textContent = email + ' copied'; toast.classList.add('show');
        clearTimeout(tt); tt = setTimeout(function () { toast.classList.remove('show'); }, 1800);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(email).then(done, function () { location.href = 'mailto:' + email; });
      else location.href = 'mailto:' + email;
    });
  });
})();
