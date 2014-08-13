## Git Ninja Class Exercises

This repository contains a collection of different exercises to practice specific git techniques.

### How to use this repository

Each exercise is ready to use and comes in the form of a tag. To get an overview about all the available exercises
just run the `git tag` command.

To work on an exercise just checkout the tag into a new branch. For instance, to get your feed wet with
the first exercise just run `git checkout -b my-001 001` from the command line. You may need to create multiple branches for some exercises (e.g `git checkout -b 006-master 006-1` plus `git checkout -b 006-feature 006-2`).

Theoretically you could just check out the tag with the exercise and directly perform commits from there. However, those commits would be harder to find and eventually be deleted by Gits garbage collection after 30 days. By checking out exercises into it's own branch you make sure to always keep references to your work that you can easily check out later again.

Sometimes a tag has sub tags which you first need to checkout as branches, too. This happens when we need multiple branches to set up the scenario. 

You may be wondering why we uses tags for our exercises in the first place. Why not branches? It's easier to prevent you from shooting yourself in the foot. With branches you could theoretically directly start solving the task in the *exercise branch*. But you would end up mutating the original exercise. When you mastered git, you could always reset everything back to the original situation. But while you are still learning git it is safer to use tags to prevent you from mutating the exercise (well, unless you really want to!).

Each exercise comes with it's own `README.md` to describe the task.

### Overview of Exercises

| No.  | Tag  | Subtag |  Description                                       |
|------|-----:|-------:|:---------------------------------------------------|
|  0   | 011  |  -     | The basics                      
|  1   | 001  |  -     | Amending the last commit                      
|  2   | 002  |  -     | Interactive Rebase: Squashing commits together
|  3   | 003  |  -     | Interactive Rebase: Rewording a commit message in the middle of a series
|  4   | 004  |  -     | Interactive Rebase: Splitting a commit in the middle of a series (by file)
|  5   | 005  |  -     | Interactive Rebase: Splitting a commit in the middle of a series (by change in one file) 
|  6   | 006  |  -     | Merge: Resolving conflicts[1]
|  6   |      | 006-1  | Master branch for exercise No. 6
|  6   |      | 006-2  | Feature branch for exercise No. 6
|  7   | 007  | -      | Rebasing a feature branch on top of master
|  7   |      | 007-1  | Master branch for exercise No. 7
|  7   |      | 007-2  | Feature branch for exercise No. 7
|  8   | 008  | -      | Cherry picking a range of commits
|  8   |      | 008-1  | Master branch for exercise No. 8
|  8   |      | 008-2  | Feature branch for exercise No. 8
|  9   | 009  | -      | Merge strategy "ours" for superseded branches[2]
|  9   |      | 009-1  | Master branch for exercise No. 9
|  9   |      | 009-2  | Feature branch for exercise No. 9
| 10   | 010  | -      | Merge strategy "octopus"
| 10   |      | 010-1  | Master branch for exercise No. 10
| 10   |      | 010-2  | Feature A branch for exercise No. 10
| 10   |      | 010-3  | Feature B branch for exercise No. 10
| 10   |      | 010-4  | Feature C branch for exercise No. 10

TODO
- git bisect
- git blame (figure out what introduced a bug in larger history)
- git subtree split

####Exercise foot notes

[1] This exercise can also be used to practice `XOurs` and `XTheirs` parameter for the `recursive` strategy as well as checking out files during conflict resolution with `git checkout --theirs/--ours <file|path|wildcard>`

[2] This exercise can also be used to handle superseded branch with `git checkout <SHA-ISH> .` if one doesn't care about the history of the feature branch.

### Exercises to be applied to random scenarios

- the different reset modes
    - soft
    - mixed
    - hard
    - with file/path
- checkout
    - with file/path
    - whole directory
    - with force
- git show
    - for commits as an alternative to diff
    - for trees
- git add
    - partial
    - manually editing hunks
- git revert
    - reverting merges (http://git-scm.com/blog/2010/03/02/undoing-merges.html)
- git cat-file

