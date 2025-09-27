const fs = require("fs");

const FILENAME = "/tmp/file.txt";

class File {
    static writeFile(req, res, queryParams) {
        const text = queryParams["text"];

        if (!text) {
            res.writeHead(400, { "Content-type": "text/html" });
            res.end("Error: Missing text parameter!");
            return;
        }

        fs.appendFile(FILENAME, text + "\n", (error) => {
            if (error) {
                res.writeHead(500, { "Content-type": "text/html" });
                res.end(`Error writing file: ${error.message}`);
                return;
            }

            res.writeHead(200, { "Content-type": "text/html" });
            res.end(`The content "${text}" was appended to file ${FILENAME}`);
        });
    }

    static readFile(req, res) {
        fs.readFile(FILENAME, "utf8", (error, data) => {
            if (error) {
                res.writeHead(500, { "Content-type": "text/html" });
                res.end(`Error reading file: ${error.message}`);
                return;
            }

            res.writeHead(200, { "Content-type": "text/html" });
            res.end(data);
        });
    }
}

module.exports = File;