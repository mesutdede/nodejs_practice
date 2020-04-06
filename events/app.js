/*const fs = require("fs");

var rs = fs.createReadStream("./test.txt");
rs.on('open',function(){
    console.log("File opened.");
});
*/
const events = require("events");
var eventEmitter = new events.EventEmitter();

var myFunc = function(){
    console.log("My function is running...");
}

eventEmitter.on("myFunc_event", myFunc);

eventEmitter.emit("myFunc_event");