const file = require('./file');
const greetings = require('./greetings');

class Router {
    static handleRequest(req, res) {
        const url = require("url");
        const query = url.parse(req.url, true);
        const queryParams = query.query;
        const pathname = query.pathname;

        if (pathname.includes("writeFiles")) {
            file.writeFile(req, res, queryParams);
        } else if (pathname.includes("readFiles")) {
            file.readFile(req, res);
        } else {
            greetings.greetings(req, res, queryParams);
        }
    }
}

module.exports = Router;