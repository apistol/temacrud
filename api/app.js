const express = require("express")

const app = express();

app.get("/", (req, res) => {
    res.send('Hello world')
})


app.listen('7001', () => {
    console.log("Server started on port 7001")
})