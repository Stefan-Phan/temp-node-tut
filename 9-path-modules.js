const path = require('path')


console.log(path.sep)

// Get the path of the test.txt from the current app.js path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// Print the file name
const base = path.basename(filePath)
console.log(base)

// Get the whole path of the test.txt
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute)