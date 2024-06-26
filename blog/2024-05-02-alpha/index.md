---
slug: alpha-feedback-archon
title: Alpha Feedback - Archon
authors: [publik]
tags: [alpha,archon]
---

# Alpha Feedback - Archon
The following feedback is from the perspective of a Shadow Priest.

Overall Archon starts to deliver on the fantasy of enhanced cooldowns, but does it in a way with Halo that does not quite fit together nicely as a Shadow Priest. The empowered cooldowns themselves also do not feel particularly different than normally, they just now last a bit longer and you press Halo beforehand. That being said the iteration we see now does look powerful, although I wish it had more than just an updated Halo visual to enhance the theme, particularly with our cooldowns or Surge of Insanity casts. The Halo visual change itself also feels a bit lackluster for Shadow in particular and not sure I prefer it over the current version.

Surge of Insanity casts and Shadowy Apparitions don't feel super connected to the tree, but could be a big point to develop a visually different experience as an Archon. 

The description for Archon says, "Archons can be blessed from higher beings to enter into an ascended state, becoming an ultimate version of themselves". The current version of the tree doesn't have enough changing with our cooldowns to actually make them feel like ultimate versions, both visually and playstyle wise. There are plenty of buffs to the cooldowns themselves but other than that it doesn't hit the theme well enough for me, especially compared to Voidweaver. Dark Ascension and Void Eruption are both a bit lacking in terms of identity, this could be a good time to revisiting [this feedback](https://us.forums.blizzard.com/en/wow/t/shadow-priest-dragonflight-feedback/1819255#cooldown-identity-crisis-7).

All current bugs for Priests in The War Within are listed [here](https://github.com/SimCMinMax/WoW-BugTracker/issues?q=is%3Aopen+is%3Aissue+label%3A%222-The+War+Within%22+label%3APriest).

## Hero Talents that you feel are “required” for your spec in a type of content, such as raiding or Mythic+, or that push you towards picking a specific tree.
- Word of Supremacy for Archon would make you feel pushed toward the tree when trying to live high-key Mythic+ dungeons compared to Voidweaver

## Any bugs blocking testing?
- [Animation of Halo does not seem to match when the damage happens](https://github.com/SimCMinMax/WoW-BugTracker/issues/1190), but the Holy version seems to match.
- [As an Archon Priest, if someone else casts Power Infusion on you while yours is active, it will remove your existing Power Infusion buff completely.](https://github.com/SimCMinMax/WoW-BugTracker/issues/1191)
- [If you are mid-cast of Mind Spike and get a proc of Mind Spike: Insanity from a Halo creation it will consume the Surge of Insanity and not give you the increased damage](https://github.com/SimCMinMax/WoW-BugTracker/issues/1192). It should either buff the damage or not consume the proc (which is what Mind Flay: Insanity does). This also does not generate a Shadowy Apparition from this bug.

## Hero Talents that Create Frustrating or Unsatisfying gameplay
- Current iteration of Sustained Potency means that you can gain damage using a 2-minute "opener". Since the hidden buff does not reset on combat start with a boss (mostly looking at raid here, should not reset on dungeon bosses) you can use a 2 minute opener to cast two Halo's pre-pull to bank 6 seconds and then cast the third Halo during cooldowns to get 9s of extension on your opener cooldown. This is pretty degenerate and probably shouldn't be a mechanic.
- Halo being a casted spell adds to the bloat of the opener and feels unsatisfying. We have Shadowfiend or Mindbender + Casted Halo + Casted Dark Ascension/Void Eruption to start our cooldowns.
- Since Archon interacts with Surge of Insanity, it brings up issues with Mind Flay: Insanity and Mind Spike: Insanity [that we brought up earlier](https://us.forums.blizzard.com/en/wow/t/shadow-priest-dragonflight-feedback/1819255#filler-spell-insanity-9).
  - Mind Spike: Insanity feels the same as Mind Spike and not visually different. Compared to Surge of Light being instant-cast these feel much worse.
  - Mind Flay: Insanity feels unsatisfying to press and longer to execute. Impossible to weave many of these into your burst window.
  - Makes Voidform builds, particularly with Mind's Eye feel very cluttered with having extra Surge of Insanity procs during cooldowns, especially with Mind Flay: Insanity. You are even sometimes encouraged to instantly cancel Mind Flay: Insanity just to not waste the Shadowy Apparition.
  - Giving mobility to these spells would help make Archon not only feel different to play, but also add movement into a tree that currently does not have anything
- The cooldown extension makes Ancient Madness feel less satisfying as it still fizzles out quickly and is still much less valuable with Void Eruption.
- Currently we use Divine Star to get Insanity pre-pull to start out with 25 when the pull starts. This makes the opener feel much better and because of the way Halo works with the Insanity decay and the fact that we now want it for damage this doesn't become an option anymore since the tree does not work with Divine Star.

## Hero Talents where Functionality is Confusing, Unclear, or Difficult to Track
- Halo's range currently is increased to 40 yards, but in reality its closer to 37 or so. Standing exactly 40 yards away from the target you will not get any hits of Halo. This same problem exists today on live/without Archon but at 27 yards instead of 30.
- Heightened Alteration working for Dispersion doesn't feel like its giving us much. More duration is not something that is very useful. Not really sure what this was intended to give the spec.
- Sustained Potency stacks outside of your cooldown (buff should not be hidden)
- Dark Ascension Perfected Form modifier is applying twice to Direct spell damage, and not to any periodic.
- Void Eruption Perfected Form is an additive effect instead of multiplicative with the existing modifier, this is confusing and slightly low-balling the damage increase
- Resonant Energy debuff stacking is confusing since the damage taken increase does not stack, just the slow
- The extra Halo's generated from Power Surge not giving Insanity is unclear if that is intended
- Power Surge has no buff to track when the future Halo's are happening