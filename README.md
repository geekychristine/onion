# Onion

## Start Storybook

In your terminal, run `npm run dev`. This will open up Storybook on [http://localhost:54127/](http://localhost:54127/).

## Creating a new Git branches

```bash
git pull origin main
git checkout -b your-branch-name
```

You're now on a feature branch and can start making changes to you files.

## Saving your changes

```bash
# Add all your changes to the "staging area."
git add .
git commit -m "A message about what you did."
```

Periodically, when you want

## Updating your local branch with the latest from `main`

to update your branch with the latest changes from main, you can run:

```bash
# Make sure you're on the main branch first
git switch main
# Download the latest changes from main remote to your local
git pull origin main
# Switch back to your feature branch
git switch your-branch-name
# Updates your feature branch with any changes from main
git rebase main
```

Hopefully you won't run into conflicts, but if you do ... we can bulldoze the changes and keep your stuff instead:

```bash
# If you're in the middle of a rebase in the terminal, this cancels the rebase and you can start over.
git rebase --abort
# Let's try again, but force git to keep all your changes if there are conflicts.
# The "theirs" it's a confusing option, but it's the right one.
git rebase main -Xtheirs
```
