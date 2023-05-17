---
title: Check for file changes in GitHub Actions
permalink: /blog/check-for-file-changes-in-github-actions
tags: github actions, git, ci/cd
draft: true
---

~~In a repository with many moving components, like my private cloud, it comes in handy to check which components have changed since the previous version and can be deployed.~~

In a repository with many moving components it's not ideal to have to rebuild them all for every deployment. So, we need a way to check which components needs to updated. We have a few different options to solve this and I'd like to showcase how we can use Git to check for file changes since the previous version.

## The command and how does it work?

```sh
git diff
```

## Integration with CI/CD

Makes use of the new GitHub output assignment thingy.

### As a job

Pros: skip a whole batch of steps
Cons: code needs to be fetched twice (or more with more jobs)

```yml
jobs:
  changes:
    runs-on: ubuntu-latest
     outputs:
       has-changes: ${{ steps.changes.outputs.has-changes }}
     steps:
       - uses: actions/checkout@v3
         with:
           fetch-depth: 0

       - name: Get changed files
         id: changes
         run: |
           PREVIOUS_TAG=$(git describe --abbrev=0 --tags `git rev-list --tags --skip=1  --max-count=1`)
           echo "has-changes=$(git diff --name-only --diff-filter=ACMRT $PREVIOUS_TAG | grep check/path/for/updates | xargs)" >> "$GITHUB_OUTPUT"

   build:
     name: Build image
     runs-on: ubuntu-latest
     needs: changedfiles
     # only run there are changed files
     if: ${{ needs.changedfiles.outputs.has-changes }}
     steps:
       - name: build
         run: ./build.sh
```

### As a build step

pros: Single time fetching repository
Cons: each step must check if files have changed

1. Fetch branch/tag
2. Check for changes in folder and write them to `GITHUB_OUTPUT`
3. Check if step should be run

```yml
jobs:
  build_if_necessary:
    runs_on: ubuntu-latest
    steps:
      - name: clone repository
        uses: actions/checkout

      - name: check for changes
        id: changes

      - name: build module
        if: steps.changes.output.has-changes
```
