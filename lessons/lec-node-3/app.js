const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const y = yargs(hideBin(process.argv));
const { addUser } = require('./handlers-mangments');

y.command({
    command: "add",
    describe: "add items",
    builder: {
        id: {
            describe: "this is user id desc",
            demandOption: true,
            type: "number"
        },
        fname: {
            describe: "this the first name desc in command",
            demandOption: true, // this feild required
            type: "string"
        },
        lname: {
            describe: "this the last name desc in command",
            demandOption: false, // this feild isn't requierd
            type: "string"
        },
        city: {
            describe: "this is city desc in command",
            demandOption: true,
            type: "string"
        },
        age: {
            describe: "this user age desc",
            demandOption: true,
            type: "number"
        }
    },
    handler: (x) => {
        const { id, fname, lname, age, city } = x;
        const status = addUser(id, fname, lname, age, city);
        console.log(status)
    }
})


y.command({
    command: "delete",
    describe: "delete items",
    builder: {
        id: {
            describe: "use id to delete user",
            demandOption: true,
            type: "string",
        }
    },
    handler: () => {
        console.log("user was deleted success")
    }
})

// ensure yargs parses argv and runs the matching command
y.parse();
