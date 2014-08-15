## Rebasing a feature branch on top of master

###The scenario

Imagine you developed a feature in a separate branch and now want to bring it back into master. In the meantime the development moved on in the master branch. 

Our current branch graph looks like this:

    m1-m2-m3 (master)
         \ 
          f1 (feature)

In this exercise we want to rebase the feature branch on top of master before we merge it in. This means we want a history that looks like this:


    m1-m2-m3-m4 (master)

To get started with this exercise make sure to check out both tags into branches with descriptive names. Run `git checkout -b 007-master 007-1` and `git checkout -b 007-feature 007-2`.

Then try to rebase the feature branch on top of master and merge it in afterwards. This makes the merge a so called *fast forward* merge.