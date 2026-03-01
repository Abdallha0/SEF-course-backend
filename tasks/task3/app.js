const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const { geocast } = require("./geocast");
const dir = path.join(__dirname, "./public");
app.use(express.static(dir));

app.get("/api/weather", async (req, res) => {
    const { query } = req.query;
    try {
        if (!query) return res.status(404).json({ message: 'please enter your query', ok: false });
        const data = await geocast(query);
        if (!data.ok) return res.status(400).json({ message: data.message, ok: false });
        return res.status(200).json({ data: data.data, ok: true });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error, unable to connect server", ok: false });
    }
});

app.listen(port, () => {
    console.log(`server run on ==> http://localhost:${port}`)
});