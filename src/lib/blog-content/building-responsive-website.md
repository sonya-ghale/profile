*How I actually learned to stop fighting the browser and start designing with it*

For the longest time, "responsive design" meant one thing to me: adding a pile of media queries at the bottom of my stylesheet and hoping for the best. I'd build a page for desktop, load it up on my phone, watch it fall apart, and then bolt on @media (max-width: 768px) { ... } rules until it looked okay. It worked, technically. But every new feature meant re-patching three or four breakpoints, and I never felt like I understood why something broke — I just knew which query fixed it.

The shift happened when I stopped thinking about screen sizes and started thinking about content.

The mistake I kept making

My early instinct was to design "desktop first" and shrink it down. That's backwards, and it shows. A layout built for a 1440px screen has room to spread out — sidebars, multi-column grids, generous whitespace. Squeezing that same structure into 375px doesn't just look cramped, it fights the natural flow of a phone screen, where everything wants to stack vertically anyway.

The turning point was building mobile-first instead. Start with a single column, get the content readable and usable on the smallest screen, and then add complexity as the viewport grows. Suddenly the media queries weren't patches — they were enhancements. min-width instead of max-width. Additive, not corrective.

Where Tailwind actually changed how I think

I resisted utility classes at first — writing flex flex-col md:flex-row gap-4 md:gap-8 in the markup felt messy compared to a clean .card { } class in a stylesheet. But the responsive prefixes (sm:, md:, lg:, xl:) ended up teaching me the mobile-first mental model faster than plain CSS ever did, because the base utility (no prefix) is the mobile style, and every prefixed variant only kicks in going up. There's no ambiguity about direction.

That constraint was clarifying. I stopped asking "what breakpoint fixes this" and started asking "at what point does this layout stop making sense, and what should it become instead." The breakpoint became a consequence of the content, not an arbitrary number I copied from a cheat sheet.
