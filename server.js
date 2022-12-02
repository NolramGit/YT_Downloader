import { stdout } from "./lib/dl.mjs";
import path from 'path';
import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));


app.get("/", (req, res) =>{
    res.sendFile(path.resolve("./"));
})
app.get("/service", (req, res) =>{
    res.send(`Hola desde server!, ${stdout.stdout}`)
})

app.listen(port, ()=>{
    console.log("server running! ", port)
});