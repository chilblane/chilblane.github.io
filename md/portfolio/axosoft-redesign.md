---
title: Axosoft 17 Design Exploration
description: How a design exercise in my free time turned into a major facelift for the Axosoft project management tool
projectdate: Fall 2016
---

### Background

By summer 2016, the majority of Axosoft's online properties had become unified through a CSS framework I wrote called &ldquo;Axostyle,&rdquo; including [Axosoft.com](https://www.axosoft.com/), [GitKraken.com](https://www.gitkraken.com), and the in-development support sites for [both](https://support.axosoft.com/) [products](https://support.gitkraken.com/). The primary purpose of this framework was to provide a skeleton for any website, including navigation and content patterns, that would make it easy for any developer on the team to deploy a project that very much felt like a Axosoft production. (In fact, the GitKraken development team did just that to build their [account management site](https://account.gitkraken.com).)

The secondary purpose of Axostyle was to codify the official branding elements of Axosoft and GitKraken. In fact, the Axostyle project itself was intended to work as a style guide.

<figure class="figure">
  <img src="../static/portfolio/axostyle.png" srcset="../static/portfolio/axostyle-320w.png 320w, ../static/portfolio/axostyle-640w.png 640w, ../static/portfolio/axostyle.png 1000w, ../static/portfolio/axostyle-2000w.png 2000w" alt="Screen capture of the Axostyle documentation, colors page">
  <figcaption>One of the pages in the Axostyle documentation</figcaption>
</figure>

As an experiment, I began thinking about how the Axosoft product itself might look if it was influenced by Axostyle. By this point, the Axosoft interface itself was several years old, and had very little in common with the marketing and branding Axosoft was using for it, which I felt could be improved.

<figure class="figure">
  <img src="../static/portfolio/axosoft-old.png" srcset="../static/portfolio/axosoft-old-320w.png 320w, ../static/portfolio/axosoft-old-640w.png 640w, ../static/portfolio/axosoft-old.png 1000w, ../static/portfolio/axosoft-old-2000w.png 2000w" alt="Various screenshots of the Axosoft product prior to version 17">
  <figcaption>Various screenshots of the Axosoft product prior to version 17</figcaption>
</figure>

### Redesigning

 I had actually made a design mockup of Axosoft before, in late 2014, but it was a simple reskin and didn't include any UI/UX changes.

<figure class="figure">
  <img src="../static/portfolio/axosoft-2016.png" srcset="../static/portfolio/axosoft-2016-320w.png 320w, ../static/portfolio/axosoft-2016-640w.png 640w, ../static/portfolio/axosoft-2016.png 1000w, ../static/portfolio/axosoft-2016-2000w.png 2000w" alt="Screen capture of an Axosoft mockup from 2014">
  <figcaption>Late 2014 reskin of Axosoft</figcaption>
</figure>

But my experience using Axosoft as both a basic "developer" user and as project manager had given me several ideas on what could be improved in Axosoft, and I was inspired by several other software tools, including our own GitKraken.

Working in Sketch, I compiled a few mockups of the main workspace and used Invision to share them with the lead designer and the product owner of Axosoft. With their positive feedback, I started working on more mockups of different parts of the UI.

<figure class="figure">
  <img src="../static/portfolio/axosoft-redesign-main.png" srcset="../static/portfolio/axosoft-redesign-main-320w.png 320w, ../static/portfolio/axosoft-redesign-main-640w.png 640w, ../static/portfolio/axosoft-redesign-main.png 1000w, ../static/portfolio/axosoft-redesign-main-2000w.png 2000w" alt="Redesign mockup for the main workspace in Axosoft">
  <figcaption>The main workspace in Axosoft, featuring a cleaner, modern look, simplified toolbars, and a GitKraken-influenced sidebar</figcaption>
</figure>

Some of the UI and UX changes I came up with were straightforward, such as simplifying the workspace toolbars. Some were more complex experiments, like splitting the item template editor into two views, to make this interface easier to parse for users.

<figure class="figure">
  <img src="../static/portfolio/axosoft-old-fields.png" srcset="../static/portfolio/axosoft-old-fields-320w.png 320w, ../static/portfolio/axosoft-old-fields-640w.png 640w, ../static/portfolio/axosoft-old-fields.png 1000w, ../static/portfolio/axosoft-old-fields-2000w.png 2000w" alt="Documentation screenshot of the Axosoft Field Template Editor prior to 17">
  <figcaption>Documentation screenshot of the Axosoft Field Template Editor prior to 17</figcaption>
</figure>

<figure class="figure">
  <img src="../static/portfolio/axosoft-redesign-field-layout.png" srcset="../static/portfolio/axosoft-redesign-field-layout-320w.png 320w, ../static/portfolio/axosoft-redesign-field-layout-640w.png 640w, ../static/portfolio/axosoft-redesign-field-layout.png 1000w, ../static/portfolio/axosoft-redesign-field-layout-2000w.png 2000w" alt="Mockup of a redesigned field template editor, showing the field layout">
  <figcaption>This tab in the redesigned editor would let users focus on what fields to include and how they would be laid out in the item template</figcaption>
</figure>


<figure class="figure">
  <img src="../static/portfolio/axosoft-redesign-field-props.png" srcset="../static/portfolio/axosoft-redesign-field-props-320w.png 320w, ../static/portfolio/axosoft-redesign-field-props-640w.png 640w, ../static/portfolio/axosoft-redesign-field-props.png 1000w, ../static/portfolio/axosoft-redesign-field-props-2000w.png 2000w" alt="Mockup of a redesigned field template editor, showing the field properties">
  <figcaption>This tab in the redesigned editor would let users focus on the properties of the fields available to use in their template, and add new custom fields</figcaption>
</figure>

### Implementation

Eventually the Axosoft development team decided to move forward with a release incorporating these changes, eventually becoming Axosoft 17. During that release I assisted the team with more mockups, as well as insight and feedback on their implementations. They also chose to use parts of the Axostyle CSS framework in the Axosoft code. I worked to code new patterns in Axostyle needed in the version 17 redesign (such as filter and tag indiciators), and I actually helped rebuild the layout of their settings UI to implement a redesigned navigation I had made in the mockup.

Not all changes, like the field template editor redesign, made it into the final product. But Axosoft 17 has been released, and is a significant improvement for the product.

### Additional links

For more information about this project, check out the following links:
- All of the mockups I made for the project, with detailed explanations, on [Behance](https://www.behance.net/gallery/44861598/Axosoft-Redesign-Project)
- An [overview of the UX changes](https://blog.axosoft.com/2017/03/08/axosoft-user-interface-overhaul/) in Axosoft 17, written by the lead designer for the product
- An in-depth [video overview](https://www.youtube.com/watch?v=e5YTWKz7fGs) of Axosoft 17's changes
