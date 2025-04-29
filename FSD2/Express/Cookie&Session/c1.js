// npm config set proxy http://192.168.10.252:808
// npm i cookie-parser
// npm i express-session
const express = require('express')
const app = express()
const cp = require('cookie-parser')
app.use(cp());
app.get('/abc', (req, res) => {
    res.cookie('name', 'Express JS');
    res.cookie('email', 'a@gmail.com',{maxAge : 10000});
    res.cookie('branch', 'CSE', {expires : new Date(Date.now() +7000)});
    res.cookie('city', 'ahemdabad');
    res.cookie('age', '30');
    res.clearCookie('age')
    res.send(req.cookies)
})
app.listen(7009);