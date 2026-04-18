const topics = {
  intro: {
    title: "What is Node.js?",
    why: "For years, JavaScript only lived inside the browser. Node.js changed everything. It took the V8 JS engine out of Chrome and put it on your computer, allowing you to write backend servers, APIs, and scripts using JavaScript.",
    keypoints: [
      "Node.js is a runtime environment, not a framework or a new language.",
      "It is built on Google Chrome's V8 JavaScript Engine.",
      "It uses an asynchronous, event-driven, non-blocking I/O model (perfect for high-traffic apps).",
    ],
    code: `// This is plain JS, but you run it off your PC, not the browser!
console.log("Hello from the backend!");

setTimeout(() => {
  console.log("This works just like in the browser.");
}, 1000);`,
    outputHtml: `<div style="background: #1e1e1e; color: #83cd29; padding: 20px; font-family: monospace; border-radius: 8px;">
      <span style="color: #fff;">$ node intro.js</span><br>
      Hello from the backend!<br>
      This works just like in the browser.
    </div>`,
    pitfall:
      "Trying to use browser-specific objects like 'window' or 'document' in Node.js. They don't exist here!",
    challenge: [
      "Explain the phrase 'Non-blocking I/O' to yourself out loud. Think of it like a restaurant waiter taking many orders without waiting for the chef to cook them.",
    ],
  },
  setup: {
    title: "Setup & Installation",
    why: "Before you can run Node.js on your computer, you have to install the environment binaries.",
    keypoints: [
      "Download the installer from nodejs.org (LTS versions are safest).",
      "The installer gives you two global CLI tools: <code>node</code> and <code>npm</code>.",
      "You can verify your installation by opening a terminal and checking the versions.",
    ],
    code: `# Verify Node.js installation
node -v
# Example output: v20.11.1

# Verify NPM (Node Package Manager) installation
npm -v
# Example output: 10.2.4`,
    outputHtml: `<div style="background: #2a2a2a; border-left: 4px solid #83cd29; padding: 15px; color: #ccc;">
      If you see a version number after typing 'node -v' in your terminal, you successfully installed the Node runtime!
    </div>`,
    pitfall:
      "Forgetting to restart your terminal/command prompt after installing Node.js. The path variables need a fresh session to load.",
    challenge: [
      "Open your terminal right now, type 'node -v' and ensure you get a version back.",
    ],
  },
  commands: {
    title: "Running Node Scripts",
    why: "Now that Node is installed, you need to know how to actually execute code. You can either type code directly into the REPL or run pre-written JS files.",
    keypoints: [
      "The <b>REPL</b> (Read-Eval-Print Loop) is started by simply typing <code>node</code> into the terminal. Good for quick math.",
      "To execute a file, type <code>node filename.js</code>.",
      "To exit the REPL, type <code>.exit</code> or press Ctrl+C twice.",
    ],
    code: `// File: server.js
const purpose = "Backend magic";
console.log("Starting script with purpose: " + purpose);

// In your terminal:
// $ node server.js`,
    outputHtml: `<div style="padding: 15px; background: #000; color: #fff; font-family: monospace; border-radius: 8px;">
      <span style="color: #4af626;">root@studbridge:~#</span> node server.js<br>
      Starting script with purpose: Backend magic
    </div>`,
    pitfall:
      "Running 'node file.js' from the wrong directory. Ensure your terminal path matches where the file actually lives.",
    challenge: [
      "Create a file named 'app.js', add a console.log into it, open your terminal, and run it using 'node app.js'.",
    ],
  },
  globals: {
    title: "Global Objects",
    why: "While Node lacks 'window' or 'document', it provides its own global objects available in every file without needing to import them.",
    keypoints: [
      "<code>__dirname</code>: Absolute path to the current folder.",
      "<code>__filename</code>: Absolute path to the current file.",
      "<code>process</code>: The granddaddy object holding info about memory, arguments, and the environment.",
    ],
    code: `console.log("You are in this dir:", __dirname);
console.log("Executing file:", __filename);

// Accessing system environment variables
console.log("NODE_ENV is set to:", process.env.NODE_ENV);

// Exiting the active process manually
// process.exit(0);`,
    outputHtml: `<div style="border: 1px dashed #666; padding: 15px; border-radius: 5px;">
      <strong>__dirname:</strong> /Users/dev/studbridge/backend<br>
      <strong>__filename:</strong> /Users/dev/studbridge/backend/app.js
    </div>`,
    pitfall:
      "Trying to use __dirname natively in modern ES Module setups (where 'type': 'module'). It is strictly a CommonJS feature unless polyfilled.",
    challenge: [
      "Write a script that console logs exactly what directory it is executing from using __dirname.",
    ],
  },
  json: {
    title: "What is JSON?",
    why: "When an external app (like a React frontend) wants to talk to a Node.js server, they cannot send raw Javascript objects. We need a universal, lightweight text format to transmit data. JSON connects the internet.",
    explanation:
      "JSON stands for 'JavaScript Object Notation'. It looks precisely like a JS Object, but it is strictly a text string. This allows it to be sent over HTTP instantly. Every language (Python, Java, Go) fundamentally understands JSON, making it the supreme data-interchange format of the web.",
    keypoints: [
      "JSON requires <b>double quotes</b> around ALL keys and string values.",
      "Use <code>JSON.stringify(obj)</code> to convert a JS Object into a JSON string before sending it.",
      "Use <code>JSON.parse(str)</code> to convert a JSON string back into a usable JS Object when receiving data.",
      "It cannot store functions, undefined, or Dates directly. Only pure data (strings, numbers, booleans, arrays, objects).",
    ],
    code: `// 1. A typical JavaScript Object
const userObj = { username: "Alice", active: true };

// 2. Converting it to JSON to send via HTTP
const jsonString = JSON.stringify(userObj);
console.log("Transmission Data: ", jsonString);
// Output: '{"username":"Alice","active":true}'

// 3. Receiving JSON from the web and parsing it back
const receivedData = '{"role": "admin", "level": 99}';
const parsedObj = JSON.parse(receivedData);
console.log(parsedObj.role); // "admin"`,
    outputHtml: `<div style="background: #282c34; padding: 20px; color: #abb2bf; font-family: monospace; border-radius: 8px;">
      <span style="color: #c678dd;">typeof</span> userObj === <span style="color: #98c379;">"object"</span><br>
      <span style="color: #c678dd;">typeof</span> jsonString === <span style="color: #98c379;">"string"</span>
    </div>`,
    pitfall:
      "Trying to parse an invalid JSON string (e.g. one missing a quote or using single quotes instead of double) will instantly throw a fatal SyntaxError and crash your code. Always try/catch when parsing external data.",
    challenge: [
      "Write a fake JSON string holding an array of 2 hobbies, using strict double quotes.",
    ],
  },
  modules: {
    title: "CommonJS vs ES Modules",
    why: "To keep code clean, Node scripts are split across files. Node has historically used CommonJS (require), but is shifting toward ES Modules (import).",
    keypoints: [
      "CommonJS (Legacy/Default): <code>const fs = require('fs');</code>",
      "CommonJS Export: <code>module.exports = myFunction;</code>",
      'ES Modules (Modern): Add <code>"type": "module"</code> to package.json, then use <code>import/export</code>.',
    ],
    code: `// --- COMMONJS ---
// file1.js
const greeting = "Hello CJS";
module.exports = greeting;

// main.js
const msg = require('./file1');

// --- ES MODULES (MJS) ---
// file2.js
export const greeting = "Hello ESM";

// main.js
import { greeting } from './file2.js';`,
    outputHtml: `<div style="background: #eefaeb; padding: 15px; border-radius: 8px;">
      <strong>Note:</strong> Both module systems are heavily used in the professional world today. Most legacy enterprise codebases still rely completely on 'require()'.
    </div>`,
    pitfall:
      "Attempting to utilize 'import' syntax without telling Node.js first by placing '\"type\": \"module\"' inside your project's package.json.",
    challenge: [
      "Create an 'utilities.js' file containing a function to add two numbers. Export it using CommonJS and 'require' it inside a main 'index.js' file.",
    ],
  },
  fs: {
    title: "File System (fs module)",
    why: "Servers need to read config files, save user uploads, or logs. Node provides native capabilities to interact with the computer's hard drive.",
    keypoints: [
      "Import with <code>require('fs')</code>.",
      "Sync methods (<code>readFileSync</code>) halt the server until the file is completely read.",
      "Async methods (<code>readFile</code> or <code>fs/promises</code>) read files in the background without blocking users.",
    ],
    code: `const fs = require('fs');

// 1. ASYNC (Best Practice)
fs.readFile('./logs.txt', 'utf8', (err, data) => {
  if (err) return console.error(err);
  console.log("File content:", data);
});

// 2. WRITING FILES
const content = "User XYZ logged in at 10 AM.";
fs.writeFile('./logs.txt', content, err => {
  if(err) throw err;
  console.log("Log saved successfully.");
});`,
    outputHtml: `<div style="border: 2px solid #ccc; padding: 15px; border-radius: 8px; background: #fff;">
      <h4 style="margin: 0 0 10px 0;">logs.txt</h4>
      <pre style="margin: 0; background: #f4f4f4; padding: 10px;">User XYZ logged in at 10 AM.</pre>
    </div>`,
    pitfall:
      "Using 'Sync' functions like writeFileSync in the middle of an endpoint route. Doing so pauses the entire server, meaning nobody else can load the website until the hard drive stops spinning.",
    challenge: [
      "Use the 'fs' module to create a brand new file called 'hello.txt' containing the words 'Hello Node World'.",
    ],
  },
  path: {
    title: "Path Module",
    why: "Directory structures look completely different between Windows (\\) and Linux/Mac (/). The Path module unifies formatting to prevent your app from crashing across systems.",
    keypoints: [
      "<code>path.join()</code> merges directory names safely.",
      "<code>path.resolve()</code> builds an absolute path right from the system root.",
      "<code>path.extname()</code> quickly reveals a file's extension (.jpg, .js).",
    ],
    code: `const path = require('path');

// Safely fusing folder names regardless of OS
const safePath = path.join(__dirname, 'images', 'banner.png');
// Mac: /home/dev/images/banner.png
// Win: C:\\Users\\dev\\images\\banner.png

const ext = path.extname('index.html');
console.log("Extension:", ext); // .html`,
    outputHtml: `<div style="background: #eefaeb; padding: 15px; border-radius: 5px;">
      <span style="font-family: monospace;">path.join('folder', 'file.txt')</span> 
      <br>ensures zero crashed routes when moving your code to cloud AWS/Azure servers.
    </div>`,
    pitfall:
      "Manually concatenating strings like `__dirname + '/images/'`. This will literally break the moment you switch operating systems.",
    challenge: [
      "Combine three fictional directories ('users', 'avatars', 'images.jpg') using path.join() and log out the result.",
    ],
  },
  http: {
    title: "Native HTTP Server",
    why: "The core reason Node.js is famous is its ability to stand up a web server from nothing, listening to network traffic on specific ports.",
    keypoints: [
      "The native <code>http</code> module creates a web server.",
      "The server utilizes a callback providing a <code>Request (req)</code> and a <code>Response (res)</code>.",
      "Web servers must listen to a <b>port</b> (like 3000, 8080 or 80).",
    ],
    code: `const http = require('http');

// Create the backend server
const server = http.createServer((req, res) => {
  // Check the requested URL
  if (req.url === '/') {
    res.write('Hello Website!');
    res.end();
  } else {
    res.write('404 Route Not Found');
    res.end();
  }
});

// Activate the server
server.listen(3000, () => {
  console.log("Server listening on port 3000...");
});`,
    outputHtml: `<div style="padding: 15px; border: 1px solid #ccc; border-radius: 8px;">
      <div style="background: #e0e0e0; padding: 5px 10px; border-radius: 4px; font-family: monospace; display: inline-block;">http://localhost:3000/</div>
      <div style="margin-top: 15px; font-size: 20px; text-align: center;">Hello Website!</div>
    </div>`,
    pitfall:
      "Forgetting to call 'res.end()'. If you don't tell the server the response is finished, the user's browser will spin indefinitely until it eventually times out.",
    challenge: [
      "Start a local HTTP server and visit localhost:3000 in your browser to see your own message.",
    ],
  },
  npm: {
    title: "What is NPM? & package.json",
    why: "You don't need to write every feature from scratch. NPM (Node Package Manager) gives you access to over a million open-source libraries written by other developers.",
    keypoints: [
      "<code>npm init -y</code> creates a <code>package.json</code> file.",
      "<code>package.json</code> is the identity card for your project. It lists versions, names, and all the dependencies your project needs to survive.",
      "The <code>node_modules</code> folder physically holds the downloaded library code.",
    ],
    code: `// Sample package.json created after running npm init
{
  "name": "my-backend-app",
  "version": "1.0.0",
  "description": "Learning Node",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}`,
    outputHtml: `<div style="background: #2a2a2a; border-left: 4px solid #cb3837; padding: 15px; color: #fff;">
      <span style="color: grey;">> Initializing project...</span><br>
      <span style="color: #61afef;">npm init -y</span><br>
      Created package.json successfully.
    </div>`,
    pitfall:
      "Uploading your 'node_modules' folder to GitHub. It's massive! Always create a .gitignore file and add 'node_modules' to it. As long as you have package.json, you can always redownload them.",
    challenge: [
      "Open your terminal, create a new folder, navigate inside, and run 'npm init -y'. Open the resulting package.json.",
    ],
  },
  thirdparty: {
    title: "Installing Third-Party Packages",
    why: "To actually utilize the NPM network, you install libraries specifically into your project context to handle specialized logic securely and easily.",
    keypoints: [
      "Use <code>npm install <packagename></code> (or <code>npm i</code>).",
      "Libraries are saved in 'dependencies' inside package.json.",
      "Nodemon is a crucial developer tool: it automatically restarts your server when you save file changes.",
    ],
    code: `# Install a library for colored texts in terminal
npm install chalk

# Install nodemon as a dev-dependency
npm install nodemon --save-dev`,
    outputHtml: `<div style="background: #000; padding: 15px; font-family: monospace; border-radius: 8px;">
      <div style="color: #fff;">$ npm install chalk</div>
      <div style="color: grey; margin-top: 5px;">added 1 package, and audited 2 packages in 1s</div>
      <div style="color: #00ff00;">found 0 vulnerabilities</div>
    </div>`,
    pitfall:
      "Downloading a package without checking its weekly downloads or latest updates on npmjs.com. Avoiding abandoned libraries is crucial for security.",
    challenge: [
      "Run 'npm install chalk@4.1.2' locally, require 'chalk' inside a JS file, and log out a blue colored string.",
    ],
  },
  dotenv: {
    title: "Environment Variables (.env)",
    why: "Hardcoding passwords, database credentials, or secret API keys directly into your code is a massive security hazard. The .env file keeps strings totally hidden correctly.",
    explanation:
      "If you push raw passwords to GitHub, hackers will scrape your Repository in minutes. By securely hiding your keys inside a `.env` file, and forcing git to ignore it, you protect your application. In Node.js, we install a package named <code>dotenv</code> to load these hidden keys automatically into the <code>process.env</code> global object.",
    keypoints: [
      "Install the library using <code>npm install dotenv</code>.",
      "Create a file strictly named <code>.env</code> in your root folder.",
      "Import it at the very top of your <code>index.js</code> via <code>require('dotenv').config()</code>.",
      "<b>Crucial:</b> Always add <code>.env</code> to your <code>.gitignore</code> file.",
    ],
    code: `// --- Inside .env file ---
PORT=5000
DB_PASSWORD=super_secret_ninja
API_KEY=xX8d9s7a6X

// --- Inside server.js ---
require('dotenv').config();

const port = process.env.PORT;
console.log("Server booting up on Port:", port);
console.log("My secure API Key is:", process.env.API_KEY);`,
    outputHtml: `<div style="background: #282c34; padding: 20px; color: #abb2bf; font-family: monospace; border-radius: 8px;">
      <span style="color: #61afef;">[System Boot]</span><br>
      Server booting up on Port: 5000<br>
      <span style="color: #e5c07b;">My secure API Key is: xX8d9s7a6X</span>
    </div>`,
    pitfall:
      "Pushing your `.env` file to a public GitHub repository. Within 60 seconds, bots will snatch your AWS/Stripe keys and start charging your credit card. Add it to .gitignore immediately.",
    challenge: [
      "Create a .env file, add an environment variable called <code>MY_NAME=''</code>, and log it successfully in your node server.",
    ],
  },
  express: {
    title: "Why Express.js?",
    why: "Writing a native Node 'http' server is painful due to manual string parsing and clunky route management. Express.js is the unopinionated, fast framework that makes building backend APIs trivial.",
    explanation:
      "While Node.js is the engine, Express.js is the steering wheel. It is basically the standard framework for Node servers worldwide due to its simplicity. It instantly handles complex things like URL parameters, JSON body parsing, headers, and routing architecture directly out of the box, turning 50 lines of messy 'http' configuration into 3 lines of clean code.",
    keypoints: [
      "Install via <code>npm install express</code>.",
      "Express maps URL endpoints (Routes) directly to simple callback functions.",
      "Provides rapid capability to parse JSON via <code>express.json()</code>.",
      "Status codes (404, 200, 500) and headers are sent effortlessly.",
    ],
    code: `const express = require('express');
const app = express();

// Middleware to parse incoming JSON payload
app.use(express.json());

// A simple GET Route
app.get('/users', (req, res) => {
  res.status(200).json([{ name: "John", age: 30 }]);
});

app.listen(8000, () => {
  console.log("Express API firing on port 8000!");
});`,
    outputHtml: `<div style="display: flex; gap: 20px; align-items: center; padding: 20px; background: white; border: 1px solid #ccc; border-radius: 8px;">
      <button onclick="
        const o = document.getElementById('express-out');
        o.innerText = '{ fetched: true, users: 1 }';
        o.style.color = 'green';
      " style="padding: 10px; background: #222; color: white; border: none; cursor:pointer;">Simulate GET /users Request</button>
      <div id="express-out" style="font-family: monospace;"></div>
    </div>`,
    pitfall:
      "Forgetting to load 'app.use(express.json())' middleware. If you forget this, all JSON data sent in a POST request from the frontend will arrive as 'undefined'.",
    challenge: [
      "Initialize an express app, construct a POST route at '/login', and send back a 'Success' message.",
    ],
  },
  http_methods: {
    title: "GET, POST, PUT, DELETE",
    why: "A well-designed API relies heavily on standard HTTP Verbs to declare intent. Just saying '/users' isn't enough; are we reading a user, creating one, or deleting one?",
    explanation:
      "RESTful architecture defines that single URLs should act differently depending upon the 'HTTP Verb' hitting it. This way, we don't need messy routes like <code>/create-user</code> or <code>/delete-user</code>. We simply hit <code>/users</code> with varying methods.",
    keypoints: [
      "<b>GET:</b> Fetch or read data (does not modify anything).",
      "<b>POST:</b> Create new data (sending payloads in the <code>req.body</code>).",
      "<b>PUT / PATCH:</b> Update existing data (PUT replaces entirely, PATCH updates portions).",
      "<b>DELETE:</b> Destroys data systematically.",
    ],
    code: `// 1. GET: Read users
app.get('/users', (req, res) => { res.send("Sending users..."); });

// 2. POST: Create a user
app.post('/users', (req, res) => { 
  const newUser = req.body; // payload data from client
  res.send("User created successfully!"); 
});

// 3. PUT: Update a specific user by ID
app.put('/users/:id', (req, res) => { res.send(\`User \${req.params.id} updated!\`); });

// 4. DELETE: Destroy a user
app.delete('/users/:id', (req, res) => { res.send(\`User \${req.params.id} terminated.\`); });`,
    outputHtml: `<div style="background: #eef2ff; padding: 15px; border-radius: 8px;">
      <select id="method-select" style="padding: 5px;" onchange="
        const val = this.value;
        const btn = document.getElementById('method-btn');
        btn.innerText = \`Send \${val.toUpperCase()} Request /users\`;
        if(val==='get') btn.style.background='#61afef';
        if(val==='post') btn.style.background='#a9dc76';
        if(val==='put') btn.style.background='#d4a32a';
        if(val==='delete') btn.style.background='#e11d48';
      ">
        <option value="get">GET</option>
        <option value="post">POST</option>
        <option value="put">PUT</option>
        <option value="delete">DELETE</option>
      </select>
      <br><br>
      <button id="method-btn" style="padding:10px; background:#61afef; color:white; border:none; cursor:pointer;" onclick="alert('Simulating ' + document.getElementById('method-select').value.toUpperCase() + ' API Response!')">Send GET Request /users</button>
    </div>`,
    pitfall:
      "Trying to test POST or PUT requests identically inside your chrome browser address bar. Browsers strictly fire GET requests natively. You must use tools like Postman or fetch() to send POST/PUT/DELETE interactions.",
    challenge: [
      "Setup a PUT route pointing to '/products/:price' and console log the new price.",
    ],
  },
  bcrypt: {
    title: "Password Hashing (bcrypt.js)",
    why: "Saving raw passwords ('123456') directly into your database is criminal. If breached, all user accounts are immediately compromised. Hashing irreversibly scrambles the password.",
    keypoints: [
      "A Hash is a purely one-way mathematical function.",
      "Salting adds random strings into the mix to protect against Rainbow Table hacks.",
      "<code>bcrypt.compare()</code> proves that a raw password hashes to a matching database signature.",
    ],
    code: `const bcrypt = require('bcryptjs');

async function securePassword(rawPassword) {
  // Salt determines how 'scrambled' the hash gets (10 is standard)
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(rawPassword, salt);
  console.log("DB Safe Hash:", hash);
  
  // Checking on Login
  const isMatch = await bcrypt.compare("mypassword", hash);
  console.log("Does it match?", isMatch); // true
}

securePassword("mypassword");`,
    outputHtml: `<div style="background: #fffdf5; padding: 15px; border-left: 5px solid #d4a32a; font-family: monospace;">
      <strong>Raw:</strong> mypassword<br>
      <strong>Bcrypt output:</strong> $2a$10$t/S0B5...sJvT/cQwUqV8XpTIf9r2L.<br>
      Notice it looks like absolute gibberish. That's the point.
    </div>`,
    pitfall:
      "Trying to 'decrypt' or 'un-hash' a password to see what it is. A true cryptographic hash is irreversible. You can only compare a fresh raw input against the old hash.",
    challenge: [
      "Install 'bcryptjs', generate a hash for '12345', and examine the resulting string.",
    ],
  },
  jwt: {
    title: "JSON Web Tokens (JWT)",
    why: "HTTP requests are 'Stateless', meaning the server immediately forgets who you are after a request finishes. JWT (JSON Web Tokens) serves as a digital VIP pass to prove you are logged in.",
    explanation:
      "Master backend developers know you don't just issue one infinite token. That's a massive security hazard. You use an Access Token (short-lived, 15m) to allow normal api operations. Once it expires, you securely pass a Refresh Token (long-lived, 7d) to silently ask the server: 'My session has expired, here is my long-term proof, generate me a new short-term Access Token'.",
    keypoints: [
      "A JWT consists of 3 pieces: Header, Payload (data), Signature.",
      "The server signs the JWT using a secret code only the server knows.",
      "Clients attach the JWT via HTTP Headers (Authorization: Bearer <token>) on future requests.",
      "<b>Access Token:</b> Short-lived. Use it for standard data operations. (15 min).",
      "<b>Refresh Token:</b> Long-lived. Saved securely, used only to get new Access Tokens. (7 Days).",
    ],
    code: `const jwt = require('jsonwebtoken');
const SECRET = "my_ultra_safe_secret";

// 1. Generate normal Access Token (expires soon)
const accessToken = jwt.sign({ userId: 123 }, SECRET, { expiresIn: '15m' });

// 2. Generate Refresh Token (lasts long)
const refreshToken = jwt.sign({ userId: 123 }, "refresh_secret", { expiresIn: '7d' });

// 3. User requests a protected route
const tokenFromHeader = req.headers.authorization.split(' ')[1];
try {
  const decoded = jwt.verify(tokenFromHeader, SECRET);
  console.log("Logged In ID:", decoded.userId);
} catch(err) {
  // Token Expired? Tell client to use Refresh Token to get a new one!
}`,
    outputHtml: `<div style="padding: 15px; background: #e0f2fe; border: 1px solid #7dd3fc; border-radius: 8px;">
      <h4 style="margin: 0 0 10px;">Auth Flow Simulator:</h4>
      <button onclick="
        const o = document.getElementById('jwt-sim');
        o.innerHTML += '<br>1. Logging in...';
        setTimeout(() => o.innerHTML += '<br>2. Granted Access & Refresh Tokens.', 400);
        setTimeout(() => o.innerHTML += '<br><span style=\\'color:#d97706\\'>3. Access Token Expired (15m)!</span>', 1400);
        setTimeout(() => o.innerHTML += '<br>4. Sending Refresh Token...', 2400);
        setTimeout(() => o.innerHTML += '<br><span style=\\'color:green;font-weight:bold\\'>5. New Access Token Granted! User remains logged in undisturbed.</span>', 3200);
      " style="padding: 8px; cursor: pointer; background: #0284c7; color: white; border: none;">Simulate JWT Lifecycle</button>
      <div id="jwt-sim" style="margin-top: 10px; font-family: monospace; font-size: 13px; line-height:1.5;"></div>
    </div>`,
    pitfall:
      "Putting sensitive data (like standard passwords or credit cards) inside the JWT payload. The payload is easily decodable by ANYONE. Only the signature is secured.",
    challenge: [
      "Use jsonwebtoken to sign a token holding a fake username, and simulate verifying it immediately afterward.",
    ],
  },
  eventloop: {
    title: "The Event Loop",
    why: "This is the most asked Node.js interview question. Because Node is single-threaded, it utilizes an 'Event Loop' to offload heavy tasks to the OS while it continues running fast JS logic.",
    keypoints: [
      "The V8 Engine handles JS, while <code>libuv</code> handles the I/O Background workers.",
      "When a background task (like reading a file) is done, a callback is pushed into the <b>Task Queue</b>.",
      "The <b>Event Loop</b> continuously checks if the Call Stack is empty. If empty, it pulls tasks in from the Queue.",
    ],
    code: `console.log("First: Main Thread");

setTimeout(() => {
  console.log("Third: Macrotask Queue (Event Loop picked me up later)");
}, 0);

Promise.resolve().then(() => {
  console.log("Second: Microtask Queue (Promises get priority!)");
});

console.log("First.v2: Main Thread");`,
    outputHtml: `<div style="background: #2a2a2a; color: #a9dc76; padding: 20px; font-family: monospace; border-radius: 8px;">
      > First: Main Thread<br>
      > First.v2: Main Thread<br>
      > Second: Microtask Queue<br>
      > Third: Macrotask Queue
    </div>`,
    pitfall:
      "Assuming a setTimeout set to 0 milliseconds fires instantaneously. It must still wait in the execution queue until the main thread completely empties out.",
    challenge: [
      "Read out loud: Call Stack -> Node APIs (libuv) -> Task Queue -> Event Loop.",
    ],
  },
  events: {
    title: "Event Emitters",
    why: "Browsers have 'click' and 'scroll'. Servers don't have mice. Instead, servers emit internal system events (like 'Database Connected', or 'User Uploaded').",
    keypoints: [
      "The <code>events</code> module allows for complex publisher/subscriber logic.",
      "<code>emitter.on('name', func)</code> listens for an event.",
      "<code>emitter.emit('name', data)</code> triggers the event globally.",
    ],
    code: `const EventEmitter = require('events');
const systemEvents = new EventEmitter();

// 1. Subscribe to the event
systemEvents.on('newOrder', (user, item) => {
  console.log(\`Alert! \${user} just purchased a \${item}.\`);
});

// 2. Later in a different file/route...
systemEvents.emit('newOrder', "Alice", "Laptop");`,
    outputHtml: `<div style="padding: 20px; background: white; border: 2px dashed #83cd29;">
      <button onclick="
        const o = document.getElementById('emitter-out');
        o.innerHTML += '⚡ Event Received: system.payment_completed<br>';
      " style="padding: 10px; background: #83cd29; color: black; border: none; cursor:pointer;">systemEvents.emit('system.payment_completed')</button>
      <div id="emitter-out" style="margin-top: 15px; font-family: monospace; text-align: left; background: #eee; padding: 10px;"></div>
    </div>`,
    pitfall:
      "Emitting an event before your listener `.on()` is actually registered in the code. The event will fire silently into the void.",
    challenge: [
      "Create a custom event emitter that listens for a 'login' event and fires an alert displaying the user's name.",
    ],
  },
  streams: {
    title: "Streams & Buffers",
    why: "If you try to read a 5 Gigabyte video file using fs.readFile, the server's RAM will explode and crash. Streams slice massive inputs into chunks (Buffers), and send them piece by piece.",
    keypoints: [
      "Streams divide data into small packets called Buffers.",
      "Allows the server to process massive files without extreme memory overhead.",
      "Used heavily inside HTTP chunking, video buffering (Netflix/YouTube), and massive data parsing.",
    ],
    code: `const fs = require('fs');

// Creating a read stream for a gigantic file
const readableStream = fs.createReadStream('./massiveVideo.mp4');

// The 'data' event fires repeatedly every time a 'chunk' is loaded
readableStream.on('data', (chunk) => {
  console.log("Received buffer chunk size:", chunk.length, "bytes");
  // You would typically pipe this directly to res via an HTTP server
});

readableStream.on('end', () => {
  console.log("Fully streamed the entire file!");
});`,
    outputHtml: `<div style="background: #1e1e1e; color: #fff; padding: 15px; border-radius: 8px; font-family: monospace;">
      <span style="color: #61afef;">[Stream Open]</span> Reading chunks...<br>
      <span style="color: #98c379;">■■■■.......</span> Received 65486 bytes<br>
      <span style="color: #98c379;">■■■■■■■a...</span> Received 65486 bytes<br>
      <span style="color: #98c379;">■■■■■■■■■■■</span> Received 34120 bytes<br>
      <span style="color: #e5c07b;">[Stream Done]</span>
    </div>`,
    pitfall:
      "Trying to use '.readFile()' on a file you don't specifically know the size of (e.g. user video uploads). Always use streams for undefined heavy downloads.",
    challenge: [
      "Learn and describe how 'Streams Pipe' (.pipe()) allows connecting a readable stream directly to a writable stream seamlessly.",
    ],
  },
  reqres: {
    title: "Request & Response",
    why: "In backend development, practically everything revolves around the 'Request' what the client wants, and the 'Response' what the server sends back.",
    keypoints: [
      "<code>req</code> holds data from the client: URLs, headers, body payload, and query parameters.",
      "<code>res</code> is the tool used to format and send data back down the wire.",
      "Never leave a request hanging; always end it with <code>res.send()</code>, <code>res.json()</code>, or other terminal methods.",
    ],
    code: `app.get('/search', (req, res) => {
  // Reading a query parameter, e.g., ?term=node
  const query = req.query.term;
  
  // Sending back JSON response
  res.json({
    message: "Search complete!",
    termSearched: query
  });
});`,
    outputHtml: `<div style="background: #212529; color: #fff; padding: 20px; border-radius: 8px; font-family: monospace;">
      <span style="color: #61afef;">GET</span> /search?term=node<br>
      <span style="color: #98c379;">{ "message": "Search complete!", "termSearched": "node" }</span>
    </div>`,
    pitfall:
      "Trying to access `req.body` directly without the correct body-parsing middleware. It will just log out as `undefined`.",
    challenge: [
      "Create a route that reads `req.params.id` from the URL, and responds using `res.send()`.",
    ],
  },
  postman: {
    title: "API Testing (Postman)",
    why: "Since browsers can only fire GET requests via the address bar, how do you verify if your POST, PUT, or DELETE routes actually work? You use API Clients like Postman.",
    explanation:
      "Postman (or VS Code's Thunder Client) is your ultimate playground. You type your local URL (e.g. <code>localhost:8000/users</code>), select the exact Request Type (POST), write a raw JSON payload, add headers, and click SEND. It simulates a frontend perfectly, revealing if your server responds correctly.",
    keypoints: [
      "Download Postman or install 'Thunder Client' natively in VS Code.",
      "Select the HTTP verb from the dropdown, paste your URL, and click Send.",
      "To test POST/PUT data: Select <code>Body -> raw -> JSON</code> and format a strict JSON string.",
      "The bottom pane will display your backend's raw JSON response and status code.",
    ],
    code: `// Ensure parsing middleware is active before testing POSTs
app.use(express.json());

app.post('/api/products', (req, res) => {
  // If tested in Postman without JSON body, this will be undefined!
  const productInfo = req.body;
  res.status(201).json({ status: "Received", data: productInfo });
});`,
    outputHtml: `<div style="background: #2a2a2a; border-left: 4px solid #ef5b25; padding: 15px; color: #fff; font-family: monospace;">
      <span style="color: #ef5b25; font-weight:bold;">POST</span> http://localhost:8000/api/products<br>
      <span style="color: grey;">Body: { "laptop": "MacBook Air" }</span><hr style="border:0;border-bottom:1px solid #444; margin:8px 0;">
      <span style="color: a9dc76; font-weight:bold;">201 Created</span><br>
      { "status": "Received", "data": { "laptop": "MacBook Air" } }
    </div>`,
    pitfall:
      "Forgetting to switch the body-type dropdown in Postman to 'JSON'. If you accidentally leave it as 'Text' or 'Form-Data', `req.body` will just explode parsing errors.",
    challenge: [
      "Open Thunder Client in VS Code (or Postman), point it to your node server, write a JSON payload, and intercept it with a POST route.",
    ],
  },
  router: {
    title: "Express Routers",
    why: "Writing 50 user routes, 40 product routes, and 30 admin routes inside `index.js` turns your code into unreadable spaghetti. We use Express Routers to modularize and decouple our logic.",
    explanation:
      "Routers function as 'miniature applications'. Instead of building routes strictly on `app.get()`, you build them on `router.get()` in isolated files. Then, in your main file, you mount that entire router under a unified prefix. This keeps `index.js` extremely compact! ",
    keypoints: [
      "Create a router using <code>const router = express.Router()</code>.",
      "Define standard routes directly on that object, then <code>module.exports = router</code>.",
      "In <code>server.js</code>, mount the router via <code>app.use('/api/users', userRoutes)</code>.",
    ],
    code: `// --- In routes/userRoutes.js ---
const express = require('express');
const router = express.Router(); // Create mini-app

// Note: This inherently becomes '/api/users/profile' when mounted!
router.get('/profile', (req, res) => { res.send("User Profile"); });

module.exports = router;

// --- In server.js ---
const userRoutes = require('./routes/userRoutes');

// Mount all those routes strictly under the '/api/users' umbrella
app.use('/api/users', userRoutes);`,
    outputHtml: `<div style="padding: 15px; background: #e0f2fe; border: 1px solid #7dd3fc; border-radius: 8px;">
      <b>Modular Router Traffic Strategy:</b>
      <br><code>/api/users</code> --> <code>userRoutes.js</code>
      <br><code>/api/orders</code> --> <code>orderRoutes.js</code>
      <br><br>The main server stays totally abstracted from the complexities!
    </div>`,
    pitfall:
      "Repeating prefixes. Inside `userRoutes.js`, you should NOT define a route like `router.get('/api/users/profile')`. Since you mount the parent using `/api/users`, you strictly define the route as `/profile` inside the file.",
    challenge: [
      "Abstract 3 '/products' endpoints into a completely separate file using Express Router and then import and mount it.",
    ],
  },
  structure: {
    title: "Project Structure",
    why: "Without architectural standards, every team member writes chaotic code haphazardly. You cannot leave logic inside the Router files either! We apply the Controller-Routes-Model (MVC-like) paradigm.",
    explanation:
      "A master developer splits everything into isolated layers: The **Router** only routes traffic, the **Controller** executes heavy Javascript logic, the **Model** describes the MySQL or MongoDB structure, and the **Config** handles the `.env` DB connection.",
    keypoints: [
      "<b>routes/:</b> Maps endpoints (like <code>/login</code>) strictly to pure Controller functions. Minimal JS logic here.",
      "<b>controllers/:</b> Heavy logic lives here (hashing passwords, executing SQL DB requests, throwing custom Status Errors).",
      "<b>models/:</b> Schemas and strict SQL Queries.",
      "<b>index.js:</b> Purely the server configuration shell mounting middlewares/routers. Never any business logic.",
    ],
    code: `// --- BEST PRACTICE ARCHITECTURE ---
root/
 │
 ├── .env                 # Secret API Keys
 ├── .gitignore           # Ignores node_modules/.env 
 ├── server.js            # Only server starts (app.listen)
 │
 ├── config/
 │   └── db.js            # MySQL connection creation
 │
 ├── routes/
 │   └── authRoutes.js    # router.post('/login', authController.login);
 │
 └── controllers/
     └── authController.js # async function login(req, res) { ... logic ... }
`,
    outputHtml: `<div style="background: #282c34; padding: 20px; color: #abb2bf; font-family: monospace; border-radius: 8px; font-weight:bold;">
      <span style="color: #61afef;">GET</span> /api/auth/login <br>
      &rarr; hits <span style="color: #98c379;">authRoutes.js</span><br>
      &rarr; triggers <span style="color: #e5c07b;">authController.js</span><br>
      &rarr; reads <span style="color: #5c6370;">db.js</span> Model<br>
      &rarr; sends response.
    </div>`,
    pitfall:
      "Stuffing 200 lines of bcrypt hash loops, MySQL queries, and validation algorithms directly inside a `router.post()` block. This is called 'Fat Controller' syndrome. Segregate cleanly.",
    challenge: [
      "Read through the MVC (Model-View-Controller) architecture online and see how backend models align with it perfectly.",
    ],
  },
  middleware: {
    title: "HTTP Status Codes",
    why: "Instead of writing custom messages like 'Failed', the web relies on universal HTTP Status Codes. These instantly tell applications (and browsers) exactly what happened.",
    keypoints: [
      "<code>200s (Success):</code> OK, Created, No Content.",
      "<code>300s (Redirects):</code> Moved permanently, redirecting.",
      "<code>400s (Client Errors):</code> 400 Bad Request, 401 Unauthorized, 404 Not Found.",
      "<code>500s (Server Errors):</code> 500 Internal Server Error (you broke your code).",
    ],
    code: `app.post('/register', (req, res) => {
  const { email } = req.body;
  if(!email) {
    // 400 means the user messed up (Bad Request)
    return res.status(400).json({ error: "Email is required!" }); 
  }
  
  // 201 means 'Created'
  res.status(201).json({ msg: "User successfully registered!" });
});`,
    outputHtml: `<div style="border: 2px solid #ccc; padding: 15px; border-radius: 8px;">
      <strong>Response Status Simulation</strong><br><br>
      <span style="background: #e11d48; color: white; padding: 3px 8px; border-radius: 4px;">404 Not Found</span> The resource doesn't exist.<br><br>
      <span style="background: #10b981; color: white; padding: 3px 8px; border-radius: 4px;">200 OK</span> Everything worked perfectly.
    </div>`,
    pitfall:
      "Always returning '200 OK', even on failures, while just putting an 'error' inside the JSON payload. Frontend apps rely on actual status headers to block failed operations correctly.",
    challenge: ["Research what Status Code 418 means online."],
  },
  middleware: {
    title: "Middleware Operations",
    why: "Middleware is the glue that connects Express routes. It allows you to intercept a request, inspect it (e.g., verifying a token), alter it, or reject it before it even hits your route handler.",
    keypoints: [
      "Middleware functions have access to <code>req</code>, <code>res</code>, and <code>next</code>.",
      "You MUST call <code>next()</code> to move on to the next function, otherwise the request hangs infinitely.",
      "Can be global (<code>app.use()</code>) or route-specific.",
    ],
    code: `// A simple logging middleware
const logger = (req, res, next) => {
  console.log(\`\${req.method} request made to: \${req.url}\`);
  next(); // Pass control to the next handler
};

// Apply globally
app.use(logger);

// Or apply specifically to one route
app.get('/dashboard', logger, (req, res) => {
  res.send("Welcome to the Admin Dashboard");
});`,
    outputHtml: `<div style="background: #2a2a2a; color: #a9dc76; padding: 20px; font-family: monospace; border-radius: 8px;">
      > GET request made to: /dashboard<br>
      <span style="color:#5c6370;">[Middleware allowed passage. Rendering dashboard.]</span>
    </div>`,
    pitfall:
      "Forgetting to call next(). If you don't res.send() and don't call next(), the browser will spin waiting for the server until a timeout error occurs.",
    challenge: [
      "Create a middleware that checks if `req.query.admin === 'true'`. If so, use next(). Otherwise, return a 403 Forbidden.",
    ],
  },
  mysql_intro: {
    title: "Why use MySQL with Node.js?",
    why: "Nodes and Servers die, restart, and lose data constantly. Databases like MySQL make your data permanent. We pair Node.js with MySQL to save things like users, passwords, or posts securely.",
    keypoints: [
      "MySQL is a Relational Database Management System (RDBMS) storing data in tables (rows & columns).",
      "It requires a strict fixed schema, meaning every entry in a table behaves the exact same way.",
      "It's perfect for complex relationships. Ex: 'An Order belongs to a User'.",
    ],
    code: `// Think of this like a massive un-deletable Excel spreadsheet.
// Tables interact with each other via 'Primary' and 'Foreign' IDs.

+----+---------+------------------------+
| ID | User    | Email                  |
+----+---------+------------------------+
| 1  | Admin   | admin@gmail.com        |
| 2  | Student | student@gmail.com      |
+----+---------+------------------------+`,
    outputHtml: `<div style="background: #f1f8ff; padding: 20px; border-left: 6px solid #489ce3;">
      <strong style="color: #0366d6;">MySQL Architecture:</strong> Data is organized perfectly. Unlike JSON or NoSQL databases that can be chaotic, SQL databases guarantee every piece of data is structurally sound and strictly formatted.
    </div>`,
    pitfall:
      "Trying to save data directly into local Node.js variables instead of a Database. If your server application restarts, every single javascript variable is instantly destroyed forever.",
    challenge: [
      "Compare a SQL Table to an Excel document. What acts as a column? What acts as a Row?",
    ],
  },
  mysql_install: {
    title: "Installing MySQL & Driver",
    why: "You cannot simply start typing SQL commands into Node.js. First, you must install the MySQL software on your physical computer, then install the Node.js translation wrapper (the 'driver').",
    keypoints: [
      "Install the actual MySQL Server from mysql.com or use something like XAMPP.",
      "Inside your Node.js project terminal, you install a specific package: <code>npm install mysql2</code>.",
      "The 'mysql2' package is preferred over the older 'mysql' package because it natively supports modern async/await Promises.",
    ],
    code: `# In your terminal, setup the driver module
npm install mysql2`,
    outputHtml: `<div style="background: #2a2a2a; border-left: 4px solid #cb3837; padding: 15px; color: #fff; font-family: monospace;">
      <span style="color: grey;">> Downloading drivers...</span><br>
      <span style="color: #61afef;">npm install mysql2</span><br>
      <span style="color: #a9dc76;">+ mysql2@3.9.1</span><br>
      added 20 packages in 2.3s
    </div>`,
    pitfall:
      "Forgetting to start your physical MySQL database server before trying to connect it to Node.js. Node will immediately throw a 'Connection Refused' error.",
    challenge: ["Install the 'mysql2' package into your node project."],
  },
  mysql_connect: {
    title: "Connecting Node to MySQL",
    why: "To send and receive data, your Node backend has to 'dial' a connection into your MySQL database server securely.",
    keypoints: [
      "We use <code>mysql.createConnection()</code> to establish the link.",
      "We must give the driver the Database <b>Host, User, Password,</b> and <b>Database Name</b>.",
      "Never hardcode your passwords. They belong in an invisible highly-secure <code>.env</code> file.",
    ],
    code: `const mysql = require('mysql2/promise');

// Establishing the database link
async function connectDB() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'my_secret_password',
      database: 'studbridge_db'
    });
    
    console.log("MySQL Database gracefully connected!");
    return connection;
  } catch (error) {
    console.log("Database connection failed!", error.message);
  }
}

connectDB();`,
    outputHtml: `<div style="display: flex; gap: 20px; align-items: center; padding: 20px; background: white; border: 1px solid #ccc; border-radius: 8px;">
      <button onclick="
        const o = document.getElementById('mysql-conn-out');
        o.innerText = 'Connecting...';
        o.style.color = '#eeaa00';
        setTimeout(() => {
           o.innerText = '✅ Connection OK: studbridge_db';
           o.style.color = 'green';
        }, 1200);
      " style="padding: 10px; background: #3e6e93; color: white; border: none; cursor:pointer;">Test DB Connection</button>
      <div id="mysql-conn-out" style="font-family: monospace; font-weight: bold;">[Awaiting Connection]</div>
    </div>`,
    pitfall:
      "Pushing your `my_secret_password` to GitHub openly! Anyone who finds your code can now login to your database and steal your company's user data. Always use environment variables.",
    challenge: [
      "Create a connection file using `mysql2/promise` and successfully log 'Connected' to the terminal.",
    ],
  },
  mysql_queries: {
    title: "Executing SQL Queries",
    why: "Now that you are connected, it's time to speak SQL. You need to manipulate the database natively using Javascript template strings.",
    keypoints: [
      "The classic CRUD functions apply: CREATE, READ, UPDATE, DELETE.",
      "Use <code>connection.execute()</code> when using async/await from the 'mysql2' package.",
      "<b>Always</b> use prepared parameters (the <code>?</code> symbol) to prevent malicious hackers from destroying your database through SQL Injection.",
    ],
    code: `async function fetchUsers(connection) {
  // Using the ? symbol protects against injections
  const [rows] = await connection.execute(
    'SELECT name, email FROM users WHERE role = ?', 
    ['student']
  );
  
  console.log("Found students:", rows);
}

// Inserting a new user
async function insertUser(connection, username) {
  const query = 'INSERT INTO users (name) VALUES (?)';
  const [result] = await connection.execute(query, [username]);
  console.log("New user ID:", result.insertId);
}`,
    outputHtml: `<div style="background: #282c34; padding: 20px; color: #abb2bf; font-family: monospace; border-radius: 8px;">
      <span style="color: #c678dd;">await</span> connection.execute(<br>
      &nbsp;&nbsp;<span style="color: #98c379;">"SELECT * FROM accounts WHERE id = ?"</span>, [1]<br>
      );<br>
      <br><span style="color: #5c6370;">// Results:</span><br>
      [ { id: 1, type: "pro", balance: 500.00 } ]
    </div>`,
    pitfall:
      "Injecting user input directly into your SQL string template (e.g. `SELECT * FROM users WHERE name = '${req.body.name}'`). This allows hackers to inject SQL statements directly into your DB, instantly crashing it or deleting it.",
    challenge: [
      "Write a connection.execute() command that runs an `UPDATE` query changing a user's password where the ID matches `?`.",
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
      ${data.explanation ? `<br><br><span style="font-size: 15px; color: #555; display:block;"><strong>Deep Dive:</strong> ${data.explanation}</span>` : ""}
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

    <div class="challenge-box">
      <h3 class="challenge-title">Quick Challenge</h3>
      ${challengeHtml}
    </div>
  `;

  // Update active state in sidebar
  navItems.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.topic === topicKey) {
      btn.classList.add("active");
    }
  });

  // Scroll to top
  window.scrollTo(0, 0);

  // Focus management
  lessonContainer.setAttribute("tabindex", "-1");
  lessonContainer.focus();
}

// Attach event listeners to nav buttons
navItems.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const topic = e.target.dataset.topic;
    if (topic) {
      renderTopic(topic);
      // Close sidebar on mobile after clicking
      if (window.innerWidth <= 1200) {
        sidebar.classList.remove("open");
      }
    }
  });
});

// Initialize with the first selected topic (intro)
renderTopic("intro");
