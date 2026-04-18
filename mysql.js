const topics = {
  intro: {
    title: "1. What is MySQL?",
    why: "Databases hold the world's data. Relational databases like MySQL use structured tables to store information, making it fast and reliable to retrieve, filter, and organize massive amounts of records.",
    keypoints: [
      "MySQL is a Relational Database Management System (RDBMS).",
      "It uses SQL (Structured Query Language).",
      "Data is organized into rows (records) and columns (fields).",
    ],
    code: `-- Example: To show all databases in your server
SHOW DATABASES;`,
    outputHtml: `
      <table class="sql-results">
        <tr><th>Database</th></tr>
        <tr><td>information_schema</td></tr>
        <tr><td>studbridge_db</td></tr>
        <tr><td>users</td></tr>
      </table>`,
    pitfall:
      "Forgetting the semicolon (;) at the end of a query is a very common beginner mistake. SQL needs to know where your instruction ends!",
    challenge:
      "Try visualizing a table for a 'Store'. What columns would it have? (e.g., id, item_name, price, quantity)",
  },
  tables: {
    title: "2. Databases & Tables",
    why: "Before you can store data, you need to create a database and set up tables with specific data types (like numbers, text, or dates) so the system knows what to expect.",
    keypoints: [
      "CREATE DATABASE name; makes a new database.",
      "USE name; selects the database to work in.",
      "CREATE TABLE defines the structure of your data.",
    ],
    code: `-- Create a database for an online store
CREATE DATABASE my_store;
USE my_store;

-- Create a table with defined columns
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  price DECIMAL(10, 2),
  in_stock BOOLEAN
);`,
    outputHtml: `<p style="color: #28a745; font-family: monospace; margin: 0;">Query OK, 0 rows affected (0.01 sec)</p>`,
    pitfall:
      "Not defining a PRIMARY KEY is a huge mistake. A primary key uniquely identifies each record in a table, ensuring you don't accidentally update or delete the wrong row.",
    challenge:
      "Can you think of how you would write a query to create a table called 'users' with 'id', 'username', and 'email'?",
  },
  insert: {
    title: "3. Inserting Data",
    why: "Once your table structure exists, you need to populate it. The INSERT INTO command lets you add new rows into your specific columns.",
    keypoints: [
      "Specify both the columns and the values corresponding to those columns.",
      "Text (strings) must be wrapped in single quotes 'like this'.",
    ],
    code: `-- Insert a single record
INSERT INTO products (name, price, in_stock) 
VALUES ('Laptop', 999.99, true);

-- Insert multiple records at once
INSERT INTO products (name, price, in_stock) 
VALUES 
  ('Mouse', 25.50, true),
  ('Keyboard', 45.00, false);`,
    outputHtml: `<p style="color: #28a745; font-family: monospace; margin: 0;">Query OK, 3 rows affected (0.00 sec)<br>Records: 3  Duplicates: 0  Warnings: 0</p>`,
    pitfall:
      "Make sure the order of your VALUES matches the exact order of the columns you specified in the INSERT INTO clause.",
    challenge:
      "What happens if you try to insert a text string into a column that was defined as an INT type?",
  },
  select: {
    title: "4. SELECT & FROM",
    why: "SELECT is the most commonly used SQL command. It's how you read and retrieve data from your tables.",
    keypoints: [
      "SELECT * retrieves ALL columns.",
      "You can retrieve specific columns by listing them separated by commas.",
      "FROM tells SQL which table you want to read.",
    ],
    code: `-- Retrieve every column from the products table
SELECT * FROM products;

-- Retrieve only the name and price
SELECT name, price FROM products;`,
    outputHtml: `
      <table class="sql-results">
        <tr><th>name</th><th>price</th></tr>
        <tr><td>Laptop</td><td>999.99</td></tr>
        <tr><td>Mouse</td><td>25.50</td></tr>
        <tr><td>Keyboard</td><td>45.00</td></tr>
      </table>`,
    pitfall:
      "Using SELECT * on enormous tables with millions of rows can slow down your database significantly. Only query the columns you actually need.",
    challenge:
      "Write a mental query to get just the 'email' column from a 'users' table.",
  },
  where: {
    title: "5. Filtering Details (WHERE)",
    why: "You rarely want to see all the data at once. The WHERE clause acts as a filter, allowing you to set conditions to find specific rows.",
    keypoints: [
      "Use operators like =, >, <, >=, <=, and !=.",
      "Combine conditions using AND, OR.",
      "Use LIKE for fuzzy string matching.",
    ],
    code: `-- Find items under $50
SELECT name, price 
FROM products 
WHERE price < 50.00;

-- Find specific names
SELECT * FROM products
WHERE name = 'Laptop' AND in_stock = true;`,
    outputHtml: `
      <table class="sql-results">
        <tr><th>name</th><th>price</th></tr>
        <tr><td>Mouse</td><td>25.50</td></tr>
        <tr><td>Keyboard</td><td>45.00</td></tr>
      </table>`,
    pitfall:
      "When using string values in a WHERE clause, always use single quotes. 'Laptop' works, but \"Laptop\" or Laptop will cause syntax errors.",
    challenge:
      "How would you find a product WHERE the price is greater than 100 AND in_stock is false?",
  },
  order: {
    title: "6. ORDER BY",
    why: "By default, SQL returns data in the order it was inserted or processed. ORDER BY lets you sort your results alphabetically or numerically.",
    keypoints: [
      "ASC sorts ascending (Default: A-Z, 0-9).",
      "DESC sorts descending (Z-A, 9-0).",
    ],
    code: `-- Sort products from cheapest to most expensive
SELECT name, price FROM products
ORDER BY price ASC;

-- Sort alphabetically in reverse
SELECT name FROM products
ORDER BY name DESC;`,
    outputHtml: `
      <table class="sql-results">
        <tr><th>name</th><th>price</th></tr>
        <tr><td>Mouse</td><td>25.50</td></tr>
        <tr><td>Keyboard</td><td>45.00</td></tr>
        <tr><td>Laptop</td><td>999.99</td></tr>
      </table>`,
    pitfall:
      "ORDER BY must always come AFTER your WHERE clause. If you mix up the order, the query will fail.",
    challenge:
      "What happens if you ORDER BY a text column? (It will sort it alphabetically!)",
  },
  limit: {
    title: "7. LIMIT & OFFSET",
    why: "When you have thousands of rows, you might only want the top few. LIMIT restricts the number of rows returned, which is essential for things like pagination.",
    keypoints: [
      "LIMIT X returns only X rows.",
      "OFFSET Y skips the first Y rows.",
    ],
    code: `-- Get the single most expensive product
SELECT name, price FROM products
ORDER BY price DESC
LIMIT 1;

-- Get the 2nd and 3rd items (Pagination)
SELECT name, price FROM products
LIMIT 2 OFFSET 1;`,
    outputHtml: `
      <table class="sql-results">
        <tr><th>name</th><th>price</th></tr>
        <tr><td>Mouse</td><td>25.50</td></tr>
        <tr><td>Keyboard</td><td>45.00</td></tr>
      </table>`,
    pitfall:
      "Using LIMIT without ORDER BY gives you unpredictable results, because tables aren't rigidly sorted by default. Always sort if you want a specific 'top' row.",
    challenge: "Write a query to get the top 5 cheapest items.",
  },
  joins: {
    title: "8. INNER & LEFT JOIN",
    why: "Relational databases shine because they relate tables together. A JOIN combines rows from two or more tables based on a related column between them.",
    keypoints: [
      "INNER JOIN returns records that have matching values in BOTH tables.",
      "LEFT JOIN returns all records from the left table, and the matched records from the right table.",
      "You specify the link using the ON keyword.",
    ],
    code: `-- Assuming we have an 'orders' table 
-- relating to our 'products' table via product_id
SELECT orders.id, products.name, orders.quantity
FROM orders
INNER JOIN products 
ON orders.product_id = products.id;`,
    outputHtml: `
      <table class="sql-results">
        <tr><th>id</th><th>name</th><th>quantity</th></tr>
        <tr><td>101</td><td>Laptop</td><td>2</td></tr>
        <tr><td>102</td><td>Mouse</td><td>1</td></tr>
      </table>`,
    pitfall:
      "Forgetting the ON clause will cause a Cartesian product (cross join), attempting to multiply every row in table A by every row in table B. This will break your database!",
    challenge:
      "What if an order doesn't have a matching product anymore? Which JOIN would still show the order?",
  },
  group: {
    title: "9. GROUP BY & Aggregation",
    why: "Sometimes you want summaries, not raw data. GROUP BY groups rows that have the same values into summary rows (like finding the total sales per product).",
    keypoints: [
      "Used alongside Aggregate Functions (COUNT(), MAX(), MIN(), SUM(), AVG()).",
      "Groups results by one or more columns.",
    ],
    code: `-- Count how many products are in stock vs out of stock
SELECT in_stock, COUNT(*) as total_items
FROM products
GROUP BY in_stock;

-- Find the average price of products
SELECT AVG(price) as average_price
FROM products;`,
    outputHtml: `
      <table class="sql-results">
        <tr><th>in_stock</th><th>total_items</th></tr>
        <tr><td>1 (true)</td><td>2</td></tr>
        <tr><td>0 (false)</td><td>1</td></tr>
      </table>`,
    pitfall:
      "If you select a column that isn't inside your GROUP BY clause, and it's not an aggregate function, MySQL will throw a 'Grouping' error.",
    challenge: "How would you get the SUM() of total sales for each day?",
  },
  having: {
    title: "10. HAVING Clause",
    why: "You cannot use a WHERE clause to filter aggregated data (like sums and counts). The HAVING clause was added to SQL specifically to filter aggregate functions.",
    keypoints: [
      "WHERE filters raw rows.",
      "HAVING filters 'groups' after aggregation.",
    ],
    code: `-- Find product categories that have 
-- an average price higher than $50
SELECT category, AVG(price) as avg_price
FROM products
GROUP BY category
HAVING AVG(price) > 50.00;`,
    outputHtml: `
      <table class="sql-results">
        <tr><th>category</th><th>avg_price</th></tr>
        <tr><td>Electronics</td><td>999.99</td></tr>
      </table>`,
    pitfall:
      "A common error is trying to write WHERE COUNT(*) > 5. You must use HAVING COUNT(*) > 5 after the GROUP BY clause.",
    challenge:
      "If you want to only count products currently in stock, and then filter groups with more than 10 total products, do you use WHERE, HAVING, or both?",
  },
};

