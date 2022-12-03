import { ytDownload } from "./lib/dl.mjs";
import os from "os";
import path from 'path';
import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

let data = await ytDownload()

app.get("/", (req, res) =>{
    res.sendFile(path.resolve("./"));
})
app.get("/service", (req, res) =>{
    //res.send(`Hola desde server!, ${os.platform()}`)
    res.send(`${data.title}`)
    
})

app.listen(port, ()=>{
    console.log("server running! ", port)
});