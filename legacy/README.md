# Road Trip Bingo

Bingo cards for a Southwest Utah road trip, built as standalone HTML files
(390×844 viewport, matches a standard iPhone aspect ratio).

## Structure

- `sightings/` — "Backroads & Badlands" edition. Vintage highway-sign style
  cards with things to spot out the window (red rock cliffs, wildlife,
  ranch stuff, etc). 9 cards, each independently shuffled, FREE space fixed
  center.
- `words/` — "Road Trip Word Bingo" edition. Comic/speech-bubble style
  cards with single words people yell from the backseat. Rule: it only
  counts if *someone else* says it, not you. 4 cards, each independently
  shuffled, FREE space fixed center.
- `screenshots/` — PNG renders of each HTML card (3x scale, iPhone
  dimensions) for quick preview or printing without opening the HTML.

## Viewing

Each `card_N.html` is self-contained (inline CSS, no external
dependencies) — just open it in a browser. For a true iPhone-shaped
render, view it at a 390×844 viewport or use the matching screenshot in
`screenshots/`.

## Item lists

- Sightings: 24 items across two related lists (see `sightings/boards.json`
  for the exact shuffles used per card).
- Words: 24 single words (see `words/boards.json`).
