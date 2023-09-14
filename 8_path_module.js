const path = require('path');

console.log(path.sep) // /

const filePath = path.join('/content', 'subContent', 'test.txt') //\content\subContent\test.txt
console.log(filePath)

const base = path.basename(filePath) // test.txt
console.log(base) 

const absolut = path.resolve(__dirname, 'content', 'subContent', 'test.txt') //C:\Users\DELL\Music\nodejs_express\content\subContent\test.txt
console.log(absolut)

