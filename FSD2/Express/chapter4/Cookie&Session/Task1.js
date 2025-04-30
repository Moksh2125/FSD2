const express = require('express')
const app = express()

const cp = require('cookie-parser')
app.use(cp())
app.use(express.static(__dirname, {index:'Task1.html'}))
app.use(express.urlencoded());

app.post('/next', (req, res)=>{
    res.cookie('fname', req.body.fn)
    res.cookie('lname', req.body.ln)
    // res.cookie('password', req.body.password)
    res.redirect('/admin');
});

app.get('/admin', (req, res) => {
    res.clearCookie('lname');
    res.send(`<h1>Welcome ${req.cookies.fname} ${req.cookies.lname} !</h1>`)
})

app.listen(7003)