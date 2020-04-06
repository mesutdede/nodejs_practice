const http = require("http");
const uc = require("upper-case");
const ucf = require("upper-case-first");

console.log(uc.upperCase("learn npm ağa"));
console.log(ucf.upperCaseFirst("learn npm"));
console.log(ucf.upperCaseFirst("hello nodejs"));

http.createServer(function(req,res){
    res.write("Hello Nodejs, How are you");
    res.end();
}).listen(8080);