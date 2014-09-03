### Creating a new repository

Simply run `git init` to create a new empty repository.

### Staging New Files

In order to create our first commit we need to create some content and stage it. Let's create a new file `work.js` in our directory and put the following content in it.

```
function doWork () {
    console.log('I do some work!');
}
```

You can use Vim (e.g. `vim work.js`) or any other editor to perform this step. Before you stage the file for your first commit run `git status` to examine the state of your repository. 

You should see something like:

```
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)

    work.js


no changes added to commit (use "git add" and/or "git commit -a")
```

Now that you created the file simply run `git add work.js` to stage it for the next commit. This is *explicitly* staging the new `work.js` for the next commit. There are a couple of less explicit ways for staging but we will look at those later.

Before we move on to the next step, let's run `git status` again to check the state of the repository again.

```
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   work.js
```

### Commit

Now that we staged our new `work.js` file let's create the actual commit with `git commit`. Git will automatically open your configured editor with a temporally file to enter a commit message. Git will create the commit as soon as you saved the file. You can also run `git commit -m "my commit message"` if you don't plan to enter a full commit message but keep in mind that those single-line commit message are often of poor quality.

### Staging Modifications

Let's make some modifications to the `work.js` file. Change it to

```
function doWork () {
    console.log('I work!');
}
```

Run `git status` again and examine the output. Also run `git diff` to take a look at the modifications. If the diff looks good stage the changes and make a new commit. Congrats! You just created your second commit. Now would be a good time to run `git log` to take a look at the history of your repository.

### Branching

Let's start a new feature. Since branching is super cheap in Git, it's good practice to branch off even for smaller features. Run `git checkout -b my-feature`. This will create the `my-feature` branch and directly check it out.

Change `work.js` to:

```
function doWork () {
    console.log('I work!');
}

function pause () {
    console.log('I pause');
}
```

But also create two new files:

`featureX.js`
```
function runX () {
    console.log('I'm an exciting feature');
}
```

`featureY.js`
```
function runY () {
    console.log('I'm a feature, too');
}
```

Before you start staging run `git status` again. It's a good habit to run `git status` before staging to get a better overview of the state of things.

This time we have two new files and one modified file. Imagine we want to put the changes to `work.js` and the creation of the `featureX.js` file into one commit but have the creation of the `featureY.js` into a seperate commit. There are different ways to accomplish what we want but let's first just stage **everything** with `git add -A`. In the next section we will learn how to unstage the `featureY.js` that we *don't* want to have in the first commit.

### Unstaging work

If you run `git status` again you will notice that we staged all three actions for the next commit. Git even tells us how to unstage already staged work in the output of `git status`. In our case we want to unstage `featureY.js`, so we simply run `git reset featureY.js`.

We can now commit our staged work just as we did before. After we created the first commit, stage `featureY` and commit it with another commit. The staging area is a powerful place to put together semantical commits!

### Merging

Now that our feature is ready let go back to master with `git checkout master`. We are now ready to merge our feature with `git merge my-feature`.