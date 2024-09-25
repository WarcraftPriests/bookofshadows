---
slug: /guides/dungeonsims
---

# Dungeon Sims
Shadow Priest supports running more advanced sims inside of Raidbots that can be more useful for Mythic+ environments. Specifically we support [DungeonRoute](https://github.com/simulationcraft/simc/wiki/RaidEvents#pull) sims. Route sims are a new way to sim a Mythic+ dungeon that takes into account actual mobs in actual dungeons and assigns the actor a specific damage share of a pull. This gives you the ability to have much more accurate sims than previously for mythic+ environments.

## What's the point?
Okay so what exactly is the purpose of these sims? Simply to get a more accurate picture for builds/etc in a Mythic+ dungeon. We have always said that doing just one sim will never be good enough for dungeons, since each dungeon changes drastically the damage pattern in the key. With DungeonRoute you now have the ability to check specifically how you might perform in a Halls of Valor +22 key vs. a Azure Vaults +18 key. These sims include all the things you would expect in a key, including downtime, boss pulls, and even some affix support.

While this is not perfectly accurate for every dungeon run, it can be a useful tool especially compared to simply just doing stacked AoE sims.

## Sim Charts
As of this post our sims posted to the [Charts Website](https://warcraftpriests.github.io) now use a new sim known as Dungeon Composite. This sims every key at a high level for that season and combines them together to form a single chart. This gives you generic ideas of what to target/shoot for more overall dungeon dps. We also have result tables built for every sim chart for every individual dungeon. Right now those are not visible on the charts website but might be in the future if we figure out a good way to display things. For now you can navigate to the [GitHub Repo](https://github.com/WarcraftPriests/tww-shadow-priest), select any sim you are interested in and go to the `results/dungeons` folder to find all the specific dungeon sims.

The routes we use for these sims are found [here](https://github.com/WarcraftPriests/tww-shadow-priest/tree/master/internal/routes). See below on how this works.

## How to use it
So if you are interested in running your own character through your own dungeons you can follow the steps below. The way this works is you take a route from [Mythic Dungeon Tools](https://www.curseforge.com/wow/addons/mythic-dungeon-tools) and use a [WeakAura](https://wago.io/Yya4XBbl-) to generate a SimC string based on that route.

1. Download [Mythic Dungeon Tools](https://www.curseforge.com/wow/addons/mythic-dungeon-tools)
2. Import or create a route for the key you are interested in simming. Make sure these routes include accurate pulls and include bosses. If you fail to select something it will not be simmed. This also means if you do not create individual pulls it will sim it as if you pull it all at once.
3. Install the [MDT Sim WeakAura](https://wago.io/Yya4XBbl-)
4. Follow the full instructions in the WeakAura description, it will walk you through how to add this to your raidbots sim.

Note as mentioned above you can also use some routes we generated [here](https://github.com/WarcraftPriests/tww-shadow-priest/tree/master/internal/routes) instead of doing that yourself.

# Things to Know

## Overall DPS
The overall DPS in these sims factors in downtime. This is similar to DPS found in [Warcraftlogs](https://www.warcraftlogs.com/zone/rankings/39#class=Priest&spec=Shadow&metric=dps) for keys but different from Details which factors this out. This means your overall Details DPS will not match your Sim DPS, and that is expected. To see these more similarly you would need to use a log. This is something we might add support to in SimC in the future but no ETA on that.

## What about DungeonSlice?
As mentioned above the biggest downside with a sim like DungeonSlice is that it is a generic sim for all dungeons. This means it is not nuanced enough to pick up pull differences for various affixes or dungeon mob counts in keys like Court of Stars vs. Algethar Academy. That being said this sim has received the same APL updates as DungeonRoute and is better than simply doing static AoE sims, but still is much less useful than DungeonRoute sims would be.
