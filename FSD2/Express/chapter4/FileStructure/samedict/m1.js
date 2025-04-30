// Calling html file in the same directory.
const express = require("express")
const app = express()
app.use(express.static(__dirname));
app.listen(8001)