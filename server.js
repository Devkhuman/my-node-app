const express = require('express');
const app = express();

const PORT = process.env.PORT || 3002; // Use PORT from the environment variable or default to 3001

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server }; // Export both app and server for test usage
