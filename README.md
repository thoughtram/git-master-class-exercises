## Use merge strategy `ours` for superseded branches

###The scenario

Imageine you worked on a dev branch for quite some time, meanwhile work in master continues as well. At some point you decide that you just don't care about master anymore and effectively want your dev branch to become the new master branch. You could just go to master and run `git reset --hard dev` but if you do this you can't simply push the master branch anymore. You would have to use a `--force` push because you changed the history. This can put your co-workers into trouble. There are two different approaches to deal with this situation that will not cause a a `--force` push. 

Our current branch graph looks like this:

    m1-m2-m3 (master)
         \ 
          f1-f2-f3-f4-f5 (dev)

We want the state of our repository to be exactly like it is in `f5` but we don't want to reset it to `f5` because we don't want to wipe away `m3` from the history.