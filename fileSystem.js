var fs = require("fs");

fs.appendFile("text.txt", "\nSecond", (err) => {
  if (err) throw err;
  console.log("Succesfull");
});
