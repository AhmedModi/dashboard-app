const express = require('express');
const app = express();

// Serve the login page on the root route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Login Page</title>
      </head>
      <body>
        <h2>Login</h2>
        <form action="/login" method="POST">
          <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </body>
    </html>
  `);
});

// Handle the login form submission (POST request)
app.post('/login', (req, res) => {
  // In a real application, here you'd check the credentials.
  // For this example, we're just sending a success message.
  res.send('<h2>Login successful!</h2>');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
