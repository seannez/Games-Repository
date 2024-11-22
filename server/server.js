const express = require('express');
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
  console.log('Happy hacking :)')
});

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});


