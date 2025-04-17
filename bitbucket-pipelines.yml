const express = require('express');
const app = express();

// Serve the login page on the root route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Login Page</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .login-container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
          }
          h2 {
            text-align: center;
            color: #333;
          }
          .form-group {
            margin-bottom: 20px;
          }
          label {
            font-size: 14px;
            color: #555;
            display: block;
            margin-bottom: 8px;
          }
          input[type="text"],
          input[type="password"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
            color: #333;
          }
          button {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            border: none;
            border-radius: 4px;
            color: white;
            font-size: 16px;
            cursor: pointer;
          }
          button:hover {
            background-color: #45a049;
          }
        </style>
      </head>
      <body>
        <div class="login-container">
          <h2>Login</h2>
          <form action="/login" method="POST">
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
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
