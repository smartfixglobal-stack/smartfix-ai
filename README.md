# SmartFix.AI — Enterprise Intelligence Platform (Prototype)

A front-end, client-side prototype of an enterprise "intelligence platform" dashboard — dashboards, incidents, assets, chat, file upload, and more. Pure HTML/CSS/JavaScript, no build step, no backend. All data is simulated in-memory (nothing persists on reload).

## Project structure

```
smartfix-ai/
├── index.html        # App shell / page markup
├── css/
│   └── style.css      # All styling
├── js/
│   └── app.js          # App logic, views, simulated data & interactions
├── assets/              # (empty) put images/icons here if you add any
├── .gitignore
├── LICENSE
└── README.md
```

## Running it locally

No build tools or dependencies are required — it's static HTML/CSS/JS.

**Option 1 — just open it**
Double-click `index.html`, or open it in a browser directly.

**Option 2 — run a local server (recommended)**
Some browsers restrict certain features when opening files directly via `file://`. Serving it avoids that:

```bash
# Python 3
python3 -m http.server 8000

# then visit:
http://localhost:8000
```

or with Node.js:

```bash
npx serve .
```

## Notes

- This is a UI prototype only — there is no real backend, database, or authentication. The login screen and all data are simulated for demo purposes.
- All state resets on page refresh.

## License

MIT — see [LICENSE](LICENSE).
