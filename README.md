# LUMINA — Tarot & Life Guidance

A responsive Next.js 14 tarot reflection app with a midnight navy and antique gold visual system.

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

The server binds to `0.0.0.0` and Next.js reads `PORT` from the environment (default 3000). The included Dockerfile builds Next's standalone output for Railway.

## Routes

- `/` Home
- `/daily`, `/love`, `/career`, `/money` Single card readings
- `/spread` Four step Past · Present · Future spread
- `/ask` Reflective Ask the Master prompt
- `/readings` Local saved reading history
- `/profile` Local display name settings

Tarot meanings and Fisher–Yates shuffle live in `app/data/tarotCards.ts` (78 cards). Saved readings and profile settings use browser localStorage. Ask the Master posts the prompt to `/api/reading`, which returns a deterministic card interpretation for the MVP; it does not call an external AI service.


