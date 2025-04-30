// 3.	write a script to meet following requirements:
// a.	Create session.html file page which contains form(username,password,login button). and open it on localhost.
// b.	After clicking submit button, it should jump on “save” page. Store username and password in session.
// c.	After saving session, redirect to “fetchdata” page and read value. On this page check authentication of user. User name and password must be “admin” and “admin@123” respectively. 
// i.	If this condition is true then display welcome admin and display logout link on this page(fetchdata).
// 1.	By clicking on logout link user should jump to “destroy” page and destroy the session there and display the message “Session destroyed”.  And give the link of “login” under that message. By clicking that link user will be redirected to the home page. 
// ii.	Else display “Please enter valid username and password” and login link on this page(fetchdata).

const express = require('express');
const app = express()

const es = require("express-session")

app.use(es({secret : 'abc124'}));
app.use(express.static(__dirname, {index : 'S_Task2.html'}));
app.use(express.urlencoded());

app.post('/save', (req, res) => {
    req.session.username = req.body.un;
    req.session.pass = req.body.pw;
    res.redirect('/fetchdata');
})

app.get('/fetchdata', (req, res)=>{
    if(req.session.username == 'admin' && req.session.pass == 'admin@123'){
        res.send(`<h1>Welcome admin !</h1><a href="/destroy">Logout</a>`);
    }
    else{
        res.send(`<h1 style="color:red">Please enter valid name or password.</h1>`)
    }
});

app.get('/destroy', (req, res)=>{
    req.session.destroy();
    res.send(`<h3>${req.session.username}</h3><a href="/">Login</a>`)
});

app.listen(7008);