const express = require('express')
const app = express();
const path = require('path');
var hp = path.join(__dirname, '../html');
var cp = path.join(__dirname, '../css');
var ip = path.join(__dirname, '../image');
app.use(express.static(cp));
app.use(express.static(ip));
// app.use(express.static(hp, {index : 'task.html'}));
app.get("/",(req, res) => {
    res.sendFile(hp+"/task.html")
})
app.listen(5001)