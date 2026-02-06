// modules 

// 1- core modules internal libraries in node js (built in)
const fs = require("fs") // fs ==> files system ( built in node js )

// to storge data in files
// fs.writeFileSync("file name ", 'something that want storge in this file')
fs.writeFileSync("data.txt", "Hello World!")

// read data from files
// fs.readFileSync("file name")  ( return [buffer] data type )

console.log(fs.readFileSync("data.txt").toString())

// add data to file
// fs.appendFileSync("file path", "any data want to storge");

fs.appendFileSync('data.txt', "\nI love javascript");
console.log(fs.readFileSync("data.txt").toString())

// get data from external file
const { firstName, lastName } = require("./data1.js")
console.log(firstName+" "+lastName)

// 2- npm (external packges)  (Node Package Manager)