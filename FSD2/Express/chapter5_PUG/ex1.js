const express = require('express')
const app = express()

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render(__dirname+'/ex1');
})
app.listen(7001)