# Road Trip Bingo

A little web app for building road-trip bingo boards on the fly, sharing
them with whoever's in the car (or a different car), and checking off
squares as you spot things — right in the browser, no install.

**Live app: https://jsonbailey.github.io/roadtrip-bingo/**

## How it works

- **Choose a collection** — pick from 24 built-in word lists, grouped into
  *Road Trip Classics*, *On the Road*, *Nature & Wildlife*, *Scenery by
  Region*, *Pit Stops*, and *Kids & Games* (Vehicles & Traffic, Car Colors,
  Gas Stations, Fast Food, Desert & Southwest, Pacific Northwest, Mountains,
  Town-Name Alphabet, and more). Each collection has a fixed, sayable
  4-letter **code** — `PEAK` for Mountains, `CARS` for Vehicles, `FUEL` for
  gas stations, and so on.
- **Share the code** — because the code always maps to the same collection,
  there's nothing long to send: just tell your car-mates the 4 letters (or
  share the short link, e.g. `#/play/PEAK`).
- **Everyone gets their own card** — the same word list, but each device
  shuffles its own 5x5 layout, so no two boards look alike. Cards pull a
  random subset when the list has more than 24/25 entries, for extra variety.
- **Play** — tap a square to check it off, tap again to undo. The app
  watches for any completed row, column, or diagonal and pops up a BINGO
  banner (with a bonus BLACKOUT banner if you fill the whole card).
  Progress is saved on your device, so you can close the tab and pick up
  where you left off.

Because the collections are defined in the app itself, a code alone is
enough to rebuild the exact board on any device — no server or database
needed, which is what keeps the "join with a code" trick working on a
static site.

> There's also a hidden **custom board** builder at `#/create/custom` for
> rolling your own word list. Custom boards have no short code (their word
> list travels inside the share link instead), so it's tucked away for now.

### Tech

Plain HTML/CSS/JS, no build step, no dependencies. Everything lives in
`index.html`, `assets/app.js`, `assets/style.css`, and the collection data
in `assets/presets.json`. State (your boards and card progress) is kept in
`localStorage`.

## `legacy/`

The original hand-designed static bingo cards this project started from —
two themed 5x5 card sets ("Backroads & Badlands" and "Road Trip Word
Bingo") rendered as standalone, non-interactive HTML files, plus PNG
screenshots. Kept for reference / design inspiration. See
[`legacy/README.md`](legacy/README.md) for details.

## Deployment

Deploys automatically to GitHub Pages via the workflow in
`.github/workflows/deploy.yml` on every push to `main`. No build step — it
just publishes the repo root as-is.
