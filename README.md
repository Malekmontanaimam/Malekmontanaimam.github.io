# Malek Imam — Portfolio (Three.js)

A professional, bilingual (EN/AR) portfolio & CV with an interactive Three.js
particle-constellation background.

## Run locally

The page loads Three.js as an ES module, so open it through a local server
(not by double-clicking the file).

**Option A — Python**
```bash
cd portfolio
python -m http.server 5173
# open http://localhost:5173
```

**Option B — Node**
```bash
cd portfolio
npx serve .
```

**Option C — VS Code**: right-click `index.html` → "Open with Live Server".

## Features
- Interactive 3D particle network that reacts to mouse + scroll
- Bilingual content with one-click EN ⇄ AR (RTL) toggle
- Animated hero, count-up stats, scroll reveals, 3D tilt card
- Project cards generated from `js/main.js` → `PROJECTS` (edit there)
- **Download CV** button → browser print dialog → *Save as PDF* (print styles included)

## Edit your content
- Projects: `js/main.js`, the `PROJECTS` array at the top.
- Text / experience / skills: `index.html` (each translatable element has
  `data-en` and `data-ar` attributes).
- Colors: `css/style.css`, the `:root` variables.

## Deploy (free)
Push the `portfolio/` folder to a GitHub repo and enable **GitHub Pages**
(Settings → Pages → deploy from branch). Or drag the folder into Netlify.
"# Malekmontanaimam.github.io" 
"# Malekmontanaimam.github.io" 
"# Malekimam.github.io" 
"# Malekimam.github.io" 
"# Malekimam.github.io" 
"# Malekimam.github.io" 
"# Malekimam.github.io" 
