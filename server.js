const path = require("path")
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "views/index.html"));
})
app.get("/service", (req, res) =>{
    res.send("Hola desde server!")
})

app.listen(port, ()=>{
    console.log("server running! ", port)
});