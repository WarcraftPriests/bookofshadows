---
sidebar_position: 1
---

# Shadow

## [Shadowy Insight](https://www.wowhead.com/spell=375888/shadowy-insight)

Shadowy Insight does not have proc data available in spell data. We have done
tests throughout the spells history manually testing this proc rate. From our
testing the proc rate is approximately `2.4 RPPM + Hasted`.

## [Tormented Spirits](https://www.wowhead.com/spell=391284/tormented-spirits)

Tormented Spirits have a 5% chance to spawn a [Shadowy Apparition](https://www.wowhead.com/spell=148859/shadowy-apparition) for every tick of [Shadow Word: Pain](https://www.wowhead.com/spell=589/shadow-word-pain), or 10% if the tick was a critical strike. 

There is currently a [bug](https://github.com/SimCMinMax/WoW-BugTracker/issues/1097) where the actual state of the Shadowy Apparition damage is not dependent on the state of the Shadow Word: Pain tick, but rather the state of whatever the previous action was that triggered a Shadowy Apparition (aside from Shadow Word: Pain).

What this means is that for example if you cast a [Mind Blast](https://www.wowhead.com/spell=8092/mind-blast) that critically strikes and it generated a Shadowy Apparition, all subsequent procs from Tormented Spirits would always deal damage as if that was a critical strike, until you cast a normal spell that does not critically strike. 