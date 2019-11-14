#!/usr/bin/env sh

# immediatelly exit if any command has a no-zero exit code
set -e

git add -A
git commit -m '[build]'
git checkout master
git merge dev
git push origin master
git checkout dev
git rebase master
git push origin dev
