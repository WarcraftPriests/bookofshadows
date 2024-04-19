---
slug: alpha-feedback-voidweaver
title: Alpha Feedback - Voidweaver
authors: [publik]
tags: [alpha,voidweaver]
---

# Alpha Feedback - Voidweaver
The following feedback is from the perspective of a Shadow Priest.

## Any bugs blocking testing?
- Voidwraith
  - [Does not work with Mindbender](https://github.com/SimCMinMax/WoW-BugTracker/issues/1174) (see below section)
  - [Does not trigger Idol of Y'Shaarj](https://github.com/SimCMinMax/WoW-BugTracker/issues/1175)
  - [Sometimes melee's instead of casting](https://github.com/SimCMinMax/WoW-BugTracker/issues/1179)
  - [Is not scaling with any of our Priest modifiers](https://github.com/SimCMinMax/WoW-BugTracker/issues/1180). This includes Twist of Fate, Mastery, Shadowform, Idol of Y'Shaarj, Voidheart, etc
  - Currently _does_ work with Inescapable Torment, unsure which half of this is intended, but guessing it is supposed to work with our talents.
- Depth of Shadows
  - [Proccing this puts Mindbender or Shadowfiend on cooldown](https://github.com/SimCMinMax/WoW-BugTracker/issues/1172)
  - [Does not trigger Idol of Y'Shaarj](https://github.com/SimCMinMax/WoW-BugTracker/issues/1173)
- [Devour Matter 300% increase is not applying](https://github.com/SimCMinMax/WoW-BugTracker/issues/1176)
- [After talenting into and out of No Escape, it is still active.](https://github.com/SimCMinMax/WoW-BugTracker/issues/1178)

## Hero Talents that Create Frustrating or Unsatisfying gameplay
- Current Entropic Rift window feels very busy and borderline overwhelming and you are rushing to try and get Void Blasts and Devouring Plagues out and do not have room to do much else.
- Darkening Horizon feels very unachievable to get the full extension without Bloodlust, Power Infusion, and a lot of baseline haste while also getting lucky with procs. Not being able to max this except in rare cases is unsatisfying.
  - Reducing the cooldown of Void Blast, making it Instant Cast, and/or adding other spells to this would help
- Collapsing Void Devouring Plague expansion feels extremely underwhelming or even non-existent, even after casting 5 Devouring Plagues the size of the rift is still smaller than 8 yards, which is less than Shadow Crash and by then it fizzles away.
  - Make it work with Devouring Plague ticks and/or significantly increase how much it is increased by per cast
  - Fantasy element and visually this is extremely underwhelming
- When a mob dies that was the original target of Entropic Rift, this can feel super unsatisfying, especially if it remains as a small size since it currently does not move or re-target.
  - Would be awesome if an enemy dies in the rift it also expands and "consumes" them 
- Entropic Rift not pulling enemies in feels unsatisfying. For a spell that closely resembles a black hole, I wish it acted more like it. The slow from No Escape is in a similar space but not nearly what I expected. In PvE the applications for the slow are quite underwhelming.
- The choice node between No Escape and Dark Energy is unsatisfying. The effect of No Escape will not have many use cases in PvE and Dark Energy is an extremely fun to play with talent. Feels like people will always run Dark Energy.
  -  Would love to see additions or changes to No Escape such as the black hole design mentioned above.

- The choice node between Devour Matter and Void Empowerment does not feel satisfying. Devour Matter is an extremely niche ability in almost all types of content, where it will only provide a small amount of value even if the condition is met. On the other hand Void Empowerment is always useful and consistent and provides value every 30 seconds with Malediction.
  - If we had this choice node on live, in current examples where we do face enemies with shields (Tindral, Fyrakk, Iridikron) that is such a small portion of the fight, Void Empowerment would still be the better choice.

## Hero Talents where Functionality is Confusing, Unclear, or Difficult to Track
- Cooldown of Voidwraith is confusing since when taking Mindbender the cooldown is not lowered at all and remains fixed at 2 minutes, making Mindbender a completely dead talent.
- Depth of Shadows (`451308`) has an internal cooldown of 1 second. This can be confusing for players because at higher haste levels and a Death and Madness reset you can cast Shadow Word: Death back to back and the second cast would be unable to proc the effect.
- Proc rate of Depth of Shadows and the health threshold is currently unknown and not shown on the spell.
- Inner Quietus [does not increase the direct damage of Shadow Word: Pain](https://github.com/SimCMinMax/WoW-BugTracker/issues/1177). This is particular is confusing with Catharsis.
- Voidwraith's talent tooltip indicates that it deals "up to 50% additional damage, dealing more damage to higher health enemies" but the actual spell deals a flat 135% of spellpower and then if the mob is above 50% health it deals 100% increased damage. This is inconsistent with the talent tooltip and not sure what is intended.