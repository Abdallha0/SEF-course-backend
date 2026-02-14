const fs = require("fs");

function addUser(id, fname, lname, age, city) {
    try {
        if (!(id || fname || lname || age || city)) {
            console.log("data is not completed please check for requireds data")
            return;
        }

        const allData = loadInfo();

        const checkUser = allData.some(i => i.id === id);

        if(checkUser){
            return "user is already been added before";
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

//-------------------------------
function loadInfo() {
    try {
        const dataJson = fs.readFileSync("data.json").toString();
        return JSON.parse(dataJson);
    } catch {
        // need it in first time adding users only
        return [];
    }
}


function saveData(data) {
    const dataToJson = JSON.stringify(data);
    fs.writeFileSync("data.json", dataToJson);
    return "success"
}

module.exports = {
    addUser,
}