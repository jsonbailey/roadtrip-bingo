# Road Trip Bingo

A little web app for building road-trip bingo boards on the fly, sharing
them with whoever's in the car (or a different car), and checking off
squares as you spot things — right in the browser, no install.

**Live app: https://jsonbailey.github.io/roadtrip-bingo/**

## How it works

- **Create a board** — start from one of the built-in collections
  (Vehicles & Traffic, Car Colors, Plants & Animals, Gas Stations,
  Fast Food, and regional scenery sets like Desert & Southwest, Pacific
  Northwest, Great Plains, and Mountains) or pick *Custom* and paste your
  own list of words / things to spot (one per line). Give it a title and
  choose whether the middle square is a FREE space. You need at least 24
  words with a FREE space, or 25 without. Enter more than that and every
  card will pull a random subset, for extra variety.
- **Get a code** — creating a board generates a short 4-character code
  (like `K7QX`) plus a shareable link that carries the word list with it.
- **Share the link** — send it to whoever's playing. Everyone who opens it
  gets the *same* word list but their *own* randomly shuffled 5x5 card, so
  no two boards look alike even though the words match.
- **Play** — tap a square to check it off, tap again to undo. The app
  watches for any completed row, column, or diagonal and pops up a BINGO
  banner (with a bonus BLACKOUT banner if you fill the whole card).
  Progress is saved on your device, so you can close the tab and pick up
  where you left off.

Because this is a static site (GitHub Pages has no server or database),
the word list itself travels inside the shareable link rather than living
on a server — that's what makes the "join with a code" trick work without
any backend. The link is the thing to share; the 4-character code is
there as a friendly, sayable label for double-checking everyone's on the
same board.

### Tech

Plain HTML/CSS/JS, no build step, no dependencies. Everything lives in
`index.html`, `assets/app.js`, and `assets/style.css`. State (your boards
and card progress) is kept in `localStorage`.

## `legacy/`

The original hand-designed static bingo cards this project started from —
two themed 5x5 card sets ("Backroads & Badlands" and "Road Trip Word
Bingo") rendered as standalone, non-interactive HTML files, plus PNG
screenshots. Kept for reference / design inspiration. See
[`legacy/README.md`](legacy/README.md) for details.

## Deployment

Deploys automatically to GitHub Pages via the workflow in
`.github/workflows/deploy.yml` on every push to `main` (or the active dev
branch). No build step — it just publishes the repo root as-is.
