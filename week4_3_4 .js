const path = require('node:path'); 

var x=path.relative('C:\Users\Administrator\Documents\d22it201\week4\filea.txt', '\d22it201\week4\fileb.txt');
if(x==""){
console.log("This is the same file path",x);}
else{
    console.log("This is different path ",x);
}