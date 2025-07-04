---
slug: season-3-shadow-priest-feedback
title: Season 3 Shadow Priest Feedback
authors: [publik]
tags: [ptr]
---

## Shadow Priest Feedback

### Major Cooldown Design
All the way back in the [Dragonflight development cycle](https://www.bluetracker.gg/wow/topic/us-en/1279512-feedback-priests/) it was mentioned that our cooldowns would be looked at in a future patch. Several patches later the problems with Dark Ascension and Void Eruption as a choice node is still present in our spec tree.

Dark Ascension is incredibly simple in its design, and has little cohesion with our overall spec or talent tree design. This has recently become even worse with the removal of Mind Spike, which felt like it was the defacto filler to pick with Dark Ascension. In its current state I just do not understand why this is still in the game, I would much rather have a choice node that modifies Void Eruption instead of Dark Ascension (see below).

Being able to pick between a 1-minute Shadow Priest compared to a 2-minute Shadow Priest is a really cool concept. However, since these are separate cooldowns today there is a severe lack of cohesion with the rest of our kit since spells need to work with both. This also limits the design options you have with our cooldowns.

At this point Void Eruption is a much more interesting cooldown and I would prefer focusing Shadow Priests on that cooldown over Dark Ascension. Exploring past ideas like ramping DoT damage or haste as Voidform goes on would be cool to see in the modern game, but just is not possible as long as Dark Ascension still exists to balance Void Eruption against.

Note that if Dark Ascension did go away it would mean a lot to the community to get a glyph that altered Voidform's animation to be the Dark Ascension wings. 

### DoT Maintenance and Application
This patch we saw a few targeted changes at Shadow Crash to help with our DoT maintenance and application gameplay. Overall I think these changes solve good problems in raid, but seem to miss the mark for Mythic+ specifically.

#### Shadow Crash Issues
The two main pain points with the new design are as follows:
- Shadow Crash has become a damage talent with Descending Darkness
- Bugs limit its usefulness in Mythic+, particularly in large pulls
  - [Bug Report 1](https://github.com/SimCMinMax/WoW-BugTracker/issues/1093)
  - [Bug Report 2](https://github.com/SimCMinMax/WoW-BugTracker/issues/1286)

Shadow Crash has mostly existed as a DoT application tool, with an exception of a Dragonflight tier set that was quite controversial. The reason for the controversy is making it a damage button now gives us a conflict, do we press Shadow Crash for damage or hold for DoT'ing targets? Luckily the 2 charge system can help with this, but largely this gameplay feels unhealthy to be pulling the player in two different ways. 

There are quite a lot of people that dislike pressing Shadow Crash in single target, and it does feel quite weird, unsure if this was intentional. Due to current pathing challenges (see below) we take Shadow Crash and Descending Darkness in every single build currently. Part of this is pathing but also because it helps solve our issues with Mobility and Movement by giving us a valuable instant-cast to press when needed. Unfortunately this just feels like a conflicting design and I wish these problems could be solved with other solutions.

The other large issue is how these changes affect Mythic+. We have long known of [bugs](https://github.com/SimCMinMax/WoW-BugTracker/issues?q=is%3Aissue%20state%3Aopen%20shadow%20crash) as it relates to Shadow Crash and DoT'ing targets, particularly in large pulls. The changes lowering the target count seem to have made these bugs more prevalent/happen on more packs than usual. Until Shadow Crash correctly prioritizes un-dotted targets to apply DoTs vs. refreshing this spell will continue to be an incredibly flawed way of applying DoTs.

#### Shadow Priest isn't a DoT Spec
I was pretty disappointed that there was nothing else adjusted with the spec as it relates to casting and maintaining DoT spells. We have been locked behind Misery being a required talent and Shadow Crash as our DoT applicator for quite some time now, and the issues are still quite obvious. There is no build variety that actually makes DoTs powerful vs. easy to spread, everything is just leaning in towards the easy to spread category. This makes our DoT gameplay non-existent in places where we used to actually press Vampiric Touch or Shadow Word: Pain in previous iterations, particularly low-target count environments.

In the current design since we take Shadow Crash everywhere we literally never press Shadow Word: Pain or Vampiric Touch in Single Target, and even most cleave environments. This has made Shadow Priests lose a core piece of its identity and I wish there were alternatives available in the tree to make DoTs an actual part of our gameplay again. This removes Shadow Word: Pain as a rotational instant-cast spell to use during movement.

On top of this our DoTs have continued to be neglected when it comes to power, currently only totalling to less than 4% of our total damage (SW:P and VT).

### Utility Nodes in the Spec Tree
Currently Shadow Priests have to choose 2 utility points in the top section of our talent tree before moving onto the middle section after picking all the damage nodes.

This creates a problem, as we are limited to 2 of the 4 of these nodes without losing DPS by sacrificing points in the rest of the tree.
- Dispersion
- Silence
- Intangibility or Mental Fortitude
- Last Word or Psychic Horror

For most content we always want to have Dispersion. This leaves effectively just one point left, which typically we players will choose Mental Fortitude to counter the squishy nature of playing a Priest. This means we are effectively choosing between losing defensive utility, our interrupt, or DPS with this choice.

If Dispersion and/or Silence were just made baseline for Shadow Priests this issue goes away.

### Spec Tree Pathing Issues
With the changes to the talent tree this patch I wanted to go over specific issues with pathing that we notice on the tree to bring up those pain points when creating a build.
- The Shadow Crash path is only 2 points to get to Void Torrent. The alternative option is 3 points which inherently puts these nodes at a disadvantage.
- The following nodes are in a weird spot where nothing before/after is related. They are also pretty uninspiring in general.
  - Madness Weaving
  - Dark Evangelism
  - Idol of Y'Shaarj
- Number of 2 point nodes is still the highest in the game
- Plagued by lots of numerically weak nodes that do not change your gameplay or others that are super niche. These cause our pathing to be restricted.

Core Shadow Priest Themes are not always easy to path or there are too few choices. I've created annotated trees and then ranked their pathing situation for each core theme. Furthermore as a cost of these being core themes we notice that the actual base spells are severely undertuned. The cost of these spells having lots of talent points seems to be weak base spells, which impacts their dependency on these talents. Shadowy Apparitions, Mind Blast, Shadowfiend or Mindbender melees, and DoTs are extremely weak baseline.
- [Shadowy Apparitions](https://www.wowhead.com/ptr-2/talent-calc/priest/shadow/archon/DBAAAGZFhfFQFQFQFQFAAAAA): **S**
- [Mind Blast](https://www.wowhead.com/ptr-2/talent-calc/priest/shadow/archon/DBAAAGg5BOBFBKBQBiUBBhOBAAAA): **B**
- [Pets](https://www.wowhead.com/ptr-2/talent-calc/priest/shadow/archon/DBAAAFhXGh5GQGYGDGAAAAA): **D**
- [Mind Flay: Insanity](https://www.wowhead.com/ptr-2/talent-calc/priest/shadow/archon/DBAAAFg9IQISIIIDIChOAfAAAAA): **D**
- [Shadow Word: Pain and Vampiric Touch](https://www.wowhead.com/ptr-2/talent-calc/priest/shadow/archon/DBAAAHhIDHCKJFJQJdJBDBhQBAAAA): **D**

### Mobility, Movement, and Utility

#### Mobility and Movement
Shadow Priests have long been known for their mobility issues, which is still [very much relevant](https://www.twitch.tv/publikpriest/clip/OptimisticAmericanSalsifyGrammarKing-ifxkZMx8sCOrUrd3) in Season 3 of The War Within. 

The only way Shadow Priests can actually counter this kind of mobility problem is to pay for a race change. Dractyhr, Goblin, and Void Elf become our only way to get meaningful movement displacement when other classes have this built into their kit. Nothing in the changes coming in Season 3 make this problem better. Vault of the Heavens or Door of Shadows in the Priest tree please?

#### Utility
The other topic that is still painful is our classes group utility. Often times the only thing that makes Priests stick out from the crowd is Power Word: Fortitude, something that Holy and Discipline also bring in addition to Shadow Priests. Giving Shadow some of its own identity when it comes to utility would go a long way.

Shadow Priests do get value out of Vampiric Embrace that Holy and Discipline do not, but this ability has its own flaws that often do not make it valuable. The two big ones are the "smart" heal aspect of Vampiric Embrace being pretty dumb and it being hard to press on-demand when the group actually needs healing. To get good healing out of this we need to be doing good damage, lining this up is typically not something Priests do in this day and age. Would rather the spell just be passive Leech for my party, or something that I can control more that is not tied to my damage as much.

The other big problem with Shadow Priests is how it relates in the current Mythic+ Group Composition meta. There are different requirements for what a healer or dps should bring to a group, and generally speaking our group utility for control is niche and typically weaker than our ranged dps counterparts.
- Shackle Undead usually has incredibly niche to no value every season in Mythic+
  - Why can't this work for more enemy types? Or just call it "Shackle"?
- Psychic Horror is a severe DPS loss to take (see above section on spec tree utility points)
- Silence is arguably the worst interrupt in the game for Mythic+ content. Often times the Silence portion of the effect is useless, leading to us just having a long cooldown interrupt.
- Dominate Mind is either overpowered or useless.
- Psychic Scream is pulling a lot of weight for us right now as an AoE stop, unfortunately we do have to play in melee to use it though. This was a big problem solved by Mind Bomb (particularly in its stun version) that I still miss to this day
- Mass Dispel has not only seen significant nerfs, there has also been a notable change in dungeon design limiting its use cases
- Void Tendrils goes most seasons with most players forgetting it even exists it is so niche and often useless

Priests have had plenty of utility spells in the past that were useful, but not game breaking that have been taken away from us. Bringing some of these back or shoring up existing utility problems would go a long way to groups being excited about inviting a Shadow Priest into their group.
- Shining Force
- Mind Bomb