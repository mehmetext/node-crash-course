const fs = require("fs");

/* //sync (blocking)
fs.writeFileSync("log.txt", "text");

//async (non-blocking)
fs.writeFile("log.txt", "text2", (err) => {
  if (err) throw err;
});

console.log(1);
const readF = fs.readFileSync("./log-2.txt", "utf-8");
console.log("readFileSync", readF);
console.log(2);

console.log(3);
fs.readFile("log-2.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(4);

  console.log("readFile", data);
});
console.log(5); */

// fs.appendFileSync("log.txt", "eleman eklendi");
// fs.unlinkSync("log.txt"); //Dosyayı siler.
fs.mkdirSync("test/test");
