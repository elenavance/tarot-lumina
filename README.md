# LUMINA — Tarot & Life Guidance

A responsive Next.js 14 tarot reflection app with a shared living night-sky scene, gold baroque ornament, animated card selection, and the complete 78-card Rider–Waite–Smith deck.

## Version backup

The original deployed app is preserved on the Git branch `v0.1`. New revision work is on `main`.

## Run locally

```bash
npm install
npm run dev
```

Production build and start:

```bash
npm run build
npm start
```

Next.js reads `PORT` from the environment (default 3000). The included Dockerfile builds standalone output for Railway.

## Routes

- `/` Home
- `/tarot` General one-card reading\n- `/daily`, `/love`, `/career`, `/money` Single-card readings
- `/spread` Past · Present · Future three-card spread
- `/ask` Reflective Ask the Master reading
- `/readings` Local saved reading history
- `/profile` Local display-name settings

All card-choosing routes use the same animated full-deck shuffle and reveal flow. Card meaning data and Fisher–Yates shuffle logic are in `app/data/tarotCards.ts`. Reading history and profile settings use browser localStorage. Ask the Master uses the selected card through `/api/reading`; it is a deterministic MVP interpretation and does not call an external AI service.

## Card image credits

The 78 card faces are 720px scans of the 1909 Rider–Waite–Smith deck, illustrated by Pamela Colman Smith under the direction of Arthur Edward Waite and restored by Steve P. The source repository documents these scans as public domain in most countries. Source: [TarotCards — Sources and Attribution](https://github.com/mixvlad/TarotCards/blob/main/SOURCES.md); original scan collection: [Steve-P.org](https://steve-p.org/cards/RWSa.html).


