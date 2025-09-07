# tech-calabar-conference

Vercel deployment is automated using GitHub Actions for both preview (PRs) and production (pushes to `main`/`master`).

## Setup

1) Create a project on Vercel and link this repository (via "New Project" in the Vercel dashboard).

2) Create a Vercel token and capture IDs:
- Vercel Token: Account Settings → Tokens → Create
- Organization ID and Project ID: From the project → Settings → General → copy `ORG_ID` and `PROJECT_ID` (or run `vercel link` locally to see them in `.vercel/project.json`).

3) Add the following GitHub repository secrets (Settings → Secrets and variables → Actions → New repository secret):
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## How it works

- On pull requests to `main`/`master`: a Preview deployment is created.
- On pushes to `main`/`master`: a Production deployment is created.

The workflow uses the Vercel CLI to:
- Pull environment info: `vercel pull`
- Build: `vercel build`
- Deploy prebuilt output: `vercel deploy --prebuilt`

For this static site (HTML/CSS/JS) no custom build command is required.

## Notes

- To add a custom domain, configure it in the Vercel project settings.
- If you need environment variables, define them in Vercel → Project → Settings → Environment Variables. They will be respected during `vercel pull`/`build`.

