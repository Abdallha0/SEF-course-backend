// Express 

// crud operations 4

// creat => (post)
// read => (get)
// update => (put | patch)
// delete => ( delete )

//////////////////////////////

// node js local host prot ==> 3000 & 5000

const express = require("express")
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const x = path.join(__dirname, "./lessons/lec-node-7/public")
app.use(express.static(x));

app.get("/", (req, res) => {
    res.send("<h1>welcome to home page</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>welcome to about page</h1>");
})

app.get("/api", (req, res) => {
    res.send({ message: "Success", ok: true });
})


app.listen(port, () => {
    console.log(`server run on http://localhost:${port}`)
})