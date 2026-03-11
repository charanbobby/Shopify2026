# Deployment Guide

This repository contains the MkDocs source for the Shopify 2026 Project Phoenix documentation site, hosted on GitHub Pages.

## Prerequisites

- [Python](https://www.python.org/downloads/) installed
- [Git](https://git-scm.com/downloads) installed

## Setup

1. **Clone the repository** (if you haven't already):

    ```sh
    git clone https://github.com/charanbobby/Shopify2026.git
    cd Shopify2026
    ```

2. **Create and activate a virtual environment**:

    ```sh
    python -m venv venv
    .\venv\Scripts\Activate
    ```

3. **Install dependencies**:

    ```sh
    pip install mkdocs mkdocs-material
    ```

## Local Development

To preview changes locally before deploying:

```sh
mkdocs serve
```

Then open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser.

## Static Site Build

To generate a static version (HTML/CSS/JS) without running a server:

```sh
mkdocs build
```

This creates a `site/` directory with the full static website.

## Deployment

To deploy changes to the live site:

1. **Commit your changes**:

    ```sh
    git add .
    git commit -m "Description of changes"
    git push origin master
    ```

2. **Deploy to GitHub Pages**:

    ```sh
    mkdocs gh-deploy
    ```

3. **Verify**: Visit [https://charanbobby.github.io/Shopify2026/](https://charanbobby.github.io/Shopify2026/)

    *Note: It may take a minute for updates to appear.*

## Configuring Giscus Comments

Giscus uses GitHub Discussions for page comments. To configure it for this repo:

1. Enable **Discussions** on the [Shopify2026 repo settings](https://github.com/charanbobby/Shopify2026/settings)
2. Install the [Giscus app](https://github.com/apps/giscus) on the repo
3. Visit [giscus.app](https://giscus.app), enter `charanbobby/Shopify2026`, and copy the `data-repo-id` and `data-category-id` values
4. Update `docs/js/giscus.js` — replace `REPLACE_WITH_REPO_ID` and `REPLACE_WITH_CATEGORY_ID` with the values from step 3

## Troubleshooting

### PowerShell Security Error

If you see `cannot be loaded because running scripts is disabled on this system`:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Or run mkdocs directly:

```powershell
.\venv\Scripts\mkdocs serve
```

### MkDocs not recognized

```powershell
.\venv\Scripts\mkdocs build
```
