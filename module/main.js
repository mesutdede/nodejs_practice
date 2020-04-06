const http = require("http");
var date = require("./date-module");

http.createServer(function(req,res){
    if(req.url == "/home") res.write("Welcome loooo");
    res.end();
    //res.end(date.currentDate());
}).listen(8090);