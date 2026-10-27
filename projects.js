/* liamrowley.net — all project content lives here.
   To add a project: copy one block, change the fields, and make a folder img/<slug>/ holding
   loop.mp4, thumb.jpg, poster.jpg, still-1.jpg … still-12.jpg.
   category: "dp" | "editor" | "creative"
   home: the order it appears in the homepage grid (1–6); leave out to keep it off the homepage.
   vimeo: the number from the Vimeo URL, e.g. "123456789". Leave "" until you have it.
   thumb: square image (500x500+). poster: 16:9 frame for the top of the project page.
   loop: short muted MP4 that plays in the tile on hover and at the top of the project page.
   stills: 16:9 frames, four per row (twelve makes three rows). */

window.REEL = { vimeo: "1239906256", loop: "img/reel/loop.mp4", poster: "img/reel/poster.jpg" };
// homepage reel: loop = short muted MP4 that autoplays in the block; poster = frame shown until it loads (and on Low Power Mode); vimeo = the full reel, opens on click

window.TILE_AUTOPLAY = false;   // false: tiles show the thumb and play their loop on hover. true: every tile loops all the time (heavier on phones).

window.PROJECTS = [
  {
    slug: "wnba-all-star-2026", title: "WNBA All-Star 2026", category: "dp", home: 1,
    client: "WNBA", agency: "", director: "", role: "Director of Photography", camera: "", year: "2026",
    vimeo: "1239906256", blurb: "", thumb: "img/wnba-all-star-2026/thumb.jpg", poster: "img/wnba-all-star-2026/poster.jpg", loop: "img/wnba-all-star-2026/loop.mp4", stills: ["img/wnba-all-star-2026/still-1.jpg", "img/wnba-all-star-2026/still-2.jpg", "img/wnba-all-star-2026/still-3.jpg", "img/wnba-all-star-2026/still-4.jpg", "img/wnba-all-star-2026/still-5.jpg", "img/wnba-all-star-2026/still-6.jpg", "img/wnba-all-star-2026/still-7.jpg", "img/wnba-all-star-2026/still-8.jpg", "img/wnba-all-star-2026/still-9.jpg", "img/wnba-all-star-2026/still-10.jpg", "img/wnba-all-star-2026/still-11.jpg", "img/wnba-all-star-2026/still-12.jpg"]
  },
  {
    slug: "shade-inc-waiting-room", title: "Shade Inc — Waiting Room", category: "dp", home: 2,
    client: "Shade Inc", agency: "", director: "", role: "Director of Photography", camera: "", year: "",
    vimeo: "1239906256", blurb: "", thumb: "img/shade-inc-waiting-room/thumb.jpg", poster: "img/shade-inc-waiting-room/poster.jpg", loop: "img/shade-inc-waiting-room/loop.mp4", stills: ["img/shade-inc-waiting-room/still-1.jpg", "img/shade-inc-waiting-room/still-2.jpg", "img/shade-inc-waiting-room/still-3.jpg", "img/shade-inc-waiting-room/still-4.jpg", "img/shade-inc-waiting-room/still-5.jpg", "img/shade-inc-waiting-room/still-6.jpg", "img/shade-inc-waiting-room/still-7.jpg", "img/shade-inc-waiting-room/still-8.jpg", "img/shade-inc-waiting-room/still-9.jpg", "img/shade-inc-waiting-room/still-10.jpg", "img/shade-inc-waiting-room/still-11.jpg", "img/shade-inc-waiting-room/still-12.jpg"]
  },
  {
    slug: "nespresso-bean-breakdown", title: "Nespresso — Bean Breakdown", category: "dp", home: 3,
    client: "Nespresso", agency: "", director: "", role: "Director of Photography", camera: "", year: "",
    vimeo: "1239906256", blurb: "", thumb: "img/nespresso-bean-breakdown/thumb.jpg", poster: "img/nespresso-bean-breakdown/poster.jpg", loop: "img/nespresso-bean-breakdown/loop.mp4", stills: ["img/nespresso-bean-breakdown/still-1.jpg", "img/nespresso-bean-breakdown/still-2.jpg", "img/nespresso-bean-breakdown/still-3.jpg", "img/nespresso-bean-breakdown/still-4.jpg", "img/nespresso-bean-breakdown/still-5.jpg", "img/nespresso-bean-breakdown/still-6.jpg", "img/nespresso-bean-breakdown/still-7.jpg", "img/nespresso-bean-breakdown/still-8.jpg", "img/nespresso-bean-breakdown/still-9.jpg", "img/nespresso-bean-breakdown/still-10.jpg", "img/nespresso-bean-breakdown/still-11.jpg", "img/nespresso-bean-breakdown/still-12.jpg"]
  },
  {
    slug: "ey-family-dynasty", title: "EY — Family Dynasty", category: "dp", home: 4,
    client: "EY", agency: "", director: "", role: "Director of Photography", camera: "", year: "",
    vimeo: "1239906256", blurb: "", thumb: "img/ey-family-dynasty/thumb.jpg", poster: "img/ey-family-dynasty/poster.jpg", loop: "img/ey-family-dynasty/loop.mp4", stills: ["img/ey-family-dynasty/still-1.jpg", "img/ey-family-dynasty/still-2.jpg", "img/ey-family-dynasty/still-3.jpg", "img/ey-family-dynasty/still-4.jpg", "img/ey-family-dynasty/still-5.jpg", "img/ey-family-dynasty/still-6.jpg", "img/ey-family-dynasty/still-7.jpg", "img/ey-family-dynasty/still-8.jpg", "img/ey-family-dynasty/still-9.jpg", "img/ey-family-dynasty/still-10.jpg", "img/ey-family-dynasty/still-11.jpg", "img/ey-family-dynasty/still-12.jpg"]
  },
  {
    slug: "sungboon-editor", title: "Sungboon Editor", category: "dp", home: 5,
    client: "Sungboon Editor", agency: "", director: "", role: "Director of Photography", camera: "", year: "",
    vimeo: "1239906256", blurb: "", thumb: "img/sungboon-editor/thumb.jpg", poster: "img/sungboon-editor/poster.jpg", loop: "img/sungboon-editor/loop.mp4", stills: ["img/sungboon-editor/still-1.jpg", "img/sungboon-editor/still-2.jpg", "img/sungboon-editor/still-3.jpg", "img/sungboon-editor/still-4.jpg", "img/sungboon-editor/still-5.jpg", "img/sungboon-editor/still-6.jpg", "img/sungboon-editor/still-7.jpg", "img/sungboon-editor/still-8.jpg", "img/sungboon-editor/still-9.jpg", "img/sungboon-editor/still-10.jpg", "img/sungboon-editor/still-11.jpg", "img/sungboon-editor/still-12.jpg"]
  },
  {
    slug: "park-happening", title: "Park Happening", category: "dp", home: 6,
    client: "", agency: "", director: "", role: "Director of Photography", camera: "", year: "",
    vimeo: "1239906256", blurb: "", thumb: "img/park-happening/thumb.jpg", poster: "img/park-happening/poster.jpg", loop: "img/park-happening/loop.mp4", stills: ["img/park-happening/still-1.jpg", "img/park-happening/still-2.jpg", "img/park-happening/still-3.jpg", "img/park-happening/still-4.jpg", "img/park-happening/still-5.jpg", "img/park-happening/still-6.jpg", "img/park-happening/still-7.jpg", "img/park-happening/still-8.jpg", "img/park-happening/still-9.jpg", "img/park-happening/still-10.jpg", "img/park-happening/still-11.jpg", "img/park-happening/still-12.jpg"]
  },

  /* ---- Editor ---- */
  {
    slug: "edit-reel", title: "Edit Reel", category: "editor",
    client: "", agency: "", director: "", role: "Editor", camera: "", year: "2026",
    vimeo: "1239906256", blurb: "", thumb: "img/edit-reel/thumb.jpg", poster: "img/edit-reel/poster.jpg", loop: "img/edit-reel/loop.mp4", stills: ["img/edit-reel/still-1.jpg", "img/edit-reel/still-2.jpg", "img/edit-reel/still-3.jpg", "img/edit-reel/still-4.jpg", "img/edit-reel/still-5.jpg", "img/edit-reel/still-6.jpg", "img/edit-reel/still-7.jpg", "img/edit-reel/still-8.jpg", "img/edit-reel/still-9.jpg", "img/edit-reel/still-10.jpg", "img/edit-reel/still-11.jpg", "img/edit-reel/still-12.jpg"]
  },

  /* ---- Creative ---- */
  {
    slug: "world-sevens-football", title: "World Sevens Football", category: "creative",
    client: "World Sevens Football", agency: "", director: "", role: "Lead Creative", camera: "", year: "2026",
    vimeo: "1239906256", blurb: "", thumb: "img/world-sevens-football/thumb.jpg", poster: "img/world-sevens-football/poster.jpg", loop: "img/world-sevens-football/loop.mp4", stills: ["img/world-sevens-football/still-1.jpg", "img/world-sevens-football/still-2.jpg", "img/world-sevens-football/still-3.jpg", "img/world-sevens-football/still-4.jpg", "img/world-sevens-football/still-5.jpg", "img/world-sevens-football/still-6.jpg", "img/world-sevens-football/still-7.jpg", "img/world-sevens-football/still-8.jpg", "img/world-sevens-football/still-9.jpg", "img/world-sevens-football/still-10.jpg", "img/world-sevens-football/still-11.jpg", "img/world-sevens-football/still-12.jpg"]
  }
];
