const http = require("http");
const url = require("url");

const greetings = require("./lang/en/en.js");
const datatime = require("./modules/utils.js");

http.createServer(function(req, res){
    const query = url.parse(req.url, true);

    const name = query.query["name"];
    const presonalizedGreetings = `${greetings.greetings.replace("%1", name)} ${datatime.getDate()}`;

    res.writeHead(200, {
        "Content-type": "text/html"
    });
    res.end(presonalizedGreetings);
}).listen(8080);

console.log(`Server is running and listening...`);
