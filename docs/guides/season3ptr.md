---
slug: /guides/season3ptr
---

# Season 3 PTR Information
This guide is a temporary one-stop-shop for all current PTR info for testing Shadow Priest. This is all preliminary info, subject to change often. We encourage trying things out during testing as much as possible but feel free to use this as starting points.

This page will be updated throughout the PTR cycle and will be taken down once the patch goes live in favor of the normal guide sites.

Reminder to please post your thoughts and feedback on playing Shadow Priest on [the forums](<https://us.forums.blizzard.com/en/wow/t/shadow-priest-feedback/2120140>). Be respectful.

## Important Links
- [Testing Schedule](https://www.wowhead.com/news/patch-11-2-and-season-3-testing-schedule-season-3-dungeons-and-manaforge-omega-377352)
- [Current Bug List](https://github.com/SimCMinMax/WoW-BugTracker/issues?q=state%3Aopen%20label%3A%22Priest%3A%20Shadow%22)
- [PTR Sim Charts (Work in Progress)](https://warcraftpriests.github.io/?talents=vw_da_cthun&sims=talents_top&fightStyle=Single&version=ptr) (Big thanks to Shot for getting this wired up!)

# Talents
With the change to :shadow_crash: Shadow Crash it is now quite a stable talent for all builds, so we do not have as much build variety across raid encounters or even Mythic+. For now these seem to be the best starting points for each Hero Talent. 

**TUNING IS NOT FINAL**: Most things are still very much a work-in-progress.

## Voidweaver
Core talents for Voidweaver are pretty static across fight types, with minor changes you can make. The multi-target build is particularly designed for the new 3 target council raid encounter.

- [Single Target](https://www.wowhead.com/ptr-2/talent-calc/priest/shadow/voidweaver/DAREEAVFEERUFEKFSJFQCBUOVFFUVQRZRASAlRCRUEFVVUCVA)
  - You can drop Phantasmal Pathogen for Voidtouched, this is about a `0.3%` loss but can make it easier to play
  - If you want a bit more execute/movement global between 35 and 20% you can drop Mindbender for Deathspeaker. This is roughly a `1%` loss in overall, but you gain that back specifically in execute.
- [Multi-Target](https://www.wowhead.com/ptr-2/talent-calc/priest/shadow/voidweaver/DAREEAVFEERUFEKFSJFQCBUOVFFUVURZAQSAlRCRUEFVVUCUA)
  - particularly designed for 3 target council raid encounter
- [Dungeons](https://www.wowhead.com/ptr-2/talent-calc/priest/shadow/voidweaver/DAREEAVFEERUFEKFSJFQCBUOVFFUVRRZAQSAlRCRUEFVVUCUA)
  - identical to the multi-target build but we swap in Maddening Touch instead of Dark Thoughts. If you want to pickup Silence you would drop this point.

## Archon
Archon is just using a single build for the moment.

- [Triple Idol](https://www.wowhead.com/ptr-2/talent-calc/priest/shadow/archon/DAREEAVFEERUFEKFSJFQCBUOVFFUVQRZRBSBEVCUQEFVVUBR)
  - We use this for everything. You can choose to swap out Mindbender for Deathspeaker if you want a bit more execute damage.
  - If you prefer to play with Voidtouched you can drop Phantasmal Pathogen for a `1.1%` loss
  - For dungeons if you want to pickup Silence you would drop Phantasmal Pathogen

# Gear
- Use Head, Chest, Gloves, and Legs tier
- Araz's Ritual Forge, Astral Antenna, and Essence-Hunter Eyeglass all seem like strong trinkets but yolo

# Macros
You can use this macro to prevent double hitting Void Torrent cancelling itself with Void Volley.

```
#showtooltip
/stopmacro [channeling:Void Torrent]
/cast [known:Void Torrent] Void Torrent
```

# Misc.
- [Publik's 11.2 WeakAura Set](https://wago.io/P8n43gFCK)