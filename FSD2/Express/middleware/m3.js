const express = require('express')
const app = express()

app.use(express.static(__dirname, {index:'m3.html'}))
app.use(express.urlencoded())
app.post('/login', (req, res, next) => {
    res.set('content-type', 'text/html')
    res.write(`<h1>Welcome ${req.body.un}</h1><h2>Email ID : ${req.body.eid}</h2>`);
    next();
})
app.post('/login', (req, res) => {
    if(req.body.subscribe == 'on'){
        res.write(`<h3> Thank You for subscribing</h3><a href='/'>Logout</a>`)
    }
    else{
        res.write(`<h3>You can subscribe</h3><a href='/subscribe'>Subscribe</a>`)
    }
});

app.get('/subscribe', (req, res) => {
    res.send(`<h3>Thank You</h3><a href='/'>Logout</a>`)
});

app.listen(7007);