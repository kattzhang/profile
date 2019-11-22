#!/usr/bin/env sh

# merge
git checkout master
git merge dev

# build
npm run build
git add -A
git commit -m '[build]'

# push
git push origin master
git checkout dev
git rebase master
git push origin dev
