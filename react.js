const topics = {
  intro: {
    title: "What is React?",
    why: "Before writing code, you need to understand what React actually is. React is a JavaScript library for building user interfaces using a component-based architecture.",
    keypoints: [
      "React is declarative: You describe WHAT the UI should look like, not HOW to change it.",
      "It uses a <strong>Virtual DOM</strong> to quickly calculate changes and update the real browser DOM efficiently.",
      "Everything is built using reusable <strong>Components</strong>.",
    ],
    code: `// A simple React component\nfunction HelloReact() {\n  return <h1>Hello, React World!</h1>;\n}`,
    outputHtml: `<div style="padding: 20px; background: #e0f2fe; border-radius: 8px; color: #0369a1; font-family: sans-serif; font-weight: bold; font-size: 24px;">Hello, React World!</div>`,
    pitfall:
      "Thinking React is a full framework like Angular. React only concerns itself with the UI (the 'View' in MVC). For routing and state management, you need additional tools.",
    challenge: [
      "Explain to a friend in one sentence why React uses a Virtual DOM instead of updating the real DOM directly.",
    ],
  },
  setup: {
    title: "Environment Setup",
    why: "You can't just drop React into a standard HTML file easily if you want modern features like JSX and module imports. You need a build tool.",
    keypoints: [
      "<strong>Vite</strong> is the modern standard for creating React applications quickly.",
      "Run <code>npm create vite@latest my-app --template react</code> to scaffold a new project.",
      "Node.js must be installed on your computer to use these build tools.",
    ],
    code: `# Terminal commands\nnpm create vite@latest my-react-app -- --template react\ncd my-react-app\nnpm install\nnpm run dev`,
    outputHtml: `<div style="background: #1e293b; color: #a5b4fc; padding: 15px; border-radius: 8px; font-family: monospace;">$ npm run dev<br><br>&nbsp;&nbsp;<span style="color:#4ade80">VITE v5.0.0</span>  ready in 250 ms<br><br>&nbsp;&nbsp;➜  Local:   <a href="#" style="color:#60a5fa">http://localhost:5173/</a><br>&nbsp;&nbsp;➜  Network: use --host to expose</div>`,
    pitfall:
      "Using the old 'Create React App' (CRA). It is officially deprecated by the React team. Always use Vite or a framework like Next.js.",
    challenge: [
      "Install Node.js on your machine if you haven't, and scaffold your first blank Vite + React project.",
    ],
  },
  jsx: {
    title: "JSX Syntax",
    why: "JSX is a syntax extension for JavaScript that looks like HTML. It makes writing UI structures intuitive while wielding the full power of JavaScript.",
    keypoints: [
      "JSX elements must be enclosed in an enclosing tag or a Fragment <strong>&lt;&gt;...&lt;/&gt;</strong>.",
      "JavaScript expressions inside JSX sit inside curly braces <strong>{}</strong>.",
      "Use <strong>className</strong> instead of 'class' since 'class' is a reserved JS word.",
    ],
    code: `const name = "Josh";\nconst element = (\n  <div className="greeting">\n    <h1>Hello, {name}!</h1>\n  </div>\n);`,
    outputHtml: `<div class="greeting" style="padding: 15px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block;">\n  <h1 style="margin: 0; color: #0f172a; font-size: 24px;">Hello, Josh!</h1>\n</div>`,
    pitfall:
      "Forgetting to wrap adjacent JSX elements in a parent tag or Fragment. React components can only return a single root element.",
    challenge: [
      "Render an h1 and a p tag inside a React Fragment, using a JS variable for the title.",
    ],
  },
  components: {
    title: "Components Architecture",
    why: "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.",
    keypoints: [
      "Components are just JavaScript functions that return JSX.",
      "Component names MUST start with a capital letter (e.g., <strong>&lt;Button /&gt;</strong>).",
      "They can be nested inside one another to form complex UIs.",
    ],
    code: `function WelcomeMessage() {\n  return <h2>Welcome to StudBridge!</h2>;\n}\n\nfunction App() {\n  return (\n    <div className="app-container">\n      <WelcomeMessage />\n      <WelcomeMessage />\n    </div>\n  );\n}`,
    outputHtml: `<div style="display: flex; flex-direction: column; gap: 10px; background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1;">\n  <h2 style="margin: 0; color: #2f69f4;">Welcome to StudBridge!</h2>\n  <h2 style="margin: 0; color: #2f69f4;">Welcome to StudBridge!</h2>\n</div>`,
    pitfall:
      "Starting a component name with a lowercase letter. React will treat it as a native HTML tag (like <div>) and it won't render your component.",
    challenge: [
      "Create a 'ProfileCard' component and render it 3 times within an 'App' component.",
    ],
  },
  props: {
    title: "Props & Data Flow",
    why: "Props allow you to pass data from a parent component down to a child component, making components highly reusable and dynamic.",
    keypoints: [
      "Props are read-only (immutable) inside the child component.",
      'They are passed similar to HTML attributes (e.g., <strong>name="Alice"</strong>).',
      "Inside the child function, they are accessed via the first argument object (typically destructured).",
    ],
    code: `function Greeting({ name, role }) {\n  return <p style={{ fontWeight: 'bold' }}>Hello {name}, you are a {role}.</p>;\n}\n\nfunction App() {\n  return (\n    <>\n      <Greeting name="Alice" role="Developer" />\n      <Greeting name="Bob" role="Designer" />\n    </>\n  );\n}`,
    outputHtml: `<div style="padding: 15px; background: white; border: 1px solid #e2e8f0; border-radius: 8px;">\n  <p style="font-weight: bold; margin-bottom: 8px; color: #334155;">Hello Alice, you are a Developer.</p>\n  <p style="font-weight: bold; margin-bottom: 0; color: #334155;">Hello Bob, you are a Designer.</p>\n</div>`,
    pitfall:
      "Trying to modify a prop inside a child component. If data needs to change, it must be state, not a Prop.",
    challenge: [
      "Create an 'Avatar' component that takes an 'imageUrl' and 'altText' as props and renders an image.",
    ],
  },
  state: {
    title: "State (useState)",
    why: "State is data that changes over time within a component. When state changes, React automatically re-renders the component to reflect the new data.",
    keypoints: [
      "Import the <strong>useState</strong> hook from 'react'.",
      "useState returns an array with two items: the current state value and a function to update it.",
      "Never mutate state directly (e.g., count = 1). Always use the setter (e.g., setCount(1)).",
    ],
    code: `import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <button \n      onClick={() => setCount(count + 1)}\n      className="btn"\n    >\n      Clicked {count} times\n    </button>\n  );\n}`,
    outputHtml: `<button style="background: #2f69f4; color: white; padding: 10px 20px; font-weight: bold; border: none; border-radius: 6px; cursor: pointer;" onclick="let btn = this; let count = parseInt(btn.innerText.match(/\\d+/)[0]); btn.innerText = 'Clicked ' + (count + 1) + ' times';">Clicked 0 times</button>`,
    pitfall:
      "Calling state setters directly inside the component body instead of inside an event handler or useEffect. This causes an infinite re-render loop.",
    challenge: [
      "Create a toggle component that changes a button's text between 'ON' and 'OFF' when clicked.",
    ],
  },
  events: {
    title: "Event Handling",
    why: "Event handling in React is similar to handling events on DOM elements, but with a few syntactic differences for safety and scoping.",
    keypoints: [
      "React events are written in camelCase (e.g., <strong>onClick</strong>, not onclick).",
      "You pass a function as the event handler, not a string.",
      "You cannot return false to prevent default behavior; you must call <strong>e.preventDefault()</strong> explicitly.",
    ],
    code: `function SubmitButton() {\n  function handleSubmit(event) {\n    event.preventDefault();\n    alert('Form submitted via React!');\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <button type="submit">Submit</button>\n    </form>\n  );\n}`,
    outputHtml: `<form onsubmit="event.preventDefault(); alert('Form submitted via React!');" style="padding: 15px; background: #f8fafc; display: inline-block; border-radius: 8px;">\n  <button type="submit" style="background: #10b981; color: white; padding: 8px 16px; border: none; border-radius: 4px; font-weight: 600; cursor: pointer;">Submit</button>\n</form>`,
    pitfall:
      "Executing the function when passing it (e.g., onClick={doSomething()}). This runs immediately on render. Use onClick={doSomething} instead.",
    challenge: [
      "Create an input field that console.logs its value every time a key is pressed (onChange).",
    ],
  },
  lists: {
    title: "Lists & Keys",
    why: "Rendering multiple components from an array of data is a core task in UI dev. React needs a way to track these dynamic elements.",
    keypoints: [
      "Use the native JavaScript <strong>map()</strong> function to render lists of items.",
      "Every list item mapped inside a loop MUST have a unique <strong>key</strong> prop.",
      "Keys help React identify which items have changed, been added, or been removed, optimizing re-renders.",
    ],
    code: `function FruitList() {\n  const fruits = ['Apple', 'Banana', 'Cherry'];\n\n  return (\n    <ul>\n      {fruits.map((fruit, index) => (\n        <li key={index}>{fruit}</li>\n      ))}\n    </ul>\n  );\n}`,
    outputHtml: `<ul style="list-style-type: square; background: #fff; padding: 20px 40px; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 300px;">\n  <li style="color: #ef4444; font-weight: 500;">Apple</li>\n  <li style="color: #eab308; font-weight: 500;">Banana</li>\n  <li style="color: #b91c1c; font-weight: 500;">Cherry</li>\n</ul>`,
    pitfall:
      "Using array indices as keys when the list logic can change (items added, removed, reordered). This can lead to bugs in component state. Prefer using unique IDs.",
    challenge: [
      "Map over an array of object data (e.g. users with id and name) and render a styled list.",
    ],
  },
  forms: {
    title: "Controlled Forms",
    why: "In React, form data is usually managed by the component's state, completely controlling what is displayed in the inputs.",
    keypoints: [
      "An input whose value is controlled by React is called a <strong>controlled component</strong>.",
      "Link the input's <strong>value</strong> prop to a state variable.",
      "Update that state variable inside the <strong>onChange</strong> handler.",
    ],
    code: `function ControlledInput() {\n  const [text, setText] = useState('');\n\n  return (\n    <div className="form-group">\n      <input \n        value={text} \n        onChange={(e) => setText(e.target.value)} \n        placeholder="Type here..."\n      />\n      <p>You typed: {text}</p>\n    </div>\n  );\n}`,
    outputHtml: `<div style="background: white; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px;">\n  <input type="text" placeholder="Type here..." style="padding: 10px; width: 100%; border: 2px solid #94a3b8; border-radius: 4px; box-sizing: border-box; margin-bottom: 10px;" oninput="document.getElementById('react-form-demo-out').innerText = this.value">\n  <p style="margin: 0; color: #475569; font-weight: 500;">You typed: <span id="react-form-demo-out" style="color: #2f69f4;"></span></p>\n</div>`,
    pitfall:
      "Setting input value={state} but forgetting the onChange handler. The input will become effectively read-only.",
    challenge: [
      "Build a form with an email and a password field, both tracked in state, that alerts the data on submit.",
    ],
  },
  conditional: {
    title: "Conditional Rendering",
    why: "UIs are dynamic. You often want to show different components or elements based on the state of your application (like a user being logged in).",
    keypoints: [
      "Use standard JavaScript logic like <strong>if</strong> statements, <strong>&&</strong> (logical AND), and <strong>? :</strong> (ternary operator) inside JSX.",
      "Ternary <code>condition ? <App/> : <Login/></code> is great for toggling.",
      "Logical AND <code>condition && <Message/></code> is perfect for showing something only if true.",
    ],
    code: `function UserPanel({ isLoggedIn }) {\n  return (\n    <div>\n      {isLoggedIn ? (\n        <LogoutButton />\n      ) : (\n        <LoginButton />\n      )}\n      \n      {isLoggedIn && <p>Welcome back, user!</p>}\n    </div>\n  );\n}`,
    outputHtml: `<div style="display: flex; gap: 15px; align-items: center; padding: 20px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0;">\n  <button style="background: #10b981; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-weight: bold;" onclick="let p = this.nextElementSibling; if(this.innerText==='Login') { this.innerText='Logout'; this.style.background='#ef4444'; p.style.display='block'; } else { this.innerText='Login'; this.style.background='#10b981'; p.style.display='none'; }">Login</button>\n  <p style="margin: 0; display: none; color: #0ea5e9; font-weight: 600;">Welcome back, user!</p>\n</div>`,
    pitfall:
      "Returning undefined or trying to render an object conditionally. React ignores null/undefined/booleans, but objects will crash it.",
    challenge: [
      "Create a 'Loading' state that shows a spinner if true, and the main content if false.",
    ],
  },
  effect: {
    title: "Effects (useEffect)",
    why: "useEffect lets you perform side effects in functional components, like data fetching, subscriptions, or manually changing the DOM.",
    keypoints: [
      "It takes two arguments: a setup function and an optional dependency array.",
      "If the dependency array is empty <strong>[]</strong>, the effect runs only once after the initial render (mounting).",
      "If dependencies change, the effect re-runs.",
      "You can return a cleanup function to run before the component unmounts.",
    ],
    code: `import { useState, useEffect } from 'react';\n\nfunction Timer() {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setSeconds(s => s + 1);\n    }, 1000);\n    \n    // Cleanup function\n    return () => clearInterval(interval);\n  }, []);\n\n  return <div className="timer">Timer: {seconds}s</div>;\n}`,
    outputHtml: `<div style="display: inline-block; padding: 15px 30px; background: #0f172a; color: #38bdf8; font-family: monospace; font-size: 20px; font-weight: bold; border-radius: 8px; border: 2px solid #1d4ed8;">Timer: <span id="react-effect-demo-out">5</span>s</div>\n<script>\n  if (!window.reactEffectDemoInterval) {\n    let s = 5;\n    window.reactEffectDemoInterval = setInterval(() => {\n      const el = document.getElementById('react-effect-demo-out');\n      if (el) { s++; el.innerText = s; }\n    }, 1000);\n  }\n</script>`,
    pitfall:
      "Omitting the dependency array entirely. This causes the effect to run after EVERY render, which can easily crash your app if it updates state.",
    challenge: [
      "Write a useEffect that fetches data from an API (e.g., dummy JSON) when the component first mounts.",
    ],
  },
  ref: {
    title: "Refs (useRef)",
    why: "Sometimes you need an escape hatch to directly manipulate a DOM element, or you need to keep a mutable variable around that doesn't trigger re-renders.",
    keypoints: [
      "<strong>useRef</strong> returns a mutable ref object with a <code>.current</code> property.",
      "Changing the <code>.current</code> value does not cause the component to re-render.",
      "Commonly used to programmatically grab focus, measure element sizes, or store intervals/timers.",
    ],
    code: `import { useRef } from 'react';\n\nfunction CustomInput() {\n  const inputRef = useRef(null);\n\n  const focusInput = () => {\n    inputRef.current.focus();\n  };\n\n  return (\n    <>\n      <input ref={inputRef} />\n      <button onClick={focusInput}>Focus Field</button>\n    </>\n  );\n}`,
    outputHtml: `<div style="display: flex; gap: 10px; background: white; padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1;">\n  <input id="ref-demo-input" type="text" placeholder="Click button to focus me..." style="padding: 8px; border-radius: 4px; border: 1px solid #94a3b8; flex: 1;">\n  <button style="background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-weight: bold;" onclick="document.getElementById('ref-demo-input').focus();">Focus</button>\n</div>`,
    pitfall:
      "Using refs in place of state for things that should update the UI. If a change should be seen by the user, use state instead.",
    challenge: [
      "Use useRef to track how many times a component renders without causing an infinite loop.",
    ],
  },
  context: {
    title: "Context API",
    why: "Context provides a way to pass data through the component tree without having to drag props down manually at every single level (prop drilling).",
    keypoints: [
      "Create context using <strong>createContext()</strong>.",
      "Wrap parent components in a <strong>&lt;Context.Provider value={...}&gt;</strong>.",
      "Consume context in deeply nested children using the <strong>useContext()</strong> hook.",
    ],
    code: `import { createContext, useContext, useState } from 'react';\n\nconst ThemeContext = createContext();\n\nfunction App() {\n  const [theme, setTheme] = useState('light');\n  return (\n    <ThemeContext.Provider value={theme}>\n      <ChildWidget />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction ChildWidget() {\n  const theme = useContext(ThemeContext);\n  return <p>The current theme is {theme}</p>;\n}`,
    outputHtml: `<div style="padding: 20px; background: #1e293b; color: #f8fafc; border-radius: 8px; border: 2px dashed #94a3b8;">\n  <h4 style="margin: 0 0 10px 0; color: #38bdf8;">Root App Provider Theme: Dark</h4>\n  <div style="background: #334155; padding: 15px; border-radius: 4px; border-left: 4px solid #38bdf8;">\n    <p style="margin: 0; font-family: monospace;">&lt;DeeplyNestedChild&gt; Theme Consumed: Dark</p>\n  </div>\n</div>`,
    pitfall:
      "Overusing Context for rapidly changing, localized state. Every time the context value changes, ALL consumers re-render, potentially harming performance.",
    challenge: [
      "Create an AuthContext and provide the logged-in user's name to a profile widget 4 levels deep.",
    ],
  },
  memo: {
    title: "Memoization (useMemo, useCallback)",
    why: "React is fast, but sometimes complex calculations or heavy re-renders slow things down. Memoization helps you cache results so you don't do the same work twice.",
    keypoints: [
      "<strong>useMemo</strong> caches the result of a calculation between renders.",
      "<strong>useCallback</strong> caches a function definition between renders.",
      "<strong>React.memo</strong> wraps a whole component to prevent it from re-rendering if its props have not changed.",
    ],
    code: `import { useMemo, useCallback } from 'react';\n\nfunction HeavyComponent({ items, onAction }) {\n  // Only recalculate when 'items' array actually changes reference\n  const total = useMemo(() => {\n    return items.reduce((a, b) => a + b, 0);\n  }, [items]);\n\n  // Prevent the child from re-rendering due to inline function creation\n  const performAction = useCallback(() => {\n    onAction(total);\n  }, [onAction, total]);\n\n  return <p>Total: {total}</p>;\n}`,
    outputHtml: `<div style="background: #fdf4ff; border: 1px solid #f0abfc; padding: 20px; border-radius: 8px;">\n  <p style="margin: 0; color: #a21caf; font-weight: 600;">🧠 Memoized Result: 145920</p>\n  <p style="margin: 5px 0 0 0; color: #c026d3; font-size: 14px;">Because inputs haven't changed, React skips recalculating this 10,000-item array!</p>\n</div>`,
    pitfall:
      "Premature optimization. Don't wrap everything in useMemo and useCallback. The overhead of checking the cache dependencies is sometimes more expensive than just re-running a fast calculation.",
    challenge: [
      "Wrap an intensive data-filtering function inside useMemo so it only filters when the search query changes.",
    ],
  },
  custom: {
    title: "Custom Hooks",
    why: "Hooks in React are just JavaScript functions. You can compose them together to extract state logic and share it across multiple components effortlessly.",
    keypoints: [
      "Custom hooks must always start with the word <strong>use</strong> (e.g. <code>useWindowSize</code>).",
      "They can call built-in hooks (like <code>useState</code> or <code>useEffect</code>).",
      "Their primary goal is to share logic, not the actual state data (each call gets an isolated state instance).",
    ],
    code: `import { useState, useEffect } from 'react';\n\n// Custom Hook\nfunction useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n\n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', handleResize);\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n\n  return width;\n}\n\n// In your component\nfunction App() {\n  const width = useWindowWidth();\n  return <p>Window is {width}px wide.</p>;\n}`,
    outputHtml: `<div style="text-align: center; padding: 20px; background: #f0fdfa; border: 1px solid #5eead4; border-radius: 8px; font-weight: bold; color: #0f766e; font-size: 18px;">\n  Width hook output: <span id="custom-hook-out"></span>px\n</div>\n<script>\n  document.getElementById('custom-hook-out').innerText = window.innerWidth;\n  window.addEventListener('resize', () => { \n    const el = document.getElementById('custom-hook-out'); \n    if(el) el.innerText = window.innerWidth; \n  });\n</script>`,
    pitfall:
      "Creating custom hooks that do not start with 'use'. React expects the naming convention internally to enforce hook rules.",
    challenge: [
      "Create a custom hook called useFetch that automatically handles a data fetch, loading state, and error handling given a URL.",
    ],
  },
  router: {
    title: "React Router",
    why: "React applications are usually SPAs (Single Page Applications). React Router allows you to create multiple virtual routes/pages without actually reloading the browser.",
    keypoints: [
      "Use <strong>BrowserRouter</strong> to wrap your app.",
      "Define paths using <strong>Routes</strong> and <strong>Route</strong> components.",
      "Use <strong>Link</strong> or <strong>NavLink</strong> instead of &lt;a&gt; tags to navigate without refreshing.",
    ],
    code: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <nav>\n        <Link to="/">Home</Link>\n        <Link to="/about">About</Link>\n      </nav>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about" element={<About />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}`,
    outputHtml: `<div style="border: 2px solid #94a3b8; border-radius: 8px; overflow: hidden;">\n  <div style="background: #1e293b; padding: 10px 20px; display: flex; gap: 15px;">\n    <span style="color: #60a5fa; text-decoration: underline; cursor: pointer;">Home 👈</span>\n    <span style="color: white; cursor: pointer;">About</span>\n    <span style="color: white; cursor: pointer;">Contact</span>\n  </div>\n  <div style="padding: 20px; background: white; height: 100px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; color: #334155;">\n    <p>🏠 Welcome to the Home Page</p>\n  </div>\n</div>`,
    pitfall:
      "Using standard anchor tags (<a href>) for internal navigation; this destroys local state and reloads the whole page frame.",
    challenge: [
      "Set up a 3-page app with Home, Profile, and Settings routes accessible via a top navbar.",
    ],
  },
  suspense: {
    title: "Suspense & Lazy Loading",
    why: "As apps grow large, sending heavy JS modules initially slows down initial load time. Suspense allows you to split the code and load chunks only when users need them.",
    keypoints: [
      "<strong>React.lazy</strong> lets you delay rendering a component until it is required.",
      "<strong>&lt;Suspense fallback={...}&gt;</strong> provides a loading UI while the chunk is being fetched.",
      "Vital for improving performance and bundle sizes.",
    ],
    code: `import { lazy, Suspense } from 'react';\n\n// Loads this component only when rendered\nconst HeavyDashboard = lazy(() => import('./HeavyDashboard.js'));\n\nfunction App() {\n  return (\n    <div>\n      <h2>Welcome Home</h2>\n      <Suspense fallback={<p>Loading Dashboard assets...</p>}>\n        <HeavyDashboard />\n      </Suspense>\n    </div>\n  );\n}`,
    outputHtml: `<div style="padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #faf5ff; border: 1px dashed #d8b4fe; border-radius: 8px; min-height: 120px;">\n  <div style="width: 30px; height: 30px; border: 4px solid #f3e8ff; border-top-color: #a855f7; border-radius: 50%; display: inline-block; animation: demoSpin 1s linear infinite;"></div>\n  <p style="margin-top: 15px; color: #7e22ce; font-weight: 500;">Loading Heavy Component...</p>\n</div>`,
    pitfall:
      "Forgetting to wrap the lazy loaded component inside a Suspense block. React will throw an error immediately if there's no fallback UI.",
    challenge: [
      "Implement lazy loading on the main routes in a React Router setup.",
    ],
  },
  portals: {
    title: "Portals",
    why: "Portals provide an escape hatch allowing you to render a component outside of the parent's HTML DOM hierarchy while still maintaining its React context tree. Crucial for Modals and Tooltips.",
    keypoints: [
      "Use <strong>createPortal(child, container)</strong> from 'react-dom'.",
      "The component behaves exactly as expected in React (props, context, events), but outputs the physical HTML into a completely different node (like document.body).",
      "Fixes issues with z-index, clipping, and overflow hidden from parents.",
    ],
    code: `import { createPortal } from 'react-dom';\n\nfunction Modal({ children, isOpen }) {\n  if (!isOpen) return null;\n\n  // Render directly on body, breaking out of the react root\n  return createPortal(\n    <div className="modal-backdrop">\n      <div className="modal-content">\n        {children}\n      </div>\n    </div>,\n    document.body\n  );\n}`,
    outputHtml: `<div style="position: relative; padding: 20px; background: white; border: 1px solid #cbd5e1; border-radius: 8px; height: 150px; overflow: hidden;">\n  <p style="color: #64748b;">(Parent container with hidden overflow)</p>\n  <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center;">\n    <div style="background: white; padding: 15px 30px; border-radius: 8px; font-weight: bold; color: #4338ca; border: 2px solid #818cf8; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">I escaped the hierarchy via Portal! 🚪</div>\n  </div>\n</div>`,
    pitfall:
      "Creating portaled event listeners and assuming they don't bubble up. Surprisingly, events originating in a portal *do* bubble up to their exact React ancestors, even if physical DOM parents aren't ancestors.",
    challenge: [
      "Build a tooltip component that appears physically adjacent to an element via a portal, preventing overflow cutoff.",
    ],
  },
  redux: {
    title: "Redux Toolkit",
    why: "When global state becomes highly complex and interacts across many wildly different components, Redux provides strict centralized state architecture.",
    keypoints: [
      "A global <strong>Store</strong> holds the entire state tree.",
      "<strong>Slices</strong> contain state, reducers to update that state, and actions.",
      "Use <strong>useSelector</strong> to read data and <strong>useDispatch</strong> to trigger changes.",
    ],
    code: `import { createSlice, configureStore } from '@reduxjs/toolkit';\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    increment: state => { state.value += 1; }\n  }\n});\n\nexport const store = configureStore({\n  reducer: { counter: counterSlice.reducer }\n});`,
    outputHtml: `<div style="display: flex; gap: 20px; background: #e0e7ff; padding: 20px; border-radius: 8px; border: 1px solid #a5b4fc;">\n  <div style="flex: 1; padding: 15px; background: white; border-radius: 8px; text-align: center; border: 2px dashed #6366f1;">\n    <h4 style="margin: 0 0 10px 0; color: #4338ca;">Global Store</h4>\n    <p style="font-weight: 800; font-size: 24px; color: #312e81; margin: 0;">State: 42</p>\n  </div>\n  <div style="flex: 1; padding: 15px; background: white; border-radius: 8px; border: 2px dashed #6366f1; display: flex; align-items:center; justify-content:center;">\n    <button style="background: #4f46e5; color: white; border: none; padding: 10px 20px; font-weight: bold; border-radius: 6px; cursor: pointer;">Dispatch Action 🚀</button>\n  </div>\n</div>`,
    pitfall:
      "Using Redux for EVERYTHING. Small local data like form inputs or toggle menus should stay in useState inside the component.",
    challenge: [
      "Set up a simple Redux slice to manage an e-commerce shopping cart array.",
    ],
  },
  query: {
    title: "React Query",
    why: "Fetching data with useEffect causes lots of boilerplate (loading states, error handling, caching). React Query automates asynchronous server state management.",
    keypoints: [
      "Provides the <strong>useQuery</strong> hook.",
      "Automatically handles loading states (isLoading) and error states (isError).",
      "Handles caching, background fetching, and stale data out-of-the-box.",
    ],
    code: `import { useQuery } from '@tanstack/react-query';\n\nfunction Profile() {\n  const { data, isLoading } = useQuery({\n    queryKey: ['user'], \n    queryFn: fetchUser \n  });\n\n  if (isLoading) return <p>Loading data from server...</p>;\n  return <h2>Hello, {data.name}!</h2>;\n}`,
    outputHtml: `<div style="padding: 20px; background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; display: flex; align-items: center; justify-content: space-between;">\n  <div>\n    <p style="margin: 0; color: #ca8a04; font-weight: bold;">Network Request: Caching...</p>\n    <p style="margin: 5px 0 0 0; color: #92400e; font-size: 14px;">Next time this component loads, the data serves instantly from cache while refetching silently.</p>\n  </div>\n  <div style="padding: 5px 15px; background: #ca8a04; color: white; border-radius: 20px; font-weight: 600; font-size: 12px;">✅ Fresh</div>\n</div>`,
    pitfall:
      "Assuming React Query manages local UI state. It is strictly for asynchronous server interaction state. Keep UI state inside useState/Zustand.",
    challenge: [
      "Replace a standard useEffect data fetch with standard useQuery hooks.",
    ],
  },
};

function loadTopic(key) {
  const item = topics[key];
  if (!item) {
    console.error("Topic not found:", key);
    return;
  }

  let codeBlock = "";
  if (item.code) {
    codeBlock = `
        <h3 class="section-heading">Example:</h3>
        <div class="code-block">
<pre><code>${item.code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
        </div>`;
  }

  let outputBlock = "";
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
            ${item.keypoints.map((kp) => `<li>${kp}</li>`).join("")}
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
                ${item.challenge.map((c) => `<li class="challenge-text">${c}</li>`).join("")}
            </ul>
        </div>
    `;

  const lessonDiv = document.getElementById("lesson");
  if (lessonDiv) {
    lessonDiv.innerHTML = html;
  }

  document
    .querySelectorAll(".nav-item")
    .forEach((i) => i.classList.remove("active"));
  const activeBtn = document.querySelector(`.nav-item[data-topic="${key}"]`);
  if (activeBtn) activeBtn.classList.add("active");

  const main = document.querySelector(".content-area");
  if (main) main.scrollTop = 0;
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    const topic = button.getAttribute("data-topic");
    loadTopic(topic);
  });
});

window.addEventListener("load", () => {
  loadTopic("intro");
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
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      sidebar.classList.remove("open");
    }
  });
});
