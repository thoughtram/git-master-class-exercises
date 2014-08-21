## Octopus merge

###The scenario

Imagine you want to merge in multiple branches in one go. This is what the *octopus* merge strategy is about. 

Our current branch graph looks like this:

    m1-m2 (master)
     \ 
      fa1 (feature-a)
     \ 
      fb1 (feature-b)
     \ 
      fc1 (feature-c)

In this exercise we want to merge `feature-a`, `feature-b` and `feature-c` into the `master` branch in one go:

To get started with this exercise make sure to check out both all four tags into branches with descriptive names. Run `git checkout -b 010-master 010-1`, `git checkout -b 010-feature-a 010-2`, `git checkout -b 010-feature-b 010-3` and `git checkout -b 010-feature-c 010-4`.