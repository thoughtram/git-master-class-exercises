## Splitting a commit in the middle of a series into two commits seperating by files

###The scenario

Imagine you have prepared a series of commits in a feature branch. The feature branch is not quite
ready to be merged into master yet. However, in the middle of the series you created a commit that includes
a security relevant fix that you wish to `cherry-pick` into master. Unfortunately you didn't anticipate the
scope of the issue when you created the commit - the commit contains unrelevant changes that are tied to previous commits of the feature branch as well. To make the security fix *cherry-pickable* (yep, I made that word up) we first need to seperate the changes into two commits. Luckily the changes are in two different files anyway which makes the scenario a little easier compared to a different scenario where changes are mangled in one file. We will get to the more complicated case later :)

**Take a look at the commits messages:**

FIRST COMMIT:

Sets everything up.

SECOND COMMIT:

Makes a security relevant fix to `userService.js` but also introduces a new feature to `basketService.js`. 

THIRD COMMIT:

Adds another feature to `basketService.js`

**What we want is:**

FIRST COMMIT:

Sets everything up.

SECOND COMMIT:

Makes a security relevant fix to `userService.js`.

THIRD COMMIT:

Introduces a new feature to `basketService.js`. 

FOURTH COMMIT:

Adds another feature to `basketService.js`
