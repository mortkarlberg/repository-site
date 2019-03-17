const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("www"));

app.post("/terminal/commands", (req, res) => {
    console.log("Incoming terminal command. Request:", req);
    //TODO handle request
    //TODO write back response
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
