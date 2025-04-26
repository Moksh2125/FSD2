const express = require('express');
const app = express();

app.use(express.urlencoded());

app.get('/Task2.html', (req, res)=>{
    res.sendFile(__dirname, {index : '/Task2.html'})
})

app.post('/login', (req, res)=>{
    var un = req.body.username;
    if(un == 'admin'){
        res.send(`<h1 style = 'color:blue'>Welcome ${un}!</h1>`)
    }
    else{
        res.send(`<h1 style='color:red'> Not an Admin`)
    }
})

app.listen(4001);