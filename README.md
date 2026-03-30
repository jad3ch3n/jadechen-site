# Jade Chen Portfolio

Personal portfolio repository for [jadechen.site](https://jadechen.site), a custom-domain site showcasing Jade Chen's data analytics, economics research, and policy-focused project work.

## Live Site

[https://jadechen.site](https://jadechen.site)

## Overview

This repository powers my personal portfolio website and project showcase. The site is designed to give recruiters, collaborators, and future teammates a fast overview of who I am, the kinds of problems I work on, and the research and data projects I have built across analytics, econometrics, and public-interest domains.

The portfolio currently highlights work in:

- Data analysis and visualization
- Applied machine learning and NLP
- Econometrics and policy evaluation
- Housing, transportation, and urban policy research

## Features

- Responsive static site built for simple, reliable deployment
- Dedicated project pages for featured portfolio work
- Resume page with embedded viewing experience
- Light and dark theme support
- Custom domain configuration for `jadechen.site`
- SEO essentials for a static portfolio: canonical URLs, sitemap, robots, and social metadata
- Shared client-side site helper for theme persistence and contact-link rendering

## Tech Stack

- HTML
- Tailwind CSS via CDN
- Vanilla JavaScript
- GitHub Pages hosting
- Custom domain via `CNAME`

## Site Sections

- Home: personal introduction, featured projects, skills, and contact links
- Resume: embedded resume page for quick review
- Project pages: deeper writeups and supporting assets for selected work
- Viewer pages: embedded paper and notebook viewers for project-specific materials

## Project Highlights

- [Bikeshare Usage Analysis](https://jadechen.site/projects/dc-bikeshare/plots-and-paper/dc-bikeshare-paper.html)
  Exploratory analysis of Washington, D.C. bikeshare usage patterns with KDE, LOWESS, and rider-behavior comparisons.

- [Political Reservations on Subnational Conflict](https://jadechen.site/projects/conflict-nlp.html)
  NLP and supervised learning work examining how political reservations shape conflict narratives in India.

- [Property Valuation & Bias Detection](https://jadechen.site/projects/cook-county.html)
  Predictive modeling work on Cook County housing data focused on valuation accuracy and regressive tax bias patterns.

- [Smart Cities Pandemic Policy Evaluation](https://jadechen.site/projects/smart-cities.html)
  Econometrics-oriented policy analysis evaluating Smart Cities Mission outcomes during COVID-19.

## Local Development

This is a static site, so there is no application build pipeline or package install step.

To run locally:

1. Clone the repository.
2. Open the project root.
3. Start a simple static server, for example:

```powershell
python -m http.server 8000
```

4. Visit `http://localhost:8000`.

You can also open the HTML files directly in a browser, but a local server is better for validating links and asset paths.

## Deployment

The site is intended for GitHub Pages deployment with a custom domain.

Deployment notes:

- The custom domain is defined in [`CNAME`](CNAME).
- Public-facing URLs should use `https://jadechen.site`.
- `robots.txt` and `sitemap.xml` are included for search indexing support.
- The web manifest lives at [`assets/icons/site.webmanifest`](assets/icons/site.webmanifest).

## Theme & Privacy Notes

The site uses a shared helper in `assets/js/site.js` to keep light/dark mode behavior consistent across pages.

Privacy hardening currently includes:

- client-side rendering for homepage contact links to reduce basic email scraping
- `referrer` and `referrerpolicy` protections on public-facing pages and outbound links
- explicit `robots.txt` directives that opt major AI-training crawlers out of the site
- removal of third-party resume embedding in favor of the site-hosted PDF

Important limitation:

- A static site cannot fully prevent scraping or copying. These changes reduce casual harvesting and make intent clear, but they are not a guarantee against determined bots or mirrors.

## Repository Structure

```text
.
|-- CNAME
|-- index.html
|-- resume.html
|-- robots.txt
|-- sitemap.xml
|-- assets/
|   |-- icons/
|   |-- images/
|   `-- papers/
`-- projects/
    |-- conflict-nlp.html
    |-- conflict-nlp-viewer.html
    |-- cook-county.html
    |-- cook-county-viewer.html
    |-- smart-cities.html
    |-- smart-cities-viewer.html
    `-- dc-bikeshare/
```

## Custom Domain Note

This repository is branded around [jadechen.site](https://jadechen.site), not the default GitHub Pages URL. The custom domain is already configured in-repo through `CNAME`, but DNS, GitHub Pages settings, and repository settings still need to remain aligned on GitHub.

## Repository Rename Guidance

If I rename this repository to better match the portfolio identity, the recommended choice is:

- `jadechen-portfolio`

Other workable options:

- `jadechen-site`
- `portfolio-site`

Detailed rename guidance is documented in [`REPO_RENAME_NOTES.md`](REPO_RENAME_NOTES.md).

## Future Improvements

- Strengthen homepage storytelling with clearer project outcomes and impact metrics
- Add a dedicated social preview image for richer link sharing
- Introduce a stronger content hierarchy for featured projects
- Add a lightweight build step for linting or HTML validation if the site grows
- Expand SEO metadata coverage if additional pages are added

## Maintenance Notes

- If the repository is renamed on GitHub, verify the Pages source and custom domain settings afterward.
- If DNS is changed, re-check that `jadechen.site` still resolves correctly and that HTTPS remains enabled.
- Keep absolute public links pointed at `https://jadechen.site` rather than the GitHub Pages default domain.
