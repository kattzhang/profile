#!/usr/bin/env sh

# immediatelly exit if any command has a no-zero exit code
set -e

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
