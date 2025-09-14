# Ali Jafari — Portfolio (Enhanced for GitHub Pages)

This is an enhanced version of the `ali-portfolio-dark-animated` project prepared for deploying as a GitHub Pages resume/portfolio site suitable for job applications to Ireland.

## What I changed
- `index.html`: switched to relative asset/script paths, added meta description, theme-color, and basic Open Graph tags.
- `vite.config.js`: set `base: './'` so the built site works when served from a repository subpath (GitHub Pages).
- Added `.nojekyll` to avoid GitHub Pages ignoring files starting with underscores.
- Added this `README.md` with deployment instructions and suggestions for responsive and animated improvements.

## How to build locally
```bash
npm install
npm run build
# to preview the production build locally
npm run preview
```

## Deploy to GitHub Pages (easy options)
**Option A — GitHub Actions (recommended for automated deploys)**

Create a workflow `.github/workflows/gh-pages.yml` that builds and pushes the `dist` folder to the `gh-pages` branch (I can generate this file for you if you want).

**Option B — Manual**
1. `npm run build`
2. Push the contents of `dist/` to the `gh-pages` branch or to your repository's `docs/` folder and enable GitHub Pages from that branch.

**Option C — `gh-pages` package**
Install `gh-pages` and add scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
Then run `npm run deploy`.

## Suggestions to make the site more attractive & recruiter friendly
1. **Hero + One-liner**: Add a clear one-sentence summary (job title, years of experience, tech stack) and two CTAs — Download CV (PDF) and Contact (mailto).
2. **Interactive timeline** for experience using `framer-motion` timeline animations.
3. **Project cards** with live demo links and badges (React, .NET, Docker) and animated hover states.
4. **Responsive nav** with a hamburger for small screens and smooth scroll links.
5. **Dark/light toggle** so recruiters can switch themes.
6. **Resume PDF**: include a downloadable `resume.pdf` in `public/` and add a prominent button.
7. **Accessibility**: semantic HTML, alt text for images, and keyboard focus styles.
8. **Performance**: optimize images (webp), inline critical CSS if needed.

If you'd like, I can:
- generate a production-ready `gh-pages` GitHub Actions workflow,
- add a responsive navbar with animations,
- create a downloadable resume PDF placeholder,
- implement a dark/light toggle and a polished Hero section,
- or fully refactor components for improved responsive layout and animations.

Tell me which of the above you'd like done next and I'll implement it directly into the project files.

---
Contact: ajsq337@gmail.com
