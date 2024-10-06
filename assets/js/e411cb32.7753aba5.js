"use strict";(self.webpackChunkbookofshadows=self.webpackChunkbookofshadows||[]).push([[6647],{6410:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var i=s(5893),o=s(1151);const a={slug:"shadow-priest-iteration",title:"Shadow Priest Iteration",authors:["publik"],tags:["beta","voidweaver","archon"]},n="Bugs",r={permalink:"/bookofshadows/blog/shadow-priest-iteration",editUrl:"https://github.com/WarcraftPriests/bookofshadows/tree/main/blog/2024-07-17-beta/index.md",source:"@site/blog/2024-07-17-beta/index.md",title:"Shadow Priest Iteration",description:"I've posted quite a lot on these topics already but wanted to call out a few things that are still plaguing the spec.",date:"2024-07-17T00:00:00.000Z",formattedDate:"July 17, 2024",tags:[{label:"beta",permalink:"/bookofshadows/blog/tags/beta"},{label:"voidweaver",permalink:"/bookofshadows/blog/tags/voidweaver"},{label:"archon",permalink:"/bookofshadows/blog/tags/archon"}],readingTime:2.825,hasTruncateMarker:!1,authors:[{name:"Publik",title:"Maintainer of Book of Shadows",url:"https://github.com/seanpeters86",imageURL:"https://github.com/seanpeters86.png",key:"publik"}],frontMatter:{slug:"shadow-priest-iteration",title:"Shadow Priest Iteration",authors:["publik"],tags:["beta","voidweaver","archon"]},unlisted:!1,prevItem:{title:"October 8th/9th Changes",permalink:"/bookofshadows/blog/voidweaver-buffs"},nextItem:{title:"State of Voidweaver and Archon",permalink:"/bookofshadows/blog/beta-state"}},l={authorsImageUrls:[void 0]},h=[];function c(e){const t={a:"a",h1:"h1",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"I've posted quite a lot on these topics already but wanted to call out a few things that are still plaguing the spec."}),"\n",(0,i.jsxs)(t.p,{children:["There are a lot of bugs facing the spec currently, several of which are very impactful to playing the game. The full list is ",(0,i.jsx)(t.a,{href:"https://github.com/SimCMinMax/WoW-BugTracker/labels/Priest",children:"here"})," with the big ones below:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/SimCMinMax/WoW-BugTracker/issues/1217",children:"Halo is pulling mobs that are not currently in combat"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/SimCMinMax/WoW-BugTracker/issues/1216",children:"Voidheart is expiring early"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/SimCMinMax/WoW-BugTracker/issues/1210",children:"Voidwraith pet is taking full damage as if it was a player"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/SimCMinMax/WoW-BugTracker/issues/1201",children:"Darkening Horizon is not always extending correctly"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/SimCMinMax/WoW-BugTracker/issues/1197",children:"Mind Soothe is not castable"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/SimCMinMax/WoW-BugTracker/issues/1218",children:"Idol of C'Thun is completely broken"})}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"season-1-tier-set-bonus",children:"Season 1 Tier Set Bonus"}),"\n",(0,i.jsx)(t.p,{children:"Currently the tier set for Shadow Priests is about a 3% DPS gain going from equivalent gear without the set bonus to equipping the full 4 set. This is particularly due to the strength of Distorted Reality (especially early on with less stats) and the inherent synergy with Mind's Eye. Mind's Eye does gain about 5% with the set but this is not enough to offset the loss at current tuning."}),"\n",(0,i.jsx)(t.p,{children:"In AoE situations the set bonus is about 4%, primarily due to preferring Mind's Eye for these builds. Overall this makes for a pretty underwhelming set bonus effect power wise, and particularly stings because the set bonus is pretty boring as it stands today."}),"\n",(0,i.jsx)(t.h1,{id:"hero-talent-iteration",children:"Hero Talent Iteration"}),"\n",(0,i.jsx)(t.p,{children:"So far we have not seen much iteration on our Hero Talent trees, particularly for Archon. Archon looks exactly how it did when it was first released and not a single thing was ever changed or iterated on, including the actual numerical tuning of the tree. I don't want to repost feedback but this is extremely disappointing and it feels like this just wasn't a priority to work on."}),"\n",(0,i.jsx)(t.p,{children:"While Voidweaver did get some iteration early on there are still quite a few challenges that tree has that would really help to see more iteration and changes with to make it feel better to play, particularly with the way the Entropic Rift spawns and follows targets."}),"\n",(0,i.jsx)(t.h1,{id:"talent-tree-tree-iteration",children:"Talent Tree Tree Iteration"}),"\n",(0,i.jsx)(t.p,{children:"Going into the expansion Shadow Priest has received little to no changes to the base spec. While we have gotten reworks quite often over the years none of these have really ever felt complete and this certainly adds to the frustration when comments made in previous dev cycles of revisiting things like Dark Ascension were never changed in the TWW beta cycle."}),"\n",(0,i.jsx)(t.p,{children:"Furthermore Shadow Priests now have the most 2 point nodes in our tree, and our class tree has the most total points. This equates to 1894837640784 possible builds of our class tree which is obviously an insane number to reason about, but is kind of crazy considering some classes only have  a fraction of a percent of that amount. This is not solely indicative of a problem, but does make Priests feel like our tree is not created equally when looking at other classes and specs in the game."}),"\n",(0,i.jsx)(t.p,{children:"This is still causing ugly issues in places like the Shadow spec tree where you have to pick between more DPS or taking the loss to get crucial defensive or utility nodes. As far as I'm aware the design goals were to not have this be a choice but we still have a crowded top section of our talent tree which feels horrible."})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>n});var i=s(7294);const o={},a=i.createContext(o);function n(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);