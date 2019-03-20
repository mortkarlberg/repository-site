const express = require("express");
const commandHandler = require("./handlers/command/command-handler");

const app = express();
app.use(express.static("www"));
app.use(express.json());

app.post("/terminal/commands", (req, res) => {
  console.log("Incoming terminal command:", req.body);
  commandHandler.handleRequest(req, res);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
