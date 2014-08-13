## Merging: Resolving conflicts

###The scenario

Git is pretty smart and overall you get fewer conflicts compared to many other version control systems. However, some conflicts just can't be prevented by git. A conflict means *parallel evolutions of a same content*. So if we have `if foo == 1` and you change it to `if foo == 2` and I change it to `if foo == 3` there is nothing git can do to resolve the conflict without your help.

In this exercise we will go through exactly this scenario and show how to resolve it. Repeat with me: *I am not scared of conflicts, I am not scared of conflicts, I am not...*



    m1-m2-m3 (006-1-master)
         \ 
          f1 (006-2-feature)

To get started with the conflict resolution make sure to check out both tags into branches with descriptive names. Run `git checkout -b 006-master 006-1` and `git checkout -b 006-feature 006-2`.

Then try to merge `006-feature` into `006-master`. Try to come up with a reasonable conflict resolution. This exercise should be repeated with different conflict resolution strategies:

- manual resolution
- using `git checkout --ours <file|path|wildcard>`
- using `git checkout --theirs <file|path|wildcard>`
- using `git merge <branch> -s recursive -Xours`
- using `git merge <branch> -s recursive -Xtheirs`