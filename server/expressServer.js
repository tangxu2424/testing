const express = require("express");

const app = express();
const port = 5000;

function logging(req, res, next) {
    const time = `[${new Date().toLocaleString()}]: ${req.method} ${req.url}`;
    console.log("in log middleware:", time);
    next();
}

app.use(logging);
app.get("/", (req, res) => {
    const time = `[${new Date().toLocaleString()}]: ${req.method} ${req.url}`;
    console.log("in get:", time);
    res.send("hello ~~~~~~");
});

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});
