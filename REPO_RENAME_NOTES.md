# Repository Rename Notes

## Recommended Name

Recommended repository name:

- `jadechen-portfolio`

Why this is the best fit:

- It matches the repository's purpose clearly.
- It stays aligned with the personal portfolio brand.
- It remains understandable even though the live site uses a custom domain instead of the repository name.

## Alternative Names

- `jadechen-site`
- `portfolio-site`

## What Can Be Updated Inside the Repo

These items are already safe to manage from within the repository:

- `CNAME`
- `README.md`
- absolute public links that should point to `https://jadechen.site`
- sitemap and robots references
- page metadata and canonical URLs

## What Must Be Done Manually on GitHub

Repository renaming itself must be done manually on GitHub.

After a rename, verify:

1. Repository name and remote URL
2. GitHub Pages source settings
3. Custom domain setting still shows `jadechen.site`
4. HTTPS remains enabled
5. The `CNAME` file is still present on the deployed branch

## Git and Local Follow-Up After Rename

If the repository is renamed on GitHub, update the local remote URL:

```powershell
git remote set-url origin https://github.com/<your-username>/<new-repo-name>.git
```

Then confirm:

```powershell
git remote -v
```

## Custom Domain Impact

In most cases, GitHub Pages custom domains continue to work after a repository rename as long as:

- the Pages site is still enabled
- the custom domain setting is still present
- the `CNAME` file remains correct
- DNS records for `jadechen.site` are unchanged

## Recommended Post-Rename Checklist

1. Open `https://jadechen.site`
2. Check the homepage, resume page, and project pages
3. Confirm GitHub Pages settings did not revert
4. Re-verify DNS and HTTPS
5. Update any saved local remotes or external docs that referenced the old repository URL
