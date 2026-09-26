# UNCG Campus Events

## Project Description

This is a two-page website built as a web design class project, made for UNC Greensboro (UNCG). It lists campus events like concerts, career fairs, games, and talks so students have one place to check instead of a bunch of separate emails.

- `index.html` is the home page with a hero section, a grid of 5 upcoming events, and an About section.
- `event.html` is the detail page for the featured event (Spartan Fall Fling), with a description, schedule, sidebar of details, and 3 related events.

**Note:** This is not an official UNC Greensboro website. It's a class project that uses UNCG's real school colors, real campus landmarks (College Avenue, the Elliott University Center, Greensboro Coliseum), and the Spartans/Spiro mascot name, but the event names, dates, and schedule details are made up for this assignment. It does not use UNCG's official logo or seal.

## Layout Decisions

**CSS Grid** is used in two places, as required:
- `.event-grid` on the home page, using `repeat(auto-fit, minmax(250px, 1fr))` so the cards resize based on screen width. The featured event card uses `grid-column: span 2` so it's wider than the other four cards.
- `.event-layout` on the event page, using `grid-template-columns: 2fr 1fr` to put the main article next to the sidebar.

I used Grid for these because both layouts need rows and columns to line up together, not just a single line of items.

**Flexbox** is used in a few places to line things up in a row and let them wrap:
- `.header-content` and the `nav ul` - lines up the logo and nav links, and lets the nav wrap on small screens.
- `.hero` - puts the text next to the image and stacks them on mobile using a media query.
- `.related-grid` on the event page - lets the 3 related event cards wrap onto a new line when the screen gets narrow (`flex-wrap: wrap` and `gap`).
- `.footer-content` - spreads out the copyright, email, and links with `justify-content: space-between`.

## Responsive Design

I used two breakpoints in `css/styles.css`:

- **800px** - the main content/sidebar grid on the event page switches from two columns to one, so the sidebar moves below the main content instead of next to it.
- **600px** - the header stacks the logo above the nav, the hero image moves below the text, and the footer items stack instead of sitting in a row.

Both pages have the `<meta name="viewport">` tag so they scale correctly on phones.

**Testing:** I tested this by resizing my browser window from full width down to about 320px wide and checking that nothing overlapped or broke at the breakpoints above.

## Semantic HTML

Both pages use one `<main>` element for the page content, plus a shared `<header>` and `<footer>`.

- `<nav>` - wraps the site navigation links in the header and footer.
- `<article>` - wraps each event card, since each one is a self-contained piece of content.
- `<aside>` - wraps the sidebar on the event page (date, time, organizer, etc.) since it's extra info, not part of the main description.
- `<time datetime="...">` is used on every date/time so it's machine-readable, not just plain text.
- `<section>` - used to group related content like Upcoming Events, About, and the related events on the event page.

## Sources

- Colors: UNCG's official web colors, taken from the UNCG Web Assets brand page (uncg.edu) - Navy `#0F2044`, Gold `#FFB71B`, Gray `#BEC0C2`.
- Campus landmarks (College Avenue, Elliott University Center, Cone Ballroom, Greensboro Coliseum) and the Spartans/Spiro mascot name are real and taken from UNCG's public website and Wikipedia; the events themselves are invented for this project.
- All images in the `images/` folder are simple SVG graphics I made myself - no outside images, and no official UNCG logo or seal, were used.
- Font: default system sans-serif (Arial/Helvetica). UNCG's actual brand fonts are Pluto Sans and Sofia Pro, but those aren't free web fonts, so a plain system font was used instead.
- No CSS frameworks or JavaScript libraries were used - everything in `css/styles.css` was written by hand for this project.