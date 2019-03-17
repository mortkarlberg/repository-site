const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(express.static("www"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/terminal/commands/:command", (req, res) => {
    console.log("Incoming terminal command:", req.params.command, req.body);
    //TODO handle request
    //TODO write back response
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
