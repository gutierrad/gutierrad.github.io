# gutierrad.github.io

Landing page indexing the projects hosted under this GitHub Pages site.

## Adding a project

Everything lives in **`projects.js`**. Add an entry to the `PROJECTS` array:

```js
{
  name: "My New Thing",
  blurb: "One or two sentences about it.",
  url: "./my-new-thing/",
  repo: "https://github.com/gutierrad/my-new-thing",
  tags: ["Rust", "CLI"],
  status: "live",   // "live" | "wip" | "archived"
  year: 2026,
}
```

The grid, the tag filters and the badges all rebuild from that list — no other
file needs to change. `SITE` at the bottom of the same file holds the name,
tagline and the links under it.

## Hosting a sub-project

Two options:

1. **Subfolder** — drop the project's built files into a folder in this repo
   (e.g. `my-new-thing/index.html`) and point `url` at `./my-new-thing/`.
2. **Separate repo** — enable Pages on that repo and point `url` at its own
   URL, e.g. `https://gutierrad.github.io/my-new-thing/`.

## Files

| File | What it is |
|---|---|
| `index.html` | Page shell — structure only |
| `style.css` | All styling, light/dark via CSS custom properties |
| `projects.js` | **Your data.** The only file you normally edit |
| `main.js` | Renders cards, tag filters and the theme toggle |
| `404.html` | Styled not-found page |
| `.nojekyll` | Tells Pages to serve files as-is, no Jekyll build |

## Deploying

```sh
git init
git add .
git commit -m "Add project index page"
git branch -M main
git remote add origin https://github.com/gutierrad/gutierrad.github.io.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: Deploy from a branch → `main` / `root`**.
The site goes live at `https://gutierrad.github.io/` within a minute or so.

## Local preview

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.
