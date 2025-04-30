// program to use html from sub folder
const express = require('express')
const app = express()
app.use(express.static('Example2', {index:'m2.html'}));
app.listen(7001)
