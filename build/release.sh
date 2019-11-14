#!/usr/bin/env sh

# commit
git checkout dev
git add -A
git commit -m '[build]'

# merge
git checkout master
git merge dev

# push
git push origin master
git checkout dev
git rebase master
git push origin dev
