---
slug: /guides/apl-testing
---

# Testing APL Changes as a Shadow Priest
If you want to make APL improvements without accidentally making the profile worse, this guide walks you through a full test workflow from setup to interpretation.

This uses:
- The Shadow Priest default APL: [mid-shadow-priest/apl/default_apl.simc](https://github.com/WarcraftPriests/mid-shadow-priest/blob/master/apl/default_apl.simc)
- SimC Action List docs: [ActionLists](https://github.com/simulationcraft/simc/wiki/ActionLists)
- SimC condition syntax docs: [Action-List-Conditional-Expressions](https://github.com/simulationcraft/simc/wiki/Action-List-Conditional-Expressions)
- Shadow Priest APL primer: [APLs 101](https://github.com/WarcraftPriests/bfa-shadow-priest/wiki/APLs-101)

## What you are actually testing
An APL is a priority system. SimC reads actions top to bottom and picks the first valid action every time the actor is ready. That means:
- A tiny line move can have a huge rotational impact.
- "Looks cleaner" does not mean "better DPS".
- You need repeatable tests and clear pass/fail rules.

## Prerequisites
1. SimulationCraft installed or Raidbots setup.
2. A Shadow Priest profile to sim (Typically [this file](https://github.com/simulationcraft/simc/blob/midnight/profiles/generators/MID1/MID1_Generate_Priest.simc)).

## Step 1: Setup a new Advanced Mode Sim

Basic structure will be:
- Base profile (`default_actions=1`)
- Paste the same profile again (`default_actions=0`) with the current [mid-shadow-priest/apl/default_apl.simc](https://github.com/WarcraftPriests/mid-shadow-priest/blob/master/apl/default_apl.simc)
- Repeat for as many tests you want to perform

Full example:
```
priest="Base"
level=90
race=pandaren
spec=shadow
role=spell
position=ranged_back
talents=CIQAAAAAAAAAAAAAAAAAAAAAAMMjZGAAAAAAAAAAAgBLmxYZmBz2MzYG2mZGzMzYDZGLmpBYmZGAIAz2stEMbMAzMeAMmZmxsNmBzMYGMA

default_actions=1

head=blind_oaths_winged_crest,id=250051,bonus_id=13575/13575/13575/13575,ilevel=289,gem_id=240983,enchant_id=7961
neck=eternal_voidsong_chain,id=249368,ilevel=289,gem_id=240892
shoulders=blind_oaths_seraphguards,id=250049,bonus_id=13574/13574/13574/13574,ilevel=289,enchant_id=8031
back=arcanoweave_cloak,id=239661,ilevel=285
chest=blind_oaths_raiment,id=250054,bonus_id=13575/13575/13575/13575,ilevel=289,enchant_id=7987
wrists=arcanoweave_bracers,id=239660,ilevel=285,gem_id=240908
hands=vilehex_bonds,id=251172,ilevel=289
waist=endless_march_waistwrap,id=249319,ilevel=289,gem_id=240900
legs=blind_oaths_leggings,id=250050,bonus_id=13575/13575/13575/13575,ilevel=289,enchant_id=7935
feet=lightbinder_treads,id=109796,ilevel=289,enchant_id=7993
finger1=eye_of_midnight,id=249920,ilevel=289,gem_id=240918/240900,enchant_id=7969
finger2=omission_of_light,id=251093,ilevel=289,gem_id=240900,enchant_id=7997
trinket1=soulcatchers_charm,id=250223,ilevel=289
trinket2=gaze_of_the_alnseer,id=249343,bonus_id=12806/13577,ilevel=289
main_hand=brazier_of_the_dissonant_dirge,id=249286,ilevel=289,enchant_id=8041

priest="really_cool_new_APL"
level=90
race=pandaren
spec=shadow
role=spell
position=ranged_back
talents=CIQAAAAAAAAAAAAAAAAAAAAAAMMjZGAAAAAAAAAAAgBLmxYZmBz2MzYG2mZGzMzYDZGLmpBYmZGAIAz2stEMbMAzMeAMmZmxsNmBzMYGMA

default_actions=0

actions.precombat=snapshot_stats
actions.precombat+=/shadowform,if=!buff.shadowform.up
actions.precombat+=/variable,name=trinket_1_buffs,value=(trinket.1.has_buff.intellect|trinket.1.has_buff.mastery|trinket.1.has_buff.versatility|trinket.1.has_buff.haste|trinket.1.has_buff.crit|trinket.1.is.signet_of_the_priory)&(trinket.1.cooldown.duration>=20)
actions.precombat+=/variable,name=trinket_2_buffs,value=(trinket.2.has_buff.intellect|trinket.2.has_buff.mastery|trinket.2.has_buff.versatility|trinket.2.has_buff.haste|trinket.2.has_buff.crit|trinket.2.is.signet_of_the_priory)&(trinket.2.cooldown.duration>=20)
actions.precombat+=/variable,name=dr_force_prio,default=1,op=reset
actions.precombat+=/variable,name=me_force_prio,default=1,op=reset
actions.precombat+=/variable,name=max_vts,default=12,op=reset
actions.precombat+=/variable,name=is_vt_possible,default=0,op=reset
actions.precombat+=/arcane_torrent
actions.precombat+=/tentacle_slam

# Executed every time the actor is available.
actions=variable,name=holding_tentacle_slam,op=set,value=raid_event.adds.in<15
actions+=/call_action_list,name=aoe,if=active_enemies>2
actions+=/run_action_list,name=main

actions.aoe=call_action_list,name=aoe_variables

actions.aoe_variables=variable,name=max_vts,op=set,default=12,value=spell_targets.vampiric_touch>?12
actions.aoe_variables+=/variable,name=is_vt_possible,op=set,value=0,default=1
actions.aoe_variables+=/variable,name=is_vt_possible,op=set,value=1,target_if=max:(target.time_to_die*dot.vampiric_touch.refreshable),if=target.time_to_die>=18
# TODO: Revamp to fix undesired behavior with unstacked fights
actions.aoe_variables+=/variable,name=dots_up,op=set,value=(active_dot.vampiric_touch>=variable.max_vts|!variable.is_vt_possible)&(active_dot.shadow_word_pain>=active_dot.vampiric_touch)
actions.aoe_variables+=/variable,name=holding_tentacle_slam,op=set,value=(variable.max_vts-active_dot.vampiric_touch)<4&raid_event.adds.in>15|raid_event.adds.in<10&raid_event.adds.count>(variable.max_vts-active_dot.vampiric_touch),if=variable.holding_tentacle_slam&action.tentacle_slam.enabled&raid_event.adds.exists
actions.aoe_variables+=/variable,name=manual_vts_applied,op=set,value=(active_dot.vampiric_touch+6*!variable.holding_tentacle_slam)>=variable.max_vts|!variable.is_vt_possible

# TODO: Add holding condition for weird fight times to potion with execute
actions.cds=potion,if=((buff.voidform.up|!talent.voidform)&buff.power_infusion.up)&(fight_remains>=320|time_to_bloodlust>=320|buff.bloodlust.react)|fight_remains<=30
actions.cds+=/fireblood,if=((buff.voidform.up|!talent.voidform)&buff.power_infusion.up)|fight_remains<=8
actions.cds+=/berserking,if=((buff.voidform.up|!talent.voidform)&buff.power_infusion.up)|fight_remains<=12
actions.cds+=/blood_fury,if=((buff.voidform.up|!talent.voidform)&buff.power_infusion.up)|fight_remains<=15
actions.cds+=/ancestral_call,if=((buff.voidform.up|!talent.voidform)&buff.power_infusion.up)|fight_remains<=15
actions.cds+=/invoke_external_buff,name=power_infusion,if=(buff.voidform.up|!talent.voidform)&!buff.power_infusion.up
actions.cds+=/invoke_external_buff,name=bloodlust,if=buff.power_infusion.up&fight_remains<120|fight_remains<=40
# Use Flash Heal to proc Nexus-King's Command trinket
actions.cds+=/flash_heal,if=equipped.nexuskings_command&buff.oathbound.up&(!buff.boon_of_the_oathsworn.up|buff.boon_of_the_oathsworn.remains<3)&((talent.voidform&(buff.voidform.up|cooldown.voidform.up))|cooldown.halo.up|cooldown.void_torrent.up)
# Sync Power Infusion with Voidform or Dark Ascension
actions.cds+=/power_infusion,if=(buff.voidform.up|!talent.voidform)&!buff.power_infusion.up
actions.cds+=/halo
actions.cds+=/voidform,if=active_dot.shadow_word_pain>=active_dot.vampiric_touch
actions.cds+=/call_action_list,name=trinkets
# Use Desperate Prayer to heal up should Shadow Word: Death or other damage bring you below 75%
actions.cds+=/desperate_prayer,if=health.pct<=75

# Use Halo to acquire Twist of Fate if an ally can be healed for it and it is not currently up.
actions.heal_for_tof=holy_nova,if=talent.lightburst

actions.main=variable,name=dots_up,op=set,value=active_dot.vampiric_touch=active_enemies&active_dot.shadow_word_pain>=active_dot.vampiric_touch,if=active_enemies<3
actions.main+=/call_action_list,name=cds,if=fight_remains<30|target.time_to_die>15&(!variable.holding_tentacle_slam|active_enemies>2)&variable.dots_up
# High Priority Shadow Word: Death when you are forcing the bonus from Devour Matter
actions.main+=/shadow_word_death,target_if=max:(target.health.pct<=20)*100+dot.shadow_word_madness.ticking,if=priest.force_devour_matter&talent.devour_matter
# Do not overcap on insanity
actions.main+=/shadow_word_madness,target_if=max:target.time_to_die*(dot.shadow_word_madness.remains<=gcd.max|variable.dr_force_prio|!talent.distorted_reality&variable.me_force_prio),if=active_dot.shadow_word_madness<=1&dot.shadow_word_madness.remains<=gcd.max|insanity.deficit<=35|buff.mind_devourer.react|!raid_event.adds.exists&target.time_to_die<=10|buff.entropic_rift.up&action.shadow_word_madness.cost>0
actions.main+=/void_volley
# Blast more burst :wicked:
actions.main+=/void_blast,target_if=max:(dot.shadow_word_madness.remains*1000+target.time_to_die)
# Use Tentacle Slam as long as you are not holding for adds and Vampiric Touch is within pandemic range, or if void apparitions.
actions.main+=/tentacle_slam,target_if=min:dot.vampiric_touch.remains,if=(talent.void_apparitions|talent.maddening_tentacles|dot.vampiric_touch.refreshable)&(raid_event.adds.in>30|raid_event.adds.in>5&cooldown.tentacle_slam.full_recharge_time<=gcd.max*2)&(!talent.maddening_tentacles|(insanity+6)>=action.shadow_word_madness.cost|active_dot.vampiric_touch<active_enemies|!dot.shadow_word_madness.ticking)
actions.main+=/shadow_word_madness,target_if=max:dot.shadow_word_madness.remains,if=dot.shadow_word_madness.pmultiplier<1&dot.shadow_word_madness.ticking
# Use Void Torrent if it will get near full Mastery Value
actions.main+=/void_torrent,target_if=max:(dot.shadow_word_madness.remains*1000+target.time_to_die),if=!variable.holding_tentacle_slam&variable.dots_up
# Put out Shadow Word: Pain on enemies that will live at least 12s as a filler when talented into Invoked Nightmare.
actions.main+=/shadow_word_pain,target_if=max:(refreshable*100000+target.time_to_die+dot.vampiric_touch.ticking*10000),if=talent.invoked_nightmare&refreshable&target.time_to_die>12&dot.vampiric_touch.ticking
# Use all charges of Mind Blast if Vampiric Touch and Shadow Word: Pain are active and Mind Devourer is not active or you are prepping Void Eruption
actions.main+=/mind_blast,target_if=max:dot.shadow_word_madness.remains,if=(!buff.mind_devourer.react|!talent.mind_devourer)
# MFI is a good button
actions.main+=/mind_flay_insanity,target_if=max:dot.shadow_word_madness.remains
# Put out Vampiric Touch on enemies that will live at least 12s and Tentacle Slam is not available soon
actions.main+=/vampiric_touch,target_if=max:(refreshable*10000+target.time_to_die)*(dot.vampiric_touch.ticking|!variable.dots_up),if=refreshable&target.time_to_die>12&(dot.vampiric_touch.ticking|!variable.dots_up)&(variable.max_vts>0|active_enemies=1)&(action.tentacle_slam.usable_in>=dot.vampiric_touch.remains|variable.holding_tentacle_slam|!action.tentacle_slam.enabled)
# Healing spell action list for proccing Twist of Fate. Set priest.twist_of_fate_heal_rppm=<rppm> to make this be used.
actions.main+=/call_action_list,name=heal_for_tof,if=!buff.twist_of_fate.up&buff.twist_of_fate_can_trigger_on_ally_heal.up&talent.halo
# Put out Vampiric Touch on enemies that will live at least 12s as a filler action.
actions.main+=/vampiric_touch,target_if=max:(refreshable*10000+target.time_to_die),if=refreshable&target.time_to_die>12
actions.main+=/shadow_word_death,target_if=min:target.health.pct,if=(pet.mindbender.active|pet.voidwraith.active|pet.shadowfiend.active)&talent.inescapable_torment|target.health.pct<(20+15*talent.deathspeaker)&talent.shadowfiend&talent.idol_of_yshaarj
actions.main+=/mind_flay,target_if=max:dot.shadow_word_madness.remains,chain=1,interrupt_immediate=1,interrupt_if=ticks>=2,interrupt_global=1
# Use Tentacle Slam while moving as a low-priority action when adds will not spawn in 20 seconds.
actions.main+=/tentacle_slam,if=raid_event.adds.in>20
# Use Shadow Word: Death while moving as a low-priority action in execute
actions.main+=/shadow_word_death,target_if=target.health.pct<20
# Use Shadow Word: Death while moving as a low-priority action
actions.main+=/shadow_word_death,target_if=max:dot.shadow_word_madness.remains
# Use Shadow Word: Pain while moving as a low-priority action
actions.main+=/shadow_word_pain,target_if=min:remains

actions.trinkets=use_item,name=galactic_gladiators_badge_of_ferocity,if=(buff.voidform.up|buff.power_infusion.remains>=10|(talent.voidform&cooldown.voidform.remains>10))|fight_remains<20
actions.trinkets+=/use_items,if=(buff.voidform.up|buff.power_infusion.remains>=10|equipped.neural_synapse_enhancer&buff.entropic_rift.up)|fight_remains<20

head=blind_oaths_winged_crest,id=250051,bonus_id=13575/13575/13575/13575,ilevel=289,gem_id=240983,enchant_id=7961
neck=eternal_voidsong_chain,id=249368,ilevel=289,gem_id=240892
shoulders=blind_oaths_seraphguards,id=250049,bonus_id=13574/13574/13574/13574,ilevel=289,enchant_id=8031
back=arcanoweave_cloak,id=239661,ilevel=285
chest=blind_oaths_raiment,id=250054,bonus_id=13575/13575/13575/13575,ilevel=289,enchant_id=7987
wrists=arcanoweave_bracers,id=239660,ilevel=285,gem_id=240908
hands=vilehex_bonds,id=251172,ilevel=289
waist=endless_march_waistwrap,id=249319,ilevel=289,gem_id=240900
legs=blind_oaths_leggings,id=250050,bonus_id=13575/13575/13575/13575,ilevel=289,enchant_id=7935
feet=lightbinder_treads,id=109796,ilevel=289,enchant_id=7993
finger1=eye_of_midnight,id=249920,ilevel=289,gem_id=240918/240900,enchant_id=7969
finger2=omission_of_light,id=251093,ilevel=289,gem_id=240900,enchant_id=7997
trinket1=soulcatchers_charm,id=250223,ilevel=289
trinket2=gaze_of_the_alnseer,id=249343,bonus_id=12806/13577,ilevel=289
main_hand=brazier_of_the_dissonant_dirge,id=249286,ilevel=289,enchant_id=8041
```

## Step 2: Understand the default APL layout before editing
The current default APL is organized into several lists. Knowing where your change belongs prevents random regressions.

You will commonly see:
- `actions.precombat`: setup before pull.
- `actions`: top-level dispatcher.
- `actions.aoe_variables`: target-count and dot-state helpers.
- `actions.cds`: cooldown and external buff logic.
- `actions.main`: core rotational logic.
- `actions.trinkets`: on-use item logic.
- `actions.heal_for_tof`: Twist of Fate helper logic.

If you are not sure where to place a line, start by finding similar spells/conditions and modify the nearest existing logic instead of inventing a new section.

## Step 3: Build a repeatable baseline
Always do your tests against a base actor to make sure error margin makes sense. It is also suggested to either crank `iterations=20000` or use an aggressive `target_error=0.05` or something similar.

Generally speaking we only care about significant changes (+/- 0.5%) that make sense. Adding extremely complex lines that a human cannot replicate for 0.1% DPS is not worth it.

## Step 4: Make one change at a time
Edit one hypothesis at a time, rerun, and compare against baseline.

Good examples:
- Reordering two nearby lines.
- Tightening one `if=` condition.
- Adjusting one `target_if=` expression.

Bad examples:
- Changing 12 lines plus adding new variables in one go.

### Why this matters
If your change loses DPS, single-change testing lets you instantly identify the cause. Multi-change batches make the result hard to trust.

## Step 5: Use a small test matrix, not one sim
A single Patchwerk run can hide regressions in movement, add timing, or execute behavior.

At minimum, test:
1. Single target, Patchwerk, 300s
2. 2-target cleave
3. 4-6 target sustained AoE
4. DungeonSlice
5. Short fight (execute-heavy)
6. Light movement scenario

If your change is add-related, prioritize adds timing tests. If your change is execute-related, prioritize short-fight and low-health windows.

## Step 6: Read and write conditions safely
These are the most common mistakes when editing APL expressions.

### 1) Operator precedence mistakes
`&` binds tighter than `|`, so add parentheses when intent matters.

```simc
# Risky (easy to misread)
if=a|b&c

# Clear intent
if=(a|b)&c
```

### 2) Division and separators confusion
In SimC expressions:
- `/` separates actions.
- `%` is division.
- `%%` is modulus.

### 3) Boolean vs numeric assumptions
Everything evaluates as numbers. `0` is false, nonzero is true. This is powerful, but easy to misuse if you expect strict booleans.

### 4) Dot refresh logic
Prefer built-in helpers like `.refreshable` when appropriate instead of hardcoding arbitrary thresholds.

### 5) Wrong sub-list behavior
`call_action_list` and `run_action_list` are not interchangeable:
- `call_action_list` acts like inlining a sublist, then continues below the call site.
- `run_action_list` changes control flow and returns differently when no action is available.

## Step 7: Compare correctly (is this change real?)
A tiny gain can be noise. Treat results as meaningful only when they clearly exceed simulation error.

Practical rule:
- If gain is smaller than about 2x the reported error, assume uncertain.
- If gain is repeatable across your matrix and clearly above error, it is likely real.

Also verify behavior metrics:
- Do key spells line up with your intent?
- Did casts/uptimes move in expected directions?
- Did you gain in one scenario but lose heavily elsewhere?

## Step 8: Keep changes reviewable
When you are ready to share or submit:
1. Include a short summary of the hypothesis.
2. Include exact test settings.
3. Include before/after numbers for each scenario.
4. Include notable side effects (casts, uptime, targeting).
5. Keep the diff focused.

This makes your change easier to validate and discuss.

## Shadow Priest-specific workflow tips
- Respect existing variable scaffolding in `actions.aoe_variables` before adding new flags.
- Be careful with anything that modifies add-holding behavior (for example around Tentacle Slam logic), because timing interactions can be non-obvious.
- Cooldown alignment changes in `actions.cds` can improve burst but hurt average throughput if they over-hold.
- Any movement fallback edits near the end of `actions.main` should be tested with movement events, not just Patchwerk.

## Example mini workflow
1. Baseline ST and 5-target runs with current `default_apl.simc`.
2. Change one condition (for example a single `if=` clause in `actions.main`).
3. Rerun same settings.
4. Run one debug log if cast distribution looks odd.
5. Expand to add-wave and movement scenarios.
6. Keep or discard the change based on matrix performance, not one chart.

## Final checklist before calling a change "good"
- The change improves your target scenario.
- It does not cause major regressions in core off-scenarios.
- The gain is larger than likely noise.
- The action sequence behavior matches your intent.
- The diff is small and explainable.

If all five are true, you are in good shape to keep iterating or open a PR.

If you are not comfortable with GitHub and Pull Requests you can always post in the discord to get changes reviewed.