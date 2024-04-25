const fs = require("fs");

//sync (blocking)
fs.writeFileSync("log.txt", "text");

//async (non-blocking)
fs.writeFile("log.txt", "text2", (err) => {
  if (err) throw err;
});

const readF = fs.readFileSync("./log-2.txt", "utf-8");
console.log("readFileSync", readF);

fs.readFile("log-2.txt", "utf-8", (err, data) => {
  if (err) throw err;

  console.log("readFile", data);
});
