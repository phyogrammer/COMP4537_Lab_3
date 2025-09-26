const greetings = require("../lang/en/en.js");
const utils = require("./utils.js");

class Greetings {
    static greetings(req, res, queryParams) {
        const name = queryParams["name"];

        const personalizedGreetings = this.formattedGreetings(name);

        res.writeHead(200, { "Content-type": "text/html" });
        res.end(personalizedGreetings);
    }

    static formattedGreetings(name) {
        const greetingText = greetings.greetings.replace("%1", name);
        const currentDate = utils.getDate();

        return `<span style="color: blue; font-weight: bold">${greetingText} ${currentDate}</span>`
    }
}

module.exports = Greetings;