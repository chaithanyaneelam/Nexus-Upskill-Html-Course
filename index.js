const topics = {
  semantic: {
    title: "Semantic HTML5 Structures",
    why: "Think of HTML as the skeleton of a building. If you use the wrong materials (divs), the building (SEO/Accessibility) falls apart.",
    keypoints: [
      "Use <strong>&lt;main&gt;</strong> for primary content.",
      "Use <strong>&lt;article&gt;</strong> for self-contained units.",
      "Use <strong>&lt;aside&gt;</strong> for sidebars.",
      "Use <strong>&lt;header&gt;</strong> and <strong>&lt;footer&gt;</strong> logically."
    ],
    code: `<main>\n  <section class="hero">\n    <h1>Welcome to Nexus</h1>\n  </section>\n</main>`,
    pitfall: "Using &lt;div&gt; for everything makes it impossible for screen readers and search engines to understand the page structure.",
    challenge: ["Build a blog layout using zero generic div tags."]
  },
  boilerplate: {
    title: "HTML Boilerplate",
    why: "Every HTML document needs a standard structure so that the web browser knows how to process the content correctly.",
    keypoints: [
      "<strong>&lt;!DOCTYPE html&gt;</strong> tells the browser this is an HTML5 document.",
      "<strong>&lt;html&gt;</strong> is the root element.",
      "<strong>&lt;head&gt;</strong> contains meta-information (like title, charset).",
      "<strong>&lt;body&gt;</strong> contains the visible content."
    ],
    code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Basic Structure</title>\n</head>\n<body>\n  <p>Hello World!</p>\n</body>\n</html>`,
    pitfall: "Forgetting the viewport meta tag will make your site look tiny on mobile phones.",
    challenge: ["Set up a basic HTML5 boilerplate from scratch without copying or pasting."]
  },
  headings: {
    title: "Headings & Paragraphs",
    why: "Headings organize content hierarchically, just like chapters in a book, while paragraphs hold your main text blocks.",
    keypoints: [
      "HTML provides headings from <strong>&lt;h1&gt;</strong> to <strong>&lt;h6&gt;</strong>.",
      "Use <strong>&lt;h1&gt;</strong> only once per page for the main title.",
      "<strong>&lt;p&gt;</strong> creates a paragraph, separating blocks of text automatically."
    ],
    code: `<h1>Main Article Title</h1>\n<h2>Section Heading</h2>\n<p>This is a standard paragraph of text taking up normal space.</p>\n<h3>Subsection Heading</h3>\n<p>More detailed text goes here.</p>`,
    outputHtml: `<h1>Main Article Title</h1>\n<h2>Section Heading</h2>\n<p>This is a standard paragraph of text taking up normal space.</p>\n<h3>Subsection Heading</h3>\n<p>More detailed text goes here.</p>`,
    pitfall: "Do not use headings just to make text bold or big. Screen readers rely on headings to navigate the page hierarchy.",
    challenge: ["Write an article structure using h1, h2, h3, and paragraph tags appropriately."]
  },
  divspan: {
    title: "Divs & Spans",
    why: "Divs are block-level containers used for structuring layouts. Spans are inline containers used for manipulating text within a line.",
    keypoints: [
      "<strong>&lt;div&gt;</strong> is block-level (takes full width, starts on a new line).",
      "<strong>&lt;span&gt;</strong> is inline-level (only takes up as much width as necessary).",
      "Both are non-semantic and should be used mainly for styling hooks and generic containers."
    ],
    code: `<div class="card">\n  <p>This paragraph has a <span class="highlight">highlighted</span> word.</p>\n</div>`,
    outputHtml: `<div style="border: 2px dashed #94a3b8; padding: 15px; margin-bottom: 10px;">This is a block-level &lt;div&gt;. It stretches across the width.</div>\n<p>This is normal text with <span style="background: yellow; color: black; font-weight: bold; padding: 2px 5px;">an inline &lt;span&gt; element</span> inside it.</p>`,
    pitfall: "Overusing divs (Divitis) instead of semantic tags like article or section.",
    challenge: ["Wrap a specific word in a paragraph with a span and change its color to red."]
  },
  lists: {
    title: "Lists (Ordered & Unordered)",
    why: "Lists group related items together. They are essential for navigation menus, standard list items, and systematic steps.",
    keypoints: [
      "<strong>&lt;ul&gt;</strong> creates an unordered (bulleted) list.",
      "<strong>&lt;ol&gt;</strong> creates an ordered (numbered) list.",
      "<strong>&lt;li&gt;</strong> defines each list item within the parent list."
    ],
    code: `<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n</ul>\n\n<ol>\n  <li>First step</li>\n  <li>Second step</li>\n</ol>`,
    outputHtml: `<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n</ul>\n<ol>\n  <li>First step</li>\n  <li>Second step</li>\n</ol>`,
    pitfall: "Nesting lists improperly. A nested ul/ol MUST be placed inside an &lt;li&gt;, not directly inside a ul/ol.",
    challenge: ["Create a nested list representing a grocery store's sections and items."]
  },
  links: {
    title: "Links",
    why: "Links connect the web. They navigate users to other pages, files, email addresses, or even different sections of the same page.",
    keypoints: [
      "Use the <strong>&lt;a&gt;</strong> (anchor) tag to create a link.",
      "The <strong>href</strong> attribute specifies the link's destination.",
      "Set <strong>target=\"_blank\"</strong> to open a link in a new tab."
    ],
    code: `<a href="https://example.com" target="_blank">Visit Example</a>\n<a href="mailto:hello@test.com">Send Email</a>`,
    outputHtml: `<a href="https://example.com" target="_blank" style="color: #2563eb; text-decoration: underline; margin-right: 15px;">Visit Example -></a>\n<a href="mailto:hello@test.com" style="color: #2563eb; text-decoration: underline;">Send Email </a>`,
    pitfall: "Using vague text like 'Click Here'. Always use descriptive text for links to improve Accessibility and SEO.",
    challenge: ["Create a navigation menu that links to 3 external sites and one email address."]
  },
  forms: {
    title: "Pro Forms",
    why: "Forms are the primary way users interact with a site, submitting logins, messages, and payments.",
    keypoints: [
      "The <strong>&lt;form&gt;</strong> tag wraps all input elements.",
      "Use <strong>&lt;label&gt;</strong> associated with <strong>&lt;input&gt;</strong> elements for accessibility and usability.",
      "Specify <strong>type</strong> attributes (text, email, password) to get appropriate keyboards and validation."
    ],
    code: `<form action="/submit" method="post">\n  <label for="email-input">Email:</label>\n  <input type="email" id="email-input" required>\n  <button type="submit">Send</button>\n</form>`,
    outputHtml: `<form style="display: flex; flex-direction: column; max-width: 300px; gap: 10px;" onsubmit="event.preventDefault(); alert('Demo form submitted!');">\n  <label for="demo-email" style="font-weight: 600;">Email:</label>\n  <input type="email" id="demo-email" required placeholder="user@example.com" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px;">\n  <button type="submit" style="padding: 10px; background: #2f69f4; color: white; border: none; border-radius: 4px; cursor: pointer;">Send Demo</button>\n</form>`,
    pitfall: "Failing to attach &lt;label&gt; to inputs via the 'for' attribute, ruining click areas and accessibility.",
    challenge: ["Build a secure login form containing an email, password, and a visual submit button."]
  },
  tables: {
    title: "Tables",
    why: "Tables are designed specifically for displaying structured tabular data, not for webpage layout.",
    keypoints: [
      "<strong>&lt;table&gt;</strong> is the main container.",
      "Use <strong>&lt;thead&gt;</strong>, <strong>&lt;tbody&gt;</strong>, and <strong>&lt;tfoot&gt;</strong> for semantic grouping.",
      "Rows are defined with <strong>&lt;tr&gt;</strong> (table row), head cells with <strong>&lt;th&gt;</strong>, data cells with <strong>&lt;td&gt;</strong>."
    ],
    code: `<table>\n  <thead>\n    <tr><th>Name</th><th>Age</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Alice</td><td>25</td></tr>\n  </tbody>\n</table>`,
    outputHtml: `<table style="width: 100%; max-width: 400px; border-collapse: collapse;">\n  <thead>\n    <tr style="background: #2f69f4; color: white;">\n      <th style="padding: 10px; border: 1px solid #ccc; text-align: left;">Name</th>\n      <th style="padding: 10px; border: 1px solid #ccc; text-align: left;">Age</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr style="background: #f8fafc;">\n      <td style="padding: 10px; border: 1px solid #ccc;">Alice</td>\n      <td style="padding: 10px; border: 1px solid #ccc;">25</td>\n    </tr>\n    <tr>\n      <td style="padding: 10px; border: 1px solid #ccc;">Bob</td>\n      <td style="padding: 10px; border: 1px solid #ccc;">28</td>\n    </tr>\n  </tbody>\n</table>`,
    pitfall: "Using tables to structure a whole page layout makes your site rigid, unresponsive, and awful for accessibility.",
    challenge: ["Create a 3x3 timetable with logical column and row headers."]
  },
  media: {
    title: "Media (Images, Audio, Video)",
    why: "Adding media creates engaging user experiences.",
    keypoints: [
      "<strong>&lt;img&gt;</strong> embeds an image. Always use the <strong>alt</strong> attribute.",
      "<strong>&lt;video&gt;</strong> and <strong>&lt;audio&gt;</strong> can play multimedia natively with the <strong>controls</strong> attribute."
    ],
    code: `<img src="logo.png" alt="Company Logo" width="200">\n\n<video controls width="100%">\n  <source src="movie.mp4" type="video/mp4">\n</video>`,
    outputHtml: `<div style="display: flex; gap: 20px; align-items: center; max-width: 100%; overflow: hidden;">\n  <img src="https://via.placeholder.com/150/2f69f4/FFFFFF?text=Placeholder+Image" alt="Placeholder Image Example" style="border-radius: 8px;">\n  <div style="flex:1;">\n    <p style="margin-bottom: 10px; font-weight: bold;">Audio Demo:</p>\n    <audio controls style="width: 100%; max-width: 300px;"><source src="#" type="audio/mpeg">Your browser does not support the audio element.</audio>\n  </div>\n</div>`,
    pitfall: "Omitting the 'alt' tag in an image. If the image fails to load, users see nothing, and visually impaired users miss context.",
    challenge: ["Embed an image that acts as a clickable link and scales down on smaller screens."]
  },
  iframes: {
    title: "Iframes",
    why: "Iframes let you embed another webpage (like YouTube videos, Google Maps) inside your own webpage seamlessly.",
    keypoints: [
      "<strong>&lt;iframe&gt;</strong> acts as a window to another document.",
      "The <strong>src</strong> attribute specifies the URL of the page you want to embed.",
      "Use <strong>allowfullscreen</strong> for media embeds like video players."
    ],
    code: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" \n  width="560" height="315" \n  title="YouTube video player" \n  frameborder="0" \n  allowfullscreen>\n</iframe>`,
    outputHtml: `<iframe width="100%" height="250" style="max-width: 450px; border-radius: 10px; border: none; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" src="https://www.youtube.com/embed/tgbNymZ7vqY" title="Demo YouTube iframe" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    pitfall: "Overusing iframes for layout components (like navigation menus). They should only be used to embed third-party content or entirely external widgets.",
    challenge: ["Embed an interactive Google Map pointing to a local landmark."]
  },
  selectors: {
    title: "CSS Selectors",
    why: "Selectors determine exactly which HTML elements you are styling. By mastering them, you avoid bulky and repetitive code.",
    keypoints: [
      "<strong>.class</strong> targets elements with a specific class.",
      "<strong>#id</strong> targets exactly one element.",
      "<strong>tag</strong> targets all specified elements (like p).",
      "<strong>element, element</strong> groups selectors."
    ],
    code: `/* Class Selector */\n.btn { text-align: center; }\n\n/* Descendant Selector */\nnav a { color: blue; }\n\n/* Hover State */\nbutton:hover { background: gray; }`,
    pitfall: "Overusing #ID selectors, which have extremely high specificity and override other rules unexpectedly.",
    challenge: ["Style alternate rows of a table using the :nth-child(even) pseudo-class selector."]
  },
  typography: {
    title: "Typography",
    why: "Text makes up 90% of most websites. Styling fonts properly improves readability, branding, and overall user experience.",
    keypoints: [
      "<strong>font-family:</strong> Defines the typeface (e.g., 'Arial, sans-serif').",
      "<strong>font-size:</strong> Adjusts the size of the text.",
      "<strong>font-weight:</strong> Controls boldness (e.g., 400 normal, 700 bold).",
      "<strong>line-height:</strong> Controls the vertical space between lines, drastically aiding reading."
    ],
    code: `p {\n  font-family: "Helvetica Neue", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n  letter-spacing: 0.5px;\n}`,
    outputHtml: `<div style="font-family: 'Times New Roman', Times, serif; color: #333; padding: 20px; background: #fafafa; border-radius: 8px;">\n  <h4 style="font-size: 24px; font-weight: 800; margin-bottom: 10px; letter-spacing: -0.5px;">Heavy Title</h4>\n  <p style="font-size: 16px; line-height: 1.8; font-weight: 400; color: #555;">This is a paragraph demonstrating <strong style="font-weight: 700;">good typography</strong>. The line-height is generous (1.8), creating comfortable reading space between lines. The font family is clear and highly legible.</p>\n  <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #888;">Small Uppercase Meta</span>\n</div>`,
    pitfall: "Using line-heights that are too tight (< 1.4) or fonts that are too small (< 16px), making paragraphs a chore to read.",
    challenge: ["Import a custom font from Google Fonts and apply it to all headings in your CSS."]
  },
  colors: {
    title: "Colors & Backgrounds",
    why: "Colors establish the visual hierarchy and emotional tone of your website.",
    keypoints: [
      "<strong>color:</strong> Sets the text color.",
      "<strong>background-color:</strong> Sets the background color of an element.",
      "<strong>Formats:</strong> Hex (#FF0000), RGB (rgb(255,0,0)), or named ('red').",
      "<strong>Gradients:</strong> CSS allows beautiful linear and radial backgrounds."
    ],
    code: `.card {\n  color: #334155;                           /* Slate text */\n  background-color: rgb(248, 250, 252);     /* Light background */\n}\n\n.hero {\n  background: linear-gradient(to right, #2f69f4, #60a5fa);\n  color: white;\n}`,
    outputHtml: `<div style="display: flex; gap: 15px; flex-wrap: wrap;">\n  <div style="padding: 20px; flex: 1; min-width: 150px; background-color: #2f69f4; color: white; border-radius: 8px; font-weight: bold; text-align: center;">Solid Color Background</div>\n  <div style="padding: 20px; flex: 1; min-width: 150px; background: linear-gradient(135deg, #f43f5e, #f97316); color: white; border-radius: 8px; font-weight: bold; text-align: center;">Linear Gradient Background</div>\n  <div style="padding: 20px; flex: 1; min-width: 150px; background-color: white; border: 2px solid #2f69f4; color: #2f69f4; border-radius: 8px; font-weight: bold; text-align: center;">Border Only</div>\n</div>`,
    pitfall: "Using poor contrast (like light gray text on a white background) which makes your site unreadable and fails accessibility standards.",
    challenge: ["Create a button that uses a dark blue background with white text, and a light blue border."]
  },
  boxmodel: {
    title: "Box Model",
    why: "Every element on a web page is a rectangular box. The Box Model dictates how margins, borders, padding, and content are sized.",
    keypoints: [
      "<strong>Content:</strong> The actual content area.",
      "<strong>Padding:</strong> Space immediately around the content, inside the border.",
      "<strong>Border:</strong> The edge surrounding the padding.",
      "<strong>Margin:</strong> Space outside the border separating it from other elements.",
      "Use <strong>box-sizing: border-box;</strong> to include padding and border in the total width/height."
    ],
    code: `* {\n  box-sizing: border-box;\n}\n\n.box {\n  width: 300px;\n  padding: 20px;   /* Inside space */\n  border: 2px solid black;\n  margin: 15px;    /* Outside space */\n}`,
    outputHtml: `<div style="background: #fbbf24; padding: 20px; font-size: 14px; display: inline-block;">\n  <strong style="display: block; text-align: center; color: #78350f; margin-bottom: 5px;">Margin (Orange)</strong>\n  <div style="background: #fcd34d; border: 4px solid #b45309; padding: 20px;">\n    <strong style="display: block; text-align: center; color: #78350f; margin-bottom: 5px;">Border (Brown outline) & Padding (Light Yellow)</strong>\n    <div style="background: white; padding: 20px; border: 1px dashed #ccc; text-align: center; font-weight: bold;">\n        Content Area\n    </div>\n  </div>\n</div>`,
    pitfall: "Not setting box-sizing: border-box. Without it, adding 10px of padding to a 100px wide element results in a 120px wide element.",
    challenge: ["Create two boxes side by side inside a container, perfectly maintaining 50% width despite borders and padding."]
  },
  flexbox: {
    title: "Flexbox Layouts",
    why: "Flexbox is a 1-dimensional layout model that makes it incredibly easy to align and distribute space among items in a container, even when their sizes are unknown.",
    keypoints: [
      "<strong>display: flex;</strong> turns an element into a flex container.",
      "<strong>justify-content:</strong> aligns items across the main axis (horizontal by default).",
      "<strong>align-items:</strong> aligns items along the cross axis.",
      "<strong>flex-direction:</strong> changes the main axis from row to column."
    ],
    code: `.container {\n  display: flex;\n  justify-content: center; /* Center horizontally */\n  align-items: center;     /* Center vertically */\n  gap: 20px;               /* Space between items */\n  height: 100vh;\n}`,
    outputHtml: `<div style="display: flex; justify-content: space-between; align-items: center; background: #e2e8f0; padding: 20px; border-radius: 8px;">\n  <div style="background: #2f69f4; color: white; padding: 10px 20px; font-weight: bold; border-radius: 4px;">Item 1</div>\n  <div style="background: #2f69f4; color: white; padding: 30px 20px; font-weight: bold; border-radius: 4px;">Item 2 (Taller)</div>\n  <div style="background: #2f69f4; color: white; padding: 10px 20px; font-weight: bold; border-radius: 4px;">Item 3</div>\n</div>\n<p style="margin-top: 10px; font-size: 14px; color: #64748b;">Notice how 'align-items: center' keeps them perfectly middle-aligned despite height variations, and 'justify-content: space-between' pushes them to the edges.</p>`,
    pitfall: "Using flexbox to build entire page grid layouts. Flexbox is better for 1-dimensional alignment (navbars, card internals). For 2D layouts, use CSS Grid.",
    challenge: ["Build a perfectly centered navigation bar where the logo is on the far left and the links are on the far right using space-between."]
  },
  grid: {
    title: "Grid Architecture",
    why: "CSS Grid is a 2-dimensional layout system perfectly suited for laying out entire pages and intricate, rigid structures.",
    keypoints: [
      "<strong>display: grid;</strong> turns an element into a grid container.",
      "<strong>grid-template-columns:</strong> defines the number and size of columns.",
      "<strong>fr unit:</strong> stands for 'fraction'. It represents a fraction of the available space.",
      "<strong>gap:</strong> creates space between rows and columns."
    ],
    code: `.grid-container {\n  display: grid;\n  /* 3 columns, middle one takes 2x space */\n  grid-template-columns: 1fr 2fr 1fr;\n  gap: 1.5rem;\n}\n\n.full-width {\n  grid-column: 1 / -1; /* Spans all columns */\n}`,
    outputHtml: `<div style="display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 10px; background: #f1f5f9; padding: 15px; border-radius: 8px;">\n  <div style="background: #10b981; color: white; padding: 20px; text-align: center; border-radius: 4px;">Col 1 (1fr)</div>\n  <div style="background: #3b82f6; color: white; padding: 20px; text-align: center; border-radius: 4px;">Col 2 (2fr - Double Width)</div>\n  <div style="background: #10b981; color: white; padding: 20px; text-align: center; border-radius: 4px;">Col 3 (1fr)</div>\n  <div style="grid-column: 1 / -1; background: #6366f1; color: white; padding: 20px; text-align: center; border-radius: 4px;">Full Width Span (grid-column: 1 / -1)</div>\n</div>`,
    pitfall: "Over-complicating a simple row layout with Grid when Flexbox would require less code.",
    challenge: ["Build a standard holy grail layout: full-width header and footer, a main content area, and 2 sidebars."]
  },
  position: {
    title: "Positioning",
    why: "The position property removes elements from the normal document flow or alters their position without affecting surrounding elements.",
    keypoints: [
      "<strong>relative:</strong> Positioned relative to its normal position.",
      "<strong>absolute:</strong> Positioned relative to the nearest positioned ancestor.",
      "<strong>fixed:</strong> Positioned relative to the viewport (screen) and doesn't move when scrolling.",
      "<strong>sticky:</strong> Toggles between relative and fixed depending on scroll position."
    ],
    code: `.parent {\n  position: relative;\n}\n\n.child {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.navbar {\n  position: sticky;\n  top: 0;\n}`,
    outputHtml: `<div style="position: relative; width: 100%; max-width: 400px; height: 150px; background: #e2e8f0; border: 2px dashed #94a3b8; border-radius: 8px;">\n  <div style="padding: 10px; color: #475569; font-weight: bold;">Parent (position: relative)</div>\n  <div style="position: absolute; bottom: -10px; right: -10px; background: #ef4444; color: white; padding: 10px 15px; font-weight: bold; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">\n    Child (position: absolute;<br>bottom: -10px;<br>right: -10px)\n  </div>\n</div>`,
    pitfall: "Applying absolute positioning to a child but forgetting to give the parent relative positioning, causing the child to bind to the page boundary.",
    challenge: ["Build a sticky header that anchors to the top of the browser as you scroll down."]
  },
  responsive: {
    title: "Responsive Design",
    why: "Your design must beautifully accommodate devices of all sizes natively, without requiring multiple codebases.",
    keypoints: [
      "Start with mobile-first logic (write mobile CSS by default).",
      "Use <strong>@media</strong> rules to apply specific styling for larger viewports.",
      "Prefer relative units like %, rem, or vw instead of static absolute units like px."
    ],
    code: `/* Default mobile style */\n.sidebar {\n  width: 100%;\n}\n\n/* Desktop style */\n@media (min-width: 900px) {\n  .sidebar {\n    width: 325px;\n  }\n}`,
    pitfall: "Writing desktop code first and trying to use media queries to squish it down for mobile. This creates messy, bloated CSS.",
    challenge: ["Create a 2-column sidebar layout that stacks into a single column underneath 768px screen width."]
  },
  transitions: {
    title: "Transitions",
    why: "CSS transitions provide a way to control animation speed when changing CSS properties, turning harsh instant changes into smooth, professional interactions.",
    keypoints: [
      "<strong>transition-property:</strong> The specific property to animate (e.g., background-color, transform).",
      "<strong>transition-duration:</strong> How long the transition takes (e.g., 0.3s).",
      "<strong>transition-timing-function:</strong> The speed curve (ease-in, linear, etc).",
      "Can usually be combined into a shorthand: <code>transition: all 0.3s ease;</code>."
    ],
    code: `.btn {\n  background-color: blue;\n  transition: background-color 0.4s ease, transform 0.2s;\n}\n\n.btn:hover {\n  background-color: darkblue;\n  transform: scale(1.05);\n}`,
    outputHtml: `<style>\n.demo-btn-trans { background: #2f69f4; color: white; border: none; padding: 15px 30px; font-size: 18px; border-radius: 8px; cursor: pointer; transition: background-color 0.4s ease, transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }\n.demo-btn-trans:hover { background: #1d4ed8; transform: translateY(-5px) scale(1.05); }\n</style>\n<button class="demo-btn-trans">Hover to Transition</button>`,
    pitfall: "Not declaring the properties you want to transition explicitly. Running <code>transition: all</code> can cause unintended sluggishness across the whole page.",
    challenge: ["Create an image that gently fades opacity and zooms in slightly when the user places their mouse over it."]
  },
  hover: {
    title: "Hover Effects",
    why: "Hover effects give users immediate visual feedback that an element is interactive.",
    keypoints: [
      "Triggered using the <strong>:hover</strong> pseudo-class.",
      "Primarily used on links and buttons to signify clickability.",
      "Works closely with the <code>transition</code> property."
    ],
    code: `.card {\n  background: #fff;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 20px rgba(0,0,0,0.1);\n}`,
    outputHtml: `<style>\n.demo-card-hover { width: 250px; padding: 20px; background: white; border: 1px solid #e2e8f0; border-radius: 12px; transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: pointer; }\n.demo-card-hover:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(0,0,0,0.1); border-color: #2f69f4; }\n</style>\n<div class="demo-card-hover">\n  <h4 style="margin:0 0 10px 0; color: #1e293b;">Interactive Card</h4>\n  <p style="margin:0; font-size:14px; color: #64748b;">Hover your mouse over me to see the lifting effect.</p>\n</div>`,
    pitfall: "Creating hover effects on mobile devices where 'hovering' isn't natively supported can lead to 'sticky' active states where the hover style gets stuck until users tap elsewhere.",
    challenge: ["Create a text link whose underline grows from center-outwards on hover."]
  },
  keyframes: {
    title: "Motion & Keyframes",
    why: "Animations and movement drastically improve the 'feel' capability of your UI and can draw user focus asynchronously.",
    keypoints: [
      "<strong>@keyframes</strong> dictates the rules and stages of the animation.",
      "<strong>animation-name:</strong> links the element to the @keyframes rule.",
      "<strong>animation-duration:</strong> duration of one animation cycle.",
      "<strong>animation-iteration-count:</strong> how many times it loops (e.g. infinite)."
    ],
    code: `@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n.loader {\n  animation: spin 1s linear infinite;\n}`,
    outputHtml: `<style>\n@keyframes demoSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }\n@keyframes demoPulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.2); opacity: 0.7; } }\n.spinner { width: 40px; height: 40px; border: 4px solid #e2e8f0; border-top-color: #2f69f4; border-radius: 50%; animation: demoSpin 1s linear infinite; display: inline-block; }\n.pulser { width: 40px; height: 40px; background: #ef4444; border-radius: 50%; animation: demoPulse 1.5s ease-in-out infinite; display: inline-block; margin-left: 30px; }\n</style>\n<div style="display:flex; align-items:center; padding: 20px; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 300px;">\n  <div class="spinner"></div>\n  <div class="pulser"></div>\n  <span style="margin-left: 20px; font-weight: bold; color: #64748b;">Live Animations</span>\n</div>`,
    pitfall: "Animating layout properties like 'width', 'height', or 'margin' triggers expensive browser repaints, causing lag. Always prefer animating 'transform' and 'opacity' where possible.",
    challenge: ["Create a loading spinner using @keyframes and the transform: rotate() property."]
  }
};

