# Check if target directory exists
if [ ! -d "../mterczynski.github.io" ]; then
    echo "Error: Target directory '../mterczynski.github.io' does not exist"
    echo "Please clone the repository first"
    exit 1
fi

# 1. Copy index and assets to ../mterczynski.github.io
rm -rf ../mterczynski.github.io/assets
rm -rf ../mterczynski.github.io/style.css
rm -rf ../mterczynski.github.io/index.html
rm -rf ../mterczynski.github.io/toggle.js
cp ./index.html ../mterczynski.github.io/
cp ./style.css ../mterczynski.github.io/
cp ./toggle.js ../mterczynski.github.io/
cp -r ./assets ../mterczynski.github.io/
cd ../mterczynski.github.io
# 2. Commit in ../mterczynski.github.io
git add .
git commit -a -m "Update project-showcase code and assets: $(git log -1 --pretty=format:"%s")"
git status
# 3. Push in ../mterczynski.github.io
git push
