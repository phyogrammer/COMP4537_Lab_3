const http = require("http");
const Router = require("./modules/router.js")

class Server {
    // for local development
    static startLocal() {
        const server = http.createServer((req, res) => {
            try {
                Router.handleRequest(req, res);
            } catch (error) {
                console.log("Error: ", error);
                res.writeHead(500, { "Content-type": "text/html" });
                res.end("Internal Server Error");
            }
        });

        server.listen(8080);
        console.log("Server is running and listening on port 8080...");

        return server;
    }

    // for vercel
    static startVercel(req, res) {
        try {
            Router.handleRequest(req, res);
        } catch (error) {
            console.log("Error: ", error);
            res.writeHead(500, { "Content-type": "text/html" });
            res.end("Internal Server Error");
        }
    }
}

// Start server for local development
if (require.main === module) {
    Server.startLocal();
} else {
    module.exports = Server.startVercel;
}
