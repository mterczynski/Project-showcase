TARGET_DIR="../mterczynski.github.io"

# Check if target directory exists
if [ ! -d "$TARGET_DIR" ]; then
    echo "Error: Target directory '$TARGET_DIR' does not exist"
    echo "Please clone the repository first"
    exit 1
fi

# 1. Copy index and assets to $TARGET_DIR
rm -rf "$TARGET_DIR"/assets
rm -rf "$TARGET_DIR"/style.css
rm -rf "$TARGET_DIR"/index.html
rm -rf "$TARGET_DIR"/toggle.js
rm -rf "$TARGET_DIR"/main.js
rm -rf "$TARGET_DIR"/fireBaseConfig.js
rm -rf "$TARGET_DIR"/certification.js
rm -rf "$TARGET_DIR"/counter.js
cp ./index.html "$TARGET_DIR"/
cp ./style.css "$TARGET_DIR"/
cp ./toggle.js "$TARGET_DIR"/
cp ./main.js "$TARGET_DIR"/
cp ./fireBaseConfig.js "$TARGET_DIR"/
cp ./certification.js "$TARGET_DIR"/
cp ./counter.js "$TARGET_DIR"/
cp -r ./assets "$TARGET_DIR"/
cd "$TARGET_DIR"
# 2. Commit in $TARGET_DIR
git add .
git commit -a -m "Update project-showcase"
git status
# 3. Push in $TARGET_DIR
git push
