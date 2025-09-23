const http = require("http");
const url = require("url");
const fs = require("fs");

const greetings = require("./lang/en/en.js");
const utils = require("./modules/utils.js");

const FILENAME = "file.txt";

http.createServer(function (req, res) {
    const query = url.parse(req.url, true);

    if (query.pathname === "/COMP4537/labs/3/writeFile/") {
        const text = query.query["text"];

        fs.appendFile(FILENAME, text + "\n", (err) => {
            if (err) {
                res.writeHead(200, {
                    "Content-type": "text/html"
                }); 
                res.end(err);
            }

            res.writeHead(200, {
                "Content-type": "text/html"
            });
            res.end(`The content "${text}" was appended to file ${FILENAME}`);
        });
    } else if (query.pathname === "/COMP4537/labs/3/readFile/file.txt") {
        fs.readFile(FILENAME, "utf8", (err, data) => {
            if (err) {
                res.writeHead(200, {
                    "Content-type": "text/html"
                });
                res.end(err);
            }

            res.writeHead(200, {
                "Content-type": "text/html"
            });
            res.end(data);
        });
    } else {
        const name = query.query["name"];
        const presonalizedGreetings = `<span style="color: blue; font-weight: bold">${greetings.greetings.replace("%1", name)} ${utils.getDate()}</span>`;

        res.writeHead(200, {
            "Content-type": "text/html"
        });
        res.end(presonalizedGreetings);
    }
}).listen(8080);

console.log(`Server is running and listening...`);
