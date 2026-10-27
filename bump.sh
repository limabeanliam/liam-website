#!/bin/sh
# Run after changing site.css, site.js or projects.js so browsers fetch the new version:   sh bump.sh
V=$(date +%Y%m%d%H%M)
for f in index.html director.html editor.html creative.html project.html; do
  perl -pi -e "s#(site\.css|site\.js|projects\.js)(\?v=\d+)?\"#\$1?v=$V\"#g" "$f"
done
echo "stamped $V"
