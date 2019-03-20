const yaml = require("yaml");
const path = require("path");
const fs = require("fs");

const file = fs.readFileSync(path.resolve(__dirname, "commands.yaml"), "utf8");
const commands = yaml.parse(file);
console.log(commands);

module.exports = commands;
