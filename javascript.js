const topics = {
  intro: {
    title: "What is JavaScript?",
    why: "JavaScript is the programming language of the Web. It is used to add interactivity, handle complex logic, and build dynamic applications inside the browser and beyond.",
    keypoints: [
      "JavaScript runs in the browser, making your HTML/CSS come to life.",
      "It's a high-level, interpreted, and multi-paradigm language.",
      "JS can also run on servers using environments like Node.js.",
    ],
    code: `// Your first JavaScript code
console.log("Hello, World!");\n
// An interactive script
// alert("Welcome to JavaScript!");`,
    outputHtml: `<div style="padding: 15px; border-left: 5px solid #f7df1e; background: #fffcf0;">
      <button onclick="alert('Welcome to JavaScript!')" style="padding: 10px 15px; background: #212529; color: #fff; border:none; border-radius: 5px; cursor: pointer; font-family: monospace;">Run JS Alert</button>
    </div>`,
    pitfall:
      "Confusing JavaScript with Java. They are completely different languages with different use cases.",
    challenge: [
      "Open your browser's Developer Tools (F12) and type console.log('I am a JavaScripter!') into the Console tab.",
    ],
  },
  variables: {
    title: "Variables (let, const)",
    why: "Variables allow you to store and manipulate data. You label data with a name so you can retrieve it or change it later.",
    keypoints: [
      "<code>let</code> is used for variables whose values might change.",
      "<code>const</code> is used for values that should never be reassigned.",
      "Avoid using <code>var</code>, it is old and has confusing scoping rules.",
    ],
    code: `const playerName = "StudBridge";
let score = 0;

// Changing a 'let' variable is fine
score = score + 10;

// playerName = "Alex"; -> Error: Assignment to constant variable!`,
    outputHtml: `<div style="background: #2a2a2a; color: #a9dc76; padding: 20px; font-family: monospace; border-radius: 8px;">
      > const playerName = "StudBridge";<br>
      > let score = 0;<br>
      > score += 10;<br>
      <span style="color: #fff;">10</span>
    </div>`,
    pitfall:
      "Using const for objects or arrays and thinking their contents can't change. Const only protects the assignment, not the inner properties (mutability).",
    challenge: [
      "Create a const holding your birth year, and a let holding your current age. Reassign your age variable to simulate having a birthday.",
    ],
  },
  datatypes: {
    title: "Data Types",
    why: "Understanding the types of data JS recognizes ensures you don't get weird results when mixing them (like trying to add text and numbers together).",
    keypoints: [
      "Primitives: String, Number, Boolean, Null, Undefined, Symbol, BigInt.",
      "Non-Primitives: Objects (including Arrays and Functions).",
      "JavaScript is loosely typed, meaning a variable can hold any type of data.",
    ],
    code: `const name = "Alice";      // String
const age = 25;            // Number
const isLoggenIn = true;   // Boolean
const car = null;          // Null
let job;                   // Undefined`,
    outputHtml: `<div style="border: 1px solid #ccc; padding: 15px; border-radius: 5px;">
      <strong>typeof 25:</strong> <span style="background:#eee; padding:2px 5px; border-radius:3px; font-family:monospace; color:#d14;">"number"</span><br><br>
      <strong>typeof "StudBridge":</strong> <span style="background:#eee; padding:2px 5px; border-radius:3px; font-family:monospace; color:#d14;">"string"</span>
    </div>`,
    pitfall:
      "Running 'typeof null' returns 'object'. This is a known bug in JavaScript from its earliest days!",
    challenge: [
      "Use console.log to print out the typeof a true/false value and observe the result.",
    ],
  },
  conditionals: {
    title: "If/Else & Switch",
    why: "Conditionals allow your program to make decisions. Execution follows different paths based on whether a condition is true or false.",
    keypoints: [
      "<code>if (condition) { ... }</code> runs code if true.",
      "<code>else if</code> and <code>else</code> handle alternative outcomes.",
      "<code>switch</code> is great for matching a single value against many possibilities.",
      "Use <code>===</code> for strictly equal, <code>!==</code> for strictly not equal.",
    ],
    code: `const weather = "raining";

if (weather === "sunny") {
  console.log("Wear sunglasses");
} else if (weather === "raining") {
  console.log("Take an umbrella");
} else {
  console.log("Just go out!");
}`,
    outputHtml: `<div style="background: #eef2ff; padding: 15px; border-radius: 8px;">
      <select id="weather-select" style="padding: 5px;" onchange="
        const val = this.value;
        const msg = val === 'sunny' ? 'Wear sunglasses 🕶️' : val === 'raining' ? 'Take an umbrella ☔' : 'Just go out! 🚶‍♂️';
        document.getElementById('weather-out').innerText = msg;
      ">
        <option value="raining">Raining</option>
        <option value="sunny">Sunny</option>
        <option value="cloudy">Cloudy</option>
      </select>
      <p style="margin-top: 10px; font-weight: bold;" id="weather-out">Take an umbrella ☔</p>
    </div>`,
    pitfall:
      "Using double equals (==) instead of triple equals (===). Double equals does type coercion (so '0' == 0 is true), which causes nasty bugs.",
    challenge: [
      "Write an if statement that checks if a user age is >= 18 to determine if they can enter a website.",
    ],
  },
  loops: {
    title: "Loops (for, while)",
    why: "Computers are great at repetitive tasks. Loops allow you to run the same block of code multiple times, usually updating a variable until a condition is met.",
    keypoints: [
      "<code>for</code> loops are best when you know exactly how many times to loop.",
      "<code>while</code> loops are best when looping until a condition becomes false.",
      "Be careful to avoid infinite loops, which will crash your browser!",
    ],
    code: `// A standard for loop (Initialization; Condition; Update)
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}

// A while loop
let hp = 3;
while (hp > 0) {
  console.log("Playing...");
  hp--; // Decrease HP
}`,
    outputHtml: `<div style="padding: 10px; border: 1px dashed #666; background: #fff;">
      <div id="loop-out" style="font-family: monospace;"></div>
      <script>
        let result = '';
        for(let i = 1; i <= 5; i++) result += 'Loop iteration ' + i + '<br>';
        document.getElementById('loop-out').innerHTML = result;
      </script>
    </div>`,
    pitfall:
      "Forgetting to update the loop condition variable (like forgetting i++ or hp--). This leads directly to an infinite loop.",
    challenge: [
      "Create a for loop that counts backwards from 10 down to 1, then console logs 'BLASTOFF!'.",
    ],
  },
  functions: {
    title: "Basic Functions",
    why: "Functions are reusable blocks of code. You define them once, and you can 'call' or 'invoke' them many times with different inputs (arguments).",
    keypoints: [
      "Use the <code>function</code> keyword to declare one.",
      "Functions can accept <b>parameters</b> to work with dynamic data.",
      "Functions should use the <code>return</code> keyword to output a value back to where it was called.",
    ],
    code: `function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

// Calling the function
const total = multiply(5, 4);
console.log(total); // Shows 20`,
    outputHtml: `<div style="padding: 15px; border-radius: 8px; background: #fdfdfd; border: 1px solid #eadcae;">
      <input type="number" id="fn-n1" value="5" style="width: 50px;"> × 
      <input type="number" id="fn-n2" value="4" style="width: 50px;"> 
      <button onclick="document.getElementById('fn-res').innerText = document.getElementById('fn-n1').value * document.getElementById('fn-n2').value" style="margin-left: 10px;">Multiply</button>
      <div style="margin-top: 10px; font-weight: bold; font-size: 20px;">Result: <span id="fn-res">20</span></div>
    </div>`,
    pitfall:
      "Not using the 'return' statement. If a function doesn't return a value, it returns 'undefined' by default.",
    challenge: [
      "Write a function generateGreeting(name) that returns a string like 'Welcome to StudBridge, [name]!'.",
    ],
  },
  arrow: {
    title: "Arrow Functions",
    why: "Arrow functions provide a more concise syntax for writing function expressions. They are heavily used in modern JS (React, Node, etc.).",
    keypoints: [
      "Written using the fat arrow <code>=></code> syntax.",
      "Implicit returns: If you omit the curly braces {}, it automatically returns the one-line expression.",
      "They DO NOT have their own 'this' context (very important in object-oriented execution).",
    ],
    code: `// Standard function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function equivalent
const addArrow = (a, b) => {
  return a + b;
};

// One-liner (implicit return)
const multiplyArrow = (a, b) => a * b;`,
    outputHtml: `<div style="background: #282c34; padding: 20px; color: #abb2bf; font-family: monospace; border-radius: 8px;">
      <span style="color: #c678dd;">const</span> <span style="color: #61afef;">greet</span> = name => <span style="color: #98c379;">\`Hi \${name}!\`</span>;<br><br>
      greet(<span style="color: #98c379;">"Coder"</span>); <span style="color: #5c6370;">// "Hi Coder!"</span>
    </div>`,
    pitfall:
      "Trying to use object methods with arrow functions. An arrow function won't bind 'this' to the object it's inside of.",
    challenge: [
      "Convert a standard function calculating the area of a circle (PI * r * r) into a one-liner arrow function.",
    ],
  },
  closures: {
    title: "Closures",
    why: "A closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created.",
    keypoints: [
      "Inner functions remember the variables defined in their parent blocks.",
      "Used heavily to create 'private' variables or functions that persist state across executions.",
      "Essential for currying and maintaining data encapsulation.",
    ],
    code: `function createCounter() {
  let count = 0; // private variable
  
  return function() {
    count++; // It remembers 'count'
    return count;
  };
}

const myCounter = createCounter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3`,
    outputHtml: `<div style="padding: 15px; background: #fafafa; border: 2px solid #ccc; border-radius: 8px; text-align: center;">
      <div style="font-size: 24px; font-weight: bold; margin-bottom: 10px;" id="closure-out">0</div>
      <button onclick="
        if(!window.closureDemoCounter) window.closureDemoCounter = 0;
        window.closureDemoCounter++;
        document.getElementById('closure-out').innerText = window.closureDemoCounter;
      " style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Increment Closure State</button>
    </div>`,
    pitfall:
      "Memory leaks. Because closures keep parent scopes alive in memory, keeping massive arrays or data inside a closure unnecessarily can bloat RAM.",
    challenge: [
      "Create a greeter maker: It takes a language ('en', 'es') and returns a function that takes a name and greets them in that language.",
    ],
  },
  arrays: {
    title: "Arrays & array Methods",
    why: "Sometimes you need to store vast lists of information (like a list of users, or items in a shopping cart). Arrays, and their heavy-hitting methods, make working with lists a breeze.",
    keypoints: [
      "Defined with square brackets <code>[]</code>, indexed starting at 0.",
      "Mutating methods: <code>push()</code>, <code>pop()</code>, <code>splice()</code> changes the original array.",
      "Functional Iteration: <code>map()</code>, <code>filter()</code>, <code>reduce()</code> return NEW arrays based on your logic.",
    ],
    code: `const numbers = [1, 2, 3, 4, 5];

// Map processes each item and returns a new list
const doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

// Filter returns only items that pass the truth test
const evens = numbers.filter(num => num % 2 === 0);
// [2, 4]`,
    outputHtml: `<div style="background: #e6f7ff; padding: 15px; border-radius: 5px;">
      <strong>Original Array:</strong> [10, 15, 20, 25]<br>
      <strong>.map(x => x * 10):</strong> <span style="color: #0050b3; font-weight: bold;">[100, 150, 200, 250]</span>
    </div>`,
    pitfall:
      "Using .map() when you don't even need the returned array, just to loop through items (use .forEach() for that).",
    challenge: [
      "Given an array of strings, use .filter() to return a new array containing only strings that are longer than 5 characters.",
    ],
  },
  objects: {
    title: "Objects & The 'This' Keyword",
    why: "Objects group related data (properties) and actions (methods) together exactly how they exist in the real world.",
    keypoints: [
      "Use curly braces <code>{}</code> with key/value pairs.",
      "Access properties using dot notation: <code>user.name</code>, or bracket notation: <code>user['name']</code>.",
      "The <code>this</code> keyword inside an object method refers specifically to that object.",
    ],
    code: `const user = {
  name: "Sarah",
  age: 28,
  greet() {
    // 'this' refers to 'user' object
    console.log("Hello, I am " + this.name);
  }
};

user.greet(); // Logs "Hello, I am Sarah"
user.age = 29; // update property`,
    outputHtml: `<div style="display: flex; gap: 20px; align-items: center; padding: 20px; background: white; border: 1px solid #ccc; border-radius: 8px;">
      <div>
        <strong>User Object State:</strong><pre style="background: #eee; padding: 10px; border-radius: 4px;">{
  name: "Sarah",
  role: "Admin"
}</pre>
      </div>
      <div>
        <button onclick="alert('System Notice: Access Granted for Admin Sarah')" style="padding: 10px; background: #28a745; color: white; border: none; cursor:pointer;">Authenticate Access via Object Method</button>
      </div>
    </div>`,
    pitfall:
      "Using arrow functions for object methods. Arrow functions capture 'this' from the outer scope, so 'this.name' inside an arrow object method usually evaluates to undefined.",
    challenge: [
      "Create a 'car' object with properties for make, model, speed, and a method 'drive' that logs out a driving sequence.",
    ],
  },
  destructuring: {
    title: "Destructuring & Spread",
    why: "Extracting properties from objects and arrays is tedious. Destructuring gives a beautiful, clean shorthand to pull data out or spread it into new copies.",
    keypoints: [
      "Array Destructuring: <code>const [first, second] = arr;</code>",
      "Object Destructuring: <code>const { name, age } = user;</code>",
      "Spread Syntax (<code>...</code>) unpacks items into a new array or object.",
    ],
    code: `const profile = { username: "Neela", level: 55 };
// Object Destructuring
const { username, level } = profile; 
console.log(username); // "Neela"

// Spread Operator to merge arrays
const groupA = [1, 2];
const groupB = [3, 4];
const combined = [...groupA, ...groupB]; // [1, 2, 3, 4]`,
    outputHtml: `<div style="background: #fdf5ff; padding: 20px; border: 1px solid #eedcff; color: #4b0082; font-family: monospace; border-radius: 8px;">
      const array1 = [🍎, 🍌];<br>
      const array2 = [🍇, 🍓];<br>
      const final = [...array1, ...array2];<br><br>
      <span style="background: white; padding: 5px; font-weight: bold; border-radius: 4px;">Result = [🍎, 🍌, 🍇, 🍓]</span>
    </div>`,
    pitfall:
      "Thinking the spread operator does a 'deep copy'. It only does a shallow copy. If your object contains nested objects, their references are copied, not the values.",
    challenge: [
      "Create an object with 5 properties. Use destructuring to extract only 2 of those properties into standalone variables.",
    ],
  },
  dom: {
    title: "DOM Selection",
    why: "The Document Object Model (DOM) is JS's representation of your HTML. To change the HTML on the fly, you must first 'select' the element you want.",
    keypoints: [
      "<code>document.getElementById('id')</code> selects a single element by its ID.",
      "<code>document.querySelector('.class')</code> selects the FIRST element matching a CSS selector.",
      "<code>document.querySelectorAll('div')</code> selects ALL matching elements into a NodeList.",
    ],
    code: `// Get the header element
const header = document.querySelector('header');

// Get all buttons on the page
const buttons = document.querySelectorAll('button');

// Get an element by a specific ID
const myBox = document.getElementById('lesson');`,
    outputHtml: `<div style="padding: 20px; background: white; border: 2px solid #000; display:flex; align-items:center; justify-content:space-between;">
      <h2 id="dom-demo-target">Target Element</h2>
      <button onclick="
        const t = document.getElementById('dom-demo-target');
        t.style.color = t.style.color === 'red' ? '#000' : 'red';
      " style="padding: 8px; border: 1px solid #000; cursor:pointer; background:#eee;">Toggle Target Color via JS</button>
    </div>`,
    pitfall:
      "Trying to index into the result of querySelector as if it were an array. querySelector only returns ONE element. Use querySelectorAll for a list.",
    challenge: [
      "Use JavaScript in the console to select the H1 tag of this very page and change its text to 'I hacked this!'.",
    ],
  },
  manipulation: {
    title: "DOM Manipulation",
    why: "Once you've selected an HTML element, changing its text, adding CSS classes, or even injecting brand new elements enables vast dynamic websites.",
    keypoints: [
      "<code>element.innerText</code> or <code>innerHTML</code> changes the text content.",
      "<code>element.classList.add/remove</code> modifies CSS classes.",
      "<code>document.createElement('div')</code> lets you build a brand new element from zero.",
    ],
    code: `const title = document.querySelector('h1');
title.innerText = "Updated via JS!";
title.classList.add('highlight-red');

// Creating an element dynamically
const newPara = document.createElement('p');
newPara.innerText = "I was born in JS.";
document.body.appendChild(newPara);`,
    outputHtml: `<div style="padding: 20px; background: #fafafa; border: 1px dashed #999;" id="manipulation-zone">
      <button onclick="
        const newEl = document.createElement('span');
        newEl.innerText = '📦 New Box ';
        newEl.style.padding = '5px';
        newEl.style.background = '#e2e8f0';
        newEl.style.marginRight = '5px';
        document.getElementById('manipulation-zone').appendChild(newEl);
      " style="padding: 10px; background: #6366f1; color: white; border: none; border-radius: 5px; cursor: pointer; margin-bottom: 10px;">document.createElement('span')</button>
    </div>`,
    pitfall:
      "Exposing your site to Cross-Site Scripting (XSS) by using innerHTML to render directly input from an untrusted user. Use innerText instead when setting plain text.",
    challenge: [
      "Write JS logic to create a brand new <li> tag, add text to it, and append it to an existing <ul>.",
    ],
  },
  events: {
    title: "Event Listeners",
    why: "Events represent user acts like clicking, typing, scrolling, or hovering. Event listeners execute your JS functions exactly when these acts occur.",
    keypoints: [
      "<code>addEventListener('click', function)</code> hooks up a reaction to an action.",
      "The 'event' object (often called `e`) gets passed to your function containing huge amounts of data about the event.",
      "<code>e.preventDefault()</code> stops default browser behaviors (like a form submitting and refreshing the page).",
    ],
    code: `const submitBtn = document.querySelector('#btn');

submitBtn.addEventListener('click', (event) => {
  // 'event' holds info about the user's click
  console.log("Button clicked at coordinates:", event.clientX, event.clientY);
  
  alert('Form Submitted successfully!');
});`,
    outputHtml: `<div style="height: 150px; background: #ffeded; border: 2px solid #ff4d4f; border-radius: 8px; display: flex; align-items: center; justify-content: center; position: relative; cursor: crosshair;" onmousemove="
      const el = document.getElementById('mouse-tracker-coords');
      if(el) el.innerText = 'X: ' + event.offsetX + ' | Y: ' + event.offsetY;
    ">
      <h3 style="color: #ff4d4f; margin:0;" id="mouse-tracker-coords">Hover your mouse here!</h3>
    </div>`,
    pitfall:
      "Adding event listeners inside massive loops unnecessarily. Research 'Event Delegation' to learn how to place a single listener on a parent container to manage thousands of child clicks.",
    challenge: [
      "Place an event listener on an input field that listens to 'keyup' and logs the typed key to the console in real-time.",
    ],
  },
  callbacks: {
    title: "Async Callbacks",
    why: "JS is entirely single-threaded (it can only do one thing at a time). When waiting for heavy tasks (timers, server requests) we provide 'callback functions' that the browser will run whenever that task finishes.",
    keypoints: [
      "A callback is just a function passed as an argument to ANOTHER function.",
      "<code>setTimeout(func, 1000)</code> is a classic callback executor.",
      "Heavy nesting of callbacks leads to 'Callback Hell' (Pyramid of Doom), making code totally unreadable.",
    ],
    code: `console.log("Start");

// The browser sets a timer, and immediately moves to the next JS line!
setTimeout(() => {
  // This is the callback
  console.log("This logs 2 seconds later...");
}, 2000);

console.log("End");
// Output order: "Start" -> "End" -> "This logs 2 seconds later..."`,
    outputHtml: `<div style="background:#111; color: #fff; padding:20px; font-family: monospace; border-radius:5px;">
      <button onclick="
        const out = document.getElementById('cb-time');
        out.innerHTML += '&gt; Timer started<br>';
        setTimeout(() => { out.innerHTML += '&gt; Callback invoked!<br>' }, 1500)
      " style="padding: 5px 10px; cursor: pointer; color: black;">Start Callback Test</button>
      <div id="cb-time" style="margin-top: 15px; color: #00ff00;"></div>
    </div>`,
    pitfall:
      "Assuming async functions halt program execution. JS will immediately blast past a setTimeout and execute the next synchronized line of code.",
    challenge: [
      "Use setTimeout to write a script that updates an HTML element progressively over 3 seconds: 'Ready...' -> 'Set...' -> 'Go!'",
    ],
  },
  promises: {
    title: "Promises",
    why: "Promises were JS's solution to 'Callback Hell'. A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.",
    keypoints: [
      "A Promise is in one of three states: <code>Pending</code>, <code>Fulfilled</code>, or <code>Rejected</code>.",
      "Use <code>.then()</code> to handle a resolved Promise.",
      "Use <code>.catch()</code> to gracefully handle a rejection or error.",
    ],
    code: `const checkServer = new Promise((resolve, reject) => {
  let isOnline = true;
  
  // Fake async operation
  setTimeout(() => {
    if (isOnline) resolve("Connected successfully!");
    else reject("Server is offline.");
  }, 1000);
});

// Consuming the promise
checkServer
  .then(message => console.log(message))
  .catch(error => console.error(error));`,
    outputHtml: `<div style="padding: 20px; background: white; border: 2px solid #ccc; display:flex; flex-direction:column; gap:10px;">
      <button onclick="
        const o = document.getElementById('promise-out');
        o.innerText = 'Pending...';
        o.style.color = '#aa0';
        new Promise((res, rej) => setTimeout(() => res('Resolved! ✅'), 1500))
          .then(v => { o.innerText = v; o.style.color = 'green'; })
      " style="padding: 10px; cursor: pointer; background: #fdf5e6;">Trigger Artificial Promise</button>
      <div id="promise-out" style="font-weight: bold; font-family: monospace;">Awaiting action</div>
    </div>`,
    pitfall:
      "Forgetting to return a internal Promise when creating a chain of .then() methods.",
    challenge: [
      "Wrap a setTimeout inside a real Javascript Promise object that resolves with the text 'Delay over!' after 3 seconds.",
    ],
  },
  asyncawait: {
    title: "Async / Await",
    why: "Promises are great, but the .then() chaining syntax can still be verbose. Async/Await is syntactic sugar that makes async code read exactly like standard, synchronous code.",
    keypoints: [
      "Add <code>async</code> before a function to allow it to utilize <code>await</code>.",
      "<code>await</code> pauses the execution of THAT function until the Promise resolves.",
      "Wrap async/await blocks in <code>try/catch</code> logic to handle errors precisely.",
    ],
    code: `async function fetchUserData() {
  try {
    // Execution waits directly here until data arrives!
    const response = await fetch('https://api.github.com/users/example');
    const data = await response.json();
    console.log("User data:", data);
  } catch (error) {
    console.log("Failed to fetch!", error);
  }
}

fetchUserData();`,
    outputHtml: `<div style="background: #212529; color: #fff; padding: 20px; border-radius: 8px;">
      <button onclick="
        const btn = this;
        btn.innerText = 'awaiting fake network...';
        setTimeout(() => {
          btn.innerText = 'Async Data Received! 📦';
          btn.style.background = '#28a745';
        }, 2000);
      " style="padding: 10px 15px; cursor: pointer; border-radius: 5px;">Initiate async/await request</button>
    </div>`,
    pitfall:
      "Using 'await' in the global scope of classic script files (it's only allowed inside 'async' functions or ES modules).",
    challenge: [
      "Write an async function that 'awaits' a fetch to 'https://jsonplaceholder.typicode.com/users' and logs the result.",
    ],
  },
  classes: {
    title: "Classes & Object Oriented JS",
    why: "As projects grow massively, modeling real-world objects using Classes makes your code rigid, predictable, and heavily scalable.",
    keypoints: [
      "Provides a clean syntax to achieve prototypal inheritance.",
      "Contains a <code>constructor()</code> method that builds the object when initialized with <code>new</code>.",
      "Use the <code>class</code> keyword to define the blueprint.",
    ],
    code: `class Player {
  // Setup logic for fresh instances
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  // Method attached to the class
  takeDamage(amount) {
    this.health -= amount;
    console.log(this.name + " lost " + amount + " health.");
  }
}

// Instance Generation
const hero = new Player("Arthur", 100);
hero.takeDamage(15);`,
    outputHtml: `<div style="border: 2px dashed #000; padding: 20px; text-align: center; background: #f1f5f9;">
      <div style="font-size: 24px; margin-bottom: 20px;">🛡️ Hero HP: <span id="oop-hp">100</span></div>
      <button onclick="
        const el = document.getElementById('oop-hp');
        let hp = Number(el.innerText);
        if(hp > 0) hp -= 15;
        if(hp < 0) hp = 0;
        el.innerText = hp;
        if(hp===0) el.innerText = '0 - DEFEATED';
      " style="background:#e11d48; color:white; padding:10px 20px; font-weight:bold; border:none; cursor:pointer;" class="oop-btn">takeDamage(15)</button>
    </div>`,
    pitfall:
      "Believing JS Classes are exactly like Java/C# Classes. Under the hood, JavaScript classes are fundamentally completely different; they are built entirely on prototypes.",
    challenge: [
      "Create a 'Vehicle' class with speed variables, and an extended 'Car' class that inherits from Vehicle utilizing the 'super()' keyword.",
    ],
  },
  modules: {
    title: "ES6 Modules",
    why: "Keeping 10,000 lines of JS inside one massive index.js file is madness. Modules let you split logic into different files and selectively share code.",
    keypoints: [
      "Use <code>export</code> to expose a function/variable to the outside file system.",
      "Use <code>import</code> to grab it in another file.",
      'To use ES modules natively in the browser, your script tag requires <code>type="module"</code>.',
    ],
    code: `// -- file math.js --
export const pi = 3.14159;
export function add(a, b) { return a + b; }

// -- file index.js --
import { pi, add } from './math.js';

console.log(pi); // 3.14159
console.log(add(10, 5)); // 15`,
    outputHtml: `<div style="background: #fffae6; border: 1px solid #ffd591; padding: 15px; border-radius: 5px;">
      <p style="margin:0; font-family: monospace; color: #d46b08;">📦 Math Module logic segregated effortlessly.</p>
    </div>`,
    pitfall:
      "Testing localized ES6 modules directly off your desktop via file:///. Browsers block modules loaded over the file protocol due to strict CORS rules. You need a local server (like Live Server or Vite) to run ES modules.",
    challenge: [
      "Split your app into multiple files: place basic logic like \"const apiEndpoint = '...'; export default apiEndpoint;\" into config.js and import it into main.js.",
    ],
  },
  api: {
    title: "The Fetch API",
    why: "Modern UI requires talking to servers: saving posts, loading tweets, or grabbing live weather data. The Fetch API is the built-in powerhouse for all HTTP requests.",
    keypoints: [
      "<code>fetch(url)</code> initiates a GET request.",
      "It returns a Promise, meaning it pairs perfectly with <code>async/await</code>.",
      "To send data via POST, you pass a massive secondary object to the fetch() command detailing headers and stringified body payloads.",
    ],
    code: `// Fetch a random quote from an API using Promises
fetch('https://api.quotable.io/random')
  .then(response => {
    // 1. Check if the HTTP status code is OK 
    if (!response.ok) throw new Error('Network Issue!');
    // 2. Parse the body from JSON
    return response.json(); 
  })
  .then(data => {
    console.log("Quote:", data.content);
    console.log("Author:", data.author);
  })
  .catch(err => console.error(err));`,
    outputHtml: `<div style="padding: 20px; background: #e0f2fe; border: 1px solid #bae6fd; border-radius: 8px;">
      <button onclick="
        this.innerText = 'Calling dummy server...';
        setTimeout(()=> {
          document.getElementById('fetch-res').innerHTML = '<em>&quot;Code is like humor. When you have to explain it, it’s bad.&quot;</em> — Cory House';
          this.innerText = 'Fetch More';
        }, 1200);
      " style="padding: 8px 15px; background: #0284c7; color: white; border: none; cursor:pointer; border-radius:4px;">Fetch Random Quote</button>
      <div id="fetch-res" style="margin-top: 15px; font-size: 18px; color: #0f172a;"></div>
    </div>`,
    pitfall:
      "Assuming fetch() throws an Error/rejects when an API returns a 404 or 500 status code. It DOES NOT. It only rejects on total network failure (like losing Wi-Fi). You must manually throw and check 'response.ok'.",
    challenge: [
      "Send a POST request specifying headers 'Content-Type: application/json' and a stringified JS object in the body.",
    ],
  },
  storage: {
    title: "Web Storage (Local/Session)",
    why: "Sometimes you need to save data strictly in the user's browser without sending it to a server (like dark mode preference, or an unsaved form state).",
    keypoints: [
      "<code>localStorage</code> persists data even when the browser is closed and reopened.",
      "<code>sessionStorage</code> clears data the moment the user closes the browser tab.",
      "Both API's only store strings! Use <code>JSON.stringify()</code> before saving objects, and <code>JSON.parse()</code> when retrieving.",
    ],
    code: `// Saving data
localStorage.setItem('theme', 'dark');

// Saving complex data (Requires JSON conversion)
const user = { name: "StudBridge", status: "active" };
localStorage.setItem('profile', JSON.stringify(user));

// Retrieving data
const savedTheme = localStorage.getItem('theme');
const savedProfile = JSON.parse(localStorage.getItem('profile'));`,
    outputHtml: `<div style="padding: 20px; background: #fffbeb; border: 1px solid #fcd34d; border-radius: 8px;">
      <div style="font-family: monospace; margin-bottom: 10px;">Saved Score: <span id="ls-score">0</span></div>
      <button onclick="
        let score = parseInt(localStorage.getItem('dummyScore') || '0');
        score += 10;
        localStorage.setItem('dummyScore', score);
        document.getElementById('ls-score').innerText = score;
      " style="padding: 8px 15px; background: #d97706; color: white; border: none; cursor:pointer; border-radius: 4px; margin-right: 10px;">Add Points</button>
      <button onclick="
        localStorage.removeItem('dummyScore');
        document.getElementById('ls-score').innerText = '0';
      " style="padding: 8px 15px; background: #9ca3af; color: white; border: none; cursor:pointer; border-radius: 4px;">Clear LocalStorage</button>
      <script>
        document.getElementById('ls-score').innerText = localStorage.getItem('dummyScore') || '0';
      </script>
    </div>`,
    pitfall:
      "Storing sensitive data (like passwords, auth tokens, or PII) directly in local storage. Any malicious JS script can easily read localStorage and steal that data.",
    challenge: [
      "Create a simple text input. As the user types, save the input value to localStorage. If they refresh the page, read the value and automatically populate the input.",
    ],
  },
  trycatch: {
    title: "Error Handling (Try/Catch)",
    why: "Code will fail occasionally—network requests drop, data payloads get corrupted. Instead of crashing your entire application, you can 'catch' errors and fail gracefully.",
    keypoints: [
      "Wrap risky code inside a <code>try { ... }</code> block.",
      "If it throws an error whatsoever, execution immediately jumps to the <code>catch (error) { ... }</code> block.",
      "Use <code>finally { ... }</code> for cleanup code that must run regardless of success or failure.",
    ],
    code: `try {
  console.log("Trying to execute risky code...");
  
  // This variable does not exist! Will throw ReferenceError
  console.log(unknownVariable); 
  
  console.log("This line will never be reached.");
} catch (error) {
  console.error("Oh no, something went wrong:", error.message);
} finally {
  console.log("Cleanup operations go here.");
}`,
    outputHtml: `<div style="padding: 15px; background: #282c34; color: #abb2bf; border-radius: 8px; font-family: monospace;">
      <button onclick="
        const out = document.getElementById('tc-out');
        try {
          out.innerHTML += '→ Initiating Engine...<br>';
          throw new Error('Critical Engine Failure!');
        } catch(e) {
          out.innerHTML += '&nbsp;&nbsp;<span style=&quot;color: #e06c75;&quot;>[CATCH] ' + e.message + '</span><br>';
        } finally {
          out.innerHTML += '→ Engines shutting down natively.<br>';
        }
      " style="padding: 5px 10px; cursor: pointer; color: black;">Run Risky Block</button>
      <div id="tc-out" style="margin-top: 15px;"></div>
    </div>`,
    pitfall:
      "Wrapping your entire JS file inside one giant try/catch. This makes debugging nearly impossible because you don't know exactly where the error originated.",
    challenge: [
      "Throw a custom error manually using `throw new Error('Message')` inside a try block, and log that specific message in the catch block.",
    ],
  },
  regex: {
    title: "Regular Expressions (Regex)",
    why: "When working with heavy text data (validating emails, passwords, finding specific words), manual string methods aren't enough. Regular Expressions provide extreme pattern-matching capabilities.",
    keypoints: [
      "Enclosed within forward slashes <code>/pattern/</code>.",
      "Use <code>.test(string)</code> to check if the string contains the pattern (returns true/false).",
      "Use <code>string.replace(/pattern/g, 'replacement')</code> to globally replace matches.",
    ],
    code: `const email = "user@example.com";
// A basic regex pattern to check for an @ symbol and a domain
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (emailRegex.test(email)) {
  console.log("Valid email address!");
} else {
  console.log("Invalid email!");
}

// Replacing all digits in a string
const messy = "H3ell0 W0or1d";
console.log( messy.replace(/\d/g, "") ); // logs: "Hello World"`,
    outputHtml: `<div style="padding: 20px; background: white; border: 1px solid #ccc; border-radius: 8px;">
      <input type="text" id="rx-in" placeholder="Enter alphanumeric code..." style="padding: 8px; width: 220px;" onkeyup="
        const rx = /^[a-zA-Z0-9]+$/;
        const o = document.getElementById('rx-out');
        if (this.value === '') { o.innerText = ''; return; }
        if(rx.test(this.value)) { o.innerText='✅ Valid Alphanumeric'; o.style.color='green'; }
        else { o.innerText='❌ Contains special/invalid chars'; o.style.color='red'; }
      ">
      <div id="rx-out" style="margin-top: 10px; font-weight: bold; font-size: 14px;"></div>
    </div>`,
    pitfall:
      "Trying to write extreme, massive regexes by hand. Regular Expressions are notoriously hard to read. Use tools like Regex101.com to build and test your patterns.",
    challenge: [
      "Write a regex pattern that searches for the word 'javascript' (case-insensitive) in a string.",
    ],
  },
};

