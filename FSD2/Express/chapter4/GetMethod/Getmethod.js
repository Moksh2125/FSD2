const express = require('express')
const app = express();
app.use(express.static(__dirname, {index : 'Getmethod.html'}));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Getmethod.html');
})
app.get('/process', (req, res) => {
    res.send(`<h1>Welcome ${req.query.fn} ${req.query.ln} `);
})
app.listen(5001)