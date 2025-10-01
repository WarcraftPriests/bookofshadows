---
slug: midnight-alpha-first-look
title: First look at Shadow Priest in the Midnight Alpha
authors: [publik]
tags: [alpha]
---

# Midnight Changes for Shadow Priests

## Baseline Spells
- Vampiric Embrace
- Silence (30s CD)
- Dispersion

## Removed Spells
### Class Spells
- Void Shift
- Psychic Horror
- Apathy
- Cauterizing Shadows
- Divine Star
- Essence Devourer
- From Darkness Comes Light
- Halo (now Archon tree only)
- Manipulation
- Power Word: Life
- Prayer of Mending (Holy only)
- Renew
- Rhapsody
- San'layn
- Throes of Pain
- Void Shield
- Word of the Pious
- 
### Shadow Spells
- Dark Ascension
- Void Bolt (now a passive in the spec tree, sort of)
- Void Torrent (currently nothing updated for Voidweaver)
- Last Word

## Talent Tree
[Early preview](https://www.wowhead.com/news/all-talents-tree-on-midnight-alpha-so-many-new-talents-378673#priest-shadow)

### Class Tree
- Shadowfiend is a Shadow only spell
- Psychic Scream and Mind Blast are now class talents
- Shadow Word: Death is no longer given for free as Shadow

### Hero Trees
As of now these have not been updated and many talents are broken/NYI.

### Spec Tree
Several coming soon talents and things have been moved around with points adjusted.

- Devouring Plague renamed to Shadow Word: Madness
- Shadow Crash renamed to Tentacle Slam (targeted only)
- Void Eruption renamed to Voidform for clarity
- Voidform can now be an extendable buff (Ancient Madness Rework) or a non-extendable version
- Surge of Insanity is now fully passive, no more procs
- Shadowy Apparitions now only proc from Shadow Word: Madness baseline
- Void Volley takes Void Bolt's place as the active spell to press during Voidform
- Death and Madness is now a choice node with Deathspeaker
- Phantasmal Pathogen renamed to Spectral Horrors and is now 1-point
- Maddening Touch is now a 1-point talent
- Insidious Ire now also affects Mind Flay

#### Tentacle Slam Animation
Shadow Crash renamed to Tentacle Slam and has been redesigned – Tentacle Slam summons a massive shadowy appendage to slam the ground, dealing damage and applying Vampiric Touch to up to 6 targets to all enemies between you and the target, as well as 8 yards around your target. Max 2 charges, 15 seconds recharge.
![Tentacle Slam Animation](tentacle_slam.gif)

#### Apex Talents: Void Apparitions
- When an effect from an Idol is activated, conjure Shadowy Apparitions
- Shadowy Apparitions have a chance to become empowered and deal more damage and send out a Void Bolt at their target. Unsure if this Void Bolt refreshes DoTs
- Tentacle Slam has a 100% chance to activate an effect from one of your idols.

## FAQ

### How will Mass AoE Work?
Void Bolt is now a passive as part of the Apex Talents in the spec tree. Assuming that this still extends DoTs we will proc these bolts from:
- 15% chance on Shadowy Apparitions (Shadow Word: Madness casts or Idol activation)
- Tentacle Slam -> Procs an Idol

### How does Voidweaver Proc?
We do not know, Void Torrent has been removed from the game.

## UI and Addons
[Combat Addons will be disabled](https://www.wowhead.com/news/combat-addons-disabled-in-end-game-content-in-midnight-378679?utm_source=discord-webhook).

This means that many things you rely on for tracking will have to change. Basically anything that accesses Combat Log events will likely stop working and you will need to rely on the default UI to track these things.

While we do not know all specifics it is likely that things like Plater nameplate mods or Weak Auras that track buffs/debuffs will no longer function. Hopefully we get more details soon.

The biggest thing here is to give feedback on what we rely on addons for that is no longer working. The biggest things that come to mind are:
- Tracking if every mob in a pack has DoTs active
- Duration of DoTs on your current target to know optimal refresh times