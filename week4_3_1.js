const path = require('node:path'); 

var x=path.relative('C:\d22it201\week4\week4_1_1.js', '\d22it201\')
if(x==""){
console.log("This is the same file path",x);}
else{
    console.log("This is not the file path ",x);
}