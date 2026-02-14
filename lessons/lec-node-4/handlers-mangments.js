const fs = require("fs");

function addUser(id, fname, lname, age, city) {
    try {
        if (!(id || fname || lname || age || city)) {
            return "data is not completed please check for requireds data";
        }

        const allData = loadInfo();

        const checkUser = allData.some(i => i.id == id);

        if (checkUser) {
            return "user is already been added before, (id not avabile)";
        }

        allData.push({
            id,
            fname,
            lname,
            age,
            city
        });

        saveData(allData);

        return "added success"
    } catch (error) {
        return error.message || "internal server error"
    }

}

//--------------------------------
function deleteUser(id) {
    try {
        const allData = loadInfo();

        if (allData.length <= 0) return "No users to delete"

        if (!id) {
            saveData([]);
            return "All users deleting success"
        }

        const checkUser = allData.some(i => i.id == id);

        if (!checkUser) {
            return "user is not found";
        }

        const newData = allData.filter(i => i.id != id);

        saveData(newData);

        return "deleteing success"
    } catch (error) {
        return error.message || "internal server error"
    }
}

//--------------------------------
function showUsers(id) {
    try {
        const allData = loadInfo();

        if (!id) {
            const users = allData.map(i => ({
                id: i.id,
                firstname: i.fname,
                lastname: i.lname,
                age: i.age,
                city: i.city
            }));
            return users
        }
        const user = allData.find(i => i.id == id) || "no user matches this id"
        return user

    } catch (error) {
        return error.message || "internal server error"
    }
}

//--------------------------------
function listData() {
    const allData = loadInfo();
    return allData.map(i => (`${i.fname} ${i.lname} from ${i.city}`)).forEach(i => console.log(i))
}

//--------------------------------
function loadInfo() {
    try {
        const dataJson = fs.readFileSync("data.json").toString();
        return JSON.parse(dataJson);
    } catch {
        return [];
    }
}

//--------------------------------
function saveData(data) {
    const dataToJson = JSON.stringify(data);
    fs.writeFileSync("data.json", dataToJson);
    return "success"
}

module.exports = {
    addUser,
    deleteUser,
    showUsers,
    listData
}