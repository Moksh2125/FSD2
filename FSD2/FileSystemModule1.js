const fs = require("fs");
// fs.mkdirSync("node");
var s = "Hellow World"
fs.writeFileSync("node/rw.txt",s);   // use to rewrite file
fs.appendFileSync("node/rw.txt", "\n Welcome");   // Use to append file
var data = fs.readFileSync("node/rw.txt");  // gives buffer data, to read, can use parameter "utf-8" to get in string
console.log(data)      
console.log(data.toString())
fs.renameSync("node/rw.txt", "node/test.txt")  // The rw is renamed to test.txt
fs.unlinkSync("node/test.txt")    //  unlink is use to delete the particular file.
