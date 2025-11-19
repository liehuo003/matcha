# Matcha B2B Landing Page

A lightweight, static landing page that promotes a premium matcha powder supply chain for B2B buyers in the US and EU. The site
is optimized for Google Ads traffic and highlights certifications, production capacity, and a GDPR-compliant inquiry form.

## Previewing the landing page

This project is fully static, so you have two easy ways to preview it:

1. **Open the file directly** – double-click `index.html` (or drag it into a browser window). All assets are local, so it
   renders immediately.
2. **Serve it locally** – if you prefer a URL preview (useful when testing redirects, fonts, or analytics snippets), run a
   lightweight server from the repository root:

   ```bash
   python3 -m http.server 8000
   ```

   Then visit `http://localhost:8000/index.html` in your browser. Stop the server with `Ctrl+C` when finished.

Styles are defined in `styles.css` with a single custom font import (Inter) from Google Fonts.

## Syncing with GitHub

Use the helper script below to synchronize this working tree with the latest code hosted on GitHub.

```bash
./sync_github.sh https://github.com/your-org/your-repo.git
```

The script will:

1. Add or update the `origin` remote with the provided GitHub URL (or use an existing remote).
2. Fetch the latest commits.
3. Check out the `main` branch (or create it if it does not exist locally).
4. Fast-forward merge to match `origin/main`.

You can customize the behavior with environment variables:

- `REMOTE_NAME`: Git remote to sync (default: `origin`).
- `TARGET_BRANCH`: Branch to track (default: `main`).
- `REMOTE_URL`: Provide the GitHub URL via environment variable instead of a positional argument.

Run `./sync_github.sh --help` for additional details.
