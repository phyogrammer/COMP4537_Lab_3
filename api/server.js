const http = require("http");
const Router = require("./modules/router.js")

class Server {
    static start() {
        const server = http.createServer((req, res) => {
            try {
                Router.handleRequest(req, res);
            } catch (error) {
                console.log("Error: ", error);
                res.writeHead(500, { "Content-type": "text/html" });
                res.end("Internal Server Error");
            }
        });

        // For local development
        if (process.env.NODE_ENV !== 'production') {
            server.listen(8080);
            console.log("Server is running and listening on port 8080...");
        }

        return server;
    }

    // Vercel handler function
    static handler(req, res) {
        try {
            Router.handleRequest(req, res);
        } catch (error) {
            console.log("Error: ", error);
            res.writeHead(500, { "Content-type": "text/html" });
            res.end("Internal Server Error");
        }
    }
}

// Export for Vercel
module.exports = Server.handler;

// Start server for local development
if (require.main === module) {
    Server.start();
}
