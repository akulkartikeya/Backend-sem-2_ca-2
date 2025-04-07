const express = require('express');

const app = express();
const port = 8080;


app.get('/ping', (req, res) => {
  try {
    const { email } = req.query;
    if (!email) {
      return new Error('Email cannot be empty!');
    }
    res.send(`Pong! Email: ${email}`);
  }
  catch (error) {
    console.error(error.message);
    res.status(400).send(message,"Email cannot be empty!",error.error);
  }

  try {
    const { password } = req.query;
    if (!password) {
      return new Error('password cannot be empty!');
    }
    res.send(`Pong! password: ${password}`);
  }
  catch (error) {
    console.error(error.message);
    res.status(400).send(msg,"password cannot be empty!",error.error);
  }
});
