# Deployment Guide for GitHub Pages

Foundira is a static HTML/React application with no compilation step. This means you do **not** need to run `npm run build` or use Vite/CRA build processes.

## How to Deploy

The application is ready to deploy as-is.

1.  **Push your code to GitHub.**
    Ensure your changes (including the recent image path fixes) are committed and pushed to your repository.

2.  **Configure GitHub Pages:**
    - Go to your GitHub Repository Settings.
    - Navigate to **Pages** (in the sidebar).
    - Under **Build and deployment > Source**, select **Deploy from a branch**.
    - Select your main branch (e.g., `main` or `master`) and ensure the folder is set to `/(root)`.
    - Click **Save**.

3.  **Wait for Deployment:**
    GitHub will deploy your site. Once complete, your site will be available at:
    `https://tharunnagabramhagna.github.io/foundira.hackthon/` (or your repo name).

## Troubleshooting

### Images Not Loading?
- The code has been updated to use relative paths (`./public/images/...`). This ensures images load correctly regardless of whether the site is at the root domain or in a subdirectory.
- Ensure the `public` folder is present in your repository.

### Routing Issues?
- The app uses `HashRouter` (`/#/dashboard`), which is fully compatible with GitHub Pages and avoids 404 errors on refresh. No extra configuration is needed.

### Local Development
- Run `npx http-server .` to preview the site locally.
- Use `http://127.0.0.1:8080` (or similar).