const lessonContainer = document.getElementById("lesson");
const navItems = document.querySelectorAll(".nav-item");

function renderTopic(topicId) {
  const data = topics[topicId];
  if (!data) return;

  const keypointsHtml = data.keypoints.map((kp) => `<li>${kp}</li>`).join("");

  lessonContainer.innerHTML = `
    <h1 class="lesson-title">${data.title}</h1>
    
    <div class="mentor-box">
      <strong>The Concept:</strong> ${data.why}
    </div>

    <h2 class="section-heading">Key Takeaways</h2>
    <ul class="key-list">
      ${keypointsHtml}
    </ul>

    <h2 class="section-heading">SQL Code Example</h2>
    <div class="code-block">
      <pre><code>${data.code}</code></pre>
    </div>

    <div class="output-section">
      <h3 class="output-title">Simulated SQL Result:</h3>
      ${data.outputHtml}
    </div>

    <p class="section-text">
      <strong>⚠️ Wait, what's a common mistake?</strong><br>
      ${data.pitfall}
    </p>

    <div class="challenge-box">
      <h3 class="challenge-title">Quick Challenge</h3>
      <p class="challenge-text">${data.challenge}</p>
    </div>
  `;

  // Safely execute any script tags in the new HTML
  const scripts = lessonContainer.querySelectorAll("script");
  scripts.forEach((oldScript) => {
    const newScript = document.createElement("script");
    Array.from(oldScript.attributes).forEach((attr) => {
      newScript.setAttribute(attr.name, attr.value);
    });
    newScript.textContent = oldScript.innerHTML;
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
}

navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    navItems.forEach((nav) => nav.classList.remove("active"));
    const targetBtn = e.currentTarget;
    targetBtn.classList.add("active");

    const topic = targetBtn.getAttribute("data-topic");
    renderTopic(topic);

    // Close sidebar on mobile after selection
    if (window.innerWidth <= 1200) {
      document.getElementById("sidebar").classList.remove("open");
    }
  });
});

// Mobile menu toggling
document.getElementById("menu-btn").addEventListener("click", () => {
  document.getElementById("sidebar").classList.add("open");
});

document.getElementById("close-btn").addEventListener("click", () => {
  document.getElementById("sidebar").classList.remove("open");
});

// Load the first topic by default
renderTopic("intro");
