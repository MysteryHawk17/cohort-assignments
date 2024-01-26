const fs = require("fs");

const data = "Sample text to be written in file "

fs.writeFile('easy4file.txt', data, "utf-8", (err) => {
    if (err) console.log(err);
    else console.log("written successfully");
})

