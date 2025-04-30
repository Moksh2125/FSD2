// 1.	Write express js script using session to display how many times a user visited a website.
// If user is visiting a website for the first time 
// then display “Welcome! Thank you for visiting our website!” 
// else display the count of user (How many times) for that particular session. 

const express = require('express');
const app = express()

const es = require('express-session')
app.use(es({
    secret : 'lju123', 
    resave : false,
    saveUninitialized : false
}));

app.get('/', (req, res) =>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send(`<h1 style="color:green; text-align:center">You have visited ${req.session.page_views}</h1>`)
    }
    else{
        req.session.page_views = 1;
        res.send(`<h1 style="color:blue;text-align:center">Thank you for visiting our website</h1>`);
    }
})

app.listen(4001);