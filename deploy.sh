#!/bin/bash
set -e

PROJECT_DIR="/d/Python Applications/Shopify 2026"

echo "Building site with Docker..."
docker run --rm \
  -v "d:/Python Applications/Shopify 2026:/data" \
  python:3.11-slim \
  bash -c "cd /data && pip install mkdocs mkdocs-material --quiet && mkdocs build"

echo "Deploying to gh-pages..."

# Check out gh-pages into a temp worktree (stays on master)
WORKTREE=$(mktemp -d)
git -C "$PROJECT_DIR" worktree add "$WORKTREE" gh-pages

# Copy built files into worktree
cp -r "$PROJECT_DIR/site/." "$WORKTREE/"

# Commit and push
cd "$WORKTREE"
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M')"
git push origin gh-pages

# Clean up worktree
git -C "$PROJECT_DIR" worktree remove "$WORKTREE" --force

echo "Done — site live at https://harmonious-phoenix-96cdd9.netlify.app/"
