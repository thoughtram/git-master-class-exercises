## Interactive Rebase: Squashing Commits

###The scenario

Often when you develop a feature you just do frequent commits to save some state that seems worthy to keep a reference to. It's your safety net. If you screw things up while you move on with your work you can always go back.

Later when the feature is done it makes sense to look back at all the commits that you created and decide if they make sense the way they are or if there is something to be changed. Remember a semantic history helps everyone in the team to work more efficiently. There is little sense in pushing three commits into the shared repository where the first commit introduces a fragment of code that will be completely removed in the third commit.

Take a look at the `scenario.md`.

FIRST COMMIT: *The brown fox jumps over the fence*

SECOND COMMIT: *The fox jumps over the fence*

THIRD COMMIT: *The brownish fox jumps over the fence*

FOURTH COMMIT: *The brown fox jumps over the white fence*

There is little sense in keeping the second and the third commit. All it does is that it temporarily removes the word *brown*, then adds it back. This is noise that makes it hard for every reviewer to understand what the intend of the commit series is. Remember this is your **local** history, you are free to bring it into shape before it goes into the **shared** history.

One could argue that we could squash it all into one commit but with a little imagination one can see this being useful in a non trivial example.

What we want our history to look like is this:

FIRST COMMIT: *The brown fox jumps over the fence*

SECOND COMMIT: *The brown fox jumps over the white fence*
