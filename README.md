## Cherry-picking a range of commits

###The scenario

Imagine you developed a feature in a separate branch. The feature is not quite ready to land in master yet. However, there is a series of commits say 3 commits that you wish to pick into master by now because they are not strongly coupled to the rest of the feature branch. 

Our current branch graph looks like this:

    m1-m2-m3 (master)
         \ 
          f1-f2-f3-f4-f5 (feature)

In this exercise we want `cherry-pick` the three commits from `f2` to `f4` into master. Use the Gits range notation syntax:

To get started with this exercise make sure to check out both tags into branches with descriptive names. Run `git checkout -b 008-master 008-1` and `git checkout -b 008-feature 008-2`.