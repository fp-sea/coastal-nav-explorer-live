import{r as e,t}from"./react-CrGDL-G9.js";import{J as n,rt as r}from"./engine-Doj8TdtU.js";import{a as i,o as a,r as o}from"./index-C2bD8pxR.js";import{PracticeProblem as s}from"./Practice-Bw-RUnKD.js";var c=e(),l=`---
id: convert
title: True, magnetic and compass
order: 1
practice: convert
why: The chart is drawn in true, your compass points to magnetic north and is pulled aside by the boat's own iron. Every course you steer passes through this conversion.
---
# How it works

Write the chain as a column: **T**rue, **V**ariation, **M**agnetic, **D**eviation, **C**ompass. Put the direction you know on its row and work toward the one you need.

1. Going down the column toward compass: **add West, subtract East**.
2. Going up toward true: **add East, subtract West**.
3. Variation comes from the compass rose nearest your position. Deviation comes from the boat's deviation table.
4. Enter the deviation table with the **magnetic** heading. Going from compass to magnetic, estimate the magnetic heading, read the deviation for it, and check.

> Tip: say the reference aloud with every number — "zero seven two true" — and most conversion mistakes disappear.

# Check yourself

- Does the magnetic course differ from true by exactly the variation?
- Did you read the deviation for the magnetic heading, not the compass or true one?
`,u=`---
id: deviation
title: Checking deviation with a transit
order: 2
practice: deviation-transit
why: A deviation table goes out of date whenever gear near the compass changes. Two charted marks in line let you check it underway, with nothing but the chart.
---
# How it works

1. Find two charted objects that line up (a range or any two charted marks). Read the true direction of the line through them.
2. Convert it to magnetic with the local variation.
3. Steer along the line and read the steering compass the moment the marks are in line.
4. **Deviation = magnetic − compass.** Compass lower than magnetic: deviation is East. Higher: West.

> Tip: "compass least, error east; compass best, error west."

# Check yourself

- Did you compare the compass with the **magnetic** bearing, not the true one?
- Deviation changes with the boat's heading: this check is only good for the heading you were on.
`,d=`---
id: dr
title: Dead reckoning
order: 3
practice: dr
why: A DR is where you would be if nothing pushed you off course. It carries you through fog and darkness, and any fix that disagrees with it tells you something is pushing you.
---
# How it works

1. Lay off the course from your last known position with the parallel rule. Label it: **course above** the line, **speed below**.
2. Elapsed time in hours and tenths (borrow 60 minutes when subtracting clock times).
3. **Distance = speed × time.**
4. Set the dividers to that distance on the **latitude scale** beside your position, and mark the DR with a half circle and the time.

> Tip: in minutes, D = S × minutes ÷ 60. 1 hr 45 min is 1.75 hr, not 1.45 hr.

# Check yourself

- Measured on the latitude scale, never the longitude scale?
- Plotted in the direction you are going, not the reciprocal?
- DR accuracy is about 10% of the distance run: a 10-mile run gives roughly a 1-mile circle of doubt.
`,f=`---
id: ep
title: Estimated position: current and leeway
order: 4
practice: ep, leeway
why: Water moves and wind pushes. The estimated position adds what you know about both to the DR, so you can see the danger before you reach it.
---
# How it works

**Leeway** first. The wind pushes the boat downwind, so your track through the water is to leeward of your heading. Port tack (wind over the port side): track = heading + leeway. Starboard tack: track = heading − leeway. To *make good* a course, steer upwind of it: port tack subtract, starboard tack add.

**Current** next.

1. Plot the DR (along the water track) for the elapsed time.
2. From the DR, draw the current for the same time: toward the **set** (where it flows to), length **drift × hours**.
3. The end of that line is the EP. Mark it with a square and the time.
4. The line from the start to the EP is your course made good; its length ÷ hours is your speed over ground.

> Tip: wind is named for where it comes **from**; current for where it goes **to**.

# Check yourself

- Did the current act for the whole run, not just one hour?
- Does the leeway push you downwind?
`,p=`---
id: course-to-steer
title: Course to steer with current
order: 5
practice: course-to-steer
why: Pointing at your destination in a cross-current carries you sideways. Aim upcurrent by the right amount and you make good a straight track.
---
# How it works

1. Plot the track from A to B; read its direction and length.
2. From A, draw **one hour** of current: toward the set, length = drift.
3. From the **end** of the current vector, swing an arc of your boat speed until it cuts the track.
4. The line from the current's end to the cut is the heading to steer. Convert it to magnetic and compass.
5. The distance from A to the cut is your speed over ground. ETE = distance ÷ SOG.

> Tip: sanity check — the heading always leans **into** the current.

# Check yourself

- Arc swung from the end of the current vector, not from A?
- Speed over ground is not your boat speed: the current changes it.
`,m=`---
id: current-from-fix
title: Finding the current from a fix
order: 6
practice: current-from-fix
why: The gap between where you expected to be and where you are is the water's work. Measure it and you know the current for the next leg.
---
# How it works

1. Plot the DR for the time of the fix.
2. Plot the fix.
3. The line **from the DR to the fix** is the current: its direction is the set.
4. Drift = its length ÷ the elapsed hours.

> Tip: "the current is the gap between where you thought you were and where you are."

# Check yourself

- Measured from DR toward fix, not the other way?
- Divided by the hours (drift is a speed, in knots)?
`,h=`---
id: two-bearings
title: Fixes from bearings
order: 7
practice: fix-two-bearings, fix-transit
why: One bearing puts you somewhere on a line. A second line, at a good angle, puts you at a point.
---
# How it works

1. Take bearings on two charted objects with a hand-bearing compass, and note the time.
2. Convert each to true with the variation only: a hand-bearing compass held clear of the boat's iron has no deviation.
3. Each bearing points from you to the object, so draw each line **from the object back along the reciprocal**.
4. Where the lines cross is the fix: a circle and the time.

A **transit** (two marks in line) is a line of position you get for free; a bearing on a third mark crosses it.

> Tip: choose objects 30° to 90° apart and close by. A third bearing gives a small triangle that shows how good the fix is.

# Check yourself

- Each bearing kept with its own object?
- Is the fix near your DR? If not, find out why.
`,g=`---
id: running-fix
title: The running fix
order: 8
practice: fix-running
why: With only one object in sight, two bearings taken some minutes apart still give a fix — if you carry the first line forward by the distance you sailed.
---
# How it works

1. Plot the first bearing line from the object.
2. Distance run between the bearings = speed × time.
3. Slide the first line **parallel, in the direction of your course**, by the distance run.
4. Plot the second bearing. Where it crosses the advanced line is the running fix.

> Tip: a running fix is only as good as your course and speed between the bearings. Any current moves the advanced line, so treat it with suspicion.

# Check yourself

- Advanced along the course, not backward?
- Did you hold a steady course and speed between the bearings?
`,_=`---
id: dipping-light
title: Bearing and a dipping light
order: 9
practice: fix-dipping-light
why: At night a powerful light first rises over the horizon at a predictable distance. Its bearing at that moment and that distance give a fix.
---
# How it works

1. Geographic range in nautical miles from the light's height and your eye height (feet). Two formulas are in common use: **1.15 × (√light + √eye)**, and the simpler **√light + √eye**. The app shows both.
2. Convert the bearing to true.
3. You are on the reciprocal of the bearing, at that distance from the light.

> Tip: a light can only be seen at the smaller of its nominal range and its geographic range. Only a light that is bright enough to be seen beyond the horizon "dips".

# Check yourself

- Included your own eye height?
- Plotted on your side of the light, not beyond it?
`,v=`---
id: bow-angles
title: Distance off by bow angles
order: 10
practice: bow-angle
why: With a watch and the compass you can tell how far off a light you are, and how close you will pass, without plotting anything.
---
# How it works

1. Bow angle = the angle between the bow and the object (bearing minus heading).
2. Note the time when the angle is, say, 30°, and again when it has **doubled** to 60°.
3. Distance run between the two = your distance off at the second bearing.
4. The special case 45° → 90°: when the object comes abeam, your distance off equals the distance run.
5. Distance off when abeam = distance off × sin(second bow angle).

> Tip: it needs a steady course and speed, and no current across your track.

# Check yourself

- Bow angles measured from the bow, not from north?
- Abeam distance worked from the second angle?
`,y=`---
id: danger-bearing
title: Danger bearings
order: 11
practice: danger-bearing
why: A single bearing on a charted mark can keep you off a hidden hazard all the way past it, with nothing to plot underway.
---
# How it works

1. Mark the edge of safe water: the hazard's edge plus the margin you want.
2. Draw the line from that point to a mark you will be able to see. Read it and convert to magnetic.
3. From a point on the safe side, would the mark bear **less** than the line (NMT, not more than) or **more** (NLT, not less than)?
4. Label the line, for example **NMT 029°M**, and check the bearing often.

> Tip: imagine drifting toward the danger and watch which way the bearing moves.

# Check yourself

- Left a margin rather than drawing through the hazard itself?
- NMT and NLT the right way round?
`,b=`---
id: long-course
title: Planning a passage with course changes
order: 12
practice: multi-leg
why: A real passage is a chain of legs. Working each one in the same order, and labeling everything, is what keeps a long plot honest.
---
# How it works

1. Mark the departure, each turning point and the destination; check every leg clears hazards.
2. For each leg: true course → magnetic → compass; distance; ETE = distance ÷ speed in hours and tenths.
3. Add each ETE to the clock to get the time at every turn (0.8 hr is 48 minutes).
4. Apply current and leeway leg by leg where you have them.
5. Label each leg with its compass course above and speed below, and each turn with its time.

> Tip: re-check every direction for its reference and every number for its unit before you leave the dock.

# Check yourself

- Deviation read for each leg's own magnetic heading?
- Times built from minutes, not tenths added as minutes?
`,x=`---
id: tides
title: Tide heights, bridges and drying rocks
order: 13
practice: bridge-clearance, rock-at-tide
why: The same rock can be a hazard at low water and invisible at high water; the same bridge can clear your mast at low water and not at high. The tide decides.
---
# How it works

**Height of tide.** Between a high and a low (about six hours), the tide moves 1, 2, 3, 3, 2, 1 twelfths of the range in each sixth: slowly at first, fastest in the middle, slowly at the end. Cumulatively that is 1, 3, 6, 9, 11 and 12 twelfths.

**Two zeros on one chart.**

- Depths and **drying heights** (the underlined figures on rocks) are measured from **chart datum**, mean lower low water. Tide heights use the same zero.
- **Bridge clearances** and the heights of lights are measured from **mean high water**.

So:

1. Water over a spot = charted depth + height of tide.
2. A rock with a drying height shows above the water by drying height − height of tide (negative means it is covered).
3. Clearance under a bridge = charted clearance + (mean high water − height of tide).

> Tip: a rising tide makes everything under you deeper and everything over you lower.

# Check yourself

- Which zero is this number measured from: chart datum or mean high water?
- Does your answer get safer or riskier as the tide rises? Does that make sense?
`,S=t();function C(e){let t=/^---\n([\s\S]*?)\n---\n?/.exec(e);if(!t)return{meta:{},body:e};let n={};for(let e of t[1].split(`
`)){let t=e.indexOf(`:`);t>0&&(n[e.slice(0,t).trim()]=e.slice(t+1).trim())}return{meta:n,body:e.slice(t[0].length)}}function w(e,t=`i`){let n=[],r=/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g,i=0,a=0;for(let o=r.exec(e);o;o=r.exec(e)){o.index>i&&n.push(e.slice(i,o.index));let r=o[0],s=`${t}-${a++}`;r.startsWith(`**`)?n.push((0,S.jsx)(`strong`,{children:r.slice(2,-2)},s)):r.startsWith("`")?n.push((0,S.jsx)(`code`,{children:r.slice(1,-1)},s)):n.push((0,S.jsx)(`em`,{children:r.slice(1,-1)},s)),i=o.index+r.length}return i<e.length&&n.push(e.slice(i)),n}function T({source:e}){let t=e.replace(/\r\n/g,`
`).split(/\n\s*\n/);return(0,S.jsx)(S.Fragment,{children:t.map((e,t)=>{let n=e.trim();if(!n)return null;let r=`b${t}`;if(n.startsWith(`## `))return(0,S.jsx)(`h3`,{children:w(n.slice(3),r)},r);if(n.startsWith(`# `))return(0,S.jsx)(`h2`,{children:w(n.slice(2),r)},r);let i=n.split(`
`);return i.every(e=>/^\s*- /.test(e))?(0,S.jsx)(`ul`,{children:i.map((e,t)=>(0,S.jsx)(`li`,{children:w(e.replace(/^\s*- /,``),`${r}-${t}`)},t))},r):i.every(e=>/^\s*\d+\. /.test(e))?(0,S.jsx)(`ol`,{children:i.map((e,t)=>(0,S.jsx)(`li`,{children:w(e.replace(/^\s*\d+\. /,``),`${r}-${t}`)},t))},r):i.every(e=>e.startsWith(`>`))?(0,S.jsx)(`aside`,{className:`tip`,children:w(i.map(e=>e.replace(/^>\s?/,``)).join(` `),r)},r):(0,S.jsx)(`p`,{children:w(i.join(` `),r)},r)})})}var E=Object.values(Object.assign({"./lessons/01-convert.md":l,"./lessons/02-deviation.md":u,"./lessons/03-dr.md":d,"./lessons/04-ep.md":f,"./lessons/05-course-to-steer.md":p,"./lessons/06-current-from-fix.md":m,"./lessons/07-two-bearings.md":h,"./lessons/08-running-fix.md":g,"./lessons/09-dipping-light.md":_,"./lessons/10-bow-angles.md":v,"./lessons/11-danger-bearing.md":y,"./lessons/12-long-course.md":b,"./lessons/13-tides.md":x})).map(e=>{let{meta:t,body:n}=C(e);return{id:t.id??``,title:t.title??``,order:Number(t.order??99),practice:(t.practice??``).split(`,`).map(e=>e.trim()).filter(Boolean),why:t.why??``,body:n}}).sort((e,t)=>e.order-t.order),D=e=>E.find(t=>t.id===e);function O({lessonId:e}){let t=e?D(e):void 0;return t?(0,S.jsx)(A,{id:t.id},t.id):(0,S.jsx)(k,{notFound:e})}function k({notFound:e}){let{progress:t}=i();return(0,S.jsxs)(`section`,{className:`screen`,children:[(0,S.jsx)(`h1`,{children:`Learn`}),e?(0,S.jsxs)(`p`,{className:`field-error`,children:[`There is no lesson called “`,e,`”.`]}):null,(0,S.jsx)(`p`,{children:`Short lessons, one skill each. Every lesson starts with a problem to try — the explanation is there when you want it.`}),(0,S.jsx)(`ol`,{className:`lesson-list`,children:E.map(e=>{let n=e.practice.every(e=>a(t.byType[e]));return(0,S.jsx)(`li`,{children:(0,S.jsxs)(`a`,{className:`skill-card`,href:o({name:`learn`,lessonId:e.id}),children:[(0,S.jsx)(`strong`,{children:e.title}),(0,S.jsx)(`span`,{children:e.why}),n?(0,S.jsx)(`span`,{className:`skill-meta ready`,children:`✓ ready`}):null]})},e.id)})})]})}function A({id:e}){let t=D(e),[i,a]=(0,c.useState)(r),[l,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(t.practice[0]),p=t.practice.map(n),m=E.findIndex(t=>t.id===e),h=E[m-1],g=E[m+1];return(0,S.jsxs)(`section`,{className:`screen lesson`,children:[(0,S.jsxs)(`p`,{className:`crumbs`,children:[(0,S.jsx)(`a`,{href:o({name:`learn`}),children:`Learn`}),` › `,t.title]}),(0,S.jsx)(`h1`,{children:t.title}),(0,S.jsx)(`p`,{className:`lede`,children:t.why}),(0,S.jsx)(`h2`,{children:`Try it first`}),p.length>1?(0,S.jsx)(`div`,{className:`row`,role:`group`,"aria-label":`Problem type`,children:p.map(e=>(0,S.jsx)(`button`,{type:`button`,"aria-pressed":e.id===d,className:e.id===d?`hint-on`:``,onClick:()=>{f(e.id),a(r())},children:e.title},e.id))}):null,(0,S.jsx)(s,{typeId:d,seed:i,embedded:!0,onNew:()=>a(r()),onChecked:()=>u(!0)},`${d}/${i}`),(0,S.jsx)(`section`,{className:`lesson-body`,children:l?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(T,{source:t.body}),(0,S.jsx)(`h2`,{children:`Common mistakes`}),(0,S.jsx)(`ul`,{className:`mistake-list`,children:p.flatMap(e=>e.errorModes).map(e=>(0,S.jsxs)(`li`,{children:[(0,S.jsxs)(`strong`,{children:[e.name,`.`]}),` `,e.explanation]},e.id+e.name))})]}):(0,S.jsx)(`button`,{type:`button`,onClick:()=>u(!0),children:`Show me how it works`})}),(0,S.jsxs)(`nav`,{className:`lesson-nav row`,"aria-label":`Lessons`,children:[h?(0,S.jsxs)(`a`,{href:o({name:`learn`,lessonId:h.id}),children:[`◀ `,h.title]}):(0,S.jsx)(`span`,{}),(0,S.jsx)(`a`,{href:o({name:`practice`,typeId:d}),children:`More practice`}),g?(0,S.jsxs)(`a`,{href:o({name:`learn`,lessonId:g.id}),children:[g.title,` ▶`]}):null]})]})}export{O as Learn};