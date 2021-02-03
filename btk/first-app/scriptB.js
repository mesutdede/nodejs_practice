/*
var controllerB = (function(){
    var age = 26;
    var firstName = "Dede";

    var writeLog = function(){
        console.log(this.firstName);
    }

    return{
        firstName,
        writeLog
    }

})();


console.log(controllerA.writeLog());
console.log(controllerB.writeLog());

console.log(window);
*/

const scriptA = require('./scriptA')

scriptA.log("Dede");
console.log(scriptA.name);