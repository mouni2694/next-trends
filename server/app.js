const express = require("express");

const fs = require("fs");

const cors = require("cors");

const bodyParser = require("body-parser");
const app = express();

const jsonParser = bodyParser.json();

app.use(cors());

const userDataFile = fs.readFileSync("assets/user.json");
const userData = JSON.parse(userDataFile);

/**
 * Check If Valid User.
 */

app.post("/login", jsonParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(400);
  }

  const { username, password } = req.body;

  console.log(`req.body: ${req}, username: ${username}, password: ${password}`);
  const userIndex = userData.findIndex((user) => user.username === username);

  if (userIndex === -1) {
    return res.status(400).json("User Not Found");
  }

  if (userData[userIndex].password !== password) {
    return res.status(400).json("Invalid Password");
  }

  return res.status(200).json("OK");
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});
