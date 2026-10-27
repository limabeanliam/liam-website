#!/bin/sh
# Web-size media for one project.   Usage:  sh prep.sh <slug>
# Reads img/source/<slug>/ and writes img/<slug>/ :
#   stills  (png/jpg/tif, in name order)  -> still-1.jpg, still-2.jpg ... (1600 px wide, 16:9 crop)
#   first still                           -> poster.jpg (1920 wide) and thumb.jpg (640 square, centre crop)
#   a video (mov/mp4)                     -> loop.mp4 (1280x720, H.264, silent, ~8 MB per 40 s)
# Files already in img/<slug>/ with the same name are replaced; anything else there is left alone.
set -e
slug="$1"; [ -n "$slug" ] || { echo "usage: sh prep.sh <slug>"; exit 1; }
src="img/source/$slug"; out="img/$slug"
[ -d "$src" ] || { echo "no folder $src"; exit 1; }
command -v ffmpeg >/dev/null || { echo "ffmpeg not found (brew install ffmpeg)"; exit 1; }
mkdir -p "$out"
n=0; first=""
ls "$src" | grep -iE '\.(png|jpe?g|tiff?)$' | sort -V | while IFS= read -r f; do
  n=$((n+1))
  ffmpeg -nostdin -y -loglevel error -i "$src/$f" -vf "crop=iw:min(ih\,iw*9/16),scale=1600:-2" -q:v 3 "$out/still-$n.jpg"
  if [ $n -eq 1 ]; then
    ffmpeg -nostdin -y -loglevel error -i "$src/$f" -vf "crop=iw:min(ih\,iw*9/16),scale=1920:-2" -q:v 3 "$out/poster.jpg"
    ffmpeg -nostdin -y -loglevel error -i "$src/$f" -vf "crop=min(iw\,ih):min(iw\,ih),scale=640:640" -q:v 3 "$out/thumb.jpg"
  fi
  echo "still-$n.jpg  <-  $f"
done
v=$(ls "$src" | grep -iE '\.(mov|mp4|m4v)$' | head -1)
if [ -n "$v" ]; then
  ffmpeg -nostdin -y -loglevel error -i "$src/$v" -an -vf "scale=1280:-2" -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p -movflags +faststart -r 24 "$out/loop.mp4"
  echo "loop.mp4  <-  $v"
fi
echo "done: $(ls "$out" | wc -l | tr -d ' ') files in $out ($(du -sh "$out" | cut -f1))"
