var url = require("url");
var addr = "http://localhost:8080/monitoring?year=2020&name=dede";

var urlParse = url.parse(addr,true);
console.log(urlParse.host);
console.log(urlParse.pathname);
console.log(urlParse.search);

var qdata = urlParse.query;
console.log(qdata.year);
console.log(qdata.name);
