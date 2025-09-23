import fs from "fs";

const getDate = function () {
    return Date();
}

const appendToFile = function (filename, content) {
    fs.appendFile(filename, content + "\n", (err) => {
        if (err) {
            return err;
        }
    });
    return (`The content "${content}" was appended to file ${filename}`);
}

const readFromFile = function (filename) {
    fs.readFile(filename, "utf8", (err, data) => {
        if (err) {
            return err;
        }
        return data;
    });
}

export { getDate, appendToFile, readFromFile }