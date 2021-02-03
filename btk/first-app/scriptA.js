/*
var controllerA = (function(){
    var age = 32;
    var firstName = "Mesut";

    var writeLog = function(){
        console.log(this.firstName);
    }

    return{
        firstName,
        writeLog
    }

})();
*/


// NodeJs
var age = 30;
var firstName = "Mesut";
var log = function(name){
    console.log(name);
}

module.exports.name = firstName;
module.exports.log = log;

module.exports = {
    name: firstName,
    log: log
}