// DOM Elements
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");
const navItems = document.querySelectorAll(".nav-item");
const lessonContainer = document.getElementById("lesson");

// Mobile Menu Toggling
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

// Render logic
function renderTopic(topicKey) {
  const data = topics[topicKey];

  if (!data) return;

  const keyPointsHtml = data.keypoints.map((kp) => `<li>${kp}</li>`).join("");

  const challengeHtml = data.challenge
    .map((ch) => `<p class="challenge-text">👉 ${ch}</p>`)
    .join("");

  const outputHtmlBlock = data.outputHtml
    ? `
    <div class="output-section">
      <div class="output-title">Live Preview Simulation</div>
      ${data.outputHtml}
    </div>
  `
    : "";

  lessonContainer.innerHTML = `
    <h2 class="lesson-title">${data.title}</h2>
    
    <div class="mentor-box">
      <strong>Why learn this?</strong> ${data.why}
    </div>

    <h3 class="section-heading">Key Concepts</h3>
    <ul class="key-list">
      ${keyPointsHtml}
    </ul>

    <h3 class="section-heading">Syntax & Examples</h3>
    <div class="code-block">
      <pre><code>${data.code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
    </div>

    ${outputHtmlBlock}

    <div class="mentor-box" style="border-left-color: #ef4444; background: #fef2f2;">
      <strong style="color: #b91c1c;">⚠️ Common Pitfall:</strong> 
      <span style="color: #7f1d1d;">${data.pitfall}</span>
    </div>

    <div class="challenge-box">
      <h4 class="challenge-title">💪 Upskill Challenge</h4>
      ${challengeHtml}
    </div>
  `;

  // executing scripts natively when assigned via innerHTML
  const scripts = Array.from(lessonContainer.querySelectorAll("script"));
  scripts.forEach((oldScript) => {
    const newScript = document.createElement("script");
    Array.from(oldScript.attributes).forEach((attr) =>
      newScript.setAttribute(attr.name, attr.value),
    );
    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Event Navigation Binding
navItems.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default button behavior

    // Use e.currentTarget to ensure we get the button, not a clicked inner span/text
    const targetBtn = e.currentTarget;

    // update active state in sidebar
    navItems.forEach((b) => b.classList.remove("active"));
    targetBtn.classList.add("active");

    // Close menu purely on mobile
    if (window.innerWidth <= 1200) {
      sidebar.classList.remove("open");
    }

    const topicKey = targetBtn.getAttribute("data-topic");

    if (topicKey) {
      renderTopic(topicKey);
    }
  });
});

// Initialize first page load
renderTopic("intro");
