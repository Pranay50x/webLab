const fs = require("fs");
const path = require("path");

const fp = path.join(__dirname, "package.json");
const fp2 = path.join(__dirname, "new1.txt");

fs.readFile(fp, "utf-8", (err, content) => {
  if (err) {
    throw err;
  }
  console.log(`File Content:`);
  console.log(content);
});

fs.writeFile("new.txt", "this is new file data ", (err) => {
  if (err) throw err;
});

fs.appendFile(fp2, " my name is Pranay", (err) => {
  if (err) throw err;
  console.log("Data Appended to file!");
});

// fs.unlink(fp2, (err) => {
//    if (err) throw err;
//    console.log("File deleted! ");
//  });
