#!/usr/bin/env bash
set -euo pipefail

REMOTE_NAME=${REMOTE_NAME:-origin}
TARGET_BRANCH=${TARGET_BRANCH:-main}

usage() {
  cat <<'USAGE'
Usage: ./sync_github.sh [GITHUB_REPO_URL]

Synchronize the current Git repository with the specified GitHub remote. If the
remote named in $REMOTE_NAME is not configured, pass the GitHub repository URL
as the first argument or set the REMOTE_URL environment variable.

Environment variables:
  REMOTE_NAME     Name of the Git remote to manage (default: origin)
  TARGET_BRANCH   Branch to sync with (default: main)
USAGE
}

if [[ ${1:-} == "-h" || ${1:-} == "--help" ]]; then
  usage
  exit 0
fi

REPO_URL=${REMOTE_URL:-${1:-}}

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: sync_github.sh must be run inside a Git repository." >&2
  exit 1
fi

if ! git remote get-url "$REMOTE_NAME" >/dev/null 2>&1; then
  if [[ -z "$REPO_URL" ]]; then
    echo "Error: Remote '$REMOTE_NAME' is not configured. Provide a GitHub URL." >&2
    exit 1
  fi
  git remote add "$REMOTE_NAME" "$REPO_URL"
  echo "Added remote '$REMOTE_NAME' -> $REPO_URL"
elif [[ -n "$REPO_URL" ]]; then
  git remote set-url "$REMOTE_NAME" "$REPO_URL"
  echo "Updated remote '$REMOTE_NAME' -> $REPO_URL"
fi

if ! git fetch "$REMOTE_NAME"; then
  echo "Error: Failed to fetch from '$REMOTE_NAME'." >&2
  exit 1
fi

if ! git show-ref --verify --quiet "refs/remotes/$REMOTE_NAME/$TARGET_BRANCH"; then
  echo "Error: Branch '$TARGET_BRANCH' does not exist on '$REMOTE_NAME'." >&2
  exit 1
fi

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$CURRENT_BRANCH" != "$TARGET_BRANCH" ]]; then
  if git show-ref --verify --quiet "refs/heads/$TARGET_BRANCH"; then
    git checkout "$TARGET_BRANCH"
  else
    git checkout -b "$TARGET_BRANCH" "$REMOTE_NAME/$TARGET_BRANCH"
  fi
fi

if git merge --ff-only "$REMOTE_NAME/$TARGET_BRANCH"; then
  echo "Repository is now synchronized with $REMOTE_NAME/$TARGET_BRANCH."
else
  echo "Fast-forward merge failed. Please resolve conflicts manually." >&2
  exit 1
fi
