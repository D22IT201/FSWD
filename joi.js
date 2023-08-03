var validator = require('validator');
var x=validator.isEmail('foo@bar.com'); //=> true
console.log("isEmail",x);
var y=validator.isDivisibleBy("10",2);
console.log("isDivisibleBy",y);