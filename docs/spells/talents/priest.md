---
sidebar_position: 1
---

# Priest

## [Vampiric Embrace](https://www.wowhead.com/spell=15286/vampiric-embrace)
Vampiric Embrace will cause single-target Shadow spell damage you deal to replicate as healing. This effect can end up working with a wide variety of spells, here is the known working spell list:
- [Mind Blast](https://www.wowhead.com/spell=8092/mind-blast)
- [Void Bolt](https://www.wowhead.com/spell=205448/void-bolt)
- [Shadow Word: Death](https://www.wowhead.com/spell=32379/shadow-word-death)
- [Mind Spike](https://www.wowhead.com/spell=73510/mind-spike)
- [Mind Flay](https://www.wowhead.com/spell=15407/mind-flay)
- [Shadow Weaving](https://www.wowhead.com/spell=346111/shadow-weaving) - Melee swing bonus from [Shadowfiend](https://www.wowhead.com/spell=34433/shadowfiend) or [Mindbender](https://www.wowhead.com/spell=123040/mindbender)
- [Devouring Plague](https://www.wowhead.com/spell=335467/devouring-plague)
- [Shadow Word: Pain](https://www.wowhead.com/spell=589/shadow-word-pain)
- [Void Torrent](https://www.wowhead.com/spell=263165/void-torrent)
- [Vampiric Touch](https://www.wowhead.com/spell=34914/vampiric-touch)
- [Idol of N'Zoth](https://www.wowhead.com/spell=373280/idol-of-nzoth) [Echoing Void](https://www.wowhead.com/spell=373281/echoing-void)
- [Shadowy Apparitions](https://www.wowhead.com/spell=341491/shadowy-apparitions)
- [Mindgames](https://www.wowhead.com/spell=323673/mindgames)
- Damage component of [Halo](https://www.wowhead.com/spell=120644/halo)
- Damage component of [Divine Star](https://www.wowhead.com/spell=122121/divine-star)
- [Inescapable Torment](https://www.wowhead.com/spell=373427/inescapable-torment)

Note that for spells like [Halo](https://www.wowhead.com/spell=120644/halo) multiple hits can trigger a Vampiric Embrace tick if they happen roughly at the same time.

The spell does some sort of batching every 500ms and groups together hits that happened in that instance. So if you hit with several abilities in between ticks they will all get rolled into the next tick (most of the time).

Things that do not seem to work:
- [Idol of Yogg-Saron](https://www.wowhead.com/spell=373273/idol-of-yogg-saron)
- [Idol of C'Thun](https://www.wowhead.com/spell=377349/idol-of-cthun)
- [Void Eruption](https://www.wowhead.com/spell=228260/void-eruption)
- [Shadow Crash](https://www.wowhead.com/spell=205385/shadow-crash)
- [Shadowfiend](https://www.wowhead.com/spell=34433/shadowfiend) or [Mindbender](https://www.wowhead.com/spell=123040/mindbender) raw melee hits