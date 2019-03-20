const commands = require("./commands");

class CommandHandler {
  validateCommand(req, res) {
    const command = req.body.command;
    let response = commands[command];
    console.log(response);

    if (!response)
      return { valid: false, response: { type: "TT", value: "Unknown command " + command }};

    if (response.alias)
      response = commands[response.alias];

    return { valid: true, command, response };
  }

  handleRequest(req, res) {
    const request = this.validateCommand(req, res);
    console.log(request);

    if(!request.valid)
      return res.json(request.response);

    res.json(request.response);
  }
}

module.exports = new CommandHandler();
