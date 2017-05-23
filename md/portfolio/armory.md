---
title: Unofficial World of Warcraft Armory Redesign
description: My first unsolicited redesign, working with the design direction and code of an existing site to create an updated user experience
projectdate: Spring 2017
---

### Background

In July 2016, Blizzard Entertainment introduced a new World of Warcraft website in preparation for the launch of their newest expansion, _Legion_. The new website featured a significant number of improvements, including more responsive web design and a modular CSS system. Unfortunately, several features of the old site remained behind on the existing `battle.net` domain, including the Armory.

The Armory was created as way for players to view their characters, sharing their progress and evaluating others. The last major update to the Armory was in 2010, with the release of the _Cataclysm_ expansion. Since that time, the Armory pages have had some minor updates but no significant change with regards to modern web design or development.

<figure class="figure">
  <img src="../static/portfolio/armory-old.jpg" srcset="../static/portfolio/armory-old-320w.jpg 320w, ../static/portfolio/armory-old-640w.jpg 640w, ../static/portfolio/armory-old.jpg 1000w, ../static/portfolio/armory-old-2000w.jpg 2000w" alt="Screen capture of the Cataclysm-era Armory design">
  <figcaption>The Cataclysm-era Armory design</figcaption>
</figure>

I decided to challenge myself by visualizing what an updated Armory might look like. While I had previously done work in Sketch creating mockups for my work at Axosoft, this would be my first opportunity to work with a design language I was very unfamiliar with.

### The Mockup

There were a few rules I adhered to when creating my mockup:

1. **Try to avoid creating new patterns whenever possible.** Use design elements from the new WoW site, and if that doesn't work, try to modernize patterns from the old Armory. A good example of this was the Mythic Keystone section, which reused the icon pattern for raids to display each dungeon.
2. **Visualize how this would appear at different viewport sizes.** I prefer rapid prototyping over design wireframes and other static resources as it's easier to see how a responsive design works. I knew that the eventual audience for this mockup (the WoW Reddit community) would not be interested in a mobile version mockup, so I focused my time on this desktop version. But I made sure to recognize how the sections of the page would collapse onto one column.
3. **Modernize and add features where appropriate.** I made sure to include elements that were missing or neglected from the existing Armory, including the aforementioned Mythic Keystone section, as well as Honor Talents, Artifact information, and smaller concepts like renaming _Pets & Mounts_ to _Collections_ to match updated terminology introduced in-game. However, many of these missing features relied on Blizzard API components that did not yet exist, and my assumption was that Blizzard's official redesign of the Armory would debut alongside an updated API.

<figure class="figure">
  <img src="../static/portfolio/armory-mockup.png" srcset="../static/portfolio/armory-mockup-320w.png 320w, ../static/portfolio/armory-mockup-640w.png 640w, ../static/portfolio/armory-mockup.png 1280w" alt="My mockup for the Armory redesign, as submitted on Reddit">
  <figcaption>My mockup for the Armory redesign, as submitted on Reddit</figcaption>
</figure>

There were some extra flourishes I added, including taking a screenshot of an important location in-game to use as one of the backgrounds, as well as using a third-party tool to extract a custom pose of my character for use in the header.

Once I had completed the mockup, I [submitted](https://www.reddit.com/r/wow/comments/5olndg/theres_still_no_update_for_character_armory_pages/) it to Reddit with an explanation of my reasoning and process for the project. It was well received, and was even [published](http://www.buffed.de/World-of-Warcraft-Spiel-42971/News/Arsenal-Armory-neu-1218593/) on a German-language gaming site.

### The Prototype

After a short break, I decided to move forward with the second step in my project. I created a [repository](https://github.com/chilblane/wow-armory-redesign) on GitHub, adapting the Jekyll framework I built for a previous version of this portfolio site.

I went ahead and grabbed the CSS file and several Javascript files from the new WoW site to use as the basis of my code. My goal was to avoid modifying these files as much as possible, only editing some file path references so they would resolve in my project. For any new CSS I would need to add, I added a new file that would be imported in as well.

I didn't want this project to be confused for the official site in any way, so I deliberately broke much of the Javascript code and removed all outbound links. What remained was the code used to handle the transitions and other parts of the UI. There was also a Javascript library that provided a modular way to manage media queries and breakpoints in the code. This, alongside the modular CSS classes themselves, made this prototype much easier to build than I was expecting.

I found I was able to adapt most of my mockup into the [prototype](http://www.chilblane.com/wow-armory-redesign/dnasis), thanks to the rules I had set when creating the mockup. There were still several issues with regards to the breakpoints, and I adjusted the layout of the page accordingly once I had viewed the content in a one-column view on mobile.

<figure class="figure">
  <img src="../static/portfolio/armory-header.jpg" srcset="../static/portfolio/armory-header-320w.jpg 320w, ../static/portfolio/armory-header-640w.jpg 640w, ../static/portfolio/armory-header.jpg 1000w, ../static/portfolio/armory-header-2000w.jpg 2000w" alt="Header of my prototype, featuring an updated character pose">
  <figcaption>I also updated the header to feature a much more active character pose</figcaption>
</figure>

I [submitted](https://www.reddit.com/r/wow/comments/5wq82m/last_month_i_redesigned_what_the_armory_webpages/) the prototype to Reddit, and again received significant praise and feedback about the project, as well as more publications writing about it. Besides some quick adjustments, I felt I had done enough with the project. I had accomplished the goals I set forth with, as well as demonstrating to the WoW community what one of their most-used tools could evolve into. I started [experimenting](https://github.com/chilblane/inspect) with third-party options that could help fulfill what was currently lacking in the community.

In May 2017, Blizzard [introduced a full redesign](https://worldofwarcraft.com/en-us/news/20634739/your-new-profile-page-is-here) of the Armory. There were many comparisons with my design, and both shared many of the same criticisms players had regarding the overall design language of the site. The Blizzard API was not updated so many player-requested features were not implemented, but Blizzard has said that the new Armory is a work in progress.

A week later, Wowhead and WarcraftLogs [introduced](http://www.wowhead.com/news=264191/warcraft-logs-launches-raiding-character-profiles) their own take on a character profile page, adding in some of the unique features those sites bring to the community. I feel there is plenty of opportunity in this space to continue coming up with some great solutions for Warcraft players.