function loadTopic(key) {
  const item = topics[key];
  if (!item) {
    console.error("Topic not found:", key);
    return;
  }

  let codeBlock = '';
  if (item.code) {
      codeBlock = `
        <h3 class="section-heading">Example:</h3>
        <div class="code-block">
<pre><code>${item.code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
        </div>`;
  }

  let outputBlock = '';
  if (item.outputHtml) {
      outputBlock = `
        <h3 class="section-heading">Visual Output:</h3>
        <div class="output-preview" style="border: 2px solid #dbe1e8; border-radius: 12px; padding: 25px; background: #fff; margin-bottom: 28px;">
            ${item.outputHtml}
        </div>
      `;
  }

  const html = `
        <h1 class="lesson-title">${item.title}</h1>
        
        <div class="mentor-box">
            <strong>Mentor Strategy:</strong> ${item.why}
        </div>

        <h3 class="section-heading">Key Principles:</h3>
        <ul class="key-list">
            ${item.keypoints.map(kp => `<li>${kp}</li>`).join("")}
        </ul>

        ${outputBlock}
        ${codeBlock}

        <div class="challenge-box" style="border-left: 5px solid #ef4444; border-color: #ef4444; background: #fef2f2; margin-bottom: 20px;">
            <div class="challenge-title" style="color: #ef4444; font-size: 24px;"> Pitfall</div>
            <div class="challenge-text" style="margin-top: 5px;">${item.pitfall}</div>
        </div>

        <div class="challenge-box">
            <h4 class="challenge-title"> Checkpoint Challenge</h4>
            <ul class="key-list" style="margin: 5px 0 0 30px;">
                ${item.challenge.map(c => `<li class="challenge-text">${c}</li>`).join("")}
            </ul>
        </div>
    `;

  const lessonDiv = document.getElementById("lesson");
  if (lessonDiv) {
    lessonDiv.innerHTML = html;
  }

  document.querySelectorAll(".nav-item").forEach(i => i.classList.remove("active"));
  const activeBtn = document.querySelector(`.nav-item[data-topic="${key}"]`);
  if (activeBtn) activeBtn.classList.add("active");

  const main = document.querySelector(".content-area");
  if (main) main.scrollTop = 0;
}

document.querySelectorAll(".nav-item").forEach(button => {
    button.addEventListener("click", () => {
        const topic = button.getAttribute("data-topic");
        loadTopic(topic);
    });
});

window.addEventListener("load", () => {
  loadTopic("semantic");
});

// Mobile sidebar logic
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");

if (menuBtn && closeBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
        sidebar.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("open");
    });
}

const navItems = document.querySelectorAll(".nav-item");
navItems.forEach(item => {
    item.addEventListener("click", () => {
        if (window.innerWidth <= 900) {
            sidebar.classList.remove("open");
        }
    });
});
