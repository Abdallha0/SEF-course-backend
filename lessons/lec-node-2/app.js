const fs = require("fs")
// process.argv
//1- node instaillization location
//2- app url location
console.log(process.argv)

// node app.js abdallha   ( third index )
const command = process.argv[2];

if (command === "abdallha") {
    console.log("Hi " + process.argv[2])
} else {
    console.log("ERROR")
}

// to write object key: value  ( --key="value")
// to interact with terminal to parse arguments 

const yargs = require('yargs')
// yargs.argv // parse argv from string to object
console.log(yargs.argv)

yargs.command({
    command: "command name",
    describe: "command describetion",
    builder: {
        fname: {
            describe: "this the first name desc in command",
            demandOption: true, // this feild required
            type: "string"
        },
        lname: {
            describe: "this the last name desc in command",
            demandOption: false, // this feild isn't requierd
            type: "string"
        }
    },
    handler: () => {
        console.log("any code")
    }
})
console.log(yargs.argv)

// node app.js add --fname="Abdallha" --lname="Mohamed"