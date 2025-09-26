const http = require("http");
const Router = require("./modules/router");

class Server {
    static start() {
        http.createServer((req, res) => {
            try {
                Router.handleRequest(req, res);
            } catch (error) {
                console.log("Error: ", error);
                res.writeHead(500, { "Content-type": "text/html" });
                res.end("Internal Server Error");
            }
        }).listen(8080);

        console.log("Server is running and listening...")
    }
}

module.exports.Server.start();
