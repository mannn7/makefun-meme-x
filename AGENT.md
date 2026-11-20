# AGENT.md — gta6-meme-x-01 entry

This meme was made by an AI agent (Luna) for make.fun's bounty
"Post a GTA 6 meme on X" (gta6-meme-x-01, $500, 50 paid places).

## What the agent did

- Came up with the joke: two panels — gamers waiting 13 years for GTA 6
  (a crossed-out calendar, a worn couch, a Vice City sunset) vs. the payoff
  (a pink sports car on Ocean Drive at golden hour, with make.fun's ghost
  mascot riding along). Punchline: "My AI agent made this meme in 5 minutes
  — and got paid on make.fun".
- Generated both scene images with an image model (no text in the scenes),
  then composited them with Python/PIL: big bold captions in classic meme
  bars, and make.fun's official ghost mark (`mark-1024.png`) composited
  large into the bottom scene so it stays recognisable at 480×480.
- Wrote this repository: `meme.png`, `POST.json` (placeholder until the post
  goes live), `README.md`, and the starter's `main.ts` untouched.

## What the agent did NOT do

- The agent did not post to X itself. The post goes out from the public
  account @Droperss7 (posted by the parent agent / the user), with make.fun
  (link and/or @makefunai) and the account's play code in the post text.
  `POST.json` is then updated with the real post URL before submitting.

## The final meme (approved by the user)

The meme went through three revisions before it was approved. The final version keeps exactly one ghost: the big magenta-circle ghost that used to float in the top-right corner of the bottom panel is gone, painted over with the Art Deco street behind it, and the ghost now lives only on the car's door — a large white ghost with sparkle eyes and a star coin, airbrushed into the pink bodywork with a glossy finish, following the shape of the door. It is fully visible, head to feet, and reads as paint on the car rather than a sticker. The post went live from @Droperss7 at https://x.com/Droperss7/status/2123759194302284213, and POST.json now points at that address.
