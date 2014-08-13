# Cheat Sheet

### When staging a commit...

#### How can I see only the changes made to file `foo.js`?

Use `git diff -- <file|path|pattern>`. Please note that the space between `--` and the `<file|path|pattern>` is important. Depending on your code base a pattern based diff like `git diff -- *foo*` might work best.

#### My diff is huge. How can I get an overview which files were touched?

Use `git diff --stat`

#### I see changes in the diff that I have trouble to make the connection. Can I increase the context of what is shown?

By default git showes three lines of context per change. You can increase it by passing the number of context lines to the `U` parameter. For instance to show ten lines of context per change use `git diff -U10`. To show the entire file with it's changes something like `diff -U99999999` should work in practice and is worth an alias.

#### I'm in the process of slicing muliple commits from a big pile of work. How can I see the diff for all the already **staged** changes?

Use `git diff --cached` or `git diff --staged`

#### How can I look at a file from an other revision without checking it out?

use `git show <SHA-ISH>:<FILE-WITH-PATH>` to view the file right in the terminal. If you need to look at it in your favourite editor you can just pipe it `git show <SHA-ISH>:<FILE-WITH-PATH> | sublime`

### This and that

#### I have a dirty working directory. What is the fastest way to recover when I **absolutely** not care about any of the changes?

Add a `git wipe` alias to `!git add -A && git commit -qm 'WIPE SAVEPOINT' && git reset HEAD~1 --hard`. The benefit of this command is that you will never accidentially destroy uncommited work. The action is easy revertable via the `reflog`.

#### How can I see all commits that happened in my feature branch that are not in master?

The `log` command can take ranges. In this case we want `git log master..feature`

#### How do I undo changes without rewriting history and causing a force push?

You can use `git revert <SHA-ISH-OF-COMMIT-TO-REVERT>`. That will create the negative to the change as a new commit.

#### How do I change only the file name case on a case insensitive system like Mac OSX or Windows?

Use `git mv file_name File_name -f`

You can use `git revert <SHA-ISH-OF-COMMIT-TO-REVERT>`. That will create the negative to the change as a new commit.

#### How can I push only a subdirectory (e.g. `dist`) of my repository into a different branch (think `gh-pages`)

```
git subtree split -P dist -b gh-pages
git push -f origin gh-pages
```

#### How do I remove a branch in a remote repository?

Use `git push <remote> :<remote-branch>` (e.g. `git push origin :featureX`. This may look odd at first glance but if you think about it it's just a special form of `git push <remote> <local-branch-name>:<remote-branch-name>` where the `<local-branch-name>` is nothing. It reads like "overwrite `<remote-branch-name>` with nothing". Pro Tip: In Git 1.7.0 `git push origin --delete <remote-branch-name>` was added as an easier to remember alternative.