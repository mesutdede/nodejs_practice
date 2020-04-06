var http = require("http");

http.createServer(function(req,res){
    res.end("Web server running...");
}).listen(8080);