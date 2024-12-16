# 1. Copy index and assets to ../mterczynski.github.io
rm -rf ../mterczynski.github.io/assets
rm -rf ../mterczynski.github.io/index.html
cp ./index.html ../mterczynski.github.io/
cp -r ./assets ../mterczynski.github.io/
cd ../mterczynski.github.io
# 2. Commit in ../mterczynski.github.io
git add .
git commit -a -m "Update project-showcase code and assets: $(git log -1 --pretty=format:"%s")"
git status
# 3. Push in ../mterczynski.github.io
git push
