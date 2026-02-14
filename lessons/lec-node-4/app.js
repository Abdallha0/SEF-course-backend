const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const y = yargs(hideBin(process.argv));
const { addUser, deleteUser, showUsers, listData } = require('./handlers-mangments');

// add users
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
            describe: "first name is required",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "last name is required",
            demandOption: true,
            type: "string"
        },
        city: {
            describe: "city is required",
            demandOption: true,
            type: "string"
        },
        age: {
            describe: "age is required",
            demandOption: true,
            type: "number"
        }
    },
    handler: (x) => {
        const { id, fname, lname, age, city } = x;
        const res = addUser(id, fname, lname, age, city);
        console.log(res)
    }
})

// delete users
y.command({
    command: "delete",
    describe: "delete users",
    builder: {
        id: {
            describe: "needed id to delete user",
            type: "string",
        }
    },
    handler: (x) => {
        const { id } = x;
        const res = deleteUser(id);
        console.log(res)
    }
});

// show users
y.command({
    command: "view",
    describe: "show users",
    builder: {
        id: {
            describe: "id required to get specific user",
            type: "number"
        }
    },
    handler: (x) => {
        const { id } = x;

        const res = showUsers(id);
        console.log(res)
    }
});

// users list
y.command({
    command: "list",
    handler: listData
})

y.parse();
