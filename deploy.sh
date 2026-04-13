#!/usr/bin/env bash
set -eu

SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_DIR="$SOURCE_DIR/../mterczynski.github.io/project-showcase-webcomp"

mkdir -p "$TARGET_DIR"

echo "Cleaning previous deployed app files..."
rm -rf "$TARGET_DIR/assets" "$TARGET_DIR/components" "$TARGET_DIR/utils" "$TARGET_DIR/data"
rm -f "$TARGET_DIR/index.html" "$TARGET_DIR/style.css" "$TARGET_DIR/main.js"

echo "Copying current app structure..."
cp "$SOURCE_DIR/index.html" "$TARGET_DIR/"
cp "$SOURCE_DIR/style.css" "$TARGET_DIR/"
cp "$SOURCE_DIR/main.js" "$TARGET_DIR/"
cp -r "$SOURCE_DIR/assets" "$TARGET_DIR/"
cp -r "$SOURCE_DIR/components" "$TARGET_DIR/"
cp -r "$SOURCE_DIR/utils" "$TARGET_DIR/"
cp -r "$SOURCE_DIR/data" "$TARGET_DIR/"

cd "$TARGET_DIR"

git add .

if git diff --cached --quiet; then
  echo "No changes to deploy."
  exit 0
fi

git commit -m "Update project-showcase"
git status --short

git push
