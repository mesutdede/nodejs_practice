const http = require("http");
const fs = require("fs");

http.createServer(function(req,res){
    //res.writeHead(200, {"Content-Type":"text/html"});
    // fs.readFile("sample.html", function(err,data){        
    //     res.write(data);        
    //     res.end();
    // });

    fs.appendFile("progs.txt","Javascript",function(err){
        if (err) throw err;
        console.log("done!");
    });

    fs.open("newFile.txt","w",function(err){}); // open new file
    fs.unlink("newFile.txt",function(err){}); // remove file
    fs.rename("newFile.txt","new_file.txt",function(err){}); // rename file name
    
}).listen(8080);