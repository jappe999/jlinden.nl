---
title: Check for file changes in GitHub Actions
permalink: /blog/check-for-file-changes-in-github-actions
tags: github actions, git, ci/cd
draft: true
---

In a repository with many moving components it's not ideal to have to rebuild everything for each deployment. So, we need a way to check which components needs to updated. There are a few different options to solve this and I'd like to showcase how we can use Git to check for file changes since the previous release in GitHub actions.

## What's the command and how does it work?

Below is the command to view all files that have changes compared to another branch, tag or commit.

```sh
PREVIOUS_TAG=v1.0.0
git diff --name-only --diff-filter=ACDMRT $PREVIOUS_TAG | xargs
```

Let's break that down. We first define a tag to compare with. Next we set the option `--name-only` to only display the names of the files that have changed (instead what the actual file changes are).

The `--diff-filter` option ensures that a diff is only taken into account if it is not unmerged, unknown or broken. You can also write the filter as `--diff-filter=uxb` to exclude these three options. The last argument is what you want to compare with. In this case it's the previous release tag. Lastly we pipe the output to `xargs` to merge all lines onto one line.

## Integration with CI/CD

There are two ways I found to use this technique in GitHub Actions. The output can be used to skip individual steps or entire jobs.

> The examples make use of the new GITHUB_OUTPUT strategy. See the [GitHub documentation](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter) for more information on how to use it.

### As a build step

We can use the command

- Pros: Single time fetching repository
- Cons: each step must check if files have changed

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

      - name: Get changed files
        id: changes
        run: |
          PREVIOUS_TAG=$(git describe --abbrev=0 --tags `git rev-list --tags --skip=1  --max-count=1`)
          echo "has-changes=$(git diff --name-only --diff-filter=ACDMRT $PREVIOUS_TAG | grep check/path/for/updates | xargs)" >> "$GITHUB_OUTPUT"

      - name: build module
        if: steps.changes.output.has-changes
```

### As a job

In case you need to skip whole jobs

- Pros: skip a whole batch of steps
- Cons: code needs to be fetched twice (or more with more jobs)

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
           echo "has-changes=$(git diff --name-only --diff-filter=ACDMRT $PREVIOUS_TAG | grep check/path/for/updates | xargs)" >> "$GITHUB_OUTPUT"

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

## See also

- Also used in [Private cloud](/projects/private-cloud).