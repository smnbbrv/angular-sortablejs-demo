npm run build
touch docs/.nojekyll
ln -s docs/index.html docs/sortable-array
ln -s docs/index.html docs/sortable-form-array
ln -s docs/index.html docs/custom-options
ln -s docs/index.html docs/multiple-lists
git add -A
git commit -m 'built'
git push
