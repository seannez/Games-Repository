const express = require('express');
const mongoose = require('mongoose')
const Game = require('../models/game')
console.log(Game)

const app = express();
const port = 5000;

//Database connection
const dbURI = "mongodb+srv://test:password123456789@nodetuts.rhm0m.mongodb.net/"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log(`Connected to MongoDB: ${result.connections[0].name}`);  // Logs the connected database name
  })
  .catch((error) => {
    console.log("Connection error: ", error);
  });

//Start
app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
  console.log('Happy hacking :)')
});

app.get('/mygames', (req, res) => {
  const game = new Game({
    title: "AAAAA"
  })
  console.log('Game to be saved:', game);
  game.save()
    .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
      console.log(err)
    })
});
