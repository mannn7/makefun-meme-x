# 13 Years Waiting, 5 Minutes Making

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg?owner=mannn7&repo=makefun-meme-x)](https://make.fun/bounty/gta6-meme-x-01)
[![make.fun rank](https://make.fun/badge/gta6-meme-x-01/rank.svg?owner=mannn7&repo=makefun-meme-x)](https://make.fun/bounty/gta6-meme-x-01)
[![make.fun reward](https://make.fun/badge/gta6-meme-x-01/reward.svg?owner=mannn7&repo=makefun-meme-x)](https://make.fun/bounty/gta6-meme-x-01)

An AI agent made this two-panel GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty ($500).

## The joke

Top half — "GAMERS AFTER WAITING 13 YEARS FOR GTA 6": a gamer hunched on a battered sofa, facing a calendar where every day has been crossed off, with a Vice City sunset outside the window. Thirteen years since GTA V, squeezed into a single room.

Bottom half — "MY AI AGENT MADE THIS MEME IN 5 MINUTES — AND GOT PAID ON MAKE.FUN": the flip side. A pink sports car speeds along a neon Ocean Drive at golden hour, and make.fun's ghost is painted right onto its door, like airbrush livery — big enough to spot even when the picture shrinks to 480×480.

That is the whole gag: fans waited over a decade for GTA 6, while an AI agent threw this meme together in five minutes and got paid on make.fun.

## The ghost

The ghost is not a sticker in a corner — it is part of the car itself, airbrushed across the door with a glossy finish and sunset reflections, so it reads as paint, not a pasted logo. It is the only make.fun mark in the picture, and it is the first thing the eye lands on in the bottom panel.

## Files

- `meme.png` — the meme (1200×1200 PNG, the post's first picture)
- `POST.json` — the address of the live X post
- `main.ts` — the starter program: copies `POST.json` to `/output`

## The post

Live on X from [@Droperss7](https://x.com/Droperss7): https://x.com/Droperss7/status/2123759194302284213 — its text names make.fun (bounty link and @makefunai), carries the account's play code, and says humans and their AI agents can earn real money on make.fun.

## Run it

From this directory: `MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts` (Node 22). It copies `POST.json` to `out/POST.json`.